import Provider from '../Provider';
import Link from 'next/link';
import CartIcon from '../CartIcon';

import styles from './index.module.css';

export default function PreHeader() {

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

          <div className={`${styles.item} ${styles.atendimento}`}>
            <img src="chat.svg" />
            <div className={styles.column}>
              <p>Central de <br /> atendimento</p>
              <img src="arrow_down.svg" />
            </div>

            <div className={styles.contacts}>
              <div className={styles.contact}>
                <p>Nosso zap é</p>
                <a
                  href="https://api.whatsapp.com/send?phone=5511910052395"
                  target="_blank"
                >+55 (11) 91005-2395</a>
              </div>
              <div className={styles.contact}>
                <p>E nosso e-mail</p>
                <a>nuioficial@gmail.com</a>
              </div>
              <p>Fique a vontade para conversar conosco!</p>
            </div>
          </div>

          <Link href="/entrar-ou-cadastrar">
            <a className={styles.item}>
              <img src="ovelha_negra.svg" />
              <div className={styles.column}>
                <p>Entrar ou <br />cadastrar</p>
                <img src="arrow_down.svg" />
              </div>
            </a>
          </Link>

          <div className={styles.item}>
            <CartIcon />
          </div>

        </div>
      </Provider>
    </div>
  )
}
