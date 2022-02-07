import { Toaster } from 'react-hot-toast';
import HeroForm from 'components/HeroForm/HeroForm';
import HeroList from 'components/HeroList/HeroList';
import { useFetchHeros } from 'hooks/useFetchHeros';
import { useDeleteHero } from 'hooks/useDeleteHero';

import { Conteiner } from './App.styled';

export default function App() {
  const { heros } = useFetchHeros();
  const { deleteHero } = useDeleteHero();

  return (
    <Conteiner>
      <h1>Suoperhero Create</h1>
      <HeroForm />
      <h1>Superheros list</h1>
      {heros && <HeroList heros={heros} onDelete={deleteHero} />}
      <Toaster position="top-right" />
    </Conteiner>
  );
}
