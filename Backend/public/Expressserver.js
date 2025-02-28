const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Stripe = require('stripe');

const app = express();
const PORT = 5000;

// ✅ MongoDB & Stripe Setup
const MONGO_URI = 'mongodb+srv://nagarjuna23:SurNag04@watch23.7yjhofo.mongodb.net/Movieslist?retryWrites=true&w=majority&appName=watch23';
const STRIPE_SECRET = 'sk_test_51PwekdRpisrWxBREWADSPvcLc7l1q1SFIAXBBH6UpdGpYg50GAr2i9rc76C6a1F7h49ay6gyWG18hnjtzwFC2IfK00YaTQSNMK';

const stripe = new Stripe(STRIPE_SECRET);
const client = new MongoClient(MONGO_URI, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
  }
}
connectDB();

const database = client.db('Movieslist');
const usersCollection = database.collection('users');
const moviesCollection = database.collection('Movies');
const moviesDetailsCollection = database.collection('moviesdetails');

// ✅ SIGNUP API (User Registration)
app.post('/signup', async (req, res) => {
  const { name, phone, email, password } = req.body;

  try {
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.json({ status: 'error', message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await usersCollection.insertOne({ name, phone, email, password: hashedPassword });

    if (result.insertedId) {
      res.json({ status: 'success', message: 'User registered successfully' });
    } else {
      res.json({ status: 'error', message: 'Sign up failed' });
    }
  } catch (err) {
    console.error('Error during sign-up:', err);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

// ✅ SIGNIN API (User Login)
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.json({ status: 'error', message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ status: 'error', message: 'Invalid credentials' });
    }

    res.json({ status: 'success', message: 'Login successful', data: user });
  } catch (err) {
    console.error('Error during sign-in:', err);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

// ✅ PAYMENT API (Stripe Integration)
app.post('/api/payment', async (req, res) => {
  const { email, planId } = req.body;
  const plans = { super: 299, premium: 499 };

  if (!plans[planId]) {
    return res.status(400).json({ message: 'Invalid plan selected' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: plans[planId],
      currency: 'usd',
      payment_method_types: ['card'],
    });

    await usersCollection.updateOne(
      { email },
      {
        $set: {
          subscription: planId,
          subscriptionEnd: new Date(new Date().setMonth(new Date().getMonth() + 3)),
        },
      }
    );

    res.json({ clientSecret: paymentIntent.client_secret, message: 'Payment initiated' });
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({ message: 'Payment failed', error: error.message });
  }
});

// ✅ FETCH ALL MOVIES
app.get('/api/movies', async (req, res) => {
  try {
    const movies = await moviesDetailsCollection.find({}).toArray();
    res.json(movies);
  } catch (err) {
    console.error('Error fetching movies:', err);
    res.status(500).json({ message: 'Failed to fetch movies' });
  }
});

// ✅ FETCH MOVIE DETAILS BY ID
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

// ✅ SERVER START
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
