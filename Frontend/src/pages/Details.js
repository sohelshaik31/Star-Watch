import React from 'react'
import loveme from './images/loveme.png.jpg'
import guntur from './images/guntur1.png'
import logo1 from './images/logo1.png.jpg'
import gkglimpse from './images/gkglimpse.mp4'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const Details = () => {
  return (
    <div className='main3'>
        <div className='loveme '>
            <div className='banner'>
                <img className='image ' src={loveme}></img>
            </div>
        <div className='name w-50'>
          <img className="w-75"   src={guntur}></img>
        <h2>Guntur Kaaram</h2>
        <h4>2024 | U/A 16+ | 2h 42m | Drama</h4>
<h5 className='about'>Years after his mother abandons him and remarries, a man demands answers when he's asked to sign a document denying he is her son as she runs for office.</h5>
<h5>Starring:Mahesh Babu, Sreeleela, Meenakshi Chaudhary</h5>

        </div>
        <div className='plan d-flex w-75'>
  <img className='logo'  src={logo1}></img>
  <h4 className='just'>Step into a world of cinematic adventure.</h4>
  <button className='now'>join now</button>
</div>

 <h4 className='video'> Videos |Guntur Kaaram</h4>
        <div className='glimpse'>
        <video width="550" height="300" autoPlay muted controls src={gkglimpse}>         
     </video>
     
     
     <a href="http://localhost:3000/Detail"><button class="watch">Watch Now</button></a>
     </div>
     <br></br>
        <h6 class="gun">Trailer: Guntur Kaaram (fka Mahesh Babu Trivikram)</h6>
        <br/>
     <br/>
        <div className='more d-flex'>
          <div className='box1'>
       <h4>More Details</h4> 
      Watch offline
       <h6>Download and watch everywhere you go.</h6>
      <h5>Audio</h5> 
       Telugu [Original]
      <h4>Cast</h4>
      <h6>Mahesh Babu</h6>
      <h6>Ramya Krishnan</h6>
      <h6>Jagapathi Babu</h6>
</div>
<div className='box2'>
<h6>Genres</h6>
Drama Movies, Action & Adventure Movies,
<br/> 
Telugu-Language Movies
<br/>
<br></br>
<h5>Subtitles</h5>
English
<div className='cast'>
<h6>
Sreeleela</h6>
<h6>
Jayaram</h6>
<h6>Meenakshi Chaudhary</h6>
</div>
</div>
<div className='box2'>
<h5>This movie is...</h5>
<>Exciting</>
<div className='cast2'>
<h6>Prakash Raj</h6>

<h6>Murli Sharma</h6>
<h6>Vennela Kishore</h6>
</div>
</div>
        </div>
        <div className="morelike w-100">
        <h3>More Like This</h3>
        <div className="row1 d-flex flex-wrap w-100">
          <img  src='https://occ-0-1007-1009.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ6yV_zmTGW-WYIrP4LO80_J6S6P0p4M-HVY2jpuTN4K5PK1xDdMn9GPEjT7R601j89wObL3aELv1jI1AvNtM9mhTO1b-OtkAQA2.jpg?r=032'></img>
          <img src='https://occ-0-1007-1009.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZGAWtbC7CyR9L5Jlu7Qnnr3dz5ztjvCyQ8DvX11XHzCIPPf2s1kBxYlB49r8ghlwzj4G0RSjmjBYEPOHMEDHmOT_sldUVgdxTbk.jpg?r=68e'></img>
           <img src='https://occ-0-1007-1009.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbgcp1h0LD9uChIJ-5vqlLO5b75n3-0Oyn3T2wRabaHXKLGwaJo6u6SiVs3wzEoQ02kgWTHsbbU-EGuff5AaE26Nxh3a16sO_vIH.jpg?r=66a'></img>
        <img src="https://occ-0-1007-1009.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbECE7T_404p1oKmq6nikS7NBZ4uVyD6E4rzeFQM7yBTceWc4BMQuXaelkvSn6XepCOf_Xtnzh94_NloR7v1uQQapydKN_qi6Xkh.jpg?r=780"></img>
        <img src='https://occ-0-1007-1009.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABblQGwmJRdHPqpuS9L2Cstjtpa2KVsf0Lx58RT2YWmm4-joR3OKPDqQtAwrISykSxx1KcOEQRBRXaMzEsb0wQv3N6eSTrc0UQ8FC.jpg?r=566'></img>
        <img src='https://occ-0-1007-1009.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdM585_GFSIANA5PsmjKze_59pzV4q7RCDOzCNYlXFyBDPyhixytrFYVhjLY0QvCd_HYbuz3FKBiftPYJl8ulC-ZHlZ9bTBDpeiUHXTSBHH5pYsNJzsfFsC9WZbjIMRWMdNNPw.jpg?r=3e2'></img>
       <img src="https://occ-0-1007-1009.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeQzOJ1b84HHDUonrtoHop7AXnZ7AJ_FTC1gG5EYPmhALuqcyHJqwcCRKDEU8CrAAvUTiP1gVPK8j94-TIt_sxf7xDGFZyDZKPh7.jpg?r=3e0"></img>
       <img src='https://occ-0-1007-1009.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUDDQmDmoU_f0cuEnv1eZp1WMrcTA2GUI2ooRq_lVVugRnG1OqWKvlRMogIJNgx8ioQD2f4x9BLv4uhXyjXqTFFikrgFqX92woVI.jpg?r=3d0'></img>
       <img src='https://occ-0-1007-1009.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQjpC4ts3zw0hGrBKA8vFOLxa-oYcTVEWG-hxCqsYBHEqhmxFWHtv-y-zSR9Egl3SaRTKXn1AIg_9hzc5trCAZ552eW-JAbY75QI.jpg?r=e61'></img>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Details