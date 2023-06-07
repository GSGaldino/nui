import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { setProperty } from '~/store/modules/budget/slice';
import IconButton from '../IconButton';
import { Typography } from '@/components';

import * as S from './styles';

function Color() {
  const dispatch = useDispatch();

  // const { product } = useSelector((state) => state.products);
  // const { color } = useSelector((state) => state.budget);

  // const setThumbnail = (hex: any) => {
  //   const index = product.colors.indexOf(hex);
  //   const thumbnail = product[`foto_${index + 1}`][0];

  //   dispatch(setProperty({
  //     property: 'thumbnailUrl',
  //     value: thumbnail || product.foto_1[0],
  //   }));
  // };

  // useEffect(() => {
  //   const initial = (product?.colors && (product?.colors?.[1] || product?.colors?.[0])) || '';

  //   if (initial) {
  //     setThumbnail(initial);
  //     dispatch(setProperty({
  //       property: 'color',
  //       value: initial,
  //     }));
  //   }
  // }, [product]);

  // const onChange = (value) => {
  //   setThumbnail(value);
  //   dispatch(setProperty({
  //     property: 'color',
  //     value,
  //   }));
  // };

  return (
    <S.Container>
      <Typography as="strong" variant="body-default">Selecione a cor</Typography>
      <S.Colors>
        {/* {product?.colors?.map((hex) => (
          <IconButton
            rounded
            key={hex}
            hex={hex}
            active={hex === color}
            // onClick={() => onChange(hex)}
          />
        ))} */}
      </S.Colors>
    </S.Container>
  );
}

export default Color;
