import styled from 'styled-components';

export const PreTitle = styled.div`
  width: 50%;
  text-align: center;
  margin-top: var(--spacement-default);
  display: flex;
  justify-content: space-between;
  
  & > p {
    line-height: 20px !important;
  }

  @media screen and (max-width: 769px) { 
    width: 100%;
    padding: var(--spacement-default);
  }
`;

export const CollectionImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: var(--spacement-default);

  @media screen and (max-width: 769px) {
    margin-left: 0px;
  }
`;
