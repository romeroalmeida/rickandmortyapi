import { Character } from '@/types/charracter';
import * as S from './styles';

type CardProps = {
  character: Character;
  onClick?: () => void;
};

const Card = (props: CardProps) => {
  const { image, name, status } = props.character;
  return (
    <S.Container onClick={props.onClick}>
      <S.ImageMain bgImage={image} />
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Status status={status}>{status}</S.Status>
      </S.Info>
    </S.Container>
  );
};

export default Card;
