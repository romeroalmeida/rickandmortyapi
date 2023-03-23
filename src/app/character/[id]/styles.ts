import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.main`
  min-height: calc(100vh - 8.75rem - 22rem);
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  height: 100%;
  position: relative;
  padding: 3rem 0;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Back = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
  &:hover {
    img {
      transform: translateX(-2px);
    }
  }
`;

export const Information = styled.div`
  flex: 1;
  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 2rem;
  }
`;

export const Images = styled.div``;

export const Img = styled(Image)`
  border-radius: 7.5rem 0 7.5rem;
  border: 0.9375rem outset #136cc933;
`;

export const ImgShadow = styled(Image)`
  border-radius: 7.5rem 0 7.5rem;
  border: 0.9375rem outset #136cc933;
  filter: blur(3px);
  position: absolute;
  right: 0;
  opacity: 0.3;
  z-index: -1;
  transform: scale(1.4);
`;
