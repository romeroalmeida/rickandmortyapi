import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

export const Previous = styled.button`
  background: transparent;
  color: #fff;
  height: 1.875rem;
  border: 0;
  padding: 0 0.625rem;

  display: flex;
  align-items: center;

  background: #44444440;
  border-radius: 0.25rem;
  transition: background ease-in-out 0.2s;
  cursor: pointer;

  img {
    margin-right: 0.3125rem;
  }
  &:hover {
    background: #44444480;
  }
  &:active {
    transform: scale(0.95);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background: #44444440;
    }
  }
`;

export const Next = styled(Previous)`
  img {
    transform: rotate(180deg);
  }
`;

export const Pages = styled.div`
  display: flex;
  gap: 5px;
  margin: 0 15px;
`;

export const Page = styled.button`
  border: 0;
  padding: 0 0.625rem;
  background: #44444440;
  border-radius: 0.25rem;
  height: 1.875rem;
  font-size: 0.75rem;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    background: #44444480;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const CurrentPage = styled(Page)`
  font-size: 1rem;
  background: #1654b099;
  transform: scale(1.15);
  &:hover {
    background: #1654b0;
  }
`;

export const LastPage = styled(Page)`
  margin-left: 0.625rem;
  background: #1184e126;
  &:hover {
    background: #1184e1;
  }
`;

export const FirstPage = styled(LastPage)`
  margin-left: 0;
  margin-right: 0.625rem;
`;
