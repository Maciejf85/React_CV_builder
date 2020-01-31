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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);

  .inputContainer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    @media ${({ theme }) => theme.media.small} {
      flex-direction: column;
      align-items: flex-start;
    }
    @media ${({ theme }) => theme.media.medium} {
      flex-direction: column;
      align-items: flex-start;
    }
    @media ${({ theme }) => theme.media.tablet} {
      flex-direction: column;
      align-items: flex-start;
    }

    .selectContainer {
      display: flex;
      flex-direction: row;
      @media ${({ theme }) => theme.media.small} {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      @media ${'(min-width:768px) and (max-width: 1199.98px) and (orientation: portrait)'} {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  .checkboxContainer {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    height: 30px;
    padding: 0 10px;
    margin-bottom: 5px;
  }

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

    @media ${({ theme }) => theme.media.small} {
      flex-direction: column;
      padding: 5px 0;
    }
  }
  p {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.secondaryGrey};
    margin-top: 0;
    margin-bottom: 30px;
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
  @media ${({ theme }) => theme.media.small} {
    width: calc(100vw - 80px);
  }
  @media ${({ theme }) => theme.media.medium} {
    width: calc(100vw - 80px);
    margin: 10px auto 0;
  }
  @media ${({ theme }) => theme.media.tablet} {
    width: calc(100vw - 220px);
    margin: 10px auto 0;
  }
`;

export default StyledInputSection;
