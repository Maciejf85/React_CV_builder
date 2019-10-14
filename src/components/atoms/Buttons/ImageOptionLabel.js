import styled from 'styled-components';

const ImageOptionButton = styled.label`
  display: inline-block;
  width: 150px;
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
`;

export default ImageOptionButton;
