import styled from 'styled-components';

type ContainerProps = {
  bgImage?: string;
};

export const ImageMain = styled.div<ContainerProps>`
  ${({ bgImage }) =>
    bgImage &&
    `background: url(${bgImage}) center no-repeat;
  `}
  background-size: cover;
  width: 100%;
  height: 10.75rem;
  border-radius: 0 3.75rem;
  transition: all ease 0.2s;
`;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #fff no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  transition: all ease 0.2s;

  background: rgb(23 25 30 / 95%);
  border: solid 0.625rem rgb(255 255 255 / 1%);
  cursor: pointer;
`;

export const Name = styled.p`
  font-size: 1rem;
  color: #fff;
`;

type StatusProps = {
  status: string | undefined;
};
export const Status = styled.p<StatusProps>`
  font-size: 0.875rem;
  font-style: italic;
  ${({ status }) => status === 'Alive' && 'color: #5bdd83'}
  ${({ status }) => status === 'Dead' && 'color: #e16464'}
`;

export const Info = styled.div`
  width: 100%;
  padding: 0.3125rem;
  margin-top: auto;
`;
