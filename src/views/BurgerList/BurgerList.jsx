import BurgerRender from '../BurgerRender/BurgerRender'
import burgerFetch from '../../services/burgerFetch';
import { useEffect } from 'react';
import style from './BurgerList.css';

export default function BurgerList({burgers}) {

  console.log(burgers);
  return(
    <>
      <div className={style.headSpace}>
      <p className={style.title}>BurgerList</p>
      <form action="submit">
        <input type="text" />
        <button className={style.submitButton} type='submit'>search</button>
      </form>
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
