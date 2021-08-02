import Head from 'next/head';
import HeaderMobile from '../components/HeaderMobile';
import PreHeader from '../components/PreHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Provider from '../components/Provider';

import styles from '../styles/preco-do-envio.module.css';
import defaultStyle from '../styles/Home.module.css';

import { getCategories } from '../src/api';

export default function PredoDoEnvio({categories}){
  return (
    <div className={defaultStyle.container}>
       <Head>
        <title>Nui | Preço do envio</title>
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
        <div className={styles.precoDoEnvio}>
          <img src="/ovelha_negra.svg" />
          <h2>Preço de envio</h2>
          <p className={styles.bold}>Ajuda e suporte</p>

          <p>O preço de envio varia de acordo com o lugar que você está. A Nui está localizada na região centro-oeste de São Paulo, próximo à estação Marechal Deodoro e Barra Funda, mais precisamente na Avenida Pacaembu. Aqui é a nossa casa, então se você quiser conhecer, pode agendar uma visita com a gente, passa aqui pra tomar uma cervejinha e bater um papo!</p>
          <p>Se você estiver próximo, eu pego minha bike e vou até você na hora, totalmente grátis! Se tiver mais longe, mas ainda em SP, podemos ver qual a melhor forma de envio. Hoje em dia, empresas como Uber, 99 e inDriver fazem entregas, a gente pode ver qual a forma mais cômoda.</p>
          <p>Caso você more em outro Estado, a gente envia pelos Correios, só precisamos do seu CEP pra calcularmos o frete. E se você estiver em outro país, a mesma coisa! Fale com a gente, porque não queremos que alguém fique sem uma peça nossa por conta da distância, já que o nosso objetivo é que todos que desejarem, tenham nossas roupas! Pra tudo nessa vida a gente dá um jeito!</p>
          <p>A gente vai embalar sua encomenda bem bonitinha, sabe? Eu aposto que você vai ADORAR a nossa embalagem.</p>
          <p>Entregamos sem custo nenhum caso você faça um pedido de mais de R$500,00.</p>
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
