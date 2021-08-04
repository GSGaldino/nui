import { useState } from 'react';

import styles from './CartIcon.module.css';

import store from '../src/store';

export default function CartIcon({ isWithoutText }) {
  const [cart, setCart] = useState(store.getState());

  return (
    <div className={styles.cartIcon}>
      <div className={styles.item}>
        <img src="cart.svg" />
        <label className={styles.counter}>{cart && cart.counter}</label>
        {!isWithoutText && <div className={styles.column}>
          <p>Meu carrinho</p>
          <p style={{ marginTop: "6px" }}>R$: 0,00</p>
        </div>}
      </div>
    </div>
  );
};
