import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import * as S from './styles';

export type LogoProps = {
  light?: boolean;
}

export const Logo = ({ light }: LogoProps) => {
  return (
    <Link href="/">
      <S.Logo light={light as boolean}>
        <Image src='nuile.svg' alt="My logo alternative" width={100} height={80} />
      </S.Logo>
    </Link>
  );
}
