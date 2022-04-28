import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import style from './BurgerDetail.css';

export default function BurgerDetail({burgers}) {
  const { id } = useParams();
  console.log(burgers);
  let profile = {};

  for (let b of burgers){
    b.id === Number(id) ? profile = b : console.log(false);
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

  return(
    <Link to='/bobsBurgers'>
    <section className={style.burgerWrapper}>
      <div className={style.detailCard}>
        <h1>{profile.name}</h1>
        <div className={style.stats}>
          <p><b><em>Gender:</em></b> {profile.gender}</p>
          <p><b><em>Hair Color:</em></b> {profile.hairColor}</p>
          <p><b><em>Voiced By:</em></b> {profile.voicedBy}</p>
          <p><b><em>First Episode:</em></b> {profile.firstEpisode}</p>
        </div>
        <img className={style.image} src={profile.image} alt={profile.name} />
      </div>
    </section>
    </Link>
  )
}