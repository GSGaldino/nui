import React from 'react';
import Link from 'next/link';

import Provider from '../Provider';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import CartIcon from '../CartIcon';

import styles from './index.module.css';

export default function HeaderMobile({ data }) {
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
            <Link href={"/"}>
              <img src="logo.svg" />
            </Link>
          </div>

          <div className={styles.item}>
            <CartIcon isWithoutText />
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
                    {data && data.map((item, index) => {
                      const link = `/#${item.slug}`;

                      return (
                        <li 
                          key={index}
                          onClick={e => setIsOpen(false)}
                        >
                          <a href={link}>
                            {item.categoria}
                          </a>
                        </li>
                      )

                    })}
                  </ul>
                </nav>
              </div>

              <div className={styles.menuOptions}>
                <div className={styles.menuOptionsItem}>
                  <img src="ovelha_negra.svg" />
                  <div>
                    <p>Entrar ou <br /> cadastrar</p>
                  </div>
                </div>
                <div className={styles.menuOptionsItem}>
                  <img src="chat.svg" />
                  <p>Central de <br /> Atendimento</p>
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
                  <input placeholder="Busca" />
                </div>
              </div>

            </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </div>
  );
};
