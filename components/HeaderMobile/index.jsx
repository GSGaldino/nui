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
  const [isCentralDeAtendimentoOpen, setIsCentralDeAtendimentoOpen] = React.useState(false);

  const handleItemClick = () => {
    const newState = !isCentralDeAtendimentoOpen;

    setIsCentralDeAtendimentoOpen(newState);
    console.log(newState);
  };

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
                <div
                  onClick={handleItemClick}
                  className={`
                    ${styles.menuOptionsItem} 
                    ${styles.centralAtendimento}
                  `}
                >
                  <div className={styles.item}>
                    <img src="chat.svg" />
                    <div className={styles.flexItem}>
                      <p>Central de <br /> Atendimento</p>
                      <img src="arrow_down.svg" />
                    </div>
                  </div>

                  <div
                    className={`
                      ${styles.contacts} 
                      ${isCentralDeAtendimentoOpen ? styles.open : null}
                    `}
                  >

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

                <div className={styles.menuOptionsItem}>
                  <img src="ovelha_negra.svg" />
                  <div>
                    <p>Entrar ou <br /> cadastrar</p>
                  </div>
                </div>

                <div className={styles.menuOptionsItem}>
                  <CartIcon />
                </div>

                <div className={styles.menuOptionsItem}>
                  {/* <img src="lupa.svg" />
                  <input placeholder="Busca" /> */}
                </div>

              </div>

            </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </div>
  );
};
