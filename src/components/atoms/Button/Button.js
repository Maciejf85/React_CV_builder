import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 10px;
  background: '#FFD8B2';
  width: 220px;
  color: grey;
  height: '47px';
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 400;
  text-transform: uppercase;
  outline: none;
  &:hover {
    background: #555;
    cursor: pointer;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      font-weight: ${({ theme }) => theme.thin};
    `}
`;

export default Button;
