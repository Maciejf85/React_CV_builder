import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 10px;
  background: '#FFD8B2';
  width: 220px;
  color: ${({ theme }) => theme.font.primary};
  height: '47px';
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-family:"Montserrat";
  font-weight: ${({ theme }) => theme.font.normal};
  text-transform: uppercase;
  outline: none;
  &:hover {
    background: #555;
    cursor: pointer;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      font-weight: ${({ theme }) => theme.font.thin};
    `}

  ${({ third }) =>
    third &&
    css`
      font-weight: ${({ theme }) => theme.font.bold};
    `}

/* {media query} 
    ${({ theme }) => theme.media.tabet} {

      background:red;

    }
    */
`;

export default Button;
