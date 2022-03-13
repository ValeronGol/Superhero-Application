import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  margin: 0;
  list-style: none;
  text-align: center;
`;

export const Item = styled.li`
  padding: 10px;
  & > a {
    text-decoration: none;
  }
`;

export const Img = styled.img`
  height: 260px;
  width: 260px;
  margin-top: 5px;
  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
