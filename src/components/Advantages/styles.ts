import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin: calc(var(--spacement-large) * 2) 0;
  padding: var(--spacement-default);

  @media screen and (max-width: 769px) { 
    flex-direction: column;
    gap: var(--spacement-large);
  }
`;

export const Text = styled.div`
  max-width: 50%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 769px) { 
    max-width: 100%;
  }
`;

export const Icons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: var(--spacement-x-large);

  @media screen and (max-width: 769px) {
    gap: var(--spacement-default);
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  width: 90px;

  & p {
    font-size: 16px !important;
    font-weight: 800 !important;
  }

  @media screen and (max-width: 769px) {
    width: 30%;
    /* flex: 1; */
    margin-bottom: var(--spacement-default);
  }
`;

export const Image = styled.div`
  background: var(--absolute-black);
  height: 60px;
  border-radius: var(--border-radius-small);
  display: grid;
  place-items: center;
`;
