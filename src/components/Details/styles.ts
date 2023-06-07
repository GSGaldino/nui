import styled from 'styled-components';

interface IContainerProps {
  hasMeasurement: boolean;
}

export const Container = styled.section<IContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: ${({ hasMeasurement }) => (hasMeasurement ? 'flex-start' : 'center')};
  gap: var(--spacement-large);
  margin-bottom: var(--spacement-large);
  padding: var(--spacement-default);

  & > div {
    width: 50%;
  }

  @media screen and (max-width: 769px) {
    & > div {
      width: 100%;
    }

    flex-direction: column;
  }
`;

export const Panel = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacement-default);

  & > div {
    &:first-child {
      width: 70%;
      position: relative;
      background: var(--absolute-white);
      padding: var(--spacement-default);
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: var(--border-radius);
      display: flex;
      flex-direction: column;
      gap: var(--spacement-small);
    }

    &:last-child {
      display: grid;
      place-items: center;
      width: 30%;
      padding: var(--spacement-default);

      & > img {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 769px) {
    & > div {
      &:first-child {
        width: 100%;
      }

      &:last-child {
        display: none;
      }
    }
  }
`;

export const History = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacement-default);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: var(--spacement-large);
  border-radius: var(--border-radius);
`;

export const ExclusiveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  margin-top: var(--spacement-large);

  & > img {
    width: 500px;
  }

  @media screen and (max-width: 769px) {
    flex-direction: column-reverse;
    gap: var(--spacement-default);
    text-align: center;

    & > img {
      width: 200px;
    }
  }
`;
