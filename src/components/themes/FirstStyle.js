import React from 'react';
import { Page, View, Document, Font } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
import Montserrat from 'assets/fonts/Montserrat-Regular.ttf';
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf';

Font.register({
  family: 'Montserrat',
  fonts: [{ src: Montserrat, fontWeight: 'normal' }, { src: MontserratBold, fontWeight: 'bold' }],
});

const Heading = styled.Text`
  font-size: 22px;
  font-family: 'Montserrat';
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

// Create Document Component
const MyDocument = () => (
  <Document title="Moje CV" author="Maciej Fiałkowski">
    <Page size="A4" wrap unbreakable>
      <View>
        <Heading>Maciej Fiałkowski</Heading>
        <Heading bold>Maciej Fiałkowski</Heading>
      </View>
    </Page>
  </Document>
);
export default MyDocument;
