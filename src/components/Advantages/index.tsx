import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@/components';

import * as S from './styles';

interface IAdvantages {
  type: any;
}

function Advantages({ type }: IAdvantages) {
  const icons = [
    {
      icon: '/icons/algodao.svg',
      label: '100% algodão 30.1 penteado',
      displayOn: ['camiseta', 'cropped'],
    },
    {
      icon: '/icons/tshirt.svg',
      label: 'Impressão DTG',
      displayOn: ['camiseta', 'cropped'],
    },
    {
      icon: '/icons/brasil.svg',
      label: '100% nacional',
      displayOn: ['camiseta', 'cropped', 'quadro', 'caneca'],
    },
    {
      icon: '/icons/strong.svg',
      label: 'Resistente',
      displayOn: ['camiseta', 'cropped', 'quadro', 'caneca'],
    },
    {
      icon: '/icons/frete.svg',
      label: 'Frete grátis para o Brasil',
      displayOn: ['camiseta', 'cropped', 'quadro', 'caneca'],
    },
  ];

  return (
    <S.Container>
      <S.Text>
        <Typography variant="h4-normal">Quando você compra uma peça da nossa marca, está fazendo parte da nossa história. São todas limitadas.</Typography>
      </S.Text>

      <S.Icons>
        {icons.map(({ icon, label, displayOn }) => {
          const display = displayOn.includes(type);

          return display && (
            <S.Icon key={label}>
              <S.Image>
                <img src={icon} alt={label} />
              </S.Image>
              <Typography variant="body-custom">{label}</Typography>
            </S.Icon>
          );
        })}
      </S.Icons>
    </S.Container>
  );
}

Advantages.propTypes = {
  type: PropTypes.string,
};

Advantages.defaultProps = {
  type: '',
};

export default memo(Advantages);
