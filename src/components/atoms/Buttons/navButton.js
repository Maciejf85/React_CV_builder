import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 10px;
  min-width: 80px;
  height: 45px;
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  margin:0 10px;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family:"Montserrat";
  font-weight: ${({ theme }) => theme.font.thin};
  outline: none;
  background:inherit;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonActive};
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    css`
      font-weight: ${({ theme }) => theme.font.normal};
      background: ${({ theme }) => theme.colors.buttonActive};
    `}



/* {media query} 
    ${({ theme }) => theme.media.tabet} {

      background:red;

    }
    */
`;

export default Button;
