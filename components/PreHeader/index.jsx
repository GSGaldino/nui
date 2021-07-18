import { useState } from 'react';
import Provider from '../Provider';
import Link from 'next/link';
import CartIcon from '../CartIcon';

import store from '../../src/store';

import styles from './index.module.css';

export default function PreHeader() {
  const [cart, setCart] = useState(store.getState());

  return (
    <div className={styles.preHeader}>
      <Provider>
        <div className={styles.preHeaderWrapper}>

          <div className={styles.item}>
            <Link href={"/"}>
              <img src="logo.svg" />
            </Link>
          </div>

          <div className={`${styles.item} ${styles.search}`}>
            <img src="lupa.svg" />
            <input type="text" placeholder="Busca" />
          </div>

          <div className={styles.item}>
            <img src="chat.svg" />
            <div className={styles.column}>
              <p>Central de <br /> atendimento</p>
              <img src="arrow_down.svg" />
            </div>
          </div>

          <div className={styles.item}>
            <img src="ovelha_negra.svg" />
            <div className={styles.column}>
              <p>Entrar ou <br />cadastrar</p>
              <img src="arrow_down.svg" />
            </div>
          </div>

          <div className={styles.item}>
            <CartIcon />
          </div>

        </div>
      </Provider>
    </div>
  )
}
