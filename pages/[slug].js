import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import HeaderMobile from '../components/HeaderMobile';
import PreHeader from '../components/PreHeader';
import Header from '../components/Header';
import Product from '../components/Product';
import Collection from '../components/Collection';
import Footer from '../components/Footer';
import PosFooter from '../components/PosFooter';

import { getAllProducts, getCategories } from '../src/api';

export default function ProductPage({ products, categories }) {
  const { slug } = useRouter().query;
  const shirt = products.filter(item => item.slug === slug)[0];

  return (
    <div className={styles.container}>
      <Head>
        <title>Nui | {shirt && shirt.nome}</title>
        <meta name="description" content="Nui oficial" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:site_name" content="Nui oficial" />
        <meta property="og:title" content="Nui | #énui" />
        <meta property="og:description" content="Site oficial de nui." />
        <meta property="og:image" itemprop="image" content="/logo.svg" />
        <meta property="og:type" content="website" />
      </Head>

      <HeaderMobile 
        data={categories && categories}
      />
      <PreHeader />
      <Header 
        data={categories && categories}
      />

      <Product shirt={shirt && shirt} />

      {categories && categories.map(item => item && (
        <Collection
          key={item.categoria}
          title={item.categoria}
          description={item.descricao}
          background_url={item.background_url}
          shirts={products.filter(shirt => shirt.categoria === item.categoria)}
        />
      ))}

      <Footer />
      <PosFooter />

    </div>
  )
}

export async function getStaticPaths() {
  const response = await getAllProducts();
  const heading = response[0];

  const products = response.map((item, index) => index >= 1 && ({
    [heading[0]]: item[0],
    [heading[1]]: item[1],
    [heading[2]]: item[2],
    [heading[3]]: item[3],
    [heading[4]]: item[4],
    [heading[5]]: item[5],
    [heading[6]]: item[6],
    [heading[7]]: item[7],
    [heading[8]]: item[8],
    [heading[9]]: item[9],
    [heading[10]]: item[10],
    [heading[11]]: item[11],
    [heading[12]]: item[12],
    [heading[13]]: item[13],
  }));

  // Get the paths we want to pre-render based on products
  const paths = products.map((product, index) => index >= 1 && ({
    params: { slug: product.slug }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths: paths.filter(item => item !== false), fallback: 'blocking' }
}

export const getStaticProps = async () => {
  try {
    const categories = await getCategories();
    const categoriesHeading = categories[0];

    const products = await getAllProducts();
    const heading = products[0];

    return {
      props: {
        products: products.map((item, index) => index >= 1 && ({
          [heading[0]]: item[0],
          [heading[1]]: item[1],
          [heading[2]]: item[2],
          [heading[3]]: item[3],
          [heading[4]]: item[4],
          [heading[5]]: item[5],
          [heading[6]]: item[6],
          [heading[7]]: item[7],
          [heading[8]]: item[8],
          [heading[9]]: item[9],
          [heading[10]]: item[10],
          [heading[11]]: item[11],
          [heading[12]]: item[12],
          [heading[13]]: item[13]
        })),
        categories: categories.map((item, index) => index >= 1 && ({
          [categoriesHeading[0]]: item[0],
          [categoriesHeading[1]]: item[1],
          [categoriesHeading[2]]: item[2],
          [categoriesHeading[3]]: item[3],
        })),
      },
      revalidate: 1,
    }

  } catch (error) {
    throw error
  }
}
