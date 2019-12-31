import React, { Component } from 'react';
import NavBar from 'components/organisms/Navigation/NavBar';
import { PDFDownloadLink, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import FirstStyle from 'components/themes/FirstStyle';

import path from '../path';

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
    height: '93vh',
    border: 'none',
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

  handleButton = () => {
    this.setState({
      isReady: true,
    });
  };

  render() {
    const { currentCv, personalData, language } = this.props;
    const { name } = personalData;
    const { currentItem } = currentCv;

    const { isReady } = this.state;
    if (!Object.entries(currentCv).length) {
      return <Redirect to={path.login} />;
    }

    return (
      <>
        <NavBar language={language} />
        <StyledWrapper>
          <PDFViewer style={styles.view} name={name}>
            <FirstStyle downloadButton={this.handleButton} language={language} />
          </PDFViewer>
        </StyledWrapper>

        {isReady ? (
          <StyledWrapper>
            <PDFDownloadLink document={<FirstStyle />} fileName={`${currentItem.title}.pdf`}>
              {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
          </StyledWrapper>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = ({ currentCv, personalData, appState }) => ({
  currentCv,
  personalData,
  language: appState.language,
});
export default connect(mapStateToProps)(Preview);
