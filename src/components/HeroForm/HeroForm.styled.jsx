import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const ConteinerForm = styled(Form)`
  width: 300px;
  padding: 20px;
  border: 1px solid #477405;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Input = styled(Field)`
  border-radius: 2px;
  &:focus {
    border-color: #4015fffb;
    border-width: medium;
  }
`;

export const ErrorName = styled.div`
  position: absolute;
  top: 195px;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #eb5757;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #eb5757;
`;
export const ErrorImg = styled.div`
  position: absolute;
  top: 265px;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #eb5757;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #eb5757;
`;
export const BtnContainer = styled.div`
  margin-top: 20px;
`;
