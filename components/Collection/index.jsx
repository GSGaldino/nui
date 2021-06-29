import Link from 'next/link';

import Provider from '../Provider';
import Card from '../Card';

import styles from './index.module.css';

export default function Collection({ title, background_url, description, shirts }) {

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
                <Link href={`/${shirt.id}`}>
                  <a target="_blank">
                    <Card shirt={shirt} />
                  </a>
                </Link>
              </div>

            ))}
          </div>

        </div>
      </Provider>
    </div>
  )
}
