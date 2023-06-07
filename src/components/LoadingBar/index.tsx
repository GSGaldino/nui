import React from 'react';

import { LoadingBar } from './styles';

function LoadingBarComponent() {
  const darkMode = false;

  return (
    <LoadingBar isdark={darkMode}>
      <div className="spinner__progress" />
    </LoadingBar>
  );
}

export default LoadingBarComponent;
