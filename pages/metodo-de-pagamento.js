import Head from 'next/head';
import HeaderMobile from '../components/HeaderMobile';
import PreHeader from '../components/PreHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PosFooter from '../components/PosFooter';

import Provider from '../components/Provider';

import styles from '../styles/metodo-de-pagamento.module.css';
import defaultStyle from '../styles/Home.module.css';

import { getCategories } from '../src/api';

export default function MetodoDePagamento({categories}){
  return (
    <div className={defaultStyle.container}>
       <Head>
        <title>Nui | Método de pagamento</title>
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
        <div className={styles.metodoDePagamento}>
          <img src="/ovelha_negra.svg" />
          <h2>Método de pagamento</h2>
          <p className={styles.bold}>Atendimento ao cliente</p>

          <p>Hoje aceitamos PIX, Transferência Bancária, Boleto Bancário e Link de pagamento no crédito. Isso se você for fazer o pagamento à distância.</p>
          <p>Caso você esteja na nossa frente, aceitamos dinheiro e cartão de débito ou crédito.</p>
          <p>Dependendo do método, pode ser que tenha alguma taxa, por isso a gente prefere que seja feito no PIX, que é totalmente grátis!</p>
        </div>
      </Provider>

      <Footer />
      <PosFooter />
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
