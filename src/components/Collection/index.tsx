import React from 'react';
import PropTypes from 'prop-types';

import { SkeletonCircle } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography, TypographyVariant } from '../Typography';
import Card from '../Card';

import 'swiper/css';

import * as S from './styles';

interface ICollectionProps {
  title: string;
  description: string;
  data: Array<any>;
  id: string;
  isSecondary: boolean;
}

function Collection({
  title,
  description,
  data,
  id,
  isSecondary,
}: ICollectionProps) {
  const isMobile = useMediaQuery({ maxWidth: 769 });

  const getVariant = (): TypographyVariant => {
    let variant = 'h1-normal';

    if (isMobile) {
      variant = 'h2-normal';
    }

    if (isSecondary && !isMobile) {
      variant = 'h3-normal';
    }

    return variant as TypographyVariant;
  };

  return (
    <S.Container id={id}>
      <SkeletonCircle
        borderRadius="var(--borderRadius)"
        h="100%"
        w="100%"
        margin="auto"
        isLoaded={!!data.length}
      >
        <S.Title isSecondary={isSecondary}>
          <Typography variant={getVariant()}>{title}</Typography>
          <Typography variant="body-custom">{description}</Typography>
        </S.Title>

        <Swiper slidesPerView={isMobile ? 2 : 4}>
          {data && data.map((item) => (
            item.categoria && (
              <SwiperSlide key={item.id}>
                <Card
                  key={item.id}
                  nome={item.nome}
                  preco={item.preco}
                  img={item.foto_1}
                  slug={item.slug}
                  collection={item.categoria}
                  estoque={item.estoque}
                />
              </SwiperSlide>
            )
          ))}
        </Swiper>
      </SkeletonCircle>
    </S.Container>
  );
}

Collection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
  })),
  isSecondary: PropTypes.bool,
};

Collection.defaultProps = {
  title: '',
  description: '',
  id: '',
  data: [],
  isSecondary: false,
};

export { Collection };
