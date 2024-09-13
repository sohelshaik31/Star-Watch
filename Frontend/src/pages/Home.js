import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import './Sohel.css';
import Footer from "./Footer.js";

const Header = () => {
  const navigate = useNavigate();

  // Handle image click and redirect to the movie details page
  const handleMovieClick = (movie_id) => {
    navigate(`/moviedetails/${movie_id}`);
  };

  return (
    <div className='body bg-black'>
      <div className='main'>
        <Carousel>
          <CarouselItem>
            <img
              className='img1'
              src='https://cdn.wallpapersafari.com/75/69/2WIbod.jpg'
              alt="Carousel 1"
              onClick={() => handleMovieClick(1)} // Pass movie_id 1
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className='img2'
              src='https://www.starzcsr.com/wp-content/uploads/2022/05/spiderman_no_way_home_2021.jpg'
              alt="Carousel 2"
              onClick={() => handleMovieClick(2)} // Pass movie_id 2
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className='img3'
              src='https://wallpaperset.com/w/full/9/7/0/530383.jpg'
              alt="Carousel 3"
              onClick={() => handleMovieClick(3)} // Pass movie_id 3
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className='img4'
              src='https://i.redd.it/hykpvdgukwt71.png'
              alt="Carousel 4"
              onClick={() => handleMovieClick(4)} // Pass movie_id 4
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className='img5'
              src='https://wallpapercave.com/wp/wp4599060.jpg'
              alt="Carousel 5"
              onClick={() => handleMovieClick(5)} // Pass movie_id 5
            />
          </CarouselItem>
        </Carousel>
      </div>

      {/* Channel logos */}
      <div className='list1 d-flex justify-content-center'>
        <div className='ms-4'><img src='https://v3img.voot.com/resizeMedium,w_90,h_90/v3Storage/assets/hbo-1712766657151.png' alt="Channel 1" onClick={() => handleMovieClick(30)} /></div>
        <div className='ms-4'><img src='https://v3img.voot.com/resizeMedium,w_90,h_90/v3Storage/assets/channel-paramount-plus-1712767180334.png' alt="Channel 2" onClick={() => handleMovieClick(31)} /></div>
        <div className='ms-4'><img src='https://v3img.voot.com/resizeMedium,w_90,h_90/v3Storage/assets/channel-peacock-hub-1712767042516.png' alt="Channel 3" onClick={() => handleMovieClick(32)} /></div>
     
        {/* Add more channel images if needed */}
      </div>

      {/* Additional movie categories (Hot right now, World of anime, etc.) */}
      <div className='list2 w-100 text-white'>
        <h3>hot right now</h3>
        <div className='list2-inner d-flex w-100'>
          <div onClick={() => handleMovieClick(7)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1723555218732.jpg' alt="Hot movie 1" /></div>
          <div className='ms-4' onClick={() => handleMovieClick(8)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/asur-2-3x4-1716903168539.jpg' alt="Hot movie 2" /></div>
          <div onClick={() => handleMovieClick(9)}><img src='https://v3img.voot.com/resizeMedium,w_180,h_240/v3Storage/assets/fast-x-call-out-3x4-1700301916853.jpg' alt="Hot movie 1" /></div>
          <div className='ms-4' onClick={() => handleMovieClick(10)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1725635858403.jpg' alt="Hot movie 2" /></div>
          <div onClick={() => handleMovieClick(11)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1719656827886.jpg' alt="Hot movie 1" /></div>
          <div className='ms-4' onClick={() => handleMovieClick(12)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1718092065127.jpg' alt="Hot movie 2" /></div>
          {/* Add more images with corresponding movie IDs */}
        </div>
      </div>

      <div className='list2 w-100 text-white'>
        <h3>world of anime</h3>
        <div className='list2-inner d-flex w-100'>
          <div onClick={() => handleMovieClick(13)}><img src='https://m.media-amazon.com/images/M/MV5BMWM2YTY2MDgtNTZjYS00ZGUwLTkyMzEtYzJlNjhlZjBlZjgzXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg' alt="Anime 1" /></div>
          <div className='ms-4' onClick={() => handleMovieClick(12)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1718092065127.jpg' alt="Anime 2" /></div>
          <div onClick={() => handleMovieClick(7)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1723555218732.jpg' alt="Hot movie 1" /></div>
          <div className='ms-4' onClick={() => handleMovieClick(4)}><img src='https://picfiles.alphacoders.com/455/thumb-1920-455526.jpg' alt="Hot movie 2" /></div>
          <div onClick={() => handleMovieClick(10)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1725635858403.jpg' alt="Hot movie 1" /></div>
          <div className='ms-4' onClick={() => handleMovieClick(11)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1719656827886.jpg' alt="Hot movie 2" /></div>
          {/* Add more anime images with corresponding movie IDs */}
        </div>
      </div>

      <div className='list2 w-100 text-white'>
        <h3>popular sports</h3>
        <div className='list2-inner d-flex w-100'>
          <div onClick={() => handleMovieClick(24)}><img className='rounded rounded-4' src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/cricket_show-1707419374855.jpg' alt="Sports 1" /></div>
          <div className='ms-4' onClick={() => handleMovieClick(25)}><img className='rounded rounded-4' src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/football_show-1707418454559.jpg' alt="Sports 2" /></div>
          <div onClick={() => handleMovieClick(26)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/basketball_show-1707418523849.jpg' alt="Hot movie 1" /></div>
          <div className='ms-4' onClick={() => handleMovieClick(27)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/hockey_show-1707418768361.jpg' alt="Hot movie 2" /></div>
          <div onClick={() => handleMovieClick(28)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/athletics_show-1707418819968.jpg' alt="Hot movie 1" /></div>
          <div className='ms-4' onClick={() => handleMovieClick(29)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/badminton_show-1707418874563.jpg' alt="Hot movie 2" /></div>
          {/* Add more sports images with corresponding movie IDs */}
        </div>
      </div>

      <div className='list2 w-100 text-white'>
        <h3>hollywood blockbusters</h3>
        <div className='list2-inner d-flex w-100'>
          <div onClick={() => handleMovieClick(14)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1718709774645.jpg' alt="Blockbuster 1" /></div>
          <div className='ms-4' onClick={() => handleMovieClick(15)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1705239635736.jpg' alt="Blockbuster 2" /></div>
          <div onClick={() => handleMovieClick(16)}><img src='https://image.tmdb.org/t/p/original/cmGBe9zR1Lxxn1GpaWibFn0EFPv.jpg' alt="Hot movie 1" /></div>
          <div className='ms-4' onClick={() => handleMovieClick(17)}><img src='https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg' alt="Hot movie 2" /></div>
          <div onClick={() => handleMovieClick(2)}><img src='https://www.disneyphile.fr/wp-content/uploads/2021/11/spider-man-no-way-home-affiche-2.jpg' alt="Hot movie 1" /></div>
          <div className='ms-4' onClick={() => handleMovieClick(6)}><img src='https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/oppenheimer-3x4-1712046716651.jpg' alt="Hot movie 2" /></div>
          {/* Add more blockbuster images with corresponding movie IDs */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Header;
