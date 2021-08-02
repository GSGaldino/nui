import Provider from '../Provider';
import Link from 'next/link';

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
                <li><Link href="/preco-do-envio"><a>Preço do envio</a></Link></li>
                <li><Link href="/devolucao-e-trocas"><a>Devolução</a></Link></li>
                <li><Link href="/como-pedir"><a>Como pedir</a></Link></li>
                <li><a href="#">Como Rastrear</a></li>
                <li><Link href="/guia-de-tamanhos"><a>Guia de tamanhos</a></Link></li>
              </ul>
            </nav>
          </div>

          <div className={styles.item}>
            <h5>Atendimento ao cliente</h5>
            <nav>
              <ul>
                <li><Link href="/entre-em-contato"><a>Entre em contato com Nui</a></Link></li>
                <li><Link href="/metodo-de-pagamento"><a>Método de pagamento</a></Link></li>
              </ul>
            </nav>
          </div>

          <div className={styles.item}>
            <h5>Informações da empresa</h5>
            <nav>
              <ul>
                <li><Link href="/quem-somos"><a>Quem somos Nui</a></Link></li>
              </ul>
            </nav>
          </div>

        </div>

      </Provider>
    </div>
  )
}
