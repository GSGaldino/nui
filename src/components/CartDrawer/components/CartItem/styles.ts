import styled from 'styled-components';

export const CartItem = styled.div`
  border: 1px solid rgba(0,0,0,.2);
  border-radius: var(--border-radius-small);
  display: flex;
`;

export const Image = styled.img`
  width: 120px;
  border-top-left-radius: var(--border-radius-small);
  border-bottom-left-radius: var(--border-radius-small);
  object-fit: cover;
`;

export const Description = styled.div`
  flex: 1;

  & .close {
    float: right;
  }

  & p {
    line-height: 18px;
  }
`;

export const DescriptionItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DescriptionItem = styled.div`
  display: flex;
  gap: 6px;
  padding-left: 6px;
  align-items: center;
  margin: 8px 0;
`;

export const Color = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ color }) => color};
  border-radius: var(--border-radius-large);
  border: 1px solid rgba(0,0,0,.6);
`;
