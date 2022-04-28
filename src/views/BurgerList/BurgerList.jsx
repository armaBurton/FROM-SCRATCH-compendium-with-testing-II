import BurgerRender from '../BurgerRender/BurgerRender'
import burgerFetch from '../../services/burgerFetch';
import { useEffect, useState } from 'react';
import style from './BurgerList.css';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import BurgerArr from '../BurgerArr/BurgerArr';
import BurgerArrFound from '../BurgerArrFound/BurgerArrFound';



export default function BurgerList({burgers, bigArr}) {

  console.log(burgers, bigArr);
  const [searchArr, setSearchArr] = useState([bigArr]);
  const [search, setSearch] = useState('');
  const [found, setFound] = useState();
  const [local, setLocal] = useState([burgers])

  // console.log(bigArr);

  function handleSubmit(){
    
    const find = bigArr.filter(item => item.name.toLowerCase().includes(search));
    
    // console.log('search',search);
    // console.log('find',find);
    // setLocal(find);
    console.log(find);
    // console.log('local', local);
    setFound(find);
    console.log(found);
  }

  function searchBurgers(e){
    e.preventDefault();
    handleSubmit();
  }

  return(
    <>
      <div className={style.headSpace}>
      <p className={style.title}>BurgerList</p>
      <div className={style.inputField}>
        <input type="text" onChange={e => {
            setSearch(e.target.value.toLowerCase());
            searchBurgers(e);
          }}/>
        <button className={style.submitButton} onClick={searchBurgers}>search</button>
      </div>
      {/* <form onSubmit={searchBurgers}>
        <input onChange={} />
      </form> */}
      </div>
      <section className={style.dinnerTray}>
        <div className={style.burgerWrapper}>
          {/* {
            <BurgerArr local={local} />
          } */}
          {/* {<BurgerArr burgers={burgers} />} */}
          {
            search === '' ? <BurgerArr burgers={burgers} /> :
            <BurgerArrFound found={found} />
          }
        </div>
      </section>
    </>
  )
}
