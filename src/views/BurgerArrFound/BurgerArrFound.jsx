import BurgerRender from '../BurgerRender/BurgerRender';
import { useState, useEffect } from 'react';

export default function BurgerArrFound({found}) {
  const [burgers, setBurgers] = useState(found);
  console.log('found', found);

  useEffect(() => { 
    setBurgers(found);
    console.log('burgers', burgers);
  }, [found])


  // setBurger(found);

  return (
    <>
      { 
        burgers.map((burger, i) => <BurgerRender key={`${burger}${i}`} burger={burger}/>)
      }
    </>
  )
}