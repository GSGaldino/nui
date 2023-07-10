import React from 'react';
import { IconButton as ChakraIconButton, Avatar, ScaleFade, AvatarBadge, Image } from '@chakra-ui/react';
import { Typography } from '../Typography';

const isLogged = false;
const items = [];
const darkMode = false;

const foreground = darkMode ? 'var(--absolute-white)' : 'var(--absolute-black)';
const background = darkMode ? 'var(--absolute-black)' : 'var(--absolute-white)';

interface IIconButtonProps {
  onClick?: () => void;
  icon: string;
}

export function IconButton({ onClick, icon }: IIconButtonProps) {
  return (
    <ChakraIconButton
      variant={darkMode ? 'ghost' : 'solid'}
      bg={background}
      onClick={onClick}
      aria-label=''
    >
      <Avatar icon={<Image src={icon} alt="" width={40} height={40} p={1} />} bg="none">
        <ScaleFade in={items?.length as unknown as boolean} initialScale={1}>
          <AvatarBadge boxSize="1.25em" bg={foreground}>
            <Typography color="light">
              {String(items?.length || 0)}
            </Typography>
          </AvatarBadge>
        </ScaleFade>
      </Avatar>
    </ChakraIconButton>
  )
}
