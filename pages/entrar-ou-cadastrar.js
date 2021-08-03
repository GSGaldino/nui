import Head from 'next/head';
import HeaderMobile from '../components/HeaderMobile';
import PreHeader from '../components/PreHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PosFooter from '../components/PosFooter';

import Provider from '../components/Provider';

import styles from '../styles/entrar-ou-cadastrar.module.css';
import defaultStyle from '../styles/Home.module.css';

import { getCategories } from '../src/api';

export default function EntrarOuCadastrar({ categories }) {
  return (
    <div className={defaultStyle.container}>
      <Head>
        <title>Nui | Entrar ou cadastrar</title>
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
        <div className={styles.entrarOuCadastrar}>
          <img src="/ovelha_negra.svg" />
          <h3>Cadastre-se agora e seja Nui</h3>
          <p className={styles.subtitle}>(Se você ainda não for, claro)</p>

          <p className={styles.description}>Olá, tudo bem? Nós queremos dizer que é uma honra enorme saber que você está clicando em botões no nosso site. Se cadastra aí, se você curtiu nosso site, nossas roupas, nossas ideias, nossos quadros, nossas artes, nossas estampas... A gente pretende mandar ver nesse mundão aí, com uns produtos de qualidade e um atendimento excepcional. Confia. E nunca se esqueça:</p>

          <h2>Aqui é Nui!</h2>

          <form>
            <p className={styles.formTitle}>Dados pessoais</p>

            <div className={styles.field}>
              <input placeholder="Bruce" />
              <p>Qual seu nome?</p>
            </div>

            <div className={styles.field}>
              <input placeholder="Wayne" />
              <p>E seu sobrenome?</p>
            </div>

            <div className={styles.field}>
              <input placeholder="morcegostoso@gmail.com" />
              <p>Agora o e-mail</p>
            </div>

            <div className={styles.field}>
              <input placeholder="Twelves" />
              <p>Nome do pet (Se tiver mais de um, do preferido)</p>
            </div>

            <div className={styles.field}>
              <input placeholder="(11) 91005-2395" />
              <p>Passa o zap</p>
            </div>

            <div className={styles.field}>
              <input placeholder="40605160/000189" />
              <p>CPF/CNPJ</p>
            </div>

            <p className={styles.formTitle}>Dados pessoais</p>

            <div className={styles.field}>
              <input placeholder="mesmasenhadoorkut" />
              <p>Senha</p>
            </div>

            <div className={styles.field}>
              <input placeholder="mesmasenhadoorkut" />
              <p>Confirme a senha fazendo favor</p>
            </div>

            <div className={styles.actions}>
              <button>
                Entrar
              </button>
              <button>
                Cadastrar
              </button>
            </div>

          </form>
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
