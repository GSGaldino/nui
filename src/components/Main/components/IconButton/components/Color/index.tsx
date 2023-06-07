import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Color({ color }: any) {
  return (
    <S.Color color={color} />
  );
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Color;
