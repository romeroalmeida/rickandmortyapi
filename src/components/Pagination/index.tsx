import * as S from './styles';

import ArroLeft from '@/assets/arrow-left.svg';
import Image from 'next/image';
import { usePagination } from '@/store/page';

type PaginationProps = {
  pages: number;
  prev?: number | null;
  next?: number | null;
  count?: number;
};

export function Pagination({ next, prev, pages }: PaginationProps) {
  const setPage = usePagination((state) => state.setPage);
  const page = usePagination((state) => state.page);

  return (
    <S.Container>
      <S.Previous onClick={() => setPage(page - 1)} disabled={page === 1}>
        <Image src={ArroLeft} width="15" alt="Previous" /> previous
      </S.Previous>
      <S.Pages>
        {page > 2 && <S.FirstPage onClick={() => setPage(1)}>1</S.FirstPage>}

        {prev && <S.Page onClick={() => setPage(prev)}>{prev}</S.Page>}
        <S.CurrentPage>{page}</S.CurrentPage>
        {next && <S.Page onClick={() => setPage(next)}>{next}</S.Page>}

        {page < pages - 1 && (
          <S.LastPage onClick={() => setPage(pages)}>{pages}</S.LastPage>
        )}
      </S.Pages>
      <S.Next onClick={() => setPage(page + 1)} disabled={pages === page}>
        <Image src={ArroLeft} width="15" alt="Previous" /> next
      </S.Next>
    </S.Container>
  );
}
