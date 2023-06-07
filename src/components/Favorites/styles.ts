import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 0;
  z-index: 999;
  padding: 1.25rem;

  background: rgb(0 0 0 / 85%);
  border: solid 1px #2f2f2f;
  border-radius: 2.5rem 0 0 2.5rem;

  h1 {
    font-size: 1rem;
    margin-bottom: 0.875rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 0.625rem;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  transition: all 0.2s ease-in-out;
  border-radius: 50%;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Name = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #66a0d0;
  }
`;
