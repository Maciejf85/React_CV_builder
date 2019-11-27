import styled from 'styled-components';

const ConfirmButton = styled.button`
  width: 70px;
  height: 23px;
  background: ${({ theme, cancel }) => (cancel ? theme.colors.darkGrey : theme.colors.alertColor)};
  border: none;
  color: white;
  transition: 0.2s;
  font-family: 'Montserrat', sans-serif;
  border-radius: 5px;
  outline: none;

  :hover {
    cursor: pointer;
    background: ${({ theme, cancel }) =>
      cancel ? theme.colors.mediumGrey : theme.colors.alertColorHover};
  }
  :disabled {
    cursor: default;
    background: ${({ theme }) => theme.colors.inputGrey};
  }
`;

export default ConfirmButton;
