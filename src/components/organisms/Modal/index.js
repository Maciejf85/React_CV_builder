import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ white }) => white ? 'rgba(255, 255, 255 ,0.7)' : 'rgba(0, 0, 0, 0.8)'};
  z-index: 9999;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.7s, opacity 0.7s;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export default Modal;
