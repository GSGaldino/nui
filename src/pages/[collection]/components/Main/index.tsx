import React, { memo, useState } from 'react';
import Image from 'next/image'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Magnifier from 'react-magnifier';

import { useMediaQuery } from 'react-responsive';
import { Button } from '@chakra-ui/react';
import { Typography } from '@/components';
import Size from './components/Size';
import Color from './components/Color';
import PaymentMethod from './components/PaymentMethod';
import paymentMethods from '@/constants/paymentMethods.json';
import mountMessage from '@/utils/mountMessage'

import * as S from './styles';

function Main({ product }: { product: any }) {
  const sizes = product.tamanhos_disponiveis?.split(',');
  const [size, setSize] = useState(sizes[1]);

  console.log('PrODUCT', product);
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].value);

  const darkMode = false;
  const isMobile = useMediaQuery({ maxWidth: '769px' });

  // const { thumbnailUrl } = useSelector((state) => state.budget);

  const onClick = () => {
    const phone = '5511910052395';
      const message = mountMessage({
        type: product.tipo_produto,
        name: product.nome,
        size,
        color: '',
        paymentMethod,
      });

      const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

      window.open(url, '_blank');
  }
  return (
    <S.Main>
      <S.Image>
        {isMobile && (
          <Typography variant="h1-normal">{product?.nome}</Typography>
        )}
        <Magnifier
          // width={240}
          src={product?.foto_1}
        />
      </S.Image>

      <S.Content>
        <S.Title>
          {!isMobile && (
            <>
              <Typography variant="h1-normal">{product?.nome}</Typography>
              <Typography variant="body-default" as="div">
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: product?.descricao_curta,
                  }}
                />
              </Typography>
            </>
          )}
        </S.Title>

        <Color />

        {isMobile && (
          <Typography variant="body-default" as="div">
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: product?.descricao_curta,
              }}
            />
          </Typography>
        )}

        <Size setSize={setSize} size={size} sizes={sizes} />
        <PaymentMethod
          setPaymentMethod={setPaymentMethod}
          selectedPaymentMethod={paymentMethod}
          paymentMethods={paymentMethods}
          price={product?.preco}
        />

        <S.Buttons>
          <Button
            size="lg"
            leftIcon={<Image width={20} height={20} src="/icons/whatsapp.svg" alt="" />}
            colorScheme="green"
            variant="solid"
            borderRadius="var(--border-radius-small)"
            onClick={onClick}
          >
            COMPRAR AGORA
          </Button>
          <Button
            size="lg"
            variant="outline"
            colorScheme={darkMode ? 'whiteAlpha' : 'blackAlpha'}
            borderRadius="var(--border-radius-small)"
            onClick={() => window.history.back()}
          >
            VOLTAR
          </Button>
        </S.Buttons>
      </S.Content>
    </S.Main>
  );
}

Main.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    nome: PropTypes.string,
    descricao_curta: PropTypes.string,
    preco: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    photos: PropTypes.arrayOf(PropTypes.string),
    slug: PropTypes.string,
  }).isRequired,
};

export default memo(Main);
