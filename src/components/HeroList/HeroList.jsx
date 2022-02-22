import { Link } from 'react-router-dom';
import { List } from './HerotList.styled';
import Hero from 'components/Hero/Hero';

const HeroList = ({ heros, onDelete }) => (
  <List>
    {heros.map(({ _id, nickname, images }) => {
      return (
        <Link key={_id} to={`/superhero-application/heros/${_id}`}>
          <Hero
            id={_id}
            nickname={nickname}
            images={images}
            onDelete={() => onDelete(_id)}
          />
        </Link>
      );
    })}
  </List>
);

export default HeroList;
