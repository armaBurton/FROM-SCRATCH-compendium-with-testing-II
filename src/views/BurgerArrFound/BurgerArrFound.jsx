import BurgerRender from '../BurgerRender/BurgerRender';
import { useState, useEffect } from 'react';

export default function BurgerArrFound({found}) {
  const [burgers, setBurgers] = useState(found);

  useEffect(() => { 
    setBurgers(found);
  }, [found])

  return (
    <>
      { 
        burgers.map((burger, i) => <BurgerRender key={`${burger}${i}`} burger={burger}/>)
      }
    </>
  )
}