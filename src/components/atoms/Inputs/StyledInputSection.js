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
  border-radius: ${({ titleInput }) => (titleInput ? '7px 7px 0 0 ' : '7px')};
  background: white;
  margin-bottom: 15px;
  overflow: hidden;

  .title {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    color: white;
    font-weight: ${({ theme }) => theme.font.bold};
    background: ${({ theme }) => theme.colors.buttonActive};
    font-size: ${({ theme }) => theme.fontSize.ml};
  }
  p {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.secondaryGrey};
    margin-bottom: 40px;
  }

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
    background: ${({ white }) => (white ? 'rgba(100, 100, 100, 0.35)' : 'rgba(0, 0, 0, 0.75)')};
  }
`;

export default StyledInputSection;
