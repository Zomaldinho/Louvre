import React from 'react';
import logoUser from "../../assets/nav/users/user.png"
import logoArt from "../../assets/nav/art/supervised_user_circle.png"

const Taps = () => {
  return (
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
          Art Pieces <img src={logoArt}></img>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Users <img src={logoUser}></img>
        </a>
      </li>
    </ul>
  );
};

export default Taps;
