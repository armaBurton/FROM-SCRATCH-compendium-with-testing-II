import style from './BurgerList.css';
import BurgerArr from '../BurgerArr/BurgerArr';
import BurgerArrFound from '../BurgerArrFound/BurgerArrFound';
import { useEffect, useState } from 'react';

export default function BurgerList({burgers, bigArr}) {

  const [search, setSearch] = useState('');
  const [found, setFound] = useState();
  const [loaded, setLoaded] = useState(true);

  function handleSubmit(){
    
    const find = bigArr.filter(item => item.name.toLowerCase().includes(search));

    setFound(find);
  }

  function searchBurgers(e){
    e.preventDefault();
    handleSubmit();
  }

  useEffect(() => {
    burgers.length > 0 && setLoaded(false)
  }, [burgers])

  return(
    <>
      <div className={style.headSpace}>
      <p className={style.title}>BurgerList</p>
      <div className={style.inputField}>
        <input type="text" placeholder='search for a character' onChange={e => {
            setSearch(e.target.value.toLowerCase());
            searchBurgers(e);
          }}/>
        <button className={style.submitButton} onClick={() => {
          setLoaded(true);
          location.href = '/'
        }}>New Bobs</button>
      </div>
      </div>
      {
        loaded ? ( <p className={`${style.dinnerTray} ${style.loading}`}>loading...</p> ) : ( 
          <section className={style.dinnerTray}>
            <div className={style.burgerWrapper}>
              {
                search === '' ? <BurgerArr burgers={burgers} /> :
                <BurgerArrFound found={found} />
              }
            </div>
          </section>
        )
      }
      
    </>
  )
}
