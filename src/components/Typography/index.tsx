import React, { PropsWithChildren } from 'react';

import cc from 'classcat';
import { useDarkMode } from '@/context/DarkMode';

import * as S from './styles';

export type TypographyVariant = 'body-default'
| 'body-custom'
| 'h1-normal'
| 'h1-heavy'
| 'h2-normal'
| 'h3-normal'
| 'h4-normal';

export type TypographyProps = PropsWithChildren<{
  variant?: TypographyVariant;
  as?: string;
  color?: 'light' | 'dark' | 'gray';
  size?: 'small' | 'medium' | 'large';
  holdColor?: boolean;
}>;

export const Typography = ({
  variant,
  children,
  // as,
  color,
  size,
  holdColor,
}: TypographyProps) => {
  const { darkMode } = useDarkMode();
  return (
    <S.Container
      holdColor={holdColor}
      isDarkMode={darkMode}
      // as={"p" as unknown as JSX.IntrinsicElements}
      className={cc([variant, color, size])}
    >
      {children}
    </S.Container>
  );
}
