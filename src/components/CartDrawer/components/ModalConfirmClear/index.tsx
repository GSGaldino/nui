import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
} from '@chakra-ui/react'

import { Typography } from '@/components'
// import { clearCart } from '@/store/modules/cart/slice'
import { IRootState } from '@/store'

interface ModalConfirmClearProps {
  isOpen?: boolean;
  onClose?: () => void | undefined;
}

function ModalConfirmClear({ isOpen, onClose }: ModalConfirmClearProps) {
  const toast = useToast();
  const items: Array<any> = [];
  // const dispatch = useDispatch();

  // const { items } = useSelector((state: IRootState) => state.cart);

  const onClear = () => {
    if (!items.length) {
      onClose?.()
      return toast({
        title: 'Sucesso',
        description: 'Seu carrinho já está vazio',
        isClosable: true,
      });
    }

    // dispatch(clearCart())
    return onClose?.()
  };

  return (
    <Modal isOpen={isOpen as boolean} onClose={onClose ? onClose : () => {}}>
      <ModalOverlay background="rgba(0,0,0, .6)" />
      <ModalContent ml={2} mr={2} borderRadius="var(--border-radius-small)">
        <ModalHeader>
          <Typography holdColor variant="h4-normal">Esvaziar carrinho</Typography>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Typography holdColor>Deseja mesmo esvaziar o carrinho?</Typography>
        </ModalBody>

        <ModalFooter>
          <Button
            borderRadius="var(--border-radius-small)"
            variant="outline"
            colorScheme="blackAlpha"
            mr={3}
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            borderRadius="var(--border-radius-small)"
            colorScheme="blackAlpha"
            onClick={onClear}
          >
            Esvaziar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default React.memo(ModalConfirmClear);
