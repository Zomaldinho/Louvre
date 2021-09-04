import './App.css';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import GuestGallaryArtsPage from './pages/GuestGallaryArtsPage';
import AdminArtsPage from './pages/AdminArtsPage';
import AdminUsersPage from './pages/AdminUsersPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/gallery">
          <GuestGallaryArtsPage />
        </Route>
        <Route path="/admin/arts">
          <AdminArtsPage />
        </Route>
        <Route path="/admin/users">
          <AdminUsersPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
