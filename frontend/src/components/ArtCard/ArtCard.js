import React from 'react';
import img from '../../assets/IconBackground-1.png'

const ArtCard = (props) => {
  let baseURL = 'http://localhost:5000/'
  return (
    <div class="card m-3 p-0" style={{ borderRadius: '25px'}}>
      <img src={baseURL + props.art.picture} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="text-start card-text" style={{color: 'blue'}}>
          {props.art.artist}
        </p>
      </div>
    </div>
  );
};

export default ArtCard;
