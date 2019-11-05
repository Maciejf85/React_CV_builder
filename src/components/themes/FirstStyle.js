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
  font-size: 11pt;
  margin-left: 5pt;
  margin-bottom: 5pt;
  font-family: 'Montserrat';
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
const Image = styled.Image`
  width: 130pt;
  margin: 10pt auto;
`;

const MainContainer = styled.Page`
  display: flex;
  flex-direction: row;
`;
const LeftColumn = styled.View`
  width: 150pt;
  height: 100%;
  color: white;
  background-color: #2c313a;
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
const Link = styled.Link`
  font-size: 11pt;
  margin-left: 5pt;
  margin-bottom: 5pt;
  font-family: 'Montserrat';
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
const TextSection = styled.View`
  margin-bottom: 10px;
  padding: 10px 0;
`;
// const path = 'https://cors-anywhere.herokuapp.com/https://maciejf.pl/cv-builder/';
// Create Document Component
class MyDocument extends Component {
  componentDidMount() {
    setTimeout(this.props.downloadButton, 1000);
  }

  render() {
    const state = store.getState();
    const { currentCv, personalData } = state;
    const { name, surname, email, adress, github, linkedin, profession } = personalData;
    const { education, languages, experience, currentItem } = currentCv;

    return (
      <Document title={currentItem.title} author="Maciej Fiałkowski">
        <MainContainer size="A4" wrap>
          <LeftColumn>
            <Heading bold>{name}</Heading>
            <Heading bold>{surname}</Heading>
            <Image src={state.image.image} />
            <Heading>{email}</Heading>
            <Heading>{adress}</Heading>
            <Link href={github} target="_blank">
              {github}
            </Link>
            <Link href={linkedin}>{linkedin}</Link>
          </LeftColumn>
          <RightColumn>
            <Heading bold>{profession}</Heading>

            {education.map(item => (
              <TextSection key={item.id}>
                <Section>{` Name: ${item.name} ${item.startYear} ${item.endYear}`}</Section>
                <Section>{`  ${item.description}`}</Section>
              </TextSection>
            ))}
            {languages.map(item => (
              <TextSection key={item.id}>
                <Section>{` Name: ${item.name}`}</Section>
                <Section>{`  ${item.description}`}</Section>
              </TextSection>
            ))}
            {experience.map(item => (
              <TextSection key={item.id}>
                <Section>{` Name: ${item.name}`}</Section>
                <Section>{`  ${item.description}`}</Section>
              </TextSection>
            ))}
          </RightColumn>
        </MainContainer>
      </Document>
    );
  }
}

export default MyDocument;
