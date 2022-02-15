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
