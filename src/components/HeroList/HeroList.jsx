import { List } from './HerotList.styled';
import Hero from 'components/Hero/Hero';

const HeroList = ({ heros, onDelete }) => (
  <List>
    {heros.map(({ _id, nickname, images }) => {
      return (
        <li key={_id}>
          <Hero
            id={_id}
            nickname={nickname}
            images={images}
            onDelete={() => onDelete(_id)}
          />
        </li>
      );
    })}
  </List>
);

export default HeroList;
