import { useParams } from 'react-router';
import { useFetchHeroById } from 'hooks/useFetchHeroById';
import { useUpdateHeroById } from 'hooks/useUpdateHeroById';
import Hero from 'components/Hero/Hero';
import Btn from 'components/Btn/Btn';

const SuperHero = () => {
  const { id } = useParams();
  const { isLoading, data } = useFetchHeroById(id);
  const { updateHero } = useUpdateHeroById();

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
      <Btn text="Update" onClick={() => updateHero(id)} />
    </div>
  );
};

export default SuperHero;
