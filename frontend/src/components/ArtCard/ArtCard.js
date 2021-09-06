import React, { useState } from 'react';

const ArtCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  let baseURL = 'http://localhost:5000/';
  return (
    <div>
      <div
        onClick={() => setIsClicked(true)}
        class="card m-3 p-0"
        style={{ borderRadius: '25px' }}
      >
        <img
          src={baseURL + props.art.picture}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p class="text-start card-text" style={{ color: 'blue' }}>
            {props.art.artist}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
