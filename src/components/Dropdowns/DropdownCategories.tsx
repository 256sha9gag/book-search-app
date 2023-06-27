import React, { useState } from 'react'

import { DropdownWrapper, LabelDropdown, InputWrapper, InputDropdown, OptionContainer, Option, ChevronIconWrapper } from './DropdownsStyles'
import ChevronIcon from './ChevronIcon'

const DropdownCategories: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('all')

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
          Categories
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
          <Option onClick={() => { handleOptionClick('all') }}>
            all
          </Option>
          <Option onClick={() => { handleOptionClick('art') }}>
            art
          </Option>
          <Option onClick={() => { handleOptionClick('biography') }}>
            biography
          </Option>
          <Option onClick={() => { handleOptionClick('computers') }}>
            computers
          </Option>
          <Option onClick={() => { handleOptionClick('history') }}>
            history
          </Option>
          <Option onClick={() => { handleOptionClick('medical') }}>
            medical
          </Option>
          <Option onClick={() => { handleOptionClick('poetry') }}>
            poetry
          </Option>
        </OptionContainer>
          )}
        </InputWrapper>
    </DropdownWrapper>
  )
}

export default DropdownCategories
