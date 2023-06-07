import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

import { Typography } from '@/components'
import CartItems from './components/CartItems'
import ModalConfirmClear from './components/ModalConfirmClear'

// import { closeModal } from '@/store/modules/user/slice'
// import { finishCart } from '@/store/modules/cart/slice'
import { IRootState } from '@/store'

function CartDrawer() {
  const dispatch = useDispatch();
  const {
    onClose: onModalConfirmClearClose,
    isOpen: isModalConfirmClearOpen,
    onOpen: onModalConfirmClearOpen,
  } = useDisclosure();

  // const { cart: isOpen } = useSelector((state: IRootState) => state.user.modals);
  const isOpen = false;

  // const onClose = () => dispatch(closeModal('cart'));

  const onCartFinish = () => {
    // onClose();
    // dispatch(finishCart());
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => {}}
      >
        <DrawerContent
          boxShadow="0px 8px 40px 0px rgba(0,0,0,.2)"
          background="var(--absolute-white)"
        >
          <DrawerCloseButton
            borderRadius="var(--border-radius-small)"
            color="var(--absolute-black)"
          />
          <DrawerHeader>
            <Typography holdColor variant="h4-normal">Meu carrinho</Typography>
          </DrawerHeader>

          <DrawerBody>
            <CartItems />
          </DrawerBody>

          <DrawerFooter gap={2} justifyContent="space-between">
            <Button
              onClick={onModalConfirmClearOpen}
              borderRadius="var(--border-radius-small)"
              variant="outline"
              colorScheme="blackAlpha"
              w="50%"
            >
              Esvaziar
            </Button>
            <Button
              variant="solid"
              w="50%"
              borderRadius="var(--border-radius-small)"
              colorScheme="green"
              onClick={onCartFinish}
              leftIcon={(
                <Image width={24} height={24} alt="" src="icons/whatsapp.svg" />
              )}
            >
              Finalizar
            </Button>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>

      <ModalConfirmClear
        isOpen={isModalConfirmClearOpen}
        onClose={onModalConfirmClearClose}
      />
    </>
  );
}

export default memo(CartDrawer);
