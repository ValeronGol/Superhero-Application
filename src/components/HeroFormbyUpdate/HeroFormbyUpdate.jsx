import { useFormik } from 'formik';
import { useUpdateHeroById } from 'hooks/useUpdateHeroById';
import Btn from 'components/Btn/Btn';
import {
  Form,
  Container,
  Label,
  Input,
  Img,
  Box,
  Boxbtn,
} from './HeroFormbyUpdate.styled.jsx';

export default function HeroFormbyUpdate({ hero }) {
  const { updateHero } = useUpdateHeroById();
  const {
    _id,
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  } = hero;
  const formik = useFormik({
    initialValues: {
      id: _id,
      nickname: nickname,
      real_name: real_name,
      origin_description: origin_description,
      superpowers: superpowers,
      catch_phrase: catch_phrase,
      images: images,
    },
    onSubmit: values => {
      updateHero(values);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label htmlFor="images">
        <Img src={images} alt={nickname} />
      </Label>
      <Box>
        <Container>
          <Label htmlFor="nickname">nickname</Label>
          <Input
            name="nickname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nickname}
          />
        </Container>

        <Container>
          <Label htmlFor="real_name">real_name</Label>
          <Input
            name="real_name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.real_name}
          />
        </Container>

        <Container>
          <Label htmlFor="origin_description">origin_description</Label>
          <Input
            name="origin_description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.origin_description}
          />
        </Container>
        <Container>
          <Label htmlFor="superpowers">superpowers</Label>
          <Input
            name="superpowers"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.superpowers}
          />
        </Container>
        <Container>
          <Label htmlFor="catch_phrase">catch_phrase</Label>
          <Input
            name="catch_phrase"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.catch_phrase}
          />
        </Container>
      </Box>
      <Boxbtn>
        <Btn text="Update Hero" type="submit" />
      </Boxbtn>
    </Form>
  );
}
