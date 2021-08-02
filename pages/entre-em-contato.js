import Head from 'next/head';
import HeaderMobile from '../components/HeaderMobile';
import PreHeader from '../components/PreHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Provider from '../components/Provider';

import styles from '../styles/entre-em-contato.module.css';
import defaultStyle from '../styles/Home.module.css';

import { getCategories } from '../src/api';

export default function EntreEmContato({categories}){
  return (
    <div className={defaultStyle.container}>
       <Head>
        <title>Nui | Entre em contato</title>
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
        <div className={styles.entreEmContato}>
          <img src="/ovelha_negra.svg" />
          <h2>Entre em contato com a NUI</h2>
          <p className={styles.bold}>Atendimento ao cliente</p>

          <p>Você pode entrar em contato com a Nui pra falar sobre qualquer coisa nas nossas redes sociais, no nosso e-mail ou no nosso WhatsApp. Pode mandar áudio que a gente ouve!</p>
          <p>@nuioficial - Instagram</p>
          <p>@nuioficial - Twitter</p>
          <p>@nuioficial - Facebook</p>
          <p>nuioficial@gmail.com - E-mail</p>
          <p>(11) 91005-2395 - WhatsApp</p>
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
