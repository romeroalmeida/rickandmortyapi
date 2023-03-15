'use client';

import Card from '@/components/Card';
import { Pagination } from '@/components/Pagination';
import { useCharacters } from '@/graphql/hooks/useCharacters';
import { CenterPage, ListCard } from '@/styles/utils';
import { Character } from '@/types/charracter';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const { isLoading, data } = useCharacters(page);

  console.log(data);

  return (
    <>
      <main>
        <CenterPage>
          {isLoading && <p>Carregando...</p>}
          {data?.characters && (
            <ListCard>
              {data?.characters?.results?.map((item: Character) => (
                <Card
                  character={item}
                  key={item.id}
                  onClick={() => router.push(`/character/${item.id}`)}
                />
              ))}
            </ListCard>
          )}

          <Pagination
            page={page}
            setPage={setPage}
            pages={data?.characters.info.pages}
            count={data?.characters.info.count}
            prev={data?.characters.info.prev}
            next={data?.characters.info.next}
          />
        </CenterPage>
      </main>
    </>
  );
}
