import styled from 'styled-components'

export const DropdownsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
  padding-bottom: 20px;
`

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`

export const LabelDropdown = styled.label`
  font: 12px 'MontserratRegular';
  color: ${({ theme }) => theme.colors.ligth};
  padding: 5px;
`

export const InputWrapper = styled.div`
  display: flex;
`

export const InputDropdown = styled.input`
  position: relative;
  font: 12px 'MontserratRegular';
  color: ${({ theme }) => theme.colors.dark};
  padding: 10px;
  border: none;
  width: 100px;
  height: 38px;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.main};
  }
`

export const ChevronIconWrapper = styled.div`
  position: relative;
  top: 10px;
  left: -20px;
  width: 12px;
  height: 18px;
  cursor: pointer;
`

export const OptionContainer = styled.ul`
  position: absolute;
  font: 12px 'MontserratRegular';
  color: ${({ theme }) => theme.colors.dark};
  width: 100px;
  outline: 3px solid ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.ligth};
  list-style-type: none;
`

export const Option = styled.li`
  padding: 12px 12px 8px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    color: ${({ theme }) => theme.colors.main};
  }
`
export const Icon = styled.svg`
  width: 12px;
  height: 8px;
  fill: "none";
`

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.dark};
`
