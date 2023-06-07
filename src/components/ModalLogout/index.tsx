import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

import { Typography } from '@/components';


function ModalLogout({ isOpen, onClose }: any) {
  // const { isLoading } = useSelector((state) => state.common);
  const isLoading = false;

  const onLogout = () => {
    // dispatch(logout());
    return onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay background="rgba(0,0,0, .6)" />
      <ModalContent ml={2} mr={2} borderRadius="var(--border-radius-small)">
        <ModalHeader>
          <Typography holdColor variant="h4-normal">Sair</Typography>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Typography holdColor>Deseja mesmo fazer logout?</Typography>
        </ModalBody>

        <ModalFooter>
          <Button
            borderRadius="var(--border-radius-small)"
            variant="outline"
            colorScheme="blackAlpha"
            mr={3}
            onClick={onClose}
            isLoading={isLoading}
          >
            Cancelar
          </Button>
          <Button
            borderRadius="var(--border-radius-small)"
            colorScheme="red"
            onClick={onLogout}
            isLoading={isLoading}
          >
            Logout
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

ModalLogout.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

ModalLogout.defaultProps = {
  item: null,
};

export default memo(ModalLogout);
