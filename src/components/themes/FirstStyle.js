import React, { Component } from 'react';
import { Page, Document, Font } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
import Montserrat from 'assets/fonts/Montserrat-Regular.ttf';
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf';
import image from 'assets/pic1.jpg';

Font.register({
  family: 'Montserrat',
  fonts: [{ src: Montserrat, fontWeight: 'normal' }, { src: MontserratBold, fontWeight: 'bold' }],
});

const Heading = styled.Text`
  font-size: 12pt;
  margin-left: 5pt;

  font-family: 'Montserrat';
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
const Image = styled.Image`
  width: 100%;
  height: 210pt;
`;
const LeftColumn = styled.View`
  width: 150pt;
  height: 100%;
  background: hsl(220, 14%, 20%);
  color: white;
`;

// Create Document Component
class MyDocument extends Component {
  state = {
    name: 'Maciej',
    surname: 'Fiałkowski',
    email: 'Fialek85@gmail.com',
  };

  render() {
    const { name, surname, email } = this.state;
    return (
      <Document title="Moje CV" author="Maciej Fiałkowski">
        <Page size="A4" wrap>
          <LeftColumn>
            <Heading>{name}</Heading>
            <Heading bold>{surname}</Heading>
            <Image src={image} />
            <Heading>{email}</Heading>
          </LeftColumn>
        </Page>
      </Document>
    );
  }
}

export default MyDocument;
