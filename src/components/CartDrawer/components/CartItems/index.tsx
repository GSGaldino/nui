import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Stack } from '@chakra-ui/react';
import { Typography } from '@/components'
import { IRootState } from '@/store';

import { CartItem } from '../CartItem';
import ModalConfirmDelete from '../ModalConfirmDelete';

export const CartItems = () => {
  const [modalDelete, setModalDelete] = useState({
    isOpen: false,
    item: null,
  });

  const { items } = useSelector((state: IRootState) => state.cart);

  useEffect(() => { }, []);

  const onModalDeleteClose = () => setModalDelete({
    ...modalDelete,
    isOpen: false,
  });

  const onDelete = (item: any) => setModalDelete({
    ...modalDelete,
    isOpen: true,
    item,
  });

  return (
    <>
      <Stack direction="column" gap={4}>
        {items?.map((item: any) => (
          <CartItem key={item?.id} item={item} onDelete={() => onDelete(item)} />
        ))}

        {!items.length && (
          <div>
            <Typography holdColor>
              Seu carrinho está vazio
            </Typography>
          </div>
        )}
      </Stack>
      <ModalConfirmDelete
        item={modalDelete.item || { id: '' }}
        isOpen={modalDelete.isOpen}
        onClose={onModalDeleteClose}
      />
    </>
  );
}

export default CartItems;
