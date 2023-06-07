import styled from 'styled-components';

export const Main = styled.section`
  display: flex;

  @media screen and (max-width: 769px) {
    flex-direction: column; 
  }
`;

export const Image = styled.div`
  width: 50%;
  overflow: hidden;
  padding: var(--spacement-default);
  
  & img {
    border-radius: var(--border-radius);
    max-width: 100%;
  }

  @media screen and (max-width: 769px) { 
    width: 100%;

    & .h1-normal {
      margin-bottom: var(--spacement-large);
    }
  }
`;

export const Content = styled.div`
  width: 50%;
  padding: var(--spacement-default) var(--spacement-x-large);

  @media screen and (max-width: 769px) { 
    width: 100%;
    padding: 0 var(--spacement-default);
  }
`;

export const Title = styled.div`
  margin-bottom: var(--spacement-large);
  display: flex;
  flex-direction: column;
  gap: var(--spacement-default);
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacement-default);
  margin-top: calc(var(--spacement-large) * 2);
  width: 70%;

  & > button {
    padding: var(--spacement-x-large);
  }

  @media screen and (max-width: 769px) { 
    width: 100%;
  }
`;
