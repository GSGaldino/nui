import styled from 'styled-components';

export const Title = styled.div<{ isSecondary: boolean }>`
  text-align: ${({ isSecondary }) => (isSecondary ? 'left' : 'center')};
  margin-bottom: ${({ isSecondary }) => (isSecondary ? 'var(--spacement-large)' : 'var(--spacement-default)')};

  @media screen and (max-width: 769px) {
    display: flex;
    align-items: center;
    gap: var(--spacement-default);
  }
`;

export const Container = styled.section`
  margin-bottom: calc(var(--spacement-x-large) * 2);

  @media screen and (max-width: 769px) {
    padding: var(--spacement-default);
    margin-bottom: var(--spacement-x-large);
  }
`;
