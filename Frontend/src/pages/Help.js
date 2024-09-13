import React from 'react'
import search from './images/search.png'
import "./Help.css"

const Help = () => {
  return (
    <div className='help'>
        <div className='img3'>
        <h3 className='center'>Help Center</h3>
        <img className="imglogo w-100" src='https://prod4-sprcdn-assets.sprinklr.com/200105/bfc97f65-2c44-436c-8605-29dfdcce5fc5-596334514/JioCinemaBannerBackground.jpeg.jpg'></img>
        </div>
        <div className='help1'>
            <h4 className='how'>How can we help you today?</h4>
            <div className='input1'>
            <input className='input' type='text' id='name' name='text' placeholder='Search for Errors & Questions'></input>
            <img src={search}></img>
            </div>
        </div>
        <div className='main7'>
            <div className='pay1 d-flex'>
            <img src='https://help.hotstar.com/_next/image?url=%2Finfo-brown.svg&w=32&q=75'></img>
            <h4>Payment Issues - UPI</h4>
            </div>
            <h6>We are having some technical issues with our UPI Payments. If you have been charged, the amount should be auto-refunded to you by your bank/merchant as per their refund timeline. You may go ahead and initiate a fresh transaction using a different Payment Mode to subscribe.</h6>
        </div>
        <div className='mbox1 w-100 d-flex mt-5'>
            <div className='mbox2 w-40'>
                <h1 className='center'>Top Categories</h1>

<h6 className='borde'>Subscription, Plans and Pricing </h6>
<h6 className='borde'>Supported Devices </h6>
<h6 className='borde'>Help with your account </h6>
<h6 className='borde'>Our Features </h6>
<h6 className='borde'>Accessing Star Watch </h6>
            </div>
            <div className='mbox3 w-60'>
                <h1 className='center'>Top Queries</h1>
               <h6 className='borde1'>Star Watch subscription plans</h6>
               <h6  className='borde1'>I have done the recharge with JIO/Airtel/VI/BSNL but my Star Watch subscription is not active.</h6>
               <h6  className='borde1'>I have paid already; why am I being asked to pay again?</h6>
               <h6  className='borde1'>I have a mobile plan but being asked to pay/upgrade when watching on TV</h6>
               <h6  className='borde1'>I’ve changed my phone number. How can I access my subscription?</h6>

            </div>
        </div>
        <div className='tv w-75 d-flex'>
            <img className='tvlogo' src='https://img.freepik.com/premium-photo/hand-holding-tv-remote-control-with-smart-tv_44251-244.jpg'></img>
            <div className='help9 mt-4 p-3'>
            <h5>Need help with TV?</h5>   
            <button className='click bg-dark'>click here</button>
            </div>     
          </div>
          <div className='button5'>
            <h5 className='center'>Need more help?</h5>
            <div className='bu1'>
            <button className='got bg-dark'>Got suggestions? </button>
            <img className='bu2' src='https://prod4-sprcdn-assets.sprinklr.com/200105/4a590b30-417f-4dc8-989e-3980429c564c-50431275/5.svg'></img>
            </div>
            <br/>
            <button className='got bg-dark'>Report an Issue</button>
            <img className='bu3' src='https://prod4-sprcdn-assets.sprinklr.com/200105/9e307ee6-2438-4bdd-a4e8-4ce89dddd386-251313198/ReportAnIssue.svg'></img>
          </div>
          <div className='terms3 mt-4'>
          <h6>Terms & Conditions</h6>
          <h6>Privacy Policies</h6>
<h6>Content Complaints</h6>
<h6>Jeeto TNC</h6>
<h6>Standard Terms for Performance Advertising</h6>
<h6>Standard Terms for Creators Content License</h6>
<h6>Premium Stickers Pack Terms and Conditions</h6>
<h6>Standard Terms and Conditions for Advertising and Brand Promotions</h6>
          </div>
    </div>
  )
}

export default Help