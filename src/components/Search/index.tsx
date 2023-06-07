import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react'
import { Typography } from '@/components'
import { SearchInput } from './components/SearchInput'

// import { closeModal } from '@/store/modules/user/slice'
import { IRootState } from '@/store'

const Search = () => {
  const dispatch = useDispatch()

  // const modals = useSelector((state: IRootState) => state?.user?.modals)

  // const onClose = () => dispatch(closeModal('search'))
  const onClose = () => {}

  return (
    <Modal isOpen={false} onClose={onClose}>
      <ModalOverlay background="rgba(255, 255, 255, .6)" />
      <ModalContent background="none" top="var(--spacement-large)">
        <Typography holdColor variant="h2-normal">Faça sua pesquisa</Typography>
        <SearchInput onClose={onClose} />
      </ModalContent>
    </Modal>
  )
}

export { SearchInput, Search }
