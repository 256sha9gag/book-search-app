import React, { useState } from 'react'

import { DropdownWrapper, LabelDropdown, InputWrapper, InputDropdown, OptionContainer, Option, ChevronIconWrapper } from './DropdownsStyles'
import ChevronIcon from './ChevronIcon'

const DropdownSortingBy: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('relevance')

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: string): void => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <DropdownWrapper>
        <LabelDropdown>
          Sorting by
        </LabelDropdown>
        <InputWrapper>
          <InputDropdown
            value={selectedOption}
            onClick={toggleDropdown}
            readOnly
          />
          <ChevronIconWrapper onClick={toggleDropdown}>
            <ChevronIcon/>
          </ChevronIconWrapper>
          {isOpen && (
        <OptionContainer>
          <Option onClick={() => { handleOptionClick('relevance') }}>
            relevance
          </Option>
          <Option onClick={() => { handleOptionClick('newest') }}>
            newest
          </Option>
        </OptionContainer>
          )}
        </InputWrapper>
    </DropdownWrapper>
  )
}

export default DropdownSortingBy
