import Provider from '../Provider';

import styles from './index.module.css';

export default function Product({ shirt }) {
  const productData = shirt && shirt;
  const tamanhos = productData.tamanhos_disponiveis.split(',');
  const cores = productData.cores_disponiveis.split(',');

  const Description = () => (
    <div className={styles.description}>
      <h4>Sobre a sua nova camiseta:</h4>
      <p dangerouslySetInnerHTML={{ __html: productData.sobre }} />
      <p className={styles.descriptionTitle}>Descricao</p>
      <p dangerouslySetInnerHTML={{ __html: productData.descricao }} />
    </div>
  );

  const Tamanho = ({ children }) => (
    <div className={styles.tamanho}>
      {children}
    </div>
  );

  const Cor = ({ hex }) => (
    <div
      className={styles.cor}
      style={{
        background: hex,
        borderRadius: "100%",
        width: "60px",
        height: "60px",
        border: hex === "#020202" ? "1px solid var(--white)" : "none",
        margin: "10px 20px 20px 0px"
      }}
    />
  );

  return (
    <div className={styles.product}>
      <Provider>
        <div className={styles.flexSection}>

          <div className={styles.flexItem}>
            <div className={styles.imageTitle}>
              <p>Camiseta</p>
              <p>Coleção <strong>{productData.categoria}</strong></p>
            </div>
            <img src={productData.foto_1} />
          </div>

          <div className={styles.flexItem}>
            <h2
              dangerouslySetInnerHTML={{ __html: productData.nome }}
              className={styles.title}
            />
            <p dangerouslySetInnerHTML={{ __html: productData.descricao_curta }} />
            <hr className={styles.separator} />

            <div className={styles.tamanhos}>
              <p>Selecione o tamanho:</p>
              <div className={styles.wrapper}>
                {tamanhos.map(item => <Tamanho>{item}</Tamanho>)}
              </div>
            </div>

            <div className={styles.cores}>
              <p>Selecione a cor:</p>
              <div className={styles.wrapper}>
                {cores.map(item => <Cor hex={item} />)}
              </div>
            </div>

            <p className={styles.preco}>
              <strong>
                {productData.preco}
              </strong> 
              <small>
                {`ou ${productData.parcelado}`}
              </small>
            </p>

            <div className={styles.cta}>
              <button className={styles.buttonPrimary}>Comprar agora</button>
              <button className={styles.buttonSecondary}>Voltar</button>
            </div>
          </div>

        </div>

        <Description />
      </Provider>
    </div>
  );
};
