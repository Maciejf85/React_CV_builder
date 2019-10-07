import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  visibility: hidden;
  opacity: 0;
  transition: all 0.7s;

  &.active {
    opacity: 1;
    visibility: visible;
  }
  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
    padding: 10px 15px;
    :hover {
      cursor: pointer;
    }
  }
`;

export default Modal;
