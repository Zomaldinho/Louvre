import React, { useEffect, useState } from 'react';
import ArtCard from '../ArtCard/ArtCard';

const ArtGrid = () => {
  const [arts, setArts] = useState([])

  useEffect(async () => {
    let res = await fetch('http://localhost:5000/private/getArts?page=1', {
      method: 'GET',
      headers: {
        Authorization: 'JWT ' + localStorage.getItem('token'),
      },
    });
    res = await res.json()
    setArts(res.arts)
  }, []);

  return (
    <div>
      <h2 className="text-start">Gallary</h2>
      <div className="d-flex justify-content-evenly row row-cols-1 row-cols-sm-2 row-cols-md-5">
        {!!arts.length && arts
          .map((art, i) => (
            <ArtCard art={art} className="col" />
          ))}
      </div>
    </div>
  );
};

export default ArtGrid;
