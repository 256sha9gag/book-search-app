import React from 'react'

import DropdownCategories from './DropdownCategories'
import DropdownSortingBy from './DropdownSortingBy'
import { DropdownsContainer } from './DropdownsStyles'

const Dropdowns: React.FC = (): JSX.Element => {
  return (
    <DropdownsContainer>
      <DropdownCategories />
      <DropdownSortingBy />
    </DropdownsContainer>
  )
}

export default Dropdowns
