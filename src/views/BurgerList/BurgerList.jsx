// import BurgerRender from '../BurgerRender/BurgerRender'
import burgerFetch from '../../services/burgerFetch';
import { useEffect } from 'react';

export default function BurgerList() {
  // const testArr = [ 1, 2, 3 ];
  let bobsArr = [];

  useEffect(() => {
    async function getBurgers(){
      bobsArr = await burgerFetch();
    }

    getBurgers();
  }, [])

  console.log(bobsArr);

  return(
    <>
      <p>BurgerList</p>
      {/* { 
        testArr.map((test, i) => <BurgerRender key={`${test}${i}`} test={test}/>)
      } */}
      <p>hotdogs</p>
    </>
  )
}
