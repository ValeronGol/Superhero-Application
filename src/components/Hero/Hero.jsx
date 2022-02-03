import { Conteiner, Info, Img, Button } from './Hero.styled';

const Hero = ({ nickname, images, _id, onDelete }) => (
  <Conteiner>
    <Info>
      {`${nickname}`}
      <Img src={images} alt={nickname} />
    </Info>
    <Button data-id={_id} onClick={onDelete}>
      Delete
    </Button>
  </Conteiner>
);

export default Hero;
