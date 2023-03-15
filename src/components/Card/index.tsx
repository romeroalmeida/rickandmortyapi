import * as S from './styles';

type Character = {
  character: {
    id?: string;
    image?: string;
    location?: {
      name: string;
    };
    name?: string;
    status?: string;
  };
  onClick?: () => void;
};

const Card = (props: Character) => {
  console.log(props);
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
