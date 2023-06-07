import React from 'react';

import IconButton from '../IconButton';
import { Typography } from '@/components';

import * as S from './styles'

interface ISize {
  size: string,
  setSize: React.Dispatch<React.SetStateAction<string>>,
  sizes: Array<string>
}

function Size({ size, setSize, sizes }: ISize) {
  const darkMode = false;

  // useEffect(() => {
  //   const initialSize = (product?.sizes && (product?.sizes?.[1] || product?.sizes?.[0])) || '';

  //   if (initialSize) {
  //     dispatch(setProperty({
  //       property: 'size',
  //       value: initialSize,
  //     }));
  //   }
  // }, [product]);

  const onChange = (value: string) => {
    setSize(value);
  };

  return (
    <S.Container>
      <Typography as="strong" variant="body-default">Selecione o tamanho</Typography>
      <S.Sizes>
        {sizes?.map((s) => (
          <IconButton
            onClick={() => onChange(s)}
            aria-label=""
            key={s}
            active={size === s}
            >
            {s}
          </IconButton>
        ))}
      </S.Sizes>
    </S.Container>
  );
}

export default Size;
