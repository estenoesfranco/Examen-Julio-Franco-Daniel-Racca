import React, { useState, useEffect } from 'react';


const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))
  }, []);

  
  if (loading) {
    return <div>Espera tio por favor...</div>;
  }

  return (
    <div>
      <h1>Posteos</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
