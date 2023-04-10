import styled from 'styled-components';
export const Container = styled.div`
  position: relative;
  cursor: pointer;

  button {
    background: transparent;
    color: #fff;
    border: 0;
    padding: 0;
    padding-left: 20px;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
`;

type PropsHeart = {
  isFavorite?: boolean;
};

export const Heart = styled.div<PropsHeart>`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-image: url('https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png');
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    background-position: right center;
  }
  ${(props) => props.isFavorite && `animation: like 1s steps(28) forwards;`}

  @keyframes like {
    from {
      background-position: left center;
    }
    to {
      background-position: right center;
    }
  }
`;
