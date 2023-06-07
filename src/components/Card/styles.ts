import styled from 'styled-components';

export const Image = styled.div`
  width: 100%;
  height: 240px;
  border-radius: var(--border-radius);
  overflow: hidden;
  object-fit: cover;

  & > img {
    transition: transform 0.4s ease-in-out;
  }

  @media screen and (max-width: 769px) {
    height: auto;
  }
`;

export const Text = styled.div`
  padding: var(--spacement-default);

  & > button {
    margin-top: var(--spacement-default);
  }
`;

export const Card = styled.div`
  text-align: center;
  width: 240px;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover {
    ${Image} img {
      transform: scale(1.05);
    }
  }

  @media screen and (max-width: 769px) {
    width: 98%;
    margin-right: var(--spacement-default);
  }
`;
