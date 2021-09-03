import React from 'react';
import ArtCard from '../ArtCard/ArtCard';

const ArtGrid = () => {
  return (
    <div>
      <h2 className="text-start">Gallary</h2>
      <div className="d-flex justify-content-evenly row row-cols-1 row-cols-sm-2 row-cols-md-5">
        {Array(12)
          .fill(1)
          .map((el, i) => (
            <ArtCard className="col" />
          ))}
      </div>
    </div>
  );
};

export default ArtGrid;
