import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  background: url(${({ theme }) => theme.background.image}) no-repeat 50%;
`

export const Title = styled.h1`
  font: 32px 'MontserratRegular';
  padding: 30px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.ligth};
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  font: 16px 'MontserratRegular';
  flex-basis: 40%;
  padding: 10px;
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 5px;
  &:hover,
  &:active,
  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.main};
  }

`
