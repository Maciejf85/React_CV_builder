import styled from 'styled-components';

const PrimaryButton = styled.button`
  width: 120px;
  height: 30px;
  background: ${({ theme }) => theme.colors.primaryBlue};
  border: 1px solid ${({ theme }) => theme.colors.secondaryBlue};
  color: white;
  padding: 0 10px;
  margin: 20px;
  transition: 0.2s;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryBlue};
    cursor: pointer;
  }
`;

export default PrimaryButton;
