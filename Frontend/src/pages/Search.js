import React, { useState } from "react";
import data from "./Movies.json";
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
    return null;
  });

  return (
    <div className="templateContainer">
      <div className="searchInput_Container">
        <div className="inputWithIcon">
          <SearchIcon className="searchIcon" />
          <input 
            id="searchInput" 
            type="text" 
            placeholder="Search here..." 
            onChange={(event) => setSearchTerm(event.target.value)} 
          />
        </div>
      </div>
      <div className="template_Container">
        {filteredData.length > 0 ? (
          filteredData.map((val) => (
            <div className="template" key={val.id}>
              <img src={val.image} alt={val.title} />
              <h4>{val.title}</h4>
            </div>
          ))
        ) : (
          <h2 className="noResult">NO RESULT FOUND</h2>
        )}
      </div>
    </div>
  );
}

export default Search;
