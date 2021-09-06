import React, { useEffect, useState } from 'react';
import left from "../../assets/Left.svg"
import right from "../../assets/Right.svg"


const Paginator = (props) => {
  const [pagesNumber, setPagesNumber] = useState(0)
  const [currentPageNumber, setCurrentPageNumber] = useState(1)

  useEffect(() => {
    setPagesNumber(Math.ceil(props.count/12))
  }, [props.count]);

  const handlePageNumberChange = (newPage) => {
    if(newPage != currentPageNumber){
      setCurrentPageNumber(newPage)
      props.change(newPage)
    }
  }

  const handleNextClick = () => {
    if(currentPageNumber < pagesNumber){
      setCurrentPageNumber(currentPageNumber + 1)
      props.change(currentPageNumber + 1)
    }
  }

  const handlePreviousClick = () => {
    if(currentPageNumber > 1){
      setCurrentPageNumber(currentPageNumber - 1)
      props.change(currentPageNumber - 1)
    }
  }

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li onClick={handlePreviousClick} class="page-item">
          <a class="page-link">
            <img src={left} /> Previous
          </a>
        </li>
        {Array(pagesNumber)
          .fill(1)
          .map((e, i) => (
            <li onClick={()=>handlePageNumberChange(i+1)} class="page-item">
              <a class="page-link">{i + 1}</a>
            </li>
          ))}
        <li onClick={handleNextClick} class="page-item">
          <a class="page-link">
            Next <img src={right} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
