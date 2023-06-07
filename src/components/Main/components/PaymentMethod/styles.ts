import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacement-default);
`;

export const Methods = styled.div`
  display: flex;
  gap: var(--spacement-default);
`;

export const Price = styled.div`
  display: flex;
  align-items: center;

  & > p {
    font-size: 18px;
    font-weight: 800;
    margin-left: var(--spacement-default);
  }
`;
