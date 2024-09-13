import Button from 'react-bootstrap/Button';
import React from 'react'
import "./About.css"

const Aboutus = () => {
  return (
    <div>
        <div className='about1 '>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg'></img>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Right.jpg'></img>
        </div>
        <div className='welcome w-50 '>
            <h1>Welcome to Star Watch</h1>
            <br/>
            <h4>Join Star Watch to watch the latest movies, TV shows and award-winning Star Watch Originals</h4>
           <br/>
           <a href='http://localhost:3000/Payments'> <Button className='bol bg-dark'>Join star watch</Button></a>
        </div>
        <div className='new w-50'>
            <h2>Discover the magic of new stories.</h2>
            <br></br>
            <h4>Early Access to new movies, before digital subscription</h4>
            <br></br>
            <br/>
            <Button className='btn btn bg-dark'>Rent Now</Button>
        </div>
        <div className='foot d-flex'>
        <div className='allin w-50'>
            <h1>Your favorite channels all in one place</h1>
            <br/>
            <h3>With Star Watch Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</h3>
            </div>
            <div className='slogo w-50'>
                <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg'></img>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg'></img>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_BBC_PLAYER.png'></img>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg'></img>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294.png'></img>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg'></img>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Chaupal.png'></img>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Anime.jpg'></img>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MGMPLUS.png'></img>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Vrott.png'></img>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg'></img>
            <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Stingray.png'></img>
            </div>
           
        </div>

    </div>
  )
}

export default Aboutus