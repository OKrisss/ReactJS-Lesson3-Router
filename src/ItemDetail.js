import React, {useState, useEffect} from 'react';
import './App.css';
// Custom
import {Link} from 'react-router-dom';

function ItemDetail({match}) {
  const API_URL = "https://www.amiiboapi.com/api/amiibo/?name=mario";
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const fetchData = await fetch('https://www.amiiboapi.com/api/amiibo/?name=mario');
    const data = await fetchData.json();
    const response = data.amiibo.filter(x => x.tail === match.params.id);
    
    console.log(response);
    setItems(response);
  };

  return (
    <div>
      <h1>Gallery page the page</h1>
      {items.map(x =>
        <h2 className="real-deal">{x.amiiboSeries}</h2>
      )}
    </div>
  );
}

export default ItemDetail;
