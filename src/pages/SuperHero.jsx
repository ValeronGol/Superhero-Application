import { useParams } from 'react-router';
import { useFetchHeroById } from 'hooks/useFetchHeroById';
import HeroFormbyUpdate from 'components/HeroFormbyUpdate/HeroFormbyUpdate';

const SuperHero = () => {
  const { id } = useParams();
  const { isLoading, data } = useFetchHeroById(id);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {data && (
        // <Hero
        //   nickname={data.nickname}
        //   images={data.images}
        //   real_name={data.real_name}
        //   origin_description={data.origin_description}
        //   superpowers={data.superpowers}
        //   catch_phrase={data.catch_phrase}
        // />
        <HeroFormbyUpdate hero={data} />
      )}
    </div>
  );
};

export default SuperHero;
