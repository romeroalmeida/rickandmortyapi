import styled from 'styled-components';

export const CenterPage = styled.div`
  width: 94%;
  max-width: var(--max-width);
  margin: auto;
`;

export const ListCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  gap: 2px;

  &:hover > :not(:hover) {
    opacity: 0.7;
    filter: grayscale(1) blur(2px);
  }
`;
