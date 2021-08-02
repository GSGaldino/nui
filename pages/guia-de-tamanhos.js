import Head from 'next/head';
import HeaderMobile from '../components/HeaderMobile';
import PreHeader from '../components/PreHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Provider from '../components/Provider';

import styles from '../styles/guia-de-tamanhos.module.css';
import defaultStyle from '../styles/Home.module.css';

import { getCategories } from '../src/api';

export default function GuiaDeTamanhos({categories}){
  return (
    <div className={defaultStyle.container}>
       <Head>
        <title>Nui | Guia de tamanhos</title>
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

      <Provider>
        <div className={styles.guiaDeTamanhos}>
          <img src="/ovelha_negra.svg" />
          <h2>Guia de tamanhos</h2>
          <p className={styles.bold}>Ajuda e suporte</p>

          <p>Abaixo você pode observar nossa tabela de medidas.</p>
          <img src="tabela-de-medidas.png" className={styles.tabelaDeMedidas}/>
          <p>Esses valores são de acordo com nossas camisetas básicas. Ainda não temos os tamanhos PP e GG, mas estamos trabalhando pra confeccioná-las o mais rápido possível!</p>
        </div>
      </Provider>

      <Footer />
    </div>
  )    
}

export const getStaticProps = async () => {
  try {
    const categories = await getCategories();
    const categoriesHeading = categories && categories[0];

    return {
      props: {
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
