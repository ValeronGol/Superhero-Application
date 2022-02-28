import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  ConteinerForm,
  Label,
  Input,
  ErrorName,
  ErrorImg,
  BtnContainer,
} from './HeroForm.styled';
import { useCreateHero } from 'hooks/useCreateHero';
import Btn from 'components/Btn/Btn';

const validationSchema = Yup.object({
  nickname: Yup.string().required(),
  images: Yup.string().url().required(),
});

export default function HeroForm() {
  const { createHero } = useCreateHero();

  return (
    <Formik
      initialValues={{
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: '',
        catch_phrase: '',
        images: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        createHero(values);
        resetForm({ values: '' });
      }}
    >
      {({ isValid, dirty }) => (
        <ConteinerForm autoComplete="off">
          <Label htmlFor="nickname">nickname</Label>
          <Input name="nickname" type="text" />
          <ErrorMessage name="nickname">
            {msg => <ErrorName>{msg}</ErrorName>}
          </ErrorMessage>
          <Label htmlFor="real_name">real_name</Label>
          <Input name="real_name" type="text" />

          <Label htmlFor="origin_description">origin_description</Label>
          <Input name="origin_description" type="text" />

          <Label htmlFor="superpowers">superpowers</Label>
          <Input name="superpowers" type="text" />

          <Label htmlFor="catch_phrase">catch_phrase</Label>
          <Input name="catch_phrase" type="text" />

          <Label htmlFor="images">images URL</Label>
          <Input name="images" type="text" />
          <ErrorMessage name="images">
            {msg => <ErrorImg>{msg}</ErrorImg>}
          </ErrorMessage>
          <BtnContainer>
            <Btn
              text="Create Hero"
              type="submit"
              disabled={!isValid && !dirty}
            />
          </BtnContainer>
        </ConteinerForm>
      )}
    </Formik>
  );
}
