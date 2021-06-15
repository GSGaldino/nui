import Provider from '../Provider';

import styles from './index.module.css';

export default function Footer(){
  return (
    <div className={styles.footer}>
      <Provider>

        <div className={styles.footerWrapper}>

          <div className={styles.item}>
            <h5>Ajuda e suporte</h5>
            <nav>
              <ul>
                <li><a href="#">Preço do envio</a></li>
                <li><a href="#">Devolução</a></li>
                <li><a href="#">Como Pedir</a></li>
                <li><a href="#">Como Rastrear</a></li>
                <li><a href="#">Guia de tamanhos</a></li>
              </ul>
            </nav>
          </div>

          <div className={styles.item}>
            <h5>Atendimento ao cliente</h5>
            <nav>
              <ul>
                <li><a href="#">Entre em contato com Nui</a></li>
                <li><a href="#">Método de pagamento</a></li>
              </ul>
            </nav>
          </div>

          <div className={styles.item}>
            <h5>Informações da empresa</h5>
            <nav>
              <ul>
                <li><a href="#">Quem somos Nui</a></li>
              </ul>
            </nav>
          </div>

        </div>

      </Provider>
    </div>
  )
}
