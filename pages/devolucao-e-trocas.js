import Head from 'next/head';
import HeaderMobile from '../components/HeaderMobile';
import PreHeader from '../components/PreHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PosFooter from '../components/PosFooter';

import Provider from '../components/Provider';

import styles from '../styles/devolucao-e-trocas.module.css';
import defaultStyle from '../styles/Home.module.css';

import { getCategories } from '../src/api';

export default function DevolucaoETrocas({categories}){
  return (
    <div className={defaultStyle.container}>
       <Head>
        <title>Nui | Devolução e trocas</title>
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
        <div className={styles.devolucaoETrocas}>
          <img src="/ovelha_negra.svg" />
          <h2>Devolução e trocas</h2>
          <p className={styles.bold}>Ajuda e suporte</p>

          <p>A partir do recebimento do pedido, o cliente poderá solicitar a troca ou a devolução do produto via e-mail (nuioficial@gmail.com) em até 7 (sete) dias corridos.</p>
          <p>Para o encaminhamento, o produto deverá estar com a nota fiscal e etiqueta, sem isso o produto não será aceito. Também informamos que não haverá coleta na residência, portanto a postagem deverá ser realizada diretamente nas agências dos Correios, para o endereço do remetente contido na nota fiscal do produto. O prazo de despache para nosso endereço é de 7 (sete) dias úteis após a solicitação da troca. Para a solicitação da troca, o cliente deverá entrar em contato conosco via e-mail através do nuioficial@gmail.com onde o mesmo receberá um código de postagem reversa sem custo adicional.</p>
          <p>Informamos que não poderá ser trocado ou devolvido o produto que contenha sinais de uso, avaria, lavagem ou perda da etiqueta. Infelizmente nesses casos, informamos que a encomenda retornará ao endereço do destinatário.</p>
          <p>A Nui não se responsabiliza por uma segunda troca consecutiva. E também não realizamos trocas de produtos referentes a coleções/collabs que são lançamentos posteriores. O cliente só poderá escolher um produto que foi lançado referente a mesma coleção ou coleções anteriores.</p>
          <p>Após o recebimento do produto teremos o prazo mínimo de 7 (sete) dias úteis de análise e liberação da nova peça. Caso o produto esteja de acordo com as especificações exigidas, a Nui se responsabiliza pelos custos de envio ao remetente apenas através da via PAC.</p>
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
