import React, { Component } from 'react';
import { Document, Font } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
import Montserrat from 'assets/fonts/Montserrat-Regular.ttf';
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf';
import store from 'store';

Font.register({
  family: 'Montserrat',
  fonts: [{ src: Montserrat, fontWeight: 'normal' }, { src: MontserratBold, fontWeight: 'bold' }],
});

const Heading = styled.Text`
  font-size: 13pt;
  margin-left: 5pt;
  font-family: 'Montserrat';
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
const Image = styled.Image`
  width: 100%;
  height: 210pt;
`;
const MainContainer = styled.Page`
  display: flex;
  flex-direction: row;
`;
const LeftColumn = styled.View`
  width: 150pt;
  height: 100%;
  color: white;
  background-color: #001f62;
`;
const RightColumn = styled.View`
  width: 446pt;
  height: 100%;
  font-family: 'Montserrat';
  padding: 10px;
`;

const Section = styled.Text`
  display: inline-block;
  color: black;
  font-size: 10pt;
  padding: 5px 0;
`;
const TextSection = styled.View`
  margin: 20px 0;
  padding: 10px 0;
`;
const path = 'https://cors-anywhere.herokuapp.com/http://www.maciejf.pl/cv-builder/';
// Create Document Component
class MyDocument extends Component {
  state = {
    name: 'Maciej',
    surname: 'Fiałkowski',
    email: 'Fialek85@gmail.com',
  };

  render() {
    const { email, name, surname } = this.state;
    const CVdata = store.getState();
    const { cvData } = CVdata;
    const { userData } = store.getState();
    const { id } = userData;
    return (
      <Document title="Moje CV" author="Maciej Fiałkowski">
        <MainContainer size="A4" wrap>
          <LeftColumn>
            <Heading>{name}</Heading>
            <Heading bold>{surname}</Heading>
            <Image src={`${path}users/${id}/images/pic1.jpg`} />
            <Heading>{email}</Heading>
          </LeftColumn>
          <RightColumn>
            {cvData.education.map(item => (
              <TextSection key={item.id}>
                <Section>{` ID: ${item.id}`}</Section>
                <Section>{` Name: ${item.name}`}</Section>
                <Section>{` CONTENT: ${item.description}`}</Section>
              </TextSection>
            ))}
          </RightColumn>
        </MainContainer>
      </Document>
    );
  }
}

export default MyDocument;
