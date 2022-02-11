import { Toaster } from 'react-hot-toast';
import HeroForm from 'components/HeroForm/HeroForm';

import HerosPagination from 'components/HerosPagination/HerosPagination';

import { Conteiner } from './App.styled';

export default function App() {
  return (
    <Conteiner>
      <h1>Suoperhero Create</h1>
      <HeroForm />
      <h1>Superheros list</h1>
      <HerosPagination />
      <Toaster position="top-right" />
    </Conteiner>
  );
}
