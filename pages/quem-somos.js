import Head from 'next/head';
import HeaderMobile from '../components/HeaderMobile';
import PreHeader from '../components/PreHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Provider from '../components/Provider';

import styles from '../styles/quem-somos.module.css';
import defaultStyle from '../styles/Home.module.css';

import { getCategories } from '../src/api';

export default function QuemSomos({categories}){
  return (
    <div className={defaultStyle.container}>
       <Head>
        <title>Nui | Quem somos</title>
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
        <div className={styles.quemSomos}>
          <img src="/ovelha_negra.svg" />
          <h2>Quem somos nui</h2>
          <p className={styles.bold}>Informações da empresa</p>

          <p>A Nui é uma marca iniciante no mercado, atualmente com o total de 02 funcionários (e sócios), por isso tenham paciência com a gente! Apesar desse número tão pequeno de pessoas que trabalham todos os dias para o funcionamento dessa empresa, todos os dias temos mais pessoas que fazem parte dessa história. A Nui nasceu de uma brincadeira, e hoje é essa realidade que vocês estão vendo. Temos parceiros que nos ajudam com a confecção das nossas peças, costureiras, modelistas, gráficas, estamparias, desenvolvedores, e claro, nossos clientes queridos! Por isso a Nui é muito mais que esses 02 funcionários.</p>
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
