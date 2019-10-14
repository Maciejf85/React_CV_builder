import React, { Component } from 'react';
import NavBar from 'components/organisms/Navigation/NavBar';
import { PDFDownloadLink, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';

import styled from 'styled-components';
import FirstStyle from 'components/themes/FirstStyle';

import Montserrat from 'assets/fonts/Montserrat-Regular.ttf';
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf';

Font.register({
  family: 'Montserrat',
  fonts: [{ src: Montserrat, fontWeight: 'normal' }, { src: MontserratBold, fontWeight: 'bold' }],
});

const styles = StyleSheet.create({
  page: { backgroundColor: 'tomato' },
  section: { color: 'white', textAlign: 'center', margin: 30 },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    // height: '60px',
    borderRadius: '5px',
    border: '1px solid black',
    padding: '5px 20px',
    backgroundColor: 'hsl(204, 100%, 58%)',
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: '10px',
    outline: 'none',
  },
  view: {
    minWidth: '800px',
    minHeight: '800px',
    width: '98vw',
    height: '80vh',
    border: 'none',
  },
});
const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

class Preview extends Component {
  state = {
    isReady: false,
  };

  handleButton = () => {
    console.log('this.state.isReady', this.state.isReady);
    this.setState({
      isReady: true,
    });
  };

  render() {
    const name = 'Maciej';
    const { isReady } = this.state;

    return (
      <>
        <NavBar />
        <StyledWrapper>
          <PDFViewer style={styles.view} name={name}>
            <FirstStyle downloadButton={this.handleButton} />
          </PDFViewer>
        </StyledWrapper>
        <button type="button" onClick={this.handleButton}>
          downloadButton{' '}
        </button>

        {isReady ? (
          <StyledWrapper>
            <PDFDownloadLink document={<FirstStyle />} fileName="myCV.pdf">
              {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
          </StyledWrapper>
        ) : null}
      </>
    );
  }
}

export default Preview;
