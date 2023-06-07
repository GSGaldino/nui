import React from 'react';

import { useDarkMode } from '~/context/DarkMode';
import { LoadingBar } from './styles';

function LoadingBarComponent() {
  const { darkMode } = useDarkMode();

  return (
    <LoadingBar>
      <div isdark={darkMode ? true : undefined} className="spinner__progress" />
    </LoadingBar>
  );
}

export default LoadingBarComponent;
