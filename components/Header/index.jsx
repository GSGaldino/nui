import Provider from '../Provider';
import styles from './index.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Provider
        style={{
          width: '100%'
        }}
      >
        <nav className={styles.nav}>
          <a href="#">Coleções:</a>
          <a href="#">É nui</a>
          <a href="#">Artsy sh*t</a>
          <a href="#">Psicodélico</a>
          <a href="#">Seventh</a>
        </nav>
      </Provider>
    </div>
  )
};
