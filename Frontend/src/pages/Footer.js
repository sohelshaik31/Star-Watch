import image from "./images/facebook-footer.svg"
import image1 from "./images/twitter-footer.svg"
import image2 from "./images/instagram.svg"
import image3 from "./images/app_store_mobile.svg"
import image4 from "./images/google_play_mobile.svg"
import logo5 from"./images/logo.png"
function Footer(){
    return(
<div class="footer">
<div className="left d-block"> 
    <div class="fleft">
        <img class="logo5"src={logo5}></img>
    <p>connect with us</p>
<img class="ico2"src={image}></img>
<img class="ico2"src={image1}></img>

<img src={image2}></img>
    </div>

    <p>Download mobile apps</p>
    <div class="sleft">
        
        <img  class="ico"src={image3}></img>
        <img class="ico"src={image4}></img>
    </div>

</div>
<div class="right">
    <div class="box">
    <p class="p">Popular Movies</p>
    <p>Fast and Furious</p>
<p>Harry Potter</p>
<p>The Dark Knight</p>
<p>Oppenheimer</p>
</div>

<div class="box">
<p class="p">Must Watch</p>

<p>Avengers End Game</p>
<p>Game of Thrones</p>
<p>Stranger Things</p>
<p>Naruto</p>
<p>The Walking Dead</p>
</div>




<div class="box">
    
<p  class="p">Genres</p>
<p> Drama </p>
<p> Comedy </p>
<p>Action </p>
<p> Romance </p>
<p> Horror </p>
<p> Fantasy </p>
<p> Sci-Fi </p>

    </div>

<div class="box">

<p class="p">  Learn More</p>
<p>View Plan</p>
<p>About Us</p>
<p>FAQs / Help</p>
<p>Privacy Policy</p>
<p>Terms of Service</p>
<p>Grievance Redressal</p>
<p>Blog</p>

  </div>

</div>

</div>



    )
}
export default Footer
