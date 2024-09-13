import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import logo from"./images/logo.png"
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Signin from './Signin';

function Header(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return(
<div className="nav p-3 ">
  <img  class="logo1"src={logo}></img>
  <div class="inf">

  <a href='http://localhost:3000/Home'><span >Home</span></a>
  <a href='http://localhost:3000/Movies'><span >Trending now</span></a>
  <a href='http://localhost:3000/Search'><span >Explore</span></a>

  <a href='http://localhost:3000/Payments'><span >Payments</span></a>
  <a class="ab" href='http://localhost:3000/About'><span >About us</span></a>
  <a  class="help mt-1" href='http://localhost:3000/Help1'><span >Help</span></a>
  <a href='http://localhost:3000/'><span>Logout</span></a>
  <div class=" signin d-flex">
  <a href='http://localhost:3000/'><span  class="sign"><PermIdentityIcon></PermIdentityIcon></span></a>
  </div>
  </div>
  </div>
)}
export default Header;