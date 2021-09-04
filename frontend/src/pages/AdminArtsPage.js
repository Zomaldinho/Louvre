import React from 'react';
import ArtsTable from '../components/ArtsTable/ArtsTable';
import Navbar from '../components/Navbar/Navbar';
import Taps from '../components/Taps/Taps';

const AdminArtsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="App container bg-light">
        <Taps arts={true} />
        <ArtsTable />
      </div>
    </div>
  );
};

export default AdminArtsPage;
