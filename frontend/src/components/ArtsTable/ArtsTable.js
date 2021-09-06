import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  deleteConfirmation,
  deletionSuccessfulMessage,
  errorHandler,
} from '../../helpers/Popups';
import Paginator from '../Paginator/Paginator';
import './ArtsTable.css';

const ArtsTable = () => {
  const [arts, setArts] = useState([]);
  const [count, setCount] = useState([]);
  let baseURL = 'http://localhost:5000/';

  useEffect(async () => {
    await updateArts(1);
  }, []);

  const updateArts = async (page) => {
    let res = await fetch(
      `http://localhost:5000/private/getArts?page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'JWT ' + localStorage.getItem('token'),
        },
      }
    );
    res = await res.json();
    setArts(res.arts);
    setCount(res.count);
  };

  const handleDeleteButtonClick = async (art) => {
    let result = await deleteConfirmation();
    if (result.isConfirmed) {
      let res = await fetch(
        `http://localhost:5000/private/deleteArt/${art._id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'JWT ' + localStorage.getItem('token'),
          },
        }
      );
      if (res.status == 200) {
        deletionSuccessfulMessage();
        await updateArts(1);
      } else {
        errorHandler('Something went wrong. Please try again!');
      }
    }
  };

  const handlePaginatorChange = async (newPage) => {
    await updateArts(newPage);
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2 className="mb-3 pt-3 text-start">Art pieces</h2>
        <a>
          <Link to="/admin/newArt" className="btn btn-primary m-2">
            Add a new art
          </Link>
        </a>
      </div>
      <div className="p-2 bg-white">
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Name</th>
              <th scope="col">Artist</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {arts.map((art, i) => (
              <tr>
                <td>
                  <img
                    className="img-thumbnail item-img"
                    src={baseURL + art.picture}
                  />
                </td>
                <td>Art Piece</td>
                <td>{art.artist}</td>
                <td>{art.description}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteButtonClick(art)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center m-3">
        <Paginator count={count} change={handlePaginatorChange} />
      </div>
    </div>
  );
};

export default ArtsTable;
