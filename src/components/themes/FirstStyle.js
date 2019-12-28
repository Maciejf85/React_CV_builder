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
  padding-top: 15pt;
  padding-bottom: 100pt;
`;
const Masking = styled.View`
  position: absolute;
  width: 430pt;
  height: 16pt;
  top: 0;
  left: 165pt;
  background: white;
`;

const LeftColumn = styled.View`
  width: 165pt;
  height: 100%;
  color: white;
  padding: 10px;
  font-family: 'Montserrat';
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
  font-size: 22pt;
  margin-top: 46pt;
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
  letter-spacing: 0.9pt;
  font-weight: medium;

  /* background: #ddd; */
`;
const TitleDecoration = styled.View`
  width: 30pt;
  height: 5pt;
  border-bottom: 3pt solid ${({ white }) => (white ? 'white' : '#494949')};
`;

const HeadContainer = styled.View`
  width: 100%;
  height: 155pt;
`;

const SectionTitle = styled.Text`
  text-transform: capitalize;
  font-size: 9.5pt;
  color: ${({ white }) => (white ? 'white' : 'black')};
  font-weight: medium;
`;

const Section = styled.Text`
  margin: 0 0 10pt;
  color: black;
  font-size: 9.5pt;
  padding: 5pt 0 5pt 5pt;
  letter-spacing: 0.3pt;
`;
const SectionDate = styled.Text`
  margin: 0 0 10pt;
  color: black;
  font-size: 9pt;
  letter-spacing: 0.3pt;
  padding-left: 5pt;
`;

const SectionLeftBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SectionTitleLeft = styled.Text`
  font-size: 9.5pt;
  color: white;
  font-weight: medium;
`;
const SectionTitleLeftDot = styled.View`
  margin: 0 4pt;
  width: 4pt;
  height: 4pt;
  background: white;
  border-radius: 50pt;
`;

const SectionLeft = styled.Text`
  margin: 0 0 10pt;
  color: white;
  font-size: 9pt;
  padding: 5pt 0 0 11pt;
`;

const Link = styled.Link`
  margin: 0 0 10pt;
  color: white;
  font-size: 9pt;
  padding: 5pt 0 0 11pt;
  font-family: 'Montserrat';
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
const TextSection = styled.View`
  position: relative;
  /* margin-bottom: 10pt; */
  padding-right: 10pt;
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
const ContentBox = styled.View`
  display: flex;
  flex-direction: row;
  width: 430pt;
`;

const RightSide = styled.View`
  position: relative;
  border-left: 1pt solid #494949;
  flex-basis: 277pt;
  padding-left: 10pt;
`;

const LeftSide = styled.View`
  flex-basis: 133pt;
  padding-right: 10pt;
  text-align: left;
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
    const { name, surname, email, adress, phone, github, linkedin, profession } = personalData;
    const { education, languages, experience, currentItem, skills } = currentCv;
    console.log('state', state);
    console.log('education', education);
    return (
      <Document title={currentItem.title} author="Maciej Fiałkowski">
        <MainContainer size="A4">
          <Masking fixed />
          <LeftColumn>
            <HeadContainer>
              <ImageRound src={state.image.image} />
            </HeadContainer>

            <ContentBox>
              <LeftSide>
                <ContentTitleBox wrap={false}>
                  <ContentTitle visible={education.length > 0}>
                    {language === 'PL' ? 'dane osobowe' : 'personal'}
                  </ContentTitle>
                  <TitleDecoration white />
                </ContentTitleBox>

                <SectionLeftBox>
                  <SectionTitleLeft white bold orphans={3} widows={4}>
                    Phone:
                  </SectionTitleLeft>
                  <SectionLeft>{phone}</SectionLeft>
                </SectionLeftBox>
                <SectionLeftBox>
                  <SectionTitleLeft white bold orphans={3} widows={4}>
                    Email:
                  </SectionTitleLeft>
                  <SectionLeft>{email}</SectionLeft>
                </SectionLeftBox>

                <SectionTitleLeft white bold orphans={3} widows={4}>
                  Github:
                </SectionTitleLeft>
                <SectionLeft>
                  <Link href={github} target="_blank" rel="noopener noreferrer">
                    {github}
                  </Link>
                </SectionLeft>
                <SectionTitleLeft white bold orphans={3} widows={4}>
                  Linkedin:
                </SectionTitleLeft>
                <SectionLeft>
                  <Link href={linkedin} target="_blank" rel="noopener noreferrer">
                    {linkedin}
                  </Link>
                </SectionLeft>
              </LeftSide>
            </ContentBox>

            <ContentTitleBox wrap={false}>
              <ContentTitle>{language === 'PL' ? 'Języki obce' : 'Languages'}</ContentTitle>
              <TitleDecoration white />
            </ContentTitleBox>
            {languages.map(item => (
              <TextSection key={item.id} wrap={false}>
                <SectionLeftBox>
                  <SectionTitleLeftDot />
                  <SectionTitleLeft bold orphans={3} widows={4}>
                    {item.name}
                  </SectionTitleLeft>
                </SectionLeftBox>
                <SectionLeft>{`${item.description}`}</SectionLeft>
              </TextSection>
            ))}

            <ContentTitleBox wrap={false}>
              <ContentTitle>{language === 'PL' ? 'Umiejętności' : 'Skills'}</ContentTitle>
              <TitleDecoration white />
            </ContentTitleBox>
            {skills.map(item => (
              <TextSection key={item.id} wrap={false}>
                <SectionLeftBox>
                  <SectionTitleLeftDot />
                  <SectionTitleLeft bold orphans={3} widows={4}>
                    {item.name}
                  </SectionTitleLeft>
                </SectionLeftBox>
                <SectionLeft>{`${item.description || ''}`}</SectionLeft>
              </TextSection>
            ))}
          </LeftColumn>
          <RightColumn>
            <HeadContainer>
              <UserName bold>
                {name} {surname}
              </UserName>
              <Profession bold>{profession}</Profession>
            </HeadContainer>

            <ContentTitleBox wrap={false}>
              <ContentTitle>
                {language === 'PL' ? 'Doświadczenie zawodowe' : 'work experiance'}
              </ContentTitle>
              <TitleDecoration />
            </ContentTitleBox>

            {experience.map(item => (
              <TextSection key={item.id} wrap={false}>
                <ContentBox>
                  <LeftSide>
                    <SectionTitle bold orphans={3} widows={4}>
                      {item.name}
                    </SectionTitle>
                    <SectionDate orphans={3} widows={4}>
                      {` ${item.startMonth < 10 ? '0' + item.startMonth : item.startMonth}.${
                        item.startYear
                      } - ${
                        !item.inProgress
                          ? item.endMonth < 10
                            ? '0' + item.endMonth + '.'
                            : item.endMonth + '.'
                          : ''
                      }${!item.inProgress ? item.endYear : ''} 
                     `}
                    </SectionDate>
                  </LeftSide>
                  <RightSide>
                    <Decoration />
                    <DecorationBottom />
                    <SectionTitle>{item.position}</SectionTitle>
                    <Section>{`${item.description}`}</Section>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}

            <ContentTitleBox wrap={false}>
              <ContentTitle visible={education.length > 0}>
                {language === 'PL' ? 'edukacja' : 'education'}
              </ContentTitle>
              <TitleDecoration />
            </ContentTitleBox>

            {education.map(item => (
              <TextSection key={item.id} wrap={false}>
                <ContentBox>
                  <LeftSide>
                    <SectionTitle bold orphans={3} widows={4}>
                      {item.name}
                    </SectionTitle>
                    <SectionDate orphans={3} widows={4}>
                      {` ${item.startMonth < 10 ? '0' + item.startMonth : item.startMonth}.${
                        item.startYear
                      } - ${
                        !item.inProgress
                          ? item.endMonth < 10
                            ? '0' + item.endMonth + '.'
                            : item.endMonth + '.'
                          : ''
                      }${!item.inProgress ? item.endYear : ''} 
                     `}
                    </SectionDate>
                  </LeftSide>
                  <RightSide>
                    <Decoration />
                    <DecorationBottom />
                    <SectionTitle bold orphans={3} widows={4}>
                      {item.department}
                    </SectionTitle>
                    <Section>{`${item.description}`}</Section>
                  </RightSide>
                </ContentBox>
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
