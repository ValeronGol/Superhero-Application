import styled from '@emotion/styled';
export const Conteiner = styled.div`
  display: flex;
  align-items: center;
`;
export const Info = styled.p`
  margin-right: 10px;
`;
export const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const Button = styled.button`
  border-radius: 3px;
  transition-delay: 250ms;
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  cursor: pointer;
  &:hover {
    background-color: #2d2db6e6;
    color: #f4f3f7ab;
    border-color: #0a0131ab;
  }
`;
