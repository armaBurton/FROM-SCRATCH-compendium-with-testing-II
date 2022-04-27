import { Switch, Route, Link, Redirect } from 'react-router-dom'
import BurgerList from './views/BurgerList/BurgerList';
import BurgerDetail from './views/BurgerDetail/BurgerDetail';
import { useState, useEffect } from 'react';

function App() {
  return (
    <>
      <Switch>
        <Route path='/bobsBurgers/:id'>
          <BurgerDetail />
        </Route>
        <Route path='/bobsBurgers'>
          <BurgerList />
        </Route>
        <Route path='/'>
          <p>Home</p>
          <Redirect to='/bobsBurgers'>Burgers List</Redirect>
        </Route>
      </Switch>
    </>
  );
}

export default App;
