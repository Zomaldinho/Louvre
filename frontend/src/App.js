import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ArtCard from './components/ArtCard/ArtCard';
import ArtGrid from './components/ArtGrid/ArtGrid';
import UsersTable from './components/UsersTable/UsersTable';

function App() {
  return (
    <div className="App container bg-light">
      <UsersTable />
    </div>
  );
}

export default App;
