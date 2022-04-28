import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import style from './BurgerDetail.css';

export default function BurgerDetail({burgers, bigArr}) {
  const { id } = useParams();

  let profile = {};

  for (let b of burgers){
    b.id === Number(id) ? profile = b : console.log(false);
  }

  return(
    <Link to='/bobsBurgers'>
    <section className={style.burgerWrapper}>
      <div className={style.detailCard}>
        <div className={style.info}>
          <h1 className={style.name}>{profile.name}</h1>
          <div className={style.stats}>
            <p><b><em>Gender:</em></b> {profile.gender}</p>
            <p><b><em>Hair Color:</em></b> {profile.hairColor}</p>
            <p><b><em>Voiced By:</em></b> {profile.voicedBy}</p>
            <p><b><em>First Episode:</em></b> {profile.firstEpisode}</p>
          </div>
        </div>
        <img className={style.image} src={profile.image} alt={profile.name} />
      </div>
    </section>
    </Link>
  )
}