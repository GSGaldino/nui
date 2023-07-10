import React from 'react';

import { CloseButton } from '@chakra-ui/react'
import { Typography } from '@/components'
import colors from '@/constants/colors.json'
import * as S from './styles';

interface Colors {
  [key: string]: string;
}

export interface CartItem {
  name: string;
  size: string;
  color: string;
  paymentMethod?: string;
  type?: string;
  thumbnailUrl: string;
}

interface CartItemProps {
  item: CartItem;
  onDelete: () => void;
}

export const CartItem = ({ item, onDelete }: CartItemProps) => {
  const {
    name,
    size,
    color,
    thumbnailUrl,
  } = item;

  return (
    <S.CartItem>
      <S.Image src={thumbnailUrl} alt={name} />
      <S.Description>
        <CloseButton
          borderRadius="var(--border-radius-small)"
          onClick={onDelete}
          className="close"
        />
        <S.DescriptionItems>
          <S.DescriptionItem>
            <Typography holdColor>{name}</Typography>
          </S.DescriptionItem>
          <S.DescriptionItem>
            <Typography holdColor as="strong">Tamanho: </Typography>
            <Typography holdColor>{size}</Typography>
          </S.DescriptionItem>
          <S.DescriptionItem>
            <Typography holdColor as="strong">Cor: </Typography>
            <Typography holdColor>{(colors as Colors)[color]}</Typography>
            <S.Color color={color} />
          </S.DescriptionItem>
        </S.DescriptionItems>
      </S.Description>
    </S.CartItem>
  );
}
