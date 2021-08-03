import Head from 'next/head';
import HeaderMobile from '../components/HeaderMobile';
import PreHeader from '../components/PreHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PosFooter from '../components/PosFooter';

import Provider from '../components/Provider';

import styles from '../styles/como-pedir.module.css';
import defaultStyle from '../styles/Home.module.css';

import { getCategories } from '../src/api';

export default function ComoPedir({categories}){
  return (
    <div className={defaultStyle.container}>
       <Head>
        <title>Nui | Como pedir</title>
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
        <div className={styles.comoPedir}>
          <img src="/ovelha_negra.svg" />
          <h2>Como pedir</h2>
          <p className={styles.bold}>Ajuda e suporte</p>

          <p>Pra pedir uma camiseta Nui é simples, mas só se você tiver um número no WhatsApp. Isso porque a Nui é uma empresa diferente, e nós queremos conversar com todos os nossos clientes. </p>
          <p>Pra isso, contratamos uma ovelha que atende a todos muito bem! Então você terá a experiência de conversar com a nossa ovelhinha, a Nuile, diretamente no WhatsApp da empresa! O nosso número é (11) 91005-2395, e lá você tem o catálogo das nossas peças, igualzinho aqui no site. Se você não tiver WhatsApp, também atendemos no Instagram e no Twitter (@nuioficial), no e-mail (nuioficial@gmail.com) e no Facebook, é só pesquisar por “É NUI”. </p>
          <p>Pra pedir sua camiseta pelo site, você escolhe seu modelo preferido, seu tamanho e a cor da camiseta, e ao concluir sua compra, você será direcionado para o nosso WhatsApp, onde a nossa ovelha vai concluir o pedido, calcular o frete e informar as formas de pagamento, que atualmente são: pix, link de pagamento no crédito, cartão, dinheiro e transferência bancária. Claro que a forma de pagamento varia de acordo com o local que você estiver, e claro que podemos dar um jeito pra tudo! </p>
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
