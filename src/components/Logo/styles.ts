import styled from 'styled-components';
import { LogoProps } from './index';

export const Logo = styled.div<LogoProps>`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;

  & img {
    max-width: 70%;
  }

  & svg {
    max-width: 70%;
    fill: ${({ light }) => (light ? 'var(--absolute-white)' : 'var(--absolute-black)')};
  }
`;
