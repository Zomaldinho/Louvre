import React, { useEffect, useState } from 'react';
import left from "../../assets/Left.svg"
import right from "../../assets/Right.svg"


const Paginator = (props) => {
  const [pagesNumber, setPagesNumber] = useState(0)

  useEffect(() => {
    setPagesNumber(Math.ceil(props.count/12))
  }, [props.count]);

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link">
            <img src={left} /> Previous
          </a>
        </li>
        {Array(pagesNumber)
          .fill(1)
          .map((e, i) => (
            <li class="page-item">
              <a class="page-link">{i + 1}</a>
            </li>
          ))}
        <li class="page-item">
          <a class="page-link">
            Next <img src={right} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
