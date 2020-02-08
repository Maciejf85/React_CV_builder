import React, { Component } from 'react';
import NavBar from 'components/organisms/Navigation/NavBar';
import Footer from 'components/organisms/Footer/Footer';
import { StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import FirstStyle from 'components/themes/FirstStyle';
import SecondStyle from 'components/themes/SecondStyle';
import ThirdStyle from 'components/themes/ThirdStyle';
import path from '../path';

const styles = StyleSheet.create({
  page: { backgroundColor: 'white' },
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
const StyledDownload = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #525659;
  color: white;
  z-index: 9999;
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    border: 1px solid white;
    text-align: center;
    padding: 5px 20px;
    border-radius: 7px;
    &:hover {
      background: ${({ theme }) => theme.colors.primaryBlue};
    }
  }
`;

class Preview extends Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isReady: true }), 1000);
  }

  render() {
    const { currentCv, personalData, language } = this.props;
    if (!Object.entries(currentCv).length) {
      return <Redirect to={path.login} />;
    }
    const { name } = personalData;
    const { template } = this.props.template;
    const { isReady } = this.state;
    const CVtitle = currentCv.currentItem.title;
    const templateNumber = parseInt(template) - 1;
    let isMobile = window.orientation > -1;
    return (
      <>
        <NavBar language={language} />

        {isReady ? (
          <StyledDownload style={{ display: isMobile ? 'block' : 'none' }}>
            <div>
              <PDFDownloadLink
                document={
                  [[<FirstStyle language={language} />], [[<SecondStyle language={language} />]]][
                    templateNumber
                  ]
                }
                fileName={`${CVtitle}.pdf`}
              >
                {({ loading }) => {
                  return loading
                    ? language === 'PL'
                      ? 'pobieranie...'
                      : 'downloading...'
                    : language === 'PL'
                    ? 'Pobierz PDF'
                    : 'Download PDF';
                }}
              </PDFDownloadLink>
            </div>
          </StyledDownload>
        ) : null}
        <StyledWrapper style={{ display: isMobile ? 'none' : 'block' }}>
          <PDFViewer style={styles.view} name={name}>
            {parseInt(template) === 1 && (
              <FirstStyle downloadButton={this.handleButton} language={language} />
            )}
            {parseInt(template) === 2 && (
              <SecondStyle downloadButton={this.handleButton} language={language} />
            )}
            {parseInt(template) === 3 && (
              <ThirdStyle downloadButton={this.handleButton} language={language} />
            )}
          </PDFViewer>
        </StyledWrapper>
        <Footer language={language} />
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
