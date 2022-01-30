import { List } from './HerotList.styled';
import Hero from 'components/Hero/Hero';

const HeroList = ({ heros, onDelete }) => (
  <List>
    {heros.map(({ id, nickname, images }) => {
      return (
        <li key={id}>
          <Hero
            id={id}
            nickname={nickname}
            images={images}
            onDelete={() => onDelete(id)}
          />
        </li>
      );
    })}
  </List>
);

export default HeroList;
