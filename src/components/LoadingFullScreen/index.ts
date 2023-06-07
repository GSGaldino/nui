import React from 'react';
import { Spinner } from '@chakra-ui/react';

import * as S from './styles';

function LoadingFullScreen() {
  return (
    <S.Background>
      <Spinner color="black" />
    </S.Background>
  );
}

export default LoadingFullScreen;
