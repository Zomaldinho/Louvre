import React from 'react';
import left from "../../assets/Left.svg"
import right from "../../assets/Right.svg"


const Paginator = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" >
             <img src={left}/> Previous
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" >
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" >
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" >
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" >
            Next <img src={right}/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
