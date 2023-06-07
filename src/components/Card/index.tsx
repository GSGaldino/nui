import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { Button } from '@chakra-ui/react';
import { Typography } from '../Typography';

import * as S from './styles';

interface ICardProps {
  nome: string;
  preco: string;
  img: string;
  slug: string;
  collection: string;
  estoque: string;
}

function Card({
  nome,
  preco,
  img,
  slug,
  collection,
  estoque,
}: ICardProps) {
  return (
    <Link href={`/${collection}/${slug}`}>
      <S.Card>
        <S.Image>
          <img src={img} alt="" />
        </S.Image>

        <S.Text>
          <Typography as="strong">{nome}</Typography>
          <Typography as="strong" color="gray">{preco}</Typography>
          <Typography size="small" variant="body-custom">
            <>
              Restam
              {' '}
              {estoque}
            </>
          </Typography>
          <Button
            width="100%"
            colorScheme="green"
            variant="solid"
            borderRadius="var(--border-radius-small)"
          >
            EU QUERO!
          </Button>
        </S.Text>
      </S.Card>
    </Link>
  );
}

Card.propTypes = {
  nome: PropTypes.string,
  preco: PropTypes.string,
  img: PropTypes.string,
  slug: PropTypes.string,
  collection: PropTypes.string,
  estoque: PropTypes.string,
};

Card.defaultProps = {
  nome: '',
  preco: '',
  img: '',
  slug: '',
  collection: '',
  estoque: '',
};

export default Card;
