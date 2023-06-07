import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:first-child {
    padding-top: 6px;
  }

  & > div:not(first-child) {
    display: flex;
    gap: var(--spacement-default);

    & svg {
      width: 40px;
      height: 40px;
      padding: 4px;
      border-radius: var(--border-radius);
      cursor: pointer;
    }

  }

  @media screen and (max-width: 769px) {
    padding-inline: var(--spacement-default);

    & div:is(:nth-child(2), :nth-child(3)) {
      display: none
    }
  }
`;

export const Container = styled.div`
  padding: var(--spacement-default) 0px;
`;
