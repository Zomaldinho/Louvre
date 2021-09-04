import React from "react";
import ArtGrid from "../components/ArtGrid/ArtGrid";
import Navbar from "../components/Navbar/Navbar";

const GuestGallaryArtsPage = () => {
  return(
    <div>
      <Navbar />
      <div className="App container bg-light">
        <ArtGrid />
      </div>
    </div>
  )
}

export default GuestGallaryArtsPage