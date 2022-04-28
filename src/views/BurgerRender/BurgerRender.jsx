import style from './BurgerRender.css';
import { Link } from 'react-router-dom';

export default function BurgerRender({burger, i}) {

  return(
    <Link to={`/bobsBurgers/${burger.id}`}>
      <section className={style.burgerCard} data-testid={i}>
        <p className={style.name}>{burger.name}</p>
        <img className={style.image} src={burger.image} alt={burger.name}/>
      </section>
    </Link>
  );
}


// firstEpisode: "\"The Equestranauts\""
// gender: "Male"
// hairColor: "Brown"
// id: 460
// image: "https://bobsburgers-api.herokuapp.com/images/characters/460.jpg"
// name: "Sunpuddle"
// url: "https://bobsburgers-api.herokuapp.com/characters/460"
// voicedBy: "Kurt Braunohler"
// wikiUrl: "https://bobs-burgers.fandom.com/wiki/Sunpuddle"