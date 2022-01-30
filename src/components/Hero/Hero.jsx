import { Conteiner, Info, Img, Button } from './Hero.styled';

const Hero = ({ nickname, images, id, onDelete }) => (
  <Conteiner>
    <Info>
      {`${nickname}`}
      <Img src={images} alt={nickname} />
    </Info>
    <Button data-id={id} onClick={onDelete}>
      Delete
    </Button>
  </Conteiner>
);

export default Hero;
