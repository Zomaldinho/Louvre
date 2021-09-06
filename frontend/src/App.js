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

function App() {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);
  const history = useHistory()
  
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

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    setRole(null)
    setToken('')
    history.replace('/login')
  }

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ handleLogout }}>
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
         
          <Route path="/gallery">
            <GuestGallaryArtsPage />
          </Route>
        
          <Route path="/admin/arts">
            <AdminArtsPage />
          </Route>
          <Route path="/admin/users">
            <AdminUsersPage />
          </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
