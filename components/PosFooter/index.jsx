import Provider from "../Provider";

import styles from './index.module.css';

export default function PosFooter(){
  return (
    <div className={styles.containerPosFooter}>
      <Provider>
        <div className={styles.posFooter}>
          <img src="logo_dark.svg" />
          <p><strong>É NUI</strong>  ©  2021 Todos os direitos reservados</p>
        </div>
      </Provider>
    </div>
  )
}
