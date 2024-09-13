import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./pages/nag.css";
import Header from "./pages/Header.js";
import Footer from "./pages/Footer.js";
import Signin from "./pages/Signin.js";
import Up from "./pages/Up.js";
import Home from "./pages/Home.js";
import "./pages/surya.css";
import "./pages/Bhargov.css";
import { useState } from "react";
import Details from "./pages/Details.js";
import Detail from "./pages/Detail.js";
import Movies from "./pages/Movies.js";
import MovieDetails from "./pages/MovieDetails.js";
import Payments from "./pages/Payments.js";
import Help1 from "./pages/Help1.js";
import About from "./pages/About.js";
import Search from "./pages/Search.js"

function App() {
  const [users, setUsers] = useState([]);

  // Define the routes that should not display the header
  const noHeaderRoutes = ["/Payments", "/Signin", "/"];

  return (
    <div className="total">
      <BrowserRouter>
        {/* Conditionally render Header based on the current pathname */}
        {!noHeaderRoutes.includes(window.location.pathname) && <Header />}

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/MovieDetails/:movie_id" element={<MovieDetails />} />
          <Route path="/Payments" element={<Payments />} />
          <Route path="/Help1" element={<Help1 />} />
          <Route path="/About" element={<About />} />
          <Route path="/" element={<Up />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
