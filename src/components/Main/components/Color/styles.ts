import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacement-default);
  
  @media screen and (max-width: 769px) {
    align-items: center;
    margin-bottom: var(--spacement-large);
  }
`;

export const Colors = styled.div`
  display: flex;
  gap: var(--spacement-default);
`;
