import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { image64toCanvasRef } from 'functions';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1024px;
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
      border: 1px solid white;
      margin: 0 5px;
      img {
        width: 400px;
      }
    }
    .preview {
      display: grid;
      grid-template-rows: 1fr 1fr;
      /* border: 1px solid yellow; */
      margin: 0 5px;
      canvas {
        border: 1px solid orange;
        height: 300px;
      }
    }
  }
  button {
    /* width: 200px; */
    height: 30px;
  }
`;

class ImageResizer extends Component {
  constructor(props) {
    super(props);
    this.imagePreviewOnCanvas = React.createRef();

    this.state = {
      crop: {
        width: 400,
        x: 0,
        y: 0,
        aspect: 3 / 4,
      },
    };
  }

  handleCropImage = crop => {
    this.setState({ crop });
  };

  handleCropComplete = crop => {
    const canvasRef = this.imagePreviewOnCanvas.current;
    const { imageSrc } = this.props;
    image64toCanvasRef(canvasRef, imageSrc, crop);
  };

  render() {
    const { crop } = this.state;
    const { imageSrc } = this.props;
    return (
      <StyledWrapper>
        <header>Kadrowanie zdjęcia</header>
        <section>
          <div className="imageContainer">
            <div className="image">
              <ReactCrop
                src={imageSrc}
                crop={crop}
                onChange={this.handleCropImage}
                onComplete={this.handleCropComplete}
                on
                keepSelection
              />
            </div>
          </div>
          <div className="preview">
            <canvas ref={this.imagePreviewOnCanvas} />
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
