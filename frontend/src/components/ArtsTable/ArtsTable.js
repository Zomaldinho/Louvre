import React from "react";
import img from '../../assets/IconBackground-1.png'
import './ArtsTable.css'

const ArtsTable = () => {
  let arts = [
    { image: img, name: 'asdads', artist: '012213', description: 'description'},
    { image: img, name: 'asdads2', artist: '012213', description: 'description'},
    { image: img, name: 'asdads3', artist: '012213', description: 'description'},
    { image: img, name: 'asdads4', artist: '012213', description: 'description'},
  ];
  return (
    <div>
      <h2 className="mb-3 pt-3 text-start">Art pieces</h2>
      <div className="p-2 bg-white">
      <table className="table">
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
              <td><img className="img-thumbnail item-img" src={art.image} /></td>
              <td>{art.name}</td>
              <td>{art.artist}</td>
              <td>{art.description}</td>
              <td><button className="btn btn-danger">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default ArtsTable