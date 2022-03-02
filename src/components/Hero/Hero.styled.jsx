import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-right: 10px;
  padding: 10px;
  list-style: none;
  text-transform: uppercase;
`;
export const Item = styled.li`
  padding: 10px 10px 10px 0;
`;
export const Info = styled.span`
  text-transform: none;
`;
export const Img = styled.img`
  height: 260px;
  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
