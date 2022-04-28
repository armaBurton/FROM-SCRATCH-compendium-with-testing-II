import BurgerRender from '../BurgerRender/BurgerRender'
import burgerFetch from '../../services/burgerFetch';
import { useEffect, useState } from 'react';
import style from './BurgerList.css';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';



export default function BurgerList({burgers, bigArr}) {

  const [searchArr, setSearchArr] = useState([bigArr]);
  const [search, setSearch] = useState();
  const [found, setFound] = useState();

  console.log(bigArr);

  function handleSubmit(){
    console.log(typeof(search));
    console.log(bigArr);
    
    const find = bigArr.filter(item => item.name.toLowerCase().includes(search));
    
    console.log(find);
    
    <Redirect to={`/bobBurgers/:${find.id}`}/>
  }

  function searchBurgers(e){
    e.preventDefault();
    handleSubmit();
  }

  console.log(burgers);
  return(
    <>
      <div className={style.headSpace}>
      <p className={style.title}>BurgerList</p>
      <div className={style.inputField}>
        <input type="text" onChange={e => setSearch(e.target.value.toLowerCase())}/>
        <button className={style.submitButton} onClick={searchBurgers}>search</button>
      </div>
      {/* <form onSubmit={searchBurgers}>
        <input onChange={} />
      </form> */}
      </div>
      <section className={style.dinnerTray}>
        <div className={style.burgerWrapper}>
        { 
          burgers.map((burger, i) => <BurgerRender key={`${burger}${i}`} burger={burger}/>)
        }
        </div>
      </section>
    </>
  )
}
