import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import SuperheroForm from '../../pages/SuperheroForm';
import SuperheroList from '../../pages/SuperheroList';
import Layout from 'components/Layout/Layout';

import { Conteiner } from './App.styled';

export default function App() {
  return (
    <Conteiner>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/list" element={<SuperheroList />} />
          <Route path="/form" element={<SuperheroForm />} />
        </Route>
      </Routes>

      <Toaster position="top-right" />
    </Conteiner>
  );
}
