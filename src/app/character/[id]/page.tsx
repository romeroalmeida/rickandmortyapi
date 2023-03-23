'use client';

import { useCharacter } from '@/graphql/hooks/useCharacter';
import { CenterPage } from '@/styles/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import ArroLeft from '@/assets/arrow-left.svg';

import * as S from './styles';
import { Loading } from '@/components/Loading';

type PageProps = {
  params: {
    id: string;
  };
};

export default function Character({ params }: PageProps) {
  const { isLoading, data } = useCharacter(params.id);

  const router = useRouter();

  return (
    <S.Container>
      <CenterPage>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <S.Actions>
              <S.Back onClick={() => router.back()}>
                <Image src={ArroLeft} alt="Back" width={20} height={20} />
                Back
              </S.Back>
              <button>Favorite</button>
            </S.Actions>
            <S.Wrapper>
              <S.Information>
                <h1>{data?.character?.name}</h1>
                <p>Status: {data?.character?.status}</p>
                <p>Gender: {data?.character?.gender}</p>
                <p>Species: {data?.character?.species}</p>
                <p>Location: {data?.character?.location.name}</p>
              </S.Information>
              <S.Images>
                <S.Img
                  src={data?.character.image}
                  width={300}
                  height={300}
                  alt={data?.character?.name}
                />
                <S.ImgShadow
                  src={data?.character.image}
                  width={300}
                  height={300}
                  alt={data?.character?.name}
                />
              </S.Images>
            </S.Wrapper>
          </>
        )}
      </CenterPage>
    </S.Container>
  );
}
