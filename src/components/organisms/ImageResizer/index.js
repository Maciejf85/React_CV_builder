import React, { Component } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 700px;
  background: ${({ theme }) => theme.colors.mainGrey};
  border: 1px solid red;

  header {
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    background: ${({ theme }) => theme.colors.primaryBlue};
    font-size: ${({ theme }) => theme.fontSize.ml};
    color: white;
  }
  section {
    display: grid;
    grid-template-columns: 7fr 2fr;
    align-content: stretch;
    height: calc(100% - 45px);

    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 10;
      /* border: 1px solid white; */
      margin: 0 5px;
      img {
        max-height: 90%;
      }
    }
    .preview {
      display: grid;
      grid-template-rows: 1fr 1fr;
      /* border: 1px solid yellow; */
      margin: 0 5px;
    }
  }
  button {
    /* width: 200px; */
    height: 30px;
  }
`;

class ImageResizer extends Component {
  state = {
    proportions: '3x4',
    image: this.props.imageSrc,
  };

  render() {
    const { proportions, image } = this.state;
    const { imageSrc } = this.props;
    console.log('image', image);
    console.log('this.props.imageSrc', imageSrc);
    return (
      <StyledWrapper>
        <header>Kadrowanie zdjęcia</header>
        <section>
          <div className="imageContainer">
            <img src={imageSrc} alt="user" />
          </div>
          <div className="preview">
            <div>image preview</div>
            <button type="button" onClick={this.props.click}>
              Modal
            </button>
          </div>
        </section>
      </StyledWrapper>
    );
  }
}
export default ImageResizer;
