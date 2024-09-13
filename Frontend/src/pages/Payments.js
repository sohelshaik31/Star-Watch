import React, { useState } from 'react';
import './Payments.css';
import logo from './images/logo.png';
import { Button, Modal } from 'react-bootstrap';
import tick from './images/tick.png';
import close from './images/close.png';
import rupee from './images/rupee.svg';
import Header from './Header';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Make sure to replace this with your actual public Stripe key
const stripePromise = loadStripe('pk_test_51PwekdRpisrWxBREcXHFa1oaMZqJlPDYTsxv0pnvdspXSrceVsvOWFmVBAZcZKSU841EwEMVzcnScFfhQ01Cx3E400b52aqOwa');

const PaymentForm = ({ clientSecret, planName, planAmount, onPaymentSuccess, onHide }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      console.error('Payment failed:', error);
      setIsProcessing(false);
      alert('Payment failed. Please try again.');
    } else if (paymentIntent.status === 'succeeded') {
      setIsProcessing(false);
      alert('Payment successful!');
      onPaymentSuccess();
      onHide(); // Close the modal on success
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button
        type="submit"
        className="btn-mod btn-final text-white bg-danger"
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : `Pay ${planAmount}`}
      </Button>
    </form>
  );
};

const Payment = () => {
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [planName, setPlanName] = useState('');
  const [planAmount, setPlanAmount] = useState('');

  const handleSubscribe = async (planId, name, amount) => {
    setIsPaymentProcessing(true);
    setPlanName(name);
    setPlanAmount(amount);

    try {
      const response = await fetch('http://localhost:5000/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'user@example.com', planId }), // Replace with actual user email
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);
      setShowModal(true); // Show the modal when clientSecret is available
      setIsPaymentProcessing(false);
    } catch (error) {
      console.error('Error:', error);
      setIsPaymentProcessing(false);
      alert('Payment initiation failed. Please try again.');
    }
  };

  return (
    <div>
      <div className='pay-total'>
        <div className='pay'>
          <div className='pay-nav w-100 d-flex justify-content-between'>
            <img className='w-25' src={logo} alt="Logo" />
            <div className='two'>
              <select>
                <option>English</option>
                <option>Hindi</option>
                <option>Telugu</option>
              </select>
              <a href="http://localhost:3000/Signin">
                <Button className='bg-danger border-0'>Signin</Button>
              </a>
            </div>
          </div>
          <div className='pay-main1 d-flex flex-wrap'>
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6597/1711007636597-v' alt="Content 1" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2484/942484-v' alt="Content 2" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4898/1514898-v-d2603b9637b5' alt="Content 3" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3589/763589-v' alt="Content 4" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4719/994719-v' alt="Content 5" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3145/813145-v' alt="Content 6" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5239/875239-v' alt="Content 7" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5157/875157-v' alt="Content 8" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6699/1026699-v-cb786ee970de' alt="Content 9" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6597/1711007636597-v' alt="Content 10" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5150/875150-v' alt="Content 11" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7539/617539-v' alt="Content 12" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8442/1478442-v-c0f317dcf6a8' alt="Content 13" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4564/1713892604564-v' alt="Content 14" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6597/1711007636597-v' alt="Content 15" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5157/875157-v' alt="Content 16" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6597/1711007636597-v' alt="Content 17" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7539/617539-v' alt="Content 18" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4719/994719-v' alt="Content 19" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6597/1711007636597-v' alt="Content 20" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6597/1711007636597-v' alt="Content 21" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6597/1711007636597-v' alt="Content 22" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3440/1712744243440-v' alt="Content 23" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4898/1514898-v-d2603b9637b5' alt="Content 24" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3440/1712744243440-v' alt="Content 25" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6597/1711007636597-v' alt="Content 26" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6597/1711007636597-v' alt="Content 27" />
            <img className='m-1' src='https://img10.hotstar.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3440/1712744243440-v' alt="Content 28" />
          </div>
          <div className='pay-trans'></div>
          <div className='pay-title'>
            <h1>Subscribe now and start</h1>
            <h1>streaming</h1>
          </div>
          <div className='pay-main2 d-flex'>
            <div className='pay-inner1'>
              <h5>All Content</h5>
              <p>Movies, Live sports, TV, Specials</p><br />
              <h5>Watch on TV or Laptop</h5><br />
              <h5>Ads free movies and shows (except sports)</h5><br />
              <h5>Number of devices that can be logged in</h5><br />
              <h5>Max video quality</h5><br />
              <h5>Max audio quality</h5>
              <p>Atoms available on select titles only</p><br />
              <Button 
                className='btn-final text-white bg-danger'
                onClick={() => handleSubscribe('super', 'Super Plan', '299')}
                disabled={isPaymentProcessing}
              >
                Subscribe to Super Plan
              </Button>
              <Button
                className='btn-pre btn-final text-white bg-danger'
                onClick={() => handleSubscribe('premium', 'Premium Plan', '499')}
                disabled={isPaymentProcessing}
              >
                Subscribe to Premium Plan
              </Button>
            </div>
            <div className='pay-inner2 d-flex'>
              <div className='pay-inside1 mt-2'>
                <h3>Super Plan</h3><br />
                <img src={tick} alt="Tick" /><br /><br /><br />
                <img src={tick} alt="Tick" /><br /><br /><br />
                <img className='icon1' src={close} alt="Close" /><br /><br /><br />
                <h4>2</h4><br />
                <h5 className='mt-3'>FULL HD</h5><br />
                <h5 className='mt-2'>DOLBY ATMOS</h5><br />
                <div className='pay-btn1 mt-2 d-flex justify-content-center rounded rounded-4'>
                  <img className='mb-2' src={rupee} alt="Rupee" /><h2>299</h2><p className='mt-2'>/3Months</p>
                </div>
              </div>
              <div className='pay-inside2 ms-2 me-2 mt-2'>
                <h3>Premium Plan</h3><br />
                <img src={tick} alt="Tick" /><br /><br /><br />
                <img src={tick} alt="Tick" /><br /><br /><br />
                <img className='icon1' src={tick} alt="Tick" /><br /><br /><br />
                <h4>4</h4><br />
                <h5 className='mt-3'>4K 2016p</h5><br />
                <h5 className='mt-2'>DOLBY ATMOS</h5><br />
                <div className='pay-btn1 mt-2 d-flex justify-content-center rounded rounded-4'>
                  <img className='mb-2' src={rupee} alt="Rupee" /><h2>499</h2><p className='mt-2'>/3Months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for payment */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>You're about to subscribe to the {planName}!</h4>
          <p>With this plan, you get:</p>
          <ul>
            <li>Unlimited access to all content including Movies, Live sports, TV shows, and Specials</li>
            <li>Watch on TV or Laptop with a seamless experience</li>
            <li>Ads-free movies and shows (excluding sports)</li>
            <li>Support for multiple devices</li>
            <li>High video quality and audio quality (DOLBY ATMOS)</li>
          </ul>
          <h5>Price: {planAmount} / 3 Months</h5>
          {clientSecret && (
            <Elements stripe={stripePromise}>
              <PaymentForm
                clientSecret={clientSecret}
                planName={planName}
                planAmount={planAmount}
                onPaymentSuccess={() => setClientSecret(null)}
                onHide={() => setShowModal(false)}
              />
            </Elements>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Payment;
