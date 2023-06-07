import styled from 'styled-components';

export const Color = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${({ color }) => color};
  border-radius: 50%;
`;
