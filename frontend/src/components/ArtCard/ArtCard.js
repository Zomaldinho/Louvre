import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import './ArtGrid.css'

const ArtCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  let baseURL = 'http://localhost:5000/';
  return (
    <div>
      <div
        onClick={() => setIsClicked(true)}
        className="card m-3 p-0 special"
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
      {isClicked && (
        <Lightbox
          mainSrc={baseURL + props.art.picture}
          onCloseRequest={() => setIsClicked(false)}
          imageCaption={props.art.description}
          imageTitle={'By: ' + props.art.artist}
        />
      )}
    </div>
  );
};

export default ArtCard;
