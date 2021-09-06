import './App.css';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import GuestGallaryArtsPage from './pages/GuestGallaryArtsPage';
import AdminArtsPage from './pages/AdminArtsPage';
import AdminUsersPage from './pages/AdminUsersPage';
import { useEffect, useState } from 'react';
import { verify } from 'jsonwebtoken';
import { AuthContext } from './store/auth-context';
import NewArtPage from './pages/NewArtPage';

function App() {
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let storageToken = localStorage.getItem('token');
    if (storageToken) {
      setIsLoggedIn(true);
      let decodedToken = verify(storageToken, 'ExtremeSolution');
      setRole(decodedToken.role);
      console.log({ role });
    }
    setLoading(false);
  }, []);

  const handleLogin = () => {
    setRole(localStorage.getItem('role'));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    setRole(null);
    setIsLoggedIn(false);
    history.replace('/login');
  };

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ handleLogout }}>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? (
            role == 'Admin' ? (
              <Redirect to="/admin/arts" />
            ) : (
              <Redirect to="/gallery" />
            )
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        {!isLoggedIn && (
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path="/signup">
            <Signup />
          </Route>
        )}
        {isLoggedIn && role === 'Guest' && (
          <Route path="/gallery">
            <GuestGallaryArtsPage />
          </Route>
        )}
        {isLoggedIn && role === 'Admin' && (
          <Route path="/admin/arts">
            <AdminArtsPage />
          </Route>
        )}
        {isLoggedIn && role === 'Admin' && (
          <Route path="/admin/users">
            <AdminUsersPage />
          </Route>
        )}
        {isLoggedIn && role === 'Admin' && (
          <Route path="/admin/newArt">
            <NewArtPage />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
