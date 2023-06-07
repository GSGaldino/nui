import Link from 'next/link'
import Image from 'next/image'

import React, { useRef, useMemo, RefObject } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Divider,
  Avatar,
} from '@chakra-ui/react'

import { Typography, SearchInput } from '@/components'
// import { openModal } from '@/store/modules/user/slice'
import { useDarkMode } from '@/context/DarkMode'
import { IRootState } from '@/store'
// import { HashLink } from 'react-router-hash-link'
import * as S from './styles';

export const Drawer = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { darkMode } = useDarkMode();

  // const foreground = darkMode ? 'var(--absolute-white)' : 'var(--absolute-black)';

  // const loggedUser = useSelector((state: IRootState) => state?.user?.loggedUser);

  // const isLogged = useMemo(() => !!loggedUser?.dashboardToken, [loggedUser]);
  const isLogged = false;

  const onCartClick = () => {
    onClose();
    // dispatch(openModal('cart'));
  };

  return (
    <>
      <S.HamburgerIcon onClick={onOpen}>
        <Image src='icons/hamburger.svg' alt='Hamburger' width={40} height={40} />
        {/* <HamburgerIcon color={foreground} /> */}
      </S.HamburgerIcon>
      <ChakraDrawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef as unknown as RefObject<HTMLButtonElement>}
      >
        <DrawerContent background="var(--absolute-black)">
          <DrawerCloseButton color="var(--absolute-white)" />
          <DrawerHeader>
            {isLogged ? (
              <Avatar
                // name={loggedUser.name as string}
                name=""
                variant="circle"
                bg="none"
                w={10}
                h={10}
                color="var(--absolute-white)"
                border="2.5px solid var(--absolute-white)"
                as={Link}
                // to="/account"
                onClick={onClose}
              />
            ) : (
              <S.DrawerHeader>
                <Image src="icons/hamburger.svg" alt="Profile" width={40} height={40} />
                <Typography holdColor color="light">Entrar</Typography>
              </S.DrawerHeader>
              // <S.DrawerHeader as={Link} to="/login" onClick={onClose}>
              //   <Image src="icons/hamburger.svg" alt="Profile" />
              //   <Typography holdColor color="light">Entrar</Typography>
              // </S.DrawerHeader>
            )}
          </DrawerHeader>

          <DrawerBody>
            <S.DrawerBody>
              <SearchInput placeholder="Pesquisar ..." onSubmit={onClose} />

              <Button
                variant="ghost"
                colorScheme="blackAlpha"
                // as={HashLink}
                // to="#collections"
                onClick={onCartClick}
              >
                <Typography holdColor color="light" variant="h2-normal">
                  Meu carrinho
                </Typography>
              </Button>

              <Divider />

              <Button
                variant="ghost"
                colorScheme="blackAlpha"
                // as={HashLink}
                // to="#collections"
                onClick={onClose}
              >
                <Typography holdColor color="light" variant="h2-normal">
                  Coleções
                </Typography>
              </Button>
              <Button
                variant="ghost"
                colorScheme="blackAlpha"
                // as={HashLink}
                // to="/#releases"
                onClick={onClose}
              >
                <Typography holdColor color="light" variant="h2-normal">
                  Lançamentos
                </Typography>
              </Button>
              <Button
                variant="ghost"
                colorScheme="blackAlpha"
                // as={HashLink}
                // to="/#camisetas"
                onClick={onClose}

              >
                <Typography holdColor color="light" variant="h2-normal">
                  Camisetas
                </Typography>
              </Button>
              <Button
                variant="ghost"
                colorScheme="blackAlpha"
                // as={HashLink}
                // to="/#croppeds"
                onClick={onClose}
              >
                <Typography holdColor color="light" variant="h2-normal">
                  Croppeds
                </Typography>
              </Button>
              <Button
                variant="ghost"
                colorScheme="blackAlpha"
                // as={HashLink}
                // to="/#quadros"
                onClick={onClose}
              >
                <Typography holdColor color="light" variant="h2-normal">
                  Quadros
                </Typography>
              </Button>
              <Button
                variant="ghost"
                colorScheme="blackAlpha"
                // as={HashLink}
                // to="/#canecas"
                onClick={onClose}
              >
                <Typography holdColor color="light" variant="h2-normal">
                  Canecas
                </Typography>
              </Button>
            </S.DrawerBody>
          </DrawerBody>

        </DrawerContent>
      </ChakraDrawer>
    </>
  )
}
