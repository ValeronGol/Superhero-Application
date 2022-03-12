import styled from '@emotion/styled';
import AutosizeInput from 'react-input-autosize';

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;
export const Box = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  align-content: stretch;
  justify-content: space-evenly;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const Label = styled.label`
  padding: 10px;
  text-transform: uppercase;
`;
export const Input = styled(AutosizeInput)`
  width: 100%;
  margin-right: 10px;
  padding: 10px;
  border: none;
  text-transform: none;
  & > input {
    border: none;
  }
  & > input:focus {
    outline: none;
  }
`;
export const Img = styled.img`
  height: 260px;
  width: 260px;
  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const Boxbtn = styled.div`
  position: absolute;
  top: 350px;
  bottom: -80px;
  left: 335px;
`;
