import React from 'react'
import { useDispatch } from 'react-redux'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'

import { Typography } from '@/components'
import { removeItem } from '@/store/modules/cart/slice'

interface ModalConfirmClearProps {
  isOpen?: boolean;
  onClose?: () => void;
  item?: {
    id?: string,
  };
}

const ModalConfirmClear = ({ isOpen, onClose, item }: ModalConfirmClearProps) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    // dispatch(removeItem(item?.id))
    return onClose?.()
  };

  return (
    <Modal isOpen={isOpen as boolean} onClose={onClose ? onClose : () => {}}>
      <ModalOverlay background="rgba(0,0,0, .6)" />
      <ModalContent ml={2} mr={2} borderRadius="var(--border-radius-small)">
        <ModalHeader>
          <Typography holdColor variant="h4-normal">Deletar item</Typography>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Typography holdColor>Deseja mesmo deletar o item?</Typography>
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
            onClick={onDelete}
          >
            Deletar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default React.memo(ModalConfirmClear);
