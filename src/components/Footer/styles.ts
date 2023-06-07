import styled from 'styled-components';

export const Background = styled.div`
  background: var(--absolute-black);
  padding: var(--spacement-x-large) var(--spacement-default);
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacement-default);

  & > img {
    transition: transform .4s ease-in-out;

    &:hover {
      transform: rotate(360deg);
    }
  }
`;

export const Centered = styled.div`
  text-align: center;
  margin: var(--spacement-default) 0;
`;

export const Buttons = styled.nav`
  display: flex;
  justify-content: center;
  gap:var(--spacement-large);
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background: var(--absolute-white);
    opacity: 0.4;
    position: absolute;
    left: 0;
    bottom: -32px;
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;
    margin: var(--spacement-x-large) 0px;
    gap: var(--spacement-x-large);
    padding: var(--spacement-large);
  }
`;

export const PosFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: calc(var(--spacement-x-large) * 2);

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: var(--spacement-default);

    & > img {
      width: 70px;
    }
  }

  & > div:last-child {
    text-align: right;
  }

  & .social {
    display: flex;
    margin-top: var(--spacement-default);
    gap: var(--spacement-default);
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;

    & > div:last-child {
      text-align: left;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;

      & > .social {
        justify-content: space-around;
        width: 100%;
        margin-block: var(--spacement-x-large);
      }
    }

  }
`;
