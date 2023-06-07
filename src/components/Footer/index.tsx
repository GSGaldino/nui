import React from 'react'
import Image from 'next/image'
// import { Link } from 'react-router-dom';

import { Button, IconButton } from '@chakra-ui/react'
import { Provider } from '../Provider'
import { Typography } from '../Typography'

import * as S from './styles'

const FooterButton = ({ children }: { children: string }) => {
  return (
    <Button
      variant="outline"
      borderColor="#FFFFFF"
      color="#FFFFFF"
      aria-label={''}
      borderRadius="var(--border-radius-small)"
      fontWeight={500}
    >
      {children}
    </Button>
  )
};

function Footer() {
  return (
    <S.Background>
      <Provider>
        <S.Title>
          <Typography holdColor variant="h2-normal" color="light">Aqui é Nui!</Typography>
          <Image src="logo-light.svg" alt="" width={54} height={54} />
        </S.Title>

        <S.Centered>
          <Typography holdColor variant="body-custom" color="light">
            Criamos artes limitadas e exclusivas com frete GRÁTIS para o Brasil!
          </Typography>
        </S.Centered>

        <S.Buttons>
          <FooterButton>
            Minha conta
          </FooterButton>
          <FooterButton>
            O que é nui?
          </FooterButton>
          <FooterButton>
            Dúvidas
          </FooterButton>
          <FooterButton>
            Contato
          </FooterButton>
          <FooterButton>
            Suporte
          </FooterButton>
        </S.Buttons>

        <S.PosFooter>
          <div>
            <Image src="nuile.svg" alt="" width={70} height={64} />
            <div>
              <Typography color="gray">É Nui</Typography>
              <Typography color="gray">CNPJ: 40605160/000189</Typography>
              <Typography color="gray">Vargem Grande Paulista - SP</Typography>
              <Typography color="gray">© 2022 Todos os direitos reservados</Typography>
            </div>
          </div>

          <div>
            <Typography color="gray">Nossas redes sociais</Typography>
            <Typography color="gray" as="strong">@nuioficial</Typography>

            <div className="social">
              <IconButton
                variant="ghost"
                colorScheme="whiteAlpha"
                aria-label={''}
              >
                <Image src="icons/instagram.svg" alt="" width={35} height={35} />
              </IconButton>
              <IconButton
                variant="ghost"
                colorScheme="whiteAlpha"
                aria-label={''}
              >
                <Image src="icons/facebook.svg" alt="" width={35} height={35} />
              </IconButton>
              <IconButton
                variant="ghost"
                colorScheme="whiteAlpha"
                aria-label={''}
              >
                <Image src="icons/twitter.svg" alt="" width={35} height={35} />
              </IconButton>
              <IconButton
                variant="ghost"
                colorScheme="whiteAlpha"
                aria-label={''}
              >
                <Image src="icons/whatsapp.svg" alt="" width={35} height={35} />
              </IconButton>
            </div>
          </div>
        </S.PosFooter>
      </Provider>
    </S.Background>
  );
}

export { Footer }
