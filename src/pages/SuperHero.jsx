import { useParams } from 'react-router';
import { useFetchHeroById } from 'hooks/useFetchHeroById';
import Hero from 'components/Hero/Hero';

const SuperHero = () => {
  const { id } = useParams();
  const { isLoading, data } = useFetchHeroById(id);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {data && (
        <Hero
          nickname={data.nickname}
          images={data.images}
          real_name={data.real_name}
          origin_description={data.origin_description}
          superpowers={data.superpowers}
          catch_phrase={data.catch_phrase}
        />
      )}
    </div>
  );
};

export default SuperHero;
