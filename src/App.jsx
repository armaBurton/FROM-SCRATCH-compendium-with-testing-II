import { Switch, Route, Link, Redirect } from 'react-router-dom'
import BurgerList from './views/BurgerList/BurgerList';
import BurgerDetail from './views/BurgerDetail/BurgerDetail';
import { useState, useEffect } from 'react';
import burgerFetch from './services/burgerFetch';

function App() {

  const [burgers, setBurgers] = useState([])
  const [bigArr, setBigArr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBurgers(){
      const burgerList = await burgerFetch();

      setBurgers(await burgerList[0]);
      setBigArr(await burgerList[1]);
      setLoading(false);
    }
    
    getBurgers();
  }, [])
  
  return (
    <>
      <Switch>
        <Route path='/bobsBurgers/:id'>
          <BurgerDetail burgers={burgers} bigArr={bigArr}/>
        </Route>
        <Route path='/bobsBurgers'>
          <BurgerList burgers={burgers} bigArr={bigArr} loading={loading}/>
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
