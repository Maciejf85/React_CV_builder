import React from 'react';
import NavBar from 'components/organisms/Navigation/NavBar';
import { Page, Text, Document, PDFDownloadLink, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import styled from 'styled-components';
import FirstStyle from 'components/themes/FirstStyle';

const styles = StyleSheet.create({
  page: { backgroundColor: 'tomato' },
  section: { color: 'white', textAlign: 'center', margin: 30 },
  button: {
    width: '150px',
    // height: '60px',
    borderRadius: '5px',
    border: '1px solid black',
    padding: '5px 20px',
    backgroundColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 50px;
  border: 1px solid black;
`;

const Preview = () => {
  return (
    <>
      <NavBar />
      <StyledWrapper>
        <PDFDownloadLink document={<FirstStyle />} fileName="somename.pdf" style={styles.button}>
          Download
        </PDFDownloadLink>
      </StyledWrapper>
    </>
  );
};

export default Preview;
