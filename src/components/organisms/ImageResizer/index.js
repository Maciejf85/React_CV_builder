import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {
  image64toCanvasRef,
  extractImageFileExtensionFromBase64,
  base64StringtoFile,
} from 'functions';
import styled from 'styled-components';
import axios from 'axios';
import { changeSidePanelState, updateImage } from 'actions';
import store from 'store';
import path from '../../../path';

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1024px;
  height: 700px;
  background: ${({ theme }) => theme.colors.mainGrey};
  border: 1px solid white;

  header {
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    margin-bottom: 10px;
    background: ${({ theme }) => theme.colors.primaryBlue};
    font-size: ${({ theme }) => theme.fontSize.ml};
    color: white;
  }
  section {
    display: grid;
    grid-template-columns: 7fr 2fr;
    max-height: calc(100% - 55px);

    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 10;
      /* border: 1px solid white; */
      margin: 0 10px;
      .image {
        text-align: center;
        img {
          height: 364px;
        }
      }
    }
    .preview {
      display: grid;
      grid-template-rows: 1fr 1fr;
      justify-content: center;
      border: 1px solid yellow;
      margin-right: 10px;
      canvas {
        width: 190px;
      }
    }
  }
  button {
    /* width: 200px; */
    height: 30px;
    &.active {
      color: red;
    }
  }
`;

class ImageResizer extends Component {
  constructor(props) {
    super(props);
    this.imagePreviewOnCanvas = React.createRef();

    this.state = {
      crop: {
        width: 200,
        x: 0,
        y: 0,
        aspect: '0.67',
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

  handleButtons = e => {
    const { width, unit, x, y } = this.state.crop;
    const { ratio } = e.target.dataset;
    parseFloat(ratio);

    const crop = {
      aspect: ratio,
      width,
      height: width / ratio,
      unit,
      x,
      y,
    };
    this.setState({
      crop: {
        aspect: ratio,
        width,
        height: width / ratio,
        unit,
        x,
        y,
      },
    });

    this.handleCropImage(crop);
    this.handleCropComplete(crop);
  };

  handleUploadImage = () => {
    const canvasRef = this.imagePreviewOnCanvas.current;
    const { imageSrc } = this.props;

    const fileExtension = extractImageFileExtensionFromBase64(imageSrc);
    const imageData = canvasRef.toDataURL(`image/${fileExtension}`);
    const fileName = `userImage.${fileExtension}`;
    const finalFile = base64StringtoFile(imageData, fileName);

    const data = new FormData();
    data.append('image', finalFile);
    axios
      .post(`${path.cors}handleImage.php`, data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then(result => {
        console.log('result', result.data);
        store.dispatch(changeSidePanelState(false));
      })
      .catch(error => {
        console.log('error :', error);
        store.dispatch(changeSidePanelState(true));
      })
      .finally(setTimeout(() => store.dispatch(changeSidePanelState(false)), 2100));

    store.dispatch(updateImage(imageData));
    this.props.click();
    this.handleClearImage();
  };

  handleClearImage = () => {
    const canvasRef = this.imagePreviewOnCanvas.current;
    const ctx = canvasRef.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
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
                keepSelection
              />
            </div>
          </div>
          <div className="preview">
            <canvas ref={this.imagePreviewOnCanvas} />
            <button type="button" onClick={this.props.click}>
              anuluj
            </button>
            <button type="button" onClick={this.handleUploadImage}>
              zapisz
            </button>

            <button
              type="button"
              className={crop.aspect === '1' ? 'active' : null}
              data-ratio="1"
              onClick={this.handleButtons}
            >
              1
            </button>
            <button
              type="button"
              className={crop.aspect === '0.67' ? 'active' : null}
              data-ratio="0.67"
              onClick={this.handleButtons}
            >
              2/3
            </button>
            <button
              type="button"
              className={crop.aspect === '0.75' ? 'active' : null}
              data-ratio="0.75"
              onClick={this.handleButtons}
            >
              3/4
            </button>
          </div>
        </section>
      </StyledWrapper>
    );
  }
}
export default ImageResizer;
