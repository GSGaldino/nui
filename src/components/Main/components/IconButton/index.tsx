import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { IconButton as IconButtonChakra, IconButtonProps } from '@chakra-ui/react';
import { Typography } from '@/components';
import Color from './components/Color';
// import { useDarkMode } from '~/context/DarkMode';

export interface IIconButton extends IconButtonProps {
  onClick: () => void;
  hex: string;
  active: boolean;
}

function IconButton({
  children,
  rounded,
  hex,
  active,
  variant,
  colorScheme,
  onClick,
  ...rest
}: IIconButton) {
  // const { darkMode } = useDarkMode();
  const darkMode = false;
  const iconRef = useRef<HTMLInputElement | null>(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const onMouseEnter = () => {
    setIsDisabled(false);
  };

  const onMouseLeave = () => {
    setIsDisabled(true);
  };

  useEffect(() => {
    iconRef?.current?.addEventListener('mouseenter', onMouseEnter);
    iconRef?.current?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      iconRef.current?.removeEventListener('mouseenter', onMouseEnter);
      iconRef.current?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [iconRef]);

  return (
    <IconButtonChakra
      onClick={onClick}
      colorScheme={colorScheme || "green"}
      variant={variant || "outline"}
      size="lg"
      borderRadius={rounded ? '50%' : 'var(--border-radius-small)'}
      cursor="pointer !important"
      isDisabled={isDisabled && !active}
      as="div"
      position="relative"
      borderWidth={2}
      ref={iconRef}
      paddingInline="var(--spacement-default)"
      _hover={{
        backgroundColor: darkMode ? '#1C4532' : '#F0FFF4',
      }}
      {...rest}
    >
      {
        hex
          ? <Color color={hex} />
          : <Typography>{children}</Typography>
      }
    </IconButtonChakra>
  );
}

IconButton.propTypes = {
  children: PropTypes.node,
  rounded: PropTypes.bool,
  hex: PropTypes.string,
  active: PropTypes.bool,
};

IconButton.defaultProps = {
  children: null,
  rounded: false,
  hex: '',
  active: false,
};

export default IconButton;
