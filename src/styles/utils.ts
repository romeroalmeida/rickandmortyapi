import styled from 'styled-components';

export const CenterPage = styled.div`
  position: relative;
  width: 94%;
  max-width: var(--max-width);
  margin: auto;
`;

export const ListCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  gap: 2px;
  min-height: 515px;
  &:hover > :not(:hover) {
    opacity: 0.7;
    filter: grayscale(1) blur(2px);
  }
`;
