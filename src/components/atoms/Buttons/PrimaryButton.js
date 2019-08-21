import styled from 'styled-components';

const PrimaryButton = styled.button`
  width: 80px;
  height: 25px;
  background: ${({ theme }) => theme.colors.secondaryGrey};
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  color: white;
  padding: 0 10px;
  margin: 5px;
  transition: 0.2s;
  font-family: 'Montserrat', sans-serif;
  border-radius: 5px;
  outline: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryGrey};
    cursor: pointer;
  }
`;

export default PrimaryButton;
