import React, { Component } from 'react';
import { Document, Font } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
import Montserrat from 'assets/fonts/Montserrat-Regular.ttf';
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf';
import store from 'store';

Font.register({
  family: 'Montserrat',
  fonts: [
    { src: Montserrat, fontWeight: 'normal' },
    { src: MontserratBold, fontWeight: 'bold' },
  ],
});

const Heading = styled.Text`
  font-size: 11pt;
  margin-left: 5pt;
  margin-bottom: 5pt;
  font-family: 'Montserrat';
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
const UserName = styled.Text`
  font-size: 28pt;
  margin-top: 42pt;
  font-family: 'Montserrat';
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: #494949;
  text-transform: uppercase;
  letter-spacing: 2pt;
`;
const Profession = styled.Text`
  font-size: 11pt;
  font-family: 'Montserrat';
  letter-spacing: 1pt;
  text-transform: uppercase;
`;

const Image = styled.Image`
  width: 100%;
  margin: 10pt auto;
`;
const ImageRound = styled.Image`
  margin-top: 23pt;
  margin-left: 23pt;
  width: 98pt;
  height: 98pt;
  border-radius: 100px;
`;

const MainContainer = styled.Page`
  display: flex;
  flex-direction: row;
`;
const ImageContainer = styled.View`
  width: 165pt;
  height: 165pt;
`;
const LeftColumn = styled.View`
  padding: 10px;
  width: 165pt;
  height: 100%;
  color: white;
  background-color: #494949;
`;
const RightColumn = styled.View`
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  padding: 10pt;
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
    console.log('state', state);

    return (
      <Document title={currentItem.title} author="Maciej Fiałkowski">
        <MainContainer size="A4" wrap>
          <LeftColumn>
            {/* <Heading bold>{name}</Heading> */}
            {/* <Heading bold>{surname}</Heading> */}
            {/* <Image src={state.image.image} /> */}
            <ImageContainer>
              <ImageRound src={state.image.image} />
            </ImageContainer>
            <Heading>{email}</Heading>
            <Heading>{adress}</Heading>
            <Link href={github} target="_blank" rel="noopener noreferrer">
              {github}
            </Link>
            <Link href={linkedin} target="_blank" rel="noopener noreferrer">
              {linkedin}
            </Link>
          </LeftColumn>
          <RightColumn>
            <UserName bold>
              {name} {surname}
            </UserName>
            <Profession bold>{profession}</Profession>

            {education.map(item => (
              <TextSection key={item.id}>
                <Section>{` ${item.name} ${item.startYear} - ${item.startMonth} ${item.endYear} - ${item.endMonth} `}</Section>
                <Section>{`  ${item.description}`}</Section>
              </TextSection>
            ))}
            {languages.map(item => (
              <TextSection key={item.id}>
                <Section>{` ${item.name}`}</Section>
                <Section>{`  ${item.description}`}</Section>
              </TextSection>
            ))}
            {experience.map(item => (
              <TextSection key={item.id}>
                <Section>{` ${item.name}`}</Section>
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
