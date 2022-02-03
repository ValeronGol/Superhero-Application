import { Toaster } from 'react-hot-toast';
import HeroForm from 'components/HeroForm/HeroForm';
import HeroList from 'components/HeroList/HeroList';
import { useFetchHeros } from 'hooks/useFetchHeros';
import { Conteiner } from './App.styled';

export default function App() {
  const { superhero } = useFetchHeros();
  // const formSubmit = ({ nickname, images }) => {
  //   setHeros(prevHeros => {
  //     const newHero = {
  //       id: `${uuidv4()}`,
  //       nickname,
  //       images,
  //     };
  //     const duplicateHero = prevHeros.find(hero => {
  //       return hero.nickname === nickname;
  //     });
  //     if (duplicateHero) {
  //       alert(`${nickname} already create!!!!`);
  //       return [...prevHeros];
  //     } else {
  //       return setHeros(prevHeros => [...prevHeros, newHero]);
  //     }
  //   });
  // };

  // const deleteHero = id => {
  //   setHeros(prevHeros => prevHeros.filter(el => el.id !== id));
  // };

  return (
    <Conteiner>
      <h1>Suoperhero Database</h1>
      {/* <HeroForm onSubmit={} /> */}
      <h1>Heros</h1>
      {superhero && <HeroList superhero={superhero} />}
      <Toaster position="top-right" />
    </Conteiner>
  );
}
