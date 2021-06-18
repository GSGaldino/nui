import React from 'react';

import Provider from '../Provider';
import { 
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Input,
 } from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

import styles from './index.module.css';

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.headerMobile}>
      <Provider>
        <div className={styles.headerMobileWrapper}>

          <div className={styles.item}>
            <HamburgerIcon 
              w={10} 
              h={10} 
              color="#FDF9F9" 
              onClick={e => setIsOpen(true)}
            />
          </div>

          <div className={styles.item}>
            <img src="logo.svg" />
          </div>

          <div className={styles.item}>
            <img src="cart.svg" />
          </div>

        </div>
      </Provider>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={e => setIsOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent background="var(--black)">
          <DrawerCloseButton 
            color="var(--white)"
            _focus={{
              border: "none"
            }}
          />

          <DrawerBody>
            <div className={styles.drawerContent}>
              <div className={styles.menu}>
                <nav>
                  <ul>
                    <li><p>Coleções:</p></li>
                    <li><a>Artsy Sh*t</a></li>
                    <li><a>Psicodélico</a></li>
                    <li><a>Seventh</a></li>
                    <li><a>É nui</a></li>
                  </ul>
                </nav>
              </div>

              <div className={styles.menuOptions}>
                <div className={styles.menuOptionsItem}>
                  <img src="ovelha_negra.svg" />
                  <div>
                    <p>Entrar ou <br/> cadastrar</p>
                  </div>
                </div>
                <div className={styles.menuOptionsItem}>
                  <img src="chat.svg" />
                  <p>Central de <br/> Atendimento</p>
                </div>
                <div className={styles.menuOptionsItem}>
                  <img src="cart.svg" />
                  <div>
                    <p>Meu carrinho</p>
                    <p>R$: 0,00</p>
                  </div>
                </div>
                <div className={styles.menuOptionsItem}>
                  <img src="lupa.svg" />
                  <input placeholder="Busca"/>
                </div>
              </div>

            </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </div>
  );
};
