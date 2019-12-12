import styled, { css } from 'styled-components';
import posed from 'react-pose';

const PosedButton = posed.button({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
});

const Button = styled(PosedButton)`
  background: '#FFD8B2';
  width: 100px;
  height: 27px;
  color: ${({ theme }) => theme.font.primary};
  border: none;
  margin: 0 10px;
  border-radius: 50px;
  font-size: 10px;
  font-family: 'Montserrat';
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
`;

export default Button;
