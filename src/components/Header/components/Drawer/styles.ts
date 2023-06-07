import styled from 'styled-components';

export const HamburgerIcon = styled.div`
  display: none !important;

  @media screen and (max-width: 769px) {
    display: block !important;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacement-default)
`;

export const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacement-large);
  margin-top: var(--spacement-x-large);
`;
