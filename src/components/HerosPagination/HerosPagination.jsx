import { useQuery } from 'react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { fetchHeros } from 'helpers/fetchHeros';
import { useDeleteHero } from 'hooks/useDeleteHero';
import HeroList from 'components/HeroList/HeroList';

const HerosPagination = () => {
  const [page, setPage] = useState(1);
  const { deleteHero } = useDeleteHero();
  const { isLoading, data, isError, error, isFetching } = useQuery(
    ['/hero', page],
    () => fetchHeros(page),
    {
      onSuccess() {
        toast.success('Heros loaded');
      },
    },
  );
  return (
    <div>
      {isLoading && <div>Loading...</div>}{' '}
      {isError && <div>Error: {error.message}</div>}
      {data && <HeroList heros={data} onDelete={deleteHero} />}
      <button
        disabled={page === 1}
        onClick={() => {
          setPage(old => old - 1);
        }}
      >
        Prev Page
      </button>
      <button
        disabled={!data?.length || data?.length < 5}
        onClick={() => {
          setPage(old => old + 1);
        }}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}
    </div>
  );
};
export default HerosPagination;
