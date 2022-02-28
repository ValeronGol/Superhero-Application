import { Conteiner, Info, Img } from './Hero.styled';
import Btn from 'components/Btn/Btn';

const Hero = ({
  nickname,
  images,
  real_name,
  origin_description,
  superpowers,
  catch_phrase,
  onUpdate,
}) => (
  <Conteiner>
    <Info>
      {`${nickname}`}
      {`${real_name}`}
      {`${origin_description}`}
      {`${superpowers}`}
      {`${catch_phrase}`}
      <Img src={images} alt={nickname} />
    </Info>
    <Btn text="Update" onClick={onUpdate} />
  </Conteiner>
);

export default Hero;
