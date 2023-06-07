import { useFavorites } from '@/store/favorites';
import { useRouter } from 'next/navigation';
import * as S from './styles';

export function Favorites() {
  const favorites = useFavorites((state) => state.favorites);
  const router = useRouter();

  return (
    <>
      {favorites.length !== 0 && (
        <S.Container>
          <h1>Favorites</h1>
          <S.List>
            {favorites.map((item) => (
              <S.Item
                key={item.id}
                onClick={() => router.push(`/character/${item.id}`)}
              >
                <S.Icon src={item.image} alt={item.name} />
                <S.Name>{item.name.split(' ')[0]}</S.Name>
              </S.Item>
            ))}
          </S.List>
        </S.Container>
      )}
    </>
  );
}
