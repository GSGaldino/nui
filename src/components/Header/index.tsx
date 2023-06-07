import React, { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

import {
  IconButton,
  AvatarBadge,
  Avatar,
  ScaleFade,
} from '@chakra-ui/react'

import { Provider, Logo, Search, Typography, CartDrawer } from '@/components'
import { Drawer, HeaderLink } from './components'
import { useDarkMode } from '@/context/DarkMode'
import { openModal } from '@/store/modules/user/slice'
import { IRootState } from '@/store'
// import LupaIcon from '~/assets/icons/Lupa';
// import ProfileIcon from '~/assets/icons/Profile';
// import CartIcon from '~/assets/icons/Cart';

import * as S from './styles';

export const Header = () => {
  const dispatch = useDispatch();
  const { darkMode } = useDarkMode();

  const items = useSelector((state: IRootState) => state?.cart?.items);

  const loggedUser = useSelector((state: IRootState) => state?.user?.loggedUser);

  const isLogged = useMemo(() => !!loggedUser?.dashboardToken, [loggedUser]);

  const onSearchClick = () => dispatch(openModal('search'));

  const onCartClick = () => dispatch(openModal('cart'));

  const links = [
    {
      label: 'Coleções',
      value: '/#collections',
    },
    {
      label: 'Lançamentos',
      value: '/#releases',
    },
    {
      label: 'Camisetas',
      value: '/#camisetas',
    },
    {
      label: 'Croppeds',
      value: '/#croppeds',
    },
    {
      label: 'Quadros',
      value: '/#quadros',
    },
    {
      label: 'Canecas',
      value: '/#canecas',
    },
  ];

  const foreground = darkMode ? 'var(--absolute-white)' : 'var(--absolute-black)';
  const background = darkMode ? 'var(--absolute-black)' : 'var(--absolute-white)';

  return (
    <S.Container>
      <Provider>
        <S.Header>
          <div>
            <Logo />
          </div>

          <div>
            {links.map(({ label, value }) => (
              <HeaderLink key={value} to={value}>
                {label}
              </HeaderLink>
            ))}
          </div>

          <div>
            <IconButton
              bg={background}
              as={Link}
              // to="/account"
              colorScheme="blackAlpha"
              variant={darkMode ? 'ghost' : 'solid'}
              aria-label=''
              href=""
              onClick={onSearchClick}
            >
              <Image src="icons/lupa.svg" alt="" width={40} height={40} />
            </IconButton>

            <IconButton
              bg={background}
              as={Link}
              // to="/account"
              colorScheme="blackAlpha"
              variant={darkMode ? 'ghost' : 'solid'}
              aria-label=''
              href=""
            >
              {isLogged ? (
                <Avatar
                  name={loggedUser.name as string}
                  fontWeight={700}
                  variant="circle"
                  bg="none"
                  w={10}
                  h={10}
                  color={foreground}
                  border={`2.5px solid ${foreground}`}
                />
              ) : (
                <Image src="/icons/profile.svg" alt="" width={40} height={40} />
              )}
            </IconButton>
            <IconButton
              colorScheme="blackAlpha"
              variant={darkMode ? 'ghost' : 'solid'}
              bg={background}
              onClick={onCartClick}
              aria-label=''
            >
              <Avatar icon={<Image src="/icons/cart.svg" alt="" width={40} height={40} />} bg="none">
                <ScaleFade in={items?.length as unknown as boolean} initialScale={1}>
                  <AvatarBadge boxSize="1.25em" bg={foreground}>
                    <Typography color="light">
                      {String(items?.length || 0)}
                    </Typography>
                  </AvatarBadge>
                </ScaleFade>
              </Avatar>
            </IconButton>
          </div>

          <Drawer />
          <CartDrawer />
          <Search />
        </S.Header>

      </Provider>
    </S.Container>
  )
}
