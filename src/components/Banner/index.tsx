import React from 'react'
import Link from 'next/link'

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SkeletonCircle } from '@chakra-ui/react'
import { IBannerItem } from '@/types'

import * as S from './styles';
import 'swiper/css/autoplay';
import 'swiper/css';

export const Banner = ({ banner }: { banner: IBannerItem[] }): JSX.Element => {

  return (
    <S.Container>
      {
        banner.length
          ? (
            <Swiper
              loop
              autoplay={{ delay: 5000 }}
              centeredSlides
              slidesPerView="auto"
              modules={[Autoplay]}
              style={{
                width: '100%',
              }}
            >
              {banner.map((item) => (
                <SwiperSlide
                  key={item.url}
                  style={{
                    width: '70%',
                  }}
                >
                  <Link href={item.link ? item.link : '#'}>
                    <S.Image>
                      <img src={item.url} alt="" />
                    </S.Image>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )
          : (
            <SkeletonCircle
              borderRadius="var(--borderRadius)"
              isLoaded={false}
              w="100%"
              height="334px"
              maxWidth="var(--max-width)"
            />
          )
      }
    </S.Container>
  );
}
