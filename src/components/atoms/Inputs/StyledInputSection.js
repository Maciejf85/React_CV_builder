import styled from 'styled-components';

const StyledInputSection = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '100%'};
  min-height: ${({ height }) => height || '135px;'};
  padding: 15px;
  border-radius: 7px;
  background: white;
  margin-bottom: 15px;
  overflow: hidden;

  img {
    max-height: 160px;
  }
  .image {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    color: white;
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
    }
  }
  :hover .image {
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: visible;
    transition: visibility 0.6s, opacity 0.6s;
    background: rgba(0, 0, 0, 0.75);
  }
`;

export default StyledInputSection;
