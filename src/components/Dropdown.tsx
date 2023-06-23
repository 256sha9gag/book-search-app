import React, { useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  color: white;
`

const InputDropdown = styled.input`
  display: flex;
  flex-basis: 150px;
  height: 38px;
  cursor: pointer;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ChevronIconWrapper = styled.div`
  width: 12px;
  height: 18px;
  margin-left: -30px;
  cursor: pointer;
`

const OptionContainer = styled.ul`
  position: absolute;
  font: var(--font-normal);
  background-color: white;
  width: 150px;
  padding: 0;
  list-style-type: none;
`

const Option = styled.li`
  padding: 12px 12px 8px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

`

const DropdownContainer = styled.div`
  position: relative;
`

const Dropdown = (): JSX.Element => {
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
    <DropdownContainer>
        <Label>
          Categories
        </Label>
        <InputWrapper>
          <InputDropdown
            value={selectedOption}
            onClick={toggleDropdown}
            readOnly
          />
          <ChevronIconWrapper onClick={toggleDropdown}>
          </ChevronIconWrapper>
        </InputWrapper>
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
          <Option onClick={() => { handleOptionClick('computers') }}>
            history
          </Option>
          <Option onClick={() => { handleOptionClick('computers') }}>
            medical
          </Option>
          <Option onClick={() => { handleOptionClick('computers') }}>
            poetry
          </Option>
        </OptionContainer>
        )}
    </DropdownContainer>
  )
}

export default Dropdown
