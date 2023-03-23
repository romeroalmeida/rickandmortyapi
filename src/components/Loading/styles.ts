import styled from 'styled-components';

const primary = '#4285f4';
const secondary = '#1654b0';
const third = '#4285f4';
const fourth = '#fbbc05';
const containerDimentions = '30px';
const shapeDimentions = '10px';
const amount = '16px';

export const WrapperContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
    color: ${primary};
  }
`;

export const Container = styled.div`
  position: relative;
  width: ${containerDimentions};
  height: ${containerDimentions};
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);

  .shape {
    position: absolute;
    width: ${shapeDimentions};
    height: ${shapeDimentions};
    border-radius: 3px;
  }
  .shape.shape-1 {
    left: 0;
    background-color: ${primary};
  }
  .shape.shape-2 {
    right: 0;
    background-color: ${secondary};
  }
  .shape.shape-3 {
    bottom: 0;
    background-color: ${third};
  }
  .shape.shape-4 {
    bottom: 0;
    right: 0;
    background-color: ${fourth};
  }
  .shape-1 {
    -webkit-animation: shape1 0.5s infinite alternate;
    animation: shape1 0.5s infinite alternate;
  }
  .shape-2 {
    -webkit-animation: shape2 0.5s infinite alternate;
    animation: shape2 0.5s infinite alternate;
  }
  .shape-3 {
    -webkit-animation: shape3 0.5s infinite alternate;
    animation: shape3 0.5s infinite alternate;
  }
  .shape-4 {
    -webkit-animation: shape4 0.5s infinite alternate;
    animation: shape4 0.5s infinite alternate;
  }

  @-webkit-keyframes shape1 {
    from {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(${amount}, ${amount});
      transform: translate(${amount}, ${amount});
    }
  }

  @keyframes shape1 {
    from {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(${amount}, ${amount});
      transform: translate(${amount}, ${amount});
    }
  }
  @-webkit-keyframes shape2 {
    from {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(-${amount}, ${amount});
      transform: translate(-${amount}, ${amount});
    }
  }
  @keyframes shape2 {
    from {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(-${amount}, ${amount});
      transform: translate(-${amount}, ${amount});
    }
  }
  @-webkit-keyframes shape3 {
    from {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(${amount}, -${amount});
      transform: translate(${amount}, -${amount});
    }
  }
  @keyframes shape3 {
    from {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(${amount}, -${amount});
      transform: translate(${amount}, -${amount});
    }
  }
  @-webkit-keyframes shape4 {
    from {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(-${amount}, -${amount});
      transform: translate(-${amount}, -${amount});
    }
  }
  @keyframes shape4 {
    from {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(-${amount}, -${amount});
      transform: translate(-${amount}, -${amount});
    }
  }
`;
