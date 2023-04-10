import * as S from './styles';

type Props = {
  favorite?: boolean;
  onClick?: () => void;
};

export function ButtonFavorite({ favorite, onClick }: Props) {
  return (
    <S.Container>
      <button type="button" onClick={onClick}>
        {favorite ? 'Unfavorite' : 'Favorite'}
        <S.Wrapper>
          <S.Heart isFavorite={favorite} />
        </S.Wrapper>
      </button>
    </S.Container>
  );
}
