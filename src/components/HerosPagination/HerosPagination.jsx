import { useState } from 'react';
import { useFetchHeros } from 'hooks/useFetchHeros';
import { useDeleteHero } from 'hooks/useDeleteHero';
import HeroList from 'components/HeroList/HeroList';
import Button from 'components/Button/Button';

const HerosPagination = () => {
  const [page, setPage] = useState(1);
  const { deleteHero } = useDeleteHero();
  const { isLoading, data, isError, error, isFetching } = useFetchHeros(page);
  return (
    <div>
      {isLoading && <div>Loading...</div>}{' '}
      {isError && <div>Error: {error.message}</div>}
      {data && <HeroList heros={data} onDelete={deleteHero} />}
      <Button
        text="Prev Page"
        disabled={page === 1}
        onClick={() => {
          setPage(old => old - 1);
        }}
      />
      <Button
        text="Next Page"
        disabled={!data?.length || data?.length < 5}
        onClick={() => {
          setPage(old => old + 1);
        }}
      />
      {isFetching ? <span> Loading...</span> : null}
    </div>
  );
};
export default HerosPagination;
