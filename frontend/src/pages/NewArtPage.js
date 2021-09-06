import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NewArt from "../components/NewArt/NewArt";

const NewArtPage = () => {
  return(
    <div>
      <Navbar />
      <div className="App container bg-light">
        <NewArt />
      </div>
    </div>
  )
}

export default NewArtPage