import React, { useState } from 'react';
import { ConteinerForm, Label, Button, Input } from './HeroForm.styled';

export default function HeroForm(props) {
  const [nickname, setNickname] = useState('');
  const [images, setImages] = useState('');

  const heros = {
    nickname,
    images,
  };

  const handleChangeNickname = event => {
    setNickname(event.currentTarget.value);
  };

  const handleChangeImage = event => {
    setImages(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.onSubmit(heros);

    resetState();
  };

  const resetState = () => {
    setNickname('');
    setImages('');
  };

  return (
    <ConteinerForm>
      <form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            required
            onChange={handleChangeNickname}
            value={nickname}
          />
        </Label>
        <Label>
          Images
          <Input
            ttype="image"
            name="image"
            width="50"
            onChange={handleChangeImage}
            value={images}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </form>
    </ConteinerForm>
  );
}
