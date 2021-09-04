import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ArtCard from './components/ArtCard/ArtCard';
import ArtGrid from './components/ArtGrid/ArtGrid';
import UsersTable from './components/UsersTable/UsersTable';
import ArtsTable from './components/ArtsTable/ArtsTable';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
    <div className="App container bg-light">
      <ArtsTable />
    </div>

    </div>
  );
}

export default App;
