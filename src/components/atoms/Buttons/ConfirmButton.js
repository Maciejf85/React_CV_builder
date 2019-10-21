import styled from 'styled-components';

const ConfirmButton = styled.button`
  width: 55px;
  height: 25px;
  background: ${({ theme, cancel }) =>
        cancel ? theme.colors.darkGrey : theme.colors.alertColor};
        border:none;
  color: white;
  transition: 0.2s;
  font-family: 'Montserrat', sans-serif;
  border-radius: 5px;
  outline: none;

  :hover{
      cursor: pointer;
  }
`

export default ConfirmButton;