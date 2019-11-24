import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ small }) => (small ? '25px' : '35px')};
  width: ${({ small }) => (small ? '150px' : '260px')};
  border-radius: 7px;
  margin: 25px auto;
  color: white;
  outline: none;
  border: none;
  font-weight: ${({ theme }) => theme.font.bold};
  background-image: linear-gradient(-180deg, hsl(204, 100%, 58%), hsl(204, 100%, 50%) 90%);

  &:hover {
    cursor: pointer;
    background-image: linear-gradient(-180deg, hsl(204, 100%, 58%), hsl(204, 100%, 40%) 100%);
  }
`;

export default StyledButton;
