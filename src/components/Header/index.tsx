import React from 'react'
import { useDispatch } from 'react-redux';

import { Provider, Logo, Search, CartDrawer, IconButton } from '@/components'
import { Drawer, HeaderLink } from './components'
import { openModal } from '@/store/modules/user/slice'

import * as S from './styles';

export const Header = () => {
  const dispatch = useDispatch();

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
            <IconButton icon="/icons/lupa.svg" onClick={onSearchClick} />
            <IconButton icon="/icons/profile.svg" />
            <IconButton icon="/icons/cart.svg" onClick={onCartClick} />
          </div>

          <Drawer />
          <CartDrawer />
          <Search />
        </S.Header>

      </Provider>
    </S.Container>
  )
}
