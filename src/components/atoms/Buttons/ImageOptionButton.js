import styled from 'styled-components';

const ImageOptionButton = styled.button`
  min-width: 150px;
  height: 30px;
  border: 2px solid white;
  color:white;
  padding: 4px 20px;
  margin: 5px;
  transition: 0.2s;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 5px;
  text-align:center;
  outline: none;
  background: ${({ active, theme }) => active ? theme.colors.lightBlue : 'transparent'};


  &:hover {
    background: ${({ active, theme }) => active ? theme.colors.secondaryBlue : theme.colors.lightBlue};
    cursor: pointer;
  }
  :disabled{
    cursor:default;
    background: ${({ theme }) => theme.colors.inputGrey};
  }  
`;

export default ImageOptionButton;
