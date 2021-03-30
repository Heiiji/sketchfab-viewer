import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import client from './_helpers/api';
import UserContext from './_helpers/userContext';
import ModelDetails from './pages/ModelDetails';

function Router() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    client
      .get('/me')
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => console.error('cant get access'));
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/model/:uid' component={ModelDetails}></Route>
      </Switch>
    </UserContext.Provider>
  );
}

export default Router;
