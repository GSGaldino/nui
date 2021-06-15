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

          <div className={styles.item}>
            <img src="lupa.svg" />
            <input type="text" placeholder="Busca"/>
          </div>
          
          <div className={styles.item}>
            <img src="chat.svg" />
            <div className={styles.column}>
              <p>Central de atendimento</p>
              <img src="arrow_down.svg" />
            </div>
          </div>

          <div className={styles.item}>
            <img src="chat.svg" />
            <div className={styles.column}>
              <p>Central de atendimento</p>
              <img src="arrow_down.svg" />
            </div>
          </div>

          <div className={styles.item}></div>

        </div>
      </Provider>
    </div>
  )
}
