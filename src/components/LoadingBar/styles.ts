import styled from 'styled-components';

const easeInCubic = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
const easeOutCubic = 'cubic-bezier(0.215, 0.61, 0.355, 1)';

export const LoadingBar = styled.div`
  background: ${({ isdark }) => (isdark ? 'var(--absolute-black)' : 'var(--absolute-white)')};
  position: fixed;
  left: 0;
  top: 0;
  height: 4px;
  width: 100%;

  z-index: 12;

  .spinner__progress {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${({ isdark }) => (isdark ? 'var(--absolute-white)' : 'var(--absolute-black)')};

    animation-name: animate;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes animate {
    0% {
      transform-origin: left center;
      transform: scaleX(0) translateX(0);
      animation-timing-function: ${easeInCubic};
    }

    50% {
      transform-origin: left center;
      transform: scaleX(0.5) translateX(50%);
      animation-timing-function: ${easeInCubic};
    }

    51% {
      transform-origin: right center;
      transform: scaleX(0.51) translateX(-50%);
      animation-timing-function: ${easeOutCubic};
    }

    100% {
      transform-origin: right center;
      transform: scaleX(0) translateX(0);
    }
  }
`;
