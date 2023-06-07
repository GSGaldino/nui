import { useMemo } from 'react';
import Head from 'next/head'
import { Provider, Collection, Banner } from '@/components'
import { IProduct } from '@/types'
import api from '@/services/api'

import * as S from './styles'

interface HomeProps { products: IProduct[], banner: any };

export default function Home({ products, banner }: HomeProps) {
  const collections = useMemo(() => {
    return products?.reduce((acc: any, prod: any) => {
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
    }, [])
  }, [products]);

  const releases = products?.slice(20, products.length).reverse();

  return (
    <>
      <Head>
        <title>Nui | #énui</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider>
        <Banner banner={banner} />
        <S.Section>
          <Collection title="Lançamentos" data={releases} />
          {collections.map((collection: any) => collection.name !== '-' && (
            <Collection key={collection.name} title={collection.name} data={collection.products} />
          ))}
        </S.Section>
      </Provider>
    </>
  )
}

export const getStaticProps = async () => {
  const [products, banner] = await Promise.all(['produtos', 'banner_site'].map(async (item) => {
    const url = `/sheets?range=${item}`
    const { data } = await api.get(url)
    return data.data
  }))

  return {
    props: {
      products,
      banner,
    },
    revalidate: 2,
  };
}
