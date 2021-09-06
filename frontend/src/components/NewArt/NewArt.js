import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { artCreationMessage, errorHandler } from '../../helpers/Popups';

const NewArt = () => {
  const [artist, setArtist] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const history = useHistory()

  const handleArtistChange = (event) => {
    setArtist(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleImageChange = (event) => {
    setImage(event.target.files[0])
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    if (!artist || !description || !image) {
      return errorHandler('You can not submit empty artist, description and/or image');
    }
    let data = new FormData();
    data.append('artist', artist)
    data.append('description', description)
    data.append('image', image)
    let res = await fetch(
      'http://localhost:5000/private/createArt',
      {
        method: 'POST',
        body: data,
        headers: {
          Authorization: 'JWT ' + localStorage.getItem('token'),
        }
      }
    )
    if(res.status === 201) {
      artCreationMessage()
      history.push('/admin/arts')
    } else {
      errorHandler('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="d-flex justify-content-md-center align-items-center vh-100 ">
      <div className="card mx-auto">
        <div className="card-header text-center">Add A New Art</div>
        <form className="p-4">
          <div className="mb-3">
            <label className="form-label">Artist</label>
            <input
              placeholder="Enter artist name"
              onChange={handleArtistChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              placeholder="Enter art description"
              onChange={handleDescriptionChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              name="image"
              className="form-control"
              type="file"
              onChange={handleImageChange}
            />
          </div>
          <div>
            <button
              onClick={handleFormSubmit}
              type="submit"
              className="mx-auto btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewArt