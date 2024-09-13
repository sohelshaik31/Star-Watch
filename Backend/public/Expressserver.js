const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const app = express();

const uri = 'mongodb+srv://nagarjuna23:Nagarjuna523@watch23.7yjhofo.mongodb.net/?retryWrites=true&w=majority&appName=watch23';
const stripe = Stripe('sk_test_51PwekdRpisrWxBREWADSPvcLc7l1q1SFIAXBBH6UpdGpYg50GAr2i9rc76C6a1F7h49ay6gyWG18hnjtzwFC2IfK00YaTQSNMK'); // Use your Stripe secret key here
app.use(cors());
app.use(bodyParser.json()); 

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  await client.connect();
  const database = client.db('Movieslist');
  const moviesCollection = database.collection('Movies');
  const moviesDetailsCollection = database.collection('moviesdetails'); 
  const usersCollection = database.collection('users'); 
  // Payment Route
  app.post('/api/payment', async (req, res) => {
    const { email, planId } = req.body;
    let amount;
    const plans = {
      super: 299, 
      premium: 499, 
    };

    if (!plans[planId]) {
      return res.status(400).json({ message: 'Invalid plan selected' });
    }

    amount = plans[planId];

    try {

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method_types: ['card'],
      });
      await usersCollection.updateOne(
        { email },
        { 
          $set: { 
            subscription: planId, 
            subscriptionEnd: new Date(new Date().setMonth(new Date().getMonth() + 3)) 
          } 
        }
      );

      res.json({
        clientSecret: paymentIntent.client_secret,
        message: 'Payment initiated',
      });
    } catch (error) {
      console.error('Payment error:', error);
      res.status(500).json({ message: 'Payment failed', error: error.message });
    }
  });
  app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
      const result = await moviesCollection.findOne({ email, password });

      if (result) {
        res.json({ status: 'success', data: result });
      } else {
        res.json({ status: 'error', message: 'Invalid credentials' });
      }
    } catch (err) {
      console.error('Error during sign-in:', err);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  });
  app.post('/signup', async (req, res) => {
    const { name, phone, email, password } = req.body;

    try {
      const existingUser = await moviesCollection.findOne({ email });
      if (existingUser) {
        return res.json({ status: 'error', message: 'User already exists' });
      }

      const result = await moviesCollection.insertOne({ name, phone, email, password });
      if (result) {
        res.json({ status: 'success' });
      } else {
        res.json({ status: 'error', message: 'Sign up failed' });
      }
    } catch (err) {
      console.error('Error during sign-up:', err);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  });
  app.get('/api/movies', async (req, res) => {
    try {
      const movies = await moviesDetailsCollection.find({}).toArray(); 
      res.json(movies);
    } catch (err) {
      console.error('Error fetching movies:', err);
      res.status(500).json({ message: 'Failed to fetch movies' });
    }
  });
  app.get('/api/movies/:movie_id', async (req, res) => {
    const movieId = req.params.movie_id;

    try {
      const movie = await moviesDetailsCollection.findOne({ movie_id: movieId });

      if (movie) {
        res.json(movie);
      } else {
        res.status(404).json({ message: 'Movie not found' });
      }
    } catch (err) {
      console.error('Error fetching movie details:', err);
      res.status(500).json({ message: 'Failed to fetch movie details' });
    }
  });
}

run().catch(console.dir);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
