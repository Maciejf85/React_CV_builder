import styled, { css } from 'styled-components';

const PrimaryButton = styled.button`
display:inline-flex;
justify-content:center;
align-items:center;
  min-width: ${({ width }) => width || '120px'};
  height: 28px;
  background: ${({ theme, titleButton }) =>
    titleButton ? 'transparent' : theme.colors.secondaryGrey};
  border: 1px solid ${({ theme, titleButton }) => (titleButton ? 'white' : theme.colors.darkGrey)};
  color: white;
  margin: 5px;
  transition: 0.2s;
  font-family: 'Montserrat', sans-serif;
  border-radius: 5px;
  outline: none;
  font-size:${({ theme }) => theme.fontSize.s};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryGrey};
    border-color: ${({ theme }) => theme.colors.primaryGrey};
    cursor: pointer;
  }

  &:disabled {
  background: ${({ theme }) => theme.colors.darkGrey};
  cursor:default ;
  }

${({ primary }) =>
  primary &&
  css`
    background: ${({ theme }) => theme.colors.primaryBlue};
    border-color: ${({ theme }) => theme.colors.primaryBlue};

    &:hover {
      background: ${({ theme }) => theme.colors.lightBlue};
      border-color: ${({ theme }) => theme.colors.lightBlue};
    }
  `}

${({ secondary }) =>
  secondary &&
  css`
    background: ${({ theme }) => theme.colors.successColor};
    border-color: ${({ theme }) => theme.colors.successColor};

    &:hover {
      background: ${({ theme }) => theme.colors.successColorHover};
      border-color: ${({ theme }) => theme.colors.successColorHover};
    }
  `}
    

${({ dafault }) =>
  dafault &&
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    float: right;
    clear: both;
    font-size: 1.15rem;
  `}
`;

export default PrimaryButton;
