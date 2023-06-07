import React, { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'
import api from '@/services/api'

import { Provider, Typography, Collection } from '@/components'
import { IconButton, Tooltip } from '@chakra-ui/react'
import getProductType from '@/utils/getProductType';

import Main from '@/components/Main';
import Details from '@/components/Details';
import Advantages from '@/components/Advantages';
import SheetService from '@/services/SheetService';

import * as S from '../../styles/productStyles'

export default function Product({ products }: { products: any }) {
  const router = useRouter();
  const { collection, product } = router.query;

  const darkMode = false;
  const prod = products?.find((prod: any) => prod.slug === product);
  const type = getProductType(prod);

  const background = darkMode ? 'var(--absolute-black)' : 'var(--absolute-white)';
  const foreground = darkMode ? 'var(--absolute-white)' : 'var(--absolute-black)';

  const onCartClick = () => {};

  const data = useMemo(() => {
    const filtered = products?.filter((prod: any) => getProductType(prod) === type);
    return filtered;
  }, [type, products]);

  return (
    <Provider>
      <div>

        <S.PreTitle>
          <Tooltip label={collection} placement="top" hasArrow openDelay={500}>
            <Link href={`/${collection}`}>
              <S.CollectionImage alt="" />
            </Link>
          </Tooltip>

          <div>
            <Typography variant="h4-normal">
              {type}
            </Typography>
            <Typography variant="body-custom" size="small">
              Restam
              {' '}
              {prod?.estoque}
            </Typography>
          </div>

          <Tooltip label="Adicionar ao carrinho" placement="top" hasArrow openDelay={500}>
            <IconButton
              colorScheme={darkMode ? 'whiteAlpha' : 'gray'}
              variant={darkMode ? 'ghost' : 'solid'}
              bg={background}
              onClick={onCartClick}
              w="50px"
              p={2.5}
              aria-label=""
            >
              <Image src="/icons/cart.svg" alt="" width={40} height={40} />
              {/* <CartIcon color={foreground} /> */}
            </IconButton>
          </Tooltip>
        </S.PreTitle>

        <Main product={prod} />
        <Advantages type={type} />
        <Details type={type} />
        <Collection
          title={`Mais ${type}s`}
          isSecondary
          description=""
          data={data}
        />

      </div>
    </Provider>
  );
}

export const getStaticProps = async () => {
  const data = await SheetService.getRange('produtos');
  const products = data;

  return {
    props: {
      products,
    },
    revalidate: 2,
  };
}

export const getStaticPaths = async () => {
  const data = await SheetService.getRange('produtos');
  const products = data;
  const collections = products?.reduce((acc: any, prod: any) => {
    const existantCollection = acc.find((item: any) => item.name === prod.categoria);
      if (existantCollection) {
        existantCollection.products.push(prod);
      } else {
        acc.push({
          name: prod.categoria,
          products: [prod]
        })
      }

      return acc;
  }, []);

  const paths: any = [];
  collections?.forEach((collection: any) => {
    collection.products.forEach((product: any) => {
      paths.push(`/${encodeURIComponent(collection.name || '-')}/${encodeURIComponent(product.title)}`)
    })
  });
  return {
    paths: paths,
    fallback: true,
  }
};
