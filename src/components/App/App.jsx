import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HeroForm from 'components/HeroForm/HeroForm';
import HeroList from 'components/HeroList/HeroList';
import { Conteiner } from './App.styled';

export default function App() {
  const [heros, setHeros] = useState([]);
  const localstorageKeyName = 'heros';

  useEffect(() => {
    const contacts = localStorage.getItem(localstorageKeyName);
    const parseContacts = JSON.parse(contacts);
    parseContacts && setHeros(parseContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(localstorageKeyName, JSON.stringify(heros));
  }, [heros]);

  const formSubmit = ({ nickname, images }) => {
    setHeros(prevHeros => {
      const newHero = {
        id: `${uuidv4()}`,
        nickname,
        images,
      };
      const duplicateHero = prevHeros.find(hero => {
        return hero.nickname === nickname;
      });
      if (duplicateHero) {
        alert(`${nickname} already create!!!!`);
        return [...prevHeros];
      } else {
        return setHeros(prevHeros => [...prevHeros, newHero]);
      }
    });
  };

  const deleteHero = id => {
    setHeros(prevHeros => prevHeros.filter(el => el.id !== id));
  };

  return (
    <Conteiner>
      <h1>Suoperhero Database</h1>
      <HeroForm onSubmit={formSubmit} />
      <h1>Heros</h1>
      <HeroList heros={heros} onDelete={deleteHero} />
    </Conteiner>
  );
}
