import styled from 'styled-components';

const ImageOptionButton = styled.label`
  display: inline-block;
  width: 150px;
  height: 30px;
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 4px 20px;
  margin: 5px;
  transition: 0.2s;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 5px;
  outline: none;

  &:hover {
    background: hsla(0, 0%, 100%, 0.5);
    background: ${({ theme }) => theme.colors.lightBlue};
    cursor: pointer;
  }
`;

export default ImageOptionButton;
