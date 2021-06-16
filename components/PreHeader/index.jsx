import Provider from '../Provider';

import styles from './index.module.css';

export default function PreHeader(){
  return (
    <div className={styles.preHeader}>
      <Provider>
        <div className={styles.preHeaderWrapper}>

          <div className={styles.item}>
            <img src="logo.svg" />
          </div>

          <div className={`${styles.item} ${styles.search}`}>
            <img src="lupa.svg" />
            <input type="text" placeholder="Busca"/>
          </div>
          
          <div className={styles.item}>
            <img src="chat.svg" />
            <div className={styles.column}>
              <p>Central de <br/> atendimento</p>
              <img src="arrow_down.svg" />
            </div>
          </div>

          <div className={styles.item}>
            <img src="ovelha_negra.svg" />
            <div className={styles.column}>
              <p>Entrar ou <br/>cadastrar</p>
              <img src="arrow_down.svg" />
            </div>
          </div>

          <div className={styles.item}>
            <img src="cart.svg" />
            <div className={styles.column}>
              <p>Meu carrinho</p>
              <p style={{marginTop: "6px"}}>R$: 0,00</p>
            </div>
          </div>

        </div>
      </Provider>
    </div>
  )
}
