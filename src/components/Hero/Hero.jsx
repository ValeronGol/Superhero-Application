import { Container, List, Item, Info, Img } from './Hero.styled';

const Hero = ({
  nickname,
  images,
  real_name,
  origin_description,
  superpowers,
  catch_phrase,
}) => (
  <Container>
    <Img src={images} alt={nickname} />
    <List>
      <Item>
        nickname: <Info>{`${nickname}`}</Info>
      </Item>
      <Item>
        real name: <Info>{`${real_name}`}</Info>
      </Item>
      <Item>
        origin description: <Info>{`${origin_description}`}</Info>
      </Item>
      <Item>
        superpowers: <Info>{`${superpowers}`}</Info>
      </Item>
      <Item>
        catch phrase: <Info>{`${catch_phrase}`}</Info>
      </Item>
    </List>
  </Container>
);

export default Hero;
