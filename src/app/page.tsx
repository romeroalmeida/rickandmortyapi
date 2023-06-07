'use client';

import Card from '@/components/Card';
import { Loading } from '@/components/Loading';
import { Pagination } from '@/components/Pagination';
import { useCharacters } from '@/graphql/hooks/useCharacters';
import { usePagination } from '@/store/page';
import { CenterPage, ListCard } from '@/styles/utils';
import { Character } from '@/types/charracter';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const page = usePagination((state) => state.page);

  const { isLoading, data } = useCharacters(page);

  return (
    <main>
      <CenterPage>
        {isLoading && <Loading />}
        <ListCard>
          {data?.characters?.results?.map((item: Character) => (
            <Card
              character={item}
              key={item.id}
              onClick={() => router.push(`/character/${item.id}`)}
            />
          ))}
        </ListCard>
        <Pagination
          pages={data?.characters.info.pages}
          count={data?.characters.info.count}
          prev={data?.characters.info.prev}
          next={data?.characters.info.next}
        />
      </CenterPage>
    </main>
  );
}
