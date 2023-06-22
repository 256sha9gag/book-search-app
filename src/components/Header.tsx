import React from 'react'

import SearchForm from './SearchForm'
import { HeaderWrapper, Title } from '../styles/components'

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <Title>
        Search for books
      </Title>
      <SearchForm />
    </HeaderWrapper>
  )
}

export default Header
