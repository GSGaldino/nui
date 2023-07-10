import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

import { useRouter } from 'next/router'

import { Provider, Typography, Collection, IconButton } from '@/components'
import { Tooltip } from '@chakra-ui/react'
import getProductType from '@/utils/getProductType';

import Main from '@/components/Main';
import Details from '@/components/Details';
import Advantages from '@/components/Advantages';
import SheetService from '@/services/SheetService';
import { addItem } from '@/store/modules/cart/slice'

import * as S from '../../styles/productStyles'

export default function Product({ products }: { products: any }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const { collection, product } = router.query

  const darkMode = false;
  const prod = products?.find((prod: any) => prod.slug === product)
  const type = getProductType(prod)

  const background = darkMode ? 'var(--absolute-black)' : 'var(--absolute-white)'
  const foreground = darkMode ? 'var(--absolute-white)' : 'var(--absolute-black)'

  const onCartClick = () => dispatch(addItem(prod));

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
            <IconButton icon="/icons/cart.svg" onClick={onCartClick} />
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
