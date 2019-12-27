import React, { Component } from 'react';
import { Document, Font } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
import Montserrat from 'assets/fonts/Montserrat-Regular.ttf';
import MontserratMedium from 'assets/fonts/Montserrat-Medium.ttf';
import MontserratSemiBold from 'assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf';
import store from 'store';

Font.register({
  family: 'Montserrat',
  fonts: [
    { src: Montserrat, fontWeight: 'normal' },
    { src: MontserratMedium, fontWeight: 'medium' },
    { src: MontserratSemiBold, fontWeight: 'semiBold' },
    { src: MontserratBold, fontWeight: 'bold' },
  ],
});

const MainContainer = styled.Page`
  display: flex;
  flex-direction: row;
  background-color: #494949;
  padding-bottom: 100pt;
`;

const LeftColumn = styled.View`
  width: 165pt;
  height: 100%;
  color: white;
  padding: 10px;
`;
const RightColumn = styled.View`
  width: 430pt;
  /* max-height: 842pt; */
  font-family: 'Montserrat';
  padding: 10pt;
  background: white;
`;

const Heading = styled.Text`
  font-size: 11pt;
  margin: 15pt 5pt 0;
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

const ContentTitleBox = styled.View`
  margin: 15pt 0;
  font-size: 11pt;
  text-transform: uppercase;
  /* background: #aaa; */
`;
const ContentTitle = styled.Text`
  font-size: 11pt;
  text-transform: uppercase;
  /* background: #ddd; */
`;
const TitleDecoration = styled.View`
  width: 30pt;
  height: 5pt;
  border-bottom: 3pt solid #494949;
`;

const HeadContainer = styled.View`
  width: 100%;
  height: 155pt;
  /* border: 1px solid red; */
`;

const Section = styled.Text`
  margin: 0 0 10pt;
  color: black;
  font-size: 10pt;
  padding: 5px 0;
`;
const SectionTitle = styled.Text`
  font-size: 11pt;
  color: black;
  font-weight: medium;
`;

const Link = styled.Link`
  font-size: 11pt;
  margin-left: 5pt;
  margin-bottom: 5pt;
  font-family: 'Montserrat';
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
const TextSection = styled.View`
  position: relative;
  border-left: 1pt solid #494949;
  /* margin-bottom: 10pt; */
  padding-left: 10pt;
  /* background: #ccc; */
`;
const Decoration = styled.View`
  position: absolute;
  top: -2.5pt;
  left: -3.5pt;
  width: 6pt;
  height: 6pt;
  border-radius: 50pt;
  background: #494949;
`;
const DecorationBottom = styled.View`
  position: absolute;
  bottom: -3.5pt;
  left: -3.5pt;
  width: 6pt;
  height: 6pt;
  border-radius: 50pt;
  background: #494949;
`;

const Footer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  bottom: 0pt;
  left: 165pt;
  width: 430pt;
  background: white;
  padding: 5pt 10pt;
  height: 101pt;
`;
const FooterText = styled.Text`
  align-items: flex-end;
  font-family: 'Montserrat';
  color: black;
  font-size: 8pt;
  line-height: 1.5pt;
  padding: 5px 0;
  text-align: center;
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

            <ContentTitleBox wrap={false}>
              <ContentTitle>{language === 'PL' ? 'edukacja' : 'education'}</ContentTitle>
              <TitleDecoration />
            </ContentTitleBox>

            {education.map(item => (
              <TextSection key={item.id} wrap={false}>
                <Decoration />
                <DecorationBottom />
                <SectionTitle bold>{item.name}</SectionTitle>
                <Section>{`${item.startYear} ${item.startMonth}  ${
                  !item.inProgress ? item.endYear : ''
                } ${!item.inProgress ? item.endMonth : ''}`}</Section>
                <Section>{`  ${item.description}`}</Section>
              </TextSection>
            ))}
            <ContentTitleBox wrap={false}>
              <ContentTitle>{language === 'PL' ? 'Języki obce' : 'Languages'}</ContentTitle>
              <TitleDecoration />
            </ContentTitleBox>
            {languages.map(item => (
              <TextSection key={item.id} wrap={false}>
                <Decoration />
                <DecorationBottom />
                <SectionTitle>{` ${item.name}`}</SectionTitle>
                <Section>{`  ${item.description}`}</Section>
              </TextSection>
            ))}

            <ContentTitleBox wrap={false}>
              <ContentTitle>{language === 'PL' ? 'Doświadczenie' : 'work experiance'}</ContentTitle>
              <TitleDecoration />
            </ContentTitleBox>

            {experience.map(item => (
              <TextSection key={item.id} wrap={false}>
                <Decoration />
                <DecorationBottom />
                <SectionTitle>{` ${item.name}`}</SectionTitle>
                <Section>{`  ${item.description}`}</Section>
              </TextSection>
            ))}
          </RightColumn>
          <Footer wrap={false} break fixed>
            <FooterText break>{confidential.confidential}</FooterText>
          </Footer>
        </MainContainer>
      </Document>
    );
  }
}

export default MyDocument;
