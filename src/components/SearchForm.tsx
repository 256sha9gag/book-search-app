import React from 'react'
import { Form, Input, InputWrapper } from '../styles/components'
import SearchButton from './SearchButton'

const SearchForm: React.FC = (): JSX.Element => {
  return (
    <Form>
      <InputWrapper>
        <Input />
        <SearchButton />
      </InputWrapper>
    </Form>
  )
}

export default SearchForm
