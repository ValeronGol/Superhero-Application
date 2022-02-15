import { Conteiner, Info, Img } from './Hero.styled';
import Btn from 'components/Btn/Btn';

const Hero = ({ nickname, images, onDelete }) => (
  <Conteiner>
    <Info>
      {`${nickname}`}
      <Img src={images} alt={nickname} />
    </Info>
    <Btn text="Delete" onClick={onDelete} />
  </Conteiner>
);

export default Hero;
