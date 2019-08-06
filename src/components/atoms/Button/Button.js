import styled, { css } from 'styled-components';
import posed from 'react-pose';

const PosedButton = posed.button({
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: '-150%',
    opacity: 0,
  },
});

const Button = styled(PosedButton)`
  padding: 10px;
  background: '#FFD8B2';
  width: 180px;
  height: 37px;
  color: ${({ theme }) => theme.font.primary};
  border: none;
  margin:0 10px;
  border-radius: 50px;
  font-size: 16px;
  font-family:"Montserrat";
  font-weight: ${({ theme }) => theme.font.thin};
  text-transform: uppercase;
  outline: none;
  &:hover {
    background: #555;
    cursor: pointer;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      font-weight: ${({ theme }) => theme.font.normal};
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
