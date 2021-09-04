import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import GuestGallaryArtsPage from './pages/GuestGallaryArtsPage';
import AdminArtsPage from './pages/AdminArtsPage';
import AdminUsersPage from './pages/AdminUsersPage';
import { useEffect, useState } from 'react';
import { verify } from 'jsonwebtoken';

function App() {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      let decodedToken = verify(token, 'ExtremeSolution');
      setRole(decodedToken.role);
      console.log({ role });
    }
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {token ? (
            role == 'Admin' ? (
              <Redirect to="/admin/arts" />
            ) : (
              <Redirect to="/gallery" />
            )
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        {!token && (
          <Route path="/login">
            <Login />
          </Route>
        )}
        {!token && (
          <Route path="/signup">
            <Signup />
          </Route>
        )}
        {token && role == 'Guest' && (
          <Route path="/gallery">
            <GuestGallaryArtsPage />
          </Route>
        )}
        {token && role == 'Admin' && (
          <Route path="/admin/arts">
            <AdminArtsPage />
          </Route>
        )}
        {token && role == 'Admin' && (
          <Route path="/admin/users">
            <AdminUsersPage />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
