import styled, { css } from 'styled-components';
import { TypographyProps } from './index';

const BodyDefault = css`
  font-family: var(--font-family);
  font-size: var(--body-default-font-size);
`;

const BodyCustom = css`
  &.body-custom {
    font-family: "Ink Free", sans-serif;
    font-size: 22px;
    font-weight: 500;
  }
`;

const h1Normal = css`
  &.h1-normal {
    font-size: 3em;
    font-family: "KorolevMilitaryStencil", sans-serif;
    line-height: 2rem;
    text-transform: uppercase;

    @media screen and (max-width: 769px) {
      line-height: 1em;
    }
  }
`;

const h1Heavy = css`
  &.h1-heavy {
    font-size: 3em;
    font-weight: bold;
    line-height: 28px;
  }
`;

const h2Normal = css`
  &.h2-normal {
    font-size: 1.8em;
    font-family: "KorolevMilitaryStencil", sans-serif;
    text-transform: uppercase;
  }
`;

const h2Heavy = css`
  &.h2-heavy {
    font-size: 1.8em;
    font-weight: bold;
  }
`;

const h3Normal = css`
  &.h3-normal {
    font-size: 1.6em;
    font-family: "KorolevMilitaryStencil", sans-serif;
    text-transform: uppercase;
  }
`;

const h3Heavy = css`
  &.h3-heavy {
    font-size: 1.6em;
    font-weight: bold;
  }
`;

const h4Normal = css`
  &.h4-normal {
    font-size: 1.2em;
    font-family: "KorolevMilitaryStencil", sans-serif;
    text-transform: uppercase;
  }
`;

export const Container = styled.div.attrs((props: TypographyProps) => ({
  as: props.as,
}))<TypographyProps & { isDarkMode: boolean }>`
  display: block;

  &.dark {
    color: ${({ isDarkMode, holdColor }) => ((isDarkMode && !holdColor)
    ? 'var(--absolute-white)'
    : 'var(--absolute-black)')};
  }

  &.light {
    color: ${({ isDarkMode, holdColor }) => ((isDarkMode && !holdColor)
    ? 'var(--absolute-black)'
    : 'var(--absolute-white)')};
  }

  &.gray {
    color: var(--light-gray);
  }

  &.small {
    font-size: 14px !important;
    font-weight: 600 !important;
  }

  ${BodyDefault}
  ${BodyCustom}
  ${h1Normal}
  ${h1Heavy}
  ${h2Normal}
  ${h2Heavy}
  ${h3Normal}
  ${h3Heavy}
  ${h4Normal}
`;
