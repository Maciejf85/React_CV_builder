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
  font-size: 24pt;
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

// const Image = styled.Image`
//   width: 100%;
//   margin: 10pt auto;
// `;
const ImageRound = styled.Image`
  margin-top: 23pt;
  margin-left: 23pt;
  width: 98pt;
  height: 98pt;
  border-radius: 100px;
`;
const SectionTitle = styled.Text`
  font-size: 11pt;
  padding-bottom: 2pt;
  text-transform: uppercase;
`;
const TitleDecoration = styled.View`
  width: 30pt;
  height: 5pt;
  border-top: 2pt solid #494949;
`;

const MainContainer = styled.Page`
  display: flex;
  flex-direction: row;
  border: 1px solid red;
  margin-bottom: 100pt;
`;
const HeadContainer = styled.View`
  width: 100%;
  height: 165pt;
  border: 1px solid red;
`;

const Footer = styled.View`
  position: absolute;
  bottom: 10pt;
  left: 10pt;
  width: 100%;
  background: #aaa;
  border: 1px solid blue;
`;
const LeftColumn = styled.View`
  width: 165pt;
  height: 842pt;
  color: white;
  background-color: #494949;
  padding: 10px;
`;
const RightColumn = styled.View`
  width: 430pt;
  /* max-height: 842pt; */
  font-family: 'Montserrat';
  padding: 10pt;
  /* background: lightsalmon; */
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
  padding: 5pt 0;
  background: #ccc;
`;
// const path = 'https://cors-anywhere.herokuapp.com/https://maciejf.pl/cv-builder/';
// Create Document Component
class MyDocument extends Component {
  componentDidMount() {
    setTimeout(this.props.downloadButton, 1000);
  }

  render() {
    const state = store.getState();
    const { language } = this.props;
    const { currentCv, personalData, confidential } = state;
    const { name, surname, email, adress, github, linkedin, profession } = personalData;
    const { education, languages, experience, currentItem } = currentCv;
    console.log('state', state);
    console.log('confidential', confidential);
    return (
      <Document title={currentItem.title} author="Maciej Fiałkowski">
        <MainContainer size="A4">
          <LeftColumn>
            {/* <Heading bold>{name}</Heading> */}
            {/* <Heading bold>{surname}</Heading> */}
            {/* <Image src={state.image.image} /> */}
            <HeadContainer>
              <ImageRound src={state.image.image} />
            </HeadContainer>
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
            <HeadContainer>
              <UserName bold>
                {name} {surname}
              </UserName>
              <Profession bold>{profession}</Profession>
            </HeadContainer>
            <SectionTitle>{language === 'PL' ? 'Doświadczenie' : 'work experiance'}</SectionTitle>
            <TitleDecoration />
            {education.map(item => (
              <TextSection key={item.id} wrap={false}>
                {console.log('item', item)}
                <Section>{` ${item.name} ${item.startYear} ${item.startMonth}  ${
                  !item.inProgress ? item.endYear : ''
                } ${!item.inProgress ? item.endMonth : ''}`}</Section>
                <Section>{`  ${item.description}`}</Section>
              </TextSection>
            ))}
            {languages.map(item => (
              <TextSection key={item.id} wrap={false}>
                <Section>{` ${item.name}`}</Section>
                <Section>{`  ${item.description}`}</Section>
              </TextSection>
            ))}
            {experience.map(item => (
              <TextSection key={item.id} wrap={false}>
                <Section>{` ${item.name}`}</Section>
                <Section>{`  ${item.description}`}</Section>
              </TextSection>
            ))}
          </RightColumn>
          <Footer>
            <Section>{'123'}</Section>
          </Footer>
        </MainContainer>
      </Document>
    );
  }
}

export default MyDocument;
