import React, {useState, useEffect} from 'react';
import './App.css';
// Custom
import {Link} from 'react-router-dom';

function Gallery() {
  const API_URL = "https://www.amiiboapi.com/api/amiibo/?name=mario";
  const [items, setIetms] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await fetch(API_URL);
      const items = await data.json();
      setIetms(items.amiibo);
    } catch {
      Error();
    }
  };

  return (
    <div>
      <h1>Gallery page</h1>
      {items.map( item => (
        <div className="item" key={item.tail}>
          <Link to={`/gallery/${item.tail}`}><h2>{item.character}</h2></Link>
          <img src={item.image} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
