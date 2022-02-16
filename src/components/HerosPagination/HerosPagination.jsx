import { useState } from 'react';
import { useFetchHeros } from 'hooks/useFetchHeros';
import { useDeleteHero } from 'hooks/useDeleteHero';
import HeroList from 'components/HeroList/HeroList';
import Btn from 'components/Btn/Btn';
import { Container } from './HerosPagination.styled';

const HerosPagination = () => {
  const [page, setPage] = useState(1);
  const { deleteHero } = useDeleteHero();
  const { isLoading, data, isError, error, isFetching } = useFetchHeros(page);

  return (
    <Container>
      {isLoading && <div>Loading...</div>}{' '}
      {isError && <div>Error: {error.message}</div>}
      {data && <HeroList heros={data} onDelete={deleteHero} />}
      <Btn
        text="Prev Page"
        disabled={page === 1}
        onClick={() => {
          setPage(old => old - 1);
        }}
      />
      <Btn
        text="Next Page"
        disabled={!data?.length || data?.length < 5}
        onClick={() => {
          setPage(old => old + 1);
        }}
      />{' '}
      {isFetching ? <span> Loading...</span> : null}
    </Container>
  );
};
export default HerosPagination;
