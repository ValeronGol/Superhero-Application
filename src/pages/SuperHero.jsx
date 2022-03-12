import { useParams } from 'react-router';
import { useFetchHeroById } from 'hooks/useFetchHeroById';
import HeroFormbyUpdate from 'components/HeroFormbyUpdate/HeroFormbyUpdate';

const SuperHero = () => {
  const { id } = useParams();
  const { isLoading, data } = useFetchHeroById(id);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {data && <HeroFormbyUpdate hero={data} />}
    </div>
  );
};

export default SuperHero;
