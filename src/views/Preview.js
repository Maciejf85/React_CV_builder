import React from 'react';
import NavBar from 'components/organisms/Navigation/NavBar';
import { PDFDownloadLink, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import styled from 'styled-components';
import FirstStyle from 'components/themes/FirstStyle';

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
    width: '50vw',
  },
});
const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid black;
`;

const Preview = () => {
  return (
    <>
      <NavBar />
      <PDFViewer style={styles.view}>
        <FirstStyle />
      </PDFViewer>

      <StyledWrapper>
        <PDFDownloadLink document={<FirstStyle />} fileName="myCV.pdf">
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </StyledWrapper>
    </>
  );
};

export default Preview;
