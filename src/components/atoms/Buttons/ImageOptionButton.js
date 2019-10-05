import styled from 'styled-components';

const ImageOptionButton = styled.button`
  min-width: 75%;
  height: 30px;
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 0 10px;
  margin: 5px;
  transition: 0.2s;
  font-family: 'Montserrat', sans-serif;
  border-radius: 5px;
  outline: none;

  &:hover {
    background: hsla(0, 0%, 100%, 0.5);
    background: ${({ theme }) => theme.colors.lightBlue};
    cursor: pointer;
  }
`;

export default ImageOptionButton;
