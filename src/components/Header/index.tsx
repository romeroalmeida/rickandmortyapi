
import { CenterPage } from '@/styles/utils';
import Link from 'next/link';
import * as S from './styles';

export function Header () {
  return (
    <S.Container>
        <CenterPage>
          <Link href={'/'}>
            <h1>rickandmortyapi.com</h1>
          
          </Link>
        </CenterPage>
  </S.Container>
  )
  
}

