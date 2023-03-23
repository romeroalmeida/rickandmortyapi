import * as S from './styles';

export function Loading() {
  return (
    <S.WrapperContainer>
      <S.Container>
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
      </S.Container>
      <p>Loading...</p>
    </S.WrapperContainer>
  );
}
