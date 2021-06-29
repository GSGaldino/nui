import Provider from '../Provider';

import styles from './index.module.css';

export default function Product({ shirt }) {
  return (
    <div className={styles.product}>
      <Provider>
        <p>{shirt.nome}</p>
      </Provider>
    </div>
  );
};
