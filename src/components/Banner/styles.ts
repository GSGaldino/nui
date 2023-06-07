import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: var(--spacement-default) 0;
  display: grid;
  place-items: center;
  padding: var(--spacement-default);
  min-height: 334px;

  @media screen and (max-width: 769px) {
    height: auto;
    min-height: auto;
    margin: var(--spacement-default) 0;
  }
`;

export const Image = styled.div`
  width: 94%;
  margin: 0 auto;

  & > img {
    border-radius: var(--border-radius);
  }

  @media screen and (max-width: 769px) {
    height: 180px;

    & > img {
      object-fit: cover !important;
      height: 100%;
    }
  }
`;
