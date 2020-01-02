import React, { Component } from 'react';
import NavBar from 'components/organisms/Navigation/NavBar';
import Footer from 'components/organisms/Footer/Footer';
import { StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import FirstStyle from 'components/themes/FirstStyle';
// import Montserrat from 'assets/fonts/Montserrat-Regular.ttf';
// import MontserratSemiBold from 'assets/fonts/Montserrat-SemiBold.ttf';
// import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf';
import path from '../path';

// Font.register({
//   family: 'Montserrat',
//   fonts: [
//     { src: Montserrat, fontWeight: 'normal' },
//     { src: MontserratSemiBold, fontWeight: 'semiBold' },
//     { src: MontserratBold, fontWeight: 'bold' },
//   ],
// });

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
    width: '100vw',
    height: 'calc(100vh - 50px)',
    border: 'none',
    paddingBottom: '41px',
  },
});
const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #525659;
  color: white;
`;

class Preview extends Component {
  state = {
    isReady: false,
  };

  render() {
    const { currentCv, personalData, language } = this.props;
    const { name } = personalData;
    const { template } = this.props.template;
    // const { currentItem } = currentCv;
    if (!Object.entries(currentCv).length) {
      return <Redirect to={path.login} />;
    }

    return (
      <>
        <NavBar language={language} />
        <StyledWrapper>
          <PDFViewer style={styles.view} name={name}>
            {!template === 1 || (
              <FirstStyle downloadButton={this.handleButton} language={language} />
            )}
          </PDFViewer>
        </StyledWrapper>
        <Footer language={language} />

        {/* 
        {isReady ? (
          <StyledWrapper>
            <PDFDownloadLink document={<FirstStyle />} fileName={`${currentItem.title}.pdf`}>
              {({ loading }) =>
                loading
                  ? language === 'PL'
                    ? 'pobieranie...'
                    : 'downloading...'
                  : language === 'PL'
                  ? 'Pobierz PDF'
                  : 'Download PDF'
              }
            </PDFDownloadLink>
          </StyledWrapper>
        ) : null} */}
      </>
    );
  }
}

const mapStateToProps = ({ currentCv, personalData, appState }) => ({
  currentCv,
  personalData,
  language: appState.language,
  template: currentCv.currentItem,
});
export default connect(mapStateToProps)(Preview);
