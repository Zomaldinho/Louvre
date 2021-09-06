import React, { useState } from 'react';

const ArtCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  let baseURL = 'http://localhost:5000/';
  return (
    <div>
      <div
        onClick={() => setIsClicked(true)}
        className="card m-3 p-0"
        style={{ borderRadius: '25px' }}
      >
        <img
          src={baseURL + props.art.picture}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="text-start card-text" style={{ color: 'blue' }}>
            {props.art.artist}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
