import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import SuperheroForm from '../../pages/SuperheroForm';
import SuperheroList from '../../pages/SuperheroList';
import SuperHero from '../../pages/SuperHero';

import Layout from 'components/Layout/Layout';

import { Conteiner } from './App.styled';

export default function App() {
  return (
    <Conteiner>
      <Routes>
        <Route path="/superhero-application/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/superhero-application/heros"
            element={<SuperheroList />}
          />
          <Route
            path="/superhero-application//heros/:id"
            element={<SuperHero />}
          />
          <Route
            path="/superhero-application/form"
            element={<SuperheroForm />}
          />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </Conteiner>
  );
}
