import BurgerRender from '../BurgerRender/BurgerRender';

export default function BurgerArr({burgers}) {

  return (
    <>
      { 
        burgers.map((burger, i) => <BurgerRender key={`${burger}${i}`} burger={burger} data-testid={i}/>)
      }
    </>
  )
}