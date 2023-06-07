import React, { PropsWithChildren } from 'react';

// import { HashLink } from 'react-router-hash-link';

import { Button } from '@chakra-ui/react';
import { useDarkMode } from '@/context/DarkMode';

type Props = {
  to?: string;
} & PropsWithChildren

export const HeaderLink = ({ to, children }: Props) => {
  const { darkMode } = useDarkMode();

  return (
    <Button
      variant="outline"
      colorScheme="facebook"
      borderColor="#000000"
      color="#000000"
      fontWeight={500}
      // as={HashLink}
      // to={to}
      borderRadius="var(--border-radius-small)"
    >
      {children}
    </Button>
  )
}
