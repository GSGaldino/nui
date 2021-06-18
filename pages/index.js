import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import HeaderMobile from '../components/HeaderMobile';
import PreHeader from '../components/PreHeader';
import Header from '../components/Header';
import Collection from '../components/Collection';
import Footer from '../components/Footer';
import PosFooter from '../components/PosFooter';

import { getAllProducts, getCategories } from '../src/api';

export default function Home({ products, categories }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Nui | #énui</title>
        <meta name="description" content="Nui oficial" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HeaderMobile />
      <PreHeader />
      <Header />

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
        })),
        categories: categories.map((item, index) => index >= 1 && ({
          [categoriesHeading[0]]: item[0],
          [categoriesHeading[1]]: item[1],
          [categoriesHeading[2]]: item[2],
        })),
      },
      revalidate: 1,
    }

  } catch (error) {
    throw error
  }
}
