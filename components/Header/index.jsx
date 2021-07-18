import Provider from '../Provider';
import styles from './index.module.css';

export default function Header({ data }) {
  return (
    <div className={styles.header}>
      <Provider
        style={{
          width: '100%'
        }}
      >
        <nav className={styles.nav}>
          <a>Coleções:</a>
          {data && data.map((item, index) => {
            const link = `/#${item.slug}`;

            return (
              <a href={link} key={index}>
                {item.categoria}
              </a>
            )

          })}
        </nav>
      </Provider>
    </div>
  )
};
