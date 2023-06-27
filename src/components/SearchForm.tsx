import React, { type FormEvent, useState, useRef } from 'react'
import { Form, Input, InputWrapper } from '../styles/components'
import SearchButton from './SearchButton'
import Dropdowns from './Dropdowns/Dropdowns'

const SearchForm: React.FC = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(searchValue)
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          placeholder='Search...'
          ref={inputRef}
          type="text"
          name="search"
          onChange={handleOnChange}
          value={searchValue}
        />
        <SearchButton
        />
      </InputWrapper>
      <Dropdowns />
    </Form>
  )
}

export default SearchForm
