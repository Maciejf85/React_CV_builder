import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {
  image64toCanvasRef,
  extractImageFileExtensionFromBase64,
  base64StringtoFile,
  sidePanel
} from 'functions';
import styled from 'styled-components';
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton'
import axios from 'axios';
import { updateImage } from 'actions';
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
  overflow: hidden;
  border-radius: 7px;

  header {
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    margin-bottom: 10px;
    background: ${({ theme }) => theme.colors.primaryBlue};
    font-size: ${({ theme }) => theme.fontSize.ml};
    font-weight: ${({ theme }) => theme.font.bold};
    color: white;
  }
  section {
    display: grid;
    grid-template-columns: 7fr 2fr;
    max-height: calc(100% - 55px);

    .imageContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-grow: 10;
      /* border: 1px solid white; */
      margin: 0 10px;
      .image {
        text-align: center;
        user-select: none;
        img {
          height: 364px;
        }
      }
    }
    .preview {
      text-align: center;
      height: 630px;
      /* border: 1px solid yellow; */
      margin-right: 10px;
      canvas {
        width: 190px;
        padding:10px;
        border:1px solid white;
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
        width: 200,
        height: 300,
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
      .then(() => {
        sidePanel({ content: 'zdjęcie zapisane', error: false });

      })
      .catch(error => {
        console.log('error :', error);
        sidePanel({ content: 'błąd sieci', error: true });

      })
      .finally();

    store.dispatch(updateImage(imageData));
    this.props.click();
    this.handleClearImage();
  };

  handleClearImage = () => {
    const crop = {
      width: 200,
      x: 0,
      y: 0,
      aspect: '0.67',
    }

    this.handleCropImage(crop);
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
              <div>
                <PrimaryButton
                  type="button"
                  primary={crop.aspect === '1'}
                  data-ratio="1"
                  onClick={this.handleButtons}
                >
                  1/1
                </PrimaryButton>
                <PrimaryButton
                  type="button"
                  primary={crop.aspect === '0.67'}
                  data-ratio="0.67"
                  onClick={this.handleButtons}
                >
                  2/3
                </PrimaryButton>
                <PrimaryButton
                  type="button"
                  primary={crop.aspect === '0.75'}
                  data-ratio="0.75"
                  onClick={this.handleButtons}
                >
                  3/4
                </PrimaryButton>
              </div>
            </div>
          </div>
          <div className="preview">
            <canvas ref={this.imagePreviewOnCanvas} />
            <PrimaryButton type="button" secondary onClick={this.handleUploadImage}>
              zapisz
            </PrimaryButton>
            <PrimaryButton type="button" onClick={this.props.click}>
              anuluj
            </PrimaryButton>
          </div>
        </section>
      </StyledWrapper>
    );
  }
}
export default ImageResizer;

// TODO: wystylizowanie kontenera ze zdjęciem i kontenera z podglądem
// TODO : wystyliowanie buttonow
