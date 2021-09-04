import React from 'react';
import { Link } from 'react-router-dom';

import logoUser from '../../assets/nav/users/user.png';
import logoArt from '../../assets/nav/art/supervised_user_circle.png';

const Taps = (props) => {
  if (props.page == 'users') {
  } else if (props.page == 'arts') {
  }
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          className={props.arts ? 'nav-link active' : 'nav-link'}
          aria-current="page"
          to="/admin/arts"
        >
          Art Pieces <img src={logoArt}></img>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={props.users ? 'nav-link active' : 'nav-link'}
          to="/admin/users"
        >
          Users <img src={logoUser}></img>
        </Link>
      </li>
    </ul>
  );
};

export default Taps;
