import Provider from '../Provider';

import styles from './index.module.css';

export default function Collection({ title, background_url, description, shirts }) {
  const Card = ({ shirt }) => {
    const {
      nome,
      categoria,
      preco,
      parcelado,
      foto_1,
      artists
    } = shirt;

    return (
      <div className={styles.card}>

        <div className={styles.cardTitle}>
          <h4>{nome}</h4>
        </div>

        <div className={styles.cardCollection}>
          <p>{`Coleção: ${categoria} © ${artists ? artists : null}`}</p>
        </div>

        <div className={styles.cardImage}>
          <img src={foto_1} alt={nome} />
        </div>

        <div className={styles.cardPrice}>
          <strong>
            {
              `R$ ${Number(preco.replace(',', '.')) // with "."
                .toFixed(2)
                .replace('.', ',')}` // with ","
            }
          </strong>
          <span className={styles.parcelado}>OU {parcelado}</span>
        </div>

      </div>
    );
  };

  return (
    <div className={styles.containerCollection}>
      <Provider>
        <div className={styles.collection}>

          <div className={styles.collectionTitle}>
            <div
              className={styles.title}
              style={{
                background: `url(${background_url})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <h3>{title}</h3>
            </div>
            <div className={styles.description}>
              <p>{description}</p>
            </div>
          </div>

          <div className={styles.collectionContent}>
            {shirts && shirts.map(shirt => (
              <div key={shirt.nome}>
                <Card shirt={shirt} />
              </div>
            ))}
          </div>

        </div>
      </Provider>
    </div>
  )
}
