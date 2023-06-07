import React, { forwardRef, PropsWithChildren } from 'react';

import * as S from './styles';

export const Provider = forwardRef<HTMLElement, PropsWithChildren>((props, ref) => {
  return (
    <S.Provider ref={ref}>{props.children}</S.Provider>
  );
});
