import type { ChangeEvent, KeyboardEvent } from 'react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import {
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react'

import SearchIcon from '@/assets/icons/lupa.svg'

type SearchInputProps = {
  onClose?: () => void,
  onSubmit?: () => void,
  placeholder?: string;
}

export const SearchInput = ({ onClose, onSubmit, placeholder, ...rest }: SearchInputProps) => {
  const router = useRouter()
  const toast = useToast()
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  const onSearch = () => {
    if (!value) {
      return toast({
        isClosable: true,
        title: 'Busca vazia',
        status: 'info',
        description: 'Insira um nome para realizar a busca',
      })
    }

    setValue('')
    onClose?.()
    onSubmit?.()
    return router.push(`/search?q=${value.replaceAll?.('#', '%23')}`)
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <InputGroup>
      <Input
        {...rest}
        placeholder={placeholder}
        onChange={onChange}
        background="var(--absolute-white)"
        onKeyDown={onKeyDown}
      />
      <InputRightElement p={2} cursor="pointer">
        <Image src="lupa.svg" onClick={onSearch} alt="" width={40} height={40} />
      </InputRightElement>
    </InputGroup>
  );
}
