import style from './BurgerList.css';
import BurgerArr from '../BurgerArr/BurgerArr';
import BurgerArrFound from '../BurgerArrFound/BurgerArrFound';
import { useState } from 'react';

export default function BurgerList({burgers, bigArr}) {

  console.log(burgers, bigArr);
  const [search, setSearch] = useState('');
  const [found, setFound] = useState();

  function handleSubmit(){
    
    const find = bigArr.filter(item => item.name.toLowerCase().includes(search));

    setFound(find);
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
        <button className={style.submitButton} onClick={() => {
          location.href = '/'
        }}>New Bobs</button>
      </div>
      </div>
      <section className={style.dinnerTray}>
        <div className={style.burgerWrapper}>
          {
            search === '' ? <BurgerArr burgers={burgers} /> :
            <BurgerArrFound found={found} />
          }
        </div>
      </section>
    </>
  )
}
