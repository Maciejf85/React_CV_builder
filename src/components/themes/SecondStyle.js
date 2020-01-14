import React, { Component } from 'react';
import { Document, Font } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
import Montserrat from 'assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from 'assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf';
import linkedIcon from 'assets/icons/linked_dark.png';
import phoneIcon from 'assets/icons/phone_dark.png';
import emailIcon from 'assets/icons/email_dark.png';
import githubIcon from 'assets/icons/github_dark.png';
import addressIcon from 'assets/icons/address_dark.png';
import store from 'store';

Font.register({
  family: 'Montserrat',
  fonts: [
    { src: Montserrat, fontWeight: 'normal' },
    { src: MontserratSemiBold, fontWeight: 'semiBold' },
    { src: MontserratBold, fontWeight: 'bold' },
  ],
});

const MainContainer = styled.Page`
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: white;
  padding-bottom: 100pt;
  padding-top: 15pt;
`;
const Masking = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  width: 595pt;
  height: 16pt;
`;
const MaskContent = styled.View`
  width: 176pt;
  height: 100%;
  margin-left: 28pt;
  background: #eee5e6;
`;

const LeftColumn = styled.View`
  width: 176pt;
  /* overflow: hidden; */
  color: #444444;
  padding: 0 15pt;
  margin-left: 28pt;
  margin-top: 26pt;
  background: #eee5e6;
  font-family: 'Montserrat';
`;
const RightColumn = styled.View`
  width: 391pt;
  margin-top: 144pt;
  font-family: 'Montserrat';
  padding: 0 19pt;
  background: #eee;
`;

const TopHeader = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 144pt;
  width: 100%;
  background: #444444;
`;

const UserNameContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 144pt;
  width: 391pt;
  margin-left: 204pt;
`;
const UserNameContainerDecoration = styled.View`
  height: 1pt;
  width: 100pt;
  background: white;
  margin: 10pt 0;
`;

const NameAndSurname = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 290pt;
`;

const ImageRound = styled.Image`
  width: 100pt;
  height: 100pt;
  border-radius: 100pt;
`;

const UserName = styled.Text`
  font-size: 20pt;
  font-family: 'Montserrat';
  font-weight: normal;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2pt;
  padding-left: 10pt;
  /* border: 1px solid blanchedalmond; */
`;

const Profession = styled.Text`
  font-size: 10pt;
  font-family: 'Montserrat';
  letter-spacing: 1pt;
  text-transform: uppercase;
  color: white;
`;

const HeadContainerLeft = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120pt;
`;

const Icon = styled.Image`
  width: 13pt;
  height: 13pt;
  background-position: center center;
  margin-right: 5pt;
  /* border: 1px solid red; */
`;

const IconText = styled.Text`
  color: #444;
  font-size: 8.5pt;
  font-family: 'Montserrat';
  text-transform: capitalize;
`;

const PersonalDataSection = styled.View`
  display: flex;
  flex-direction: column;
`;

const SectionLeft = styled.Text`
  margin: 0 0 10pt;
  color: #444444;
  font-size: 9pt;
  padding: 5pt 0;
`;

const ContentTitleBox = styled.View`
  margin: ${({ first }) => (first ? '10pt 0 15pt' : '15pt 0')};
  font-size: 11pt;
  text-transform: uppercase;
`;
const ContentTitle = styled.Text`
  font-size: 10pt;
  text-transform: uppercase;
  letter-spacing: 1pt;
  font-weight: normal;
`;
const TitleDecoration = styled.View`
  width: 100%;
  margin-top: 5pt;
  height: 2pt;
  border-bottom: 1pt solid ${({ dark }) => (dark ? '#444444' : 'white')};
`;

const RightSideContentTitleBox = styled.View`
  margin: ${({ first }) => (first ? '10pt 0 15pt' : '25pt 0 15pt')};
  padding: 5pt 0;
  font-size: 11pt;
  background: #eee5e6;
`;
const RightSideContentTitle = styled.Text`
  font-size: 9.5pt;
  text-transform: uppercase;
  letter-spacing: 1pt;
  font-weight: semiBold;
  color: #444;
  text-align: center;
`;

const SectionTitleLeft = styled.Text`
  text-transform: capitalize;
  width: 100%;
  height: 15pt;
  color: #444444;
  font-size: 9.8pt;
  font-weight: semiBold;
  letter-spacing: 0.2pt;
`;
const SectionTitleLeftIcon = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 5pt 0;
  /* border: 1px solid #444; */
`;
const Link = styled.Link`
  color: #444444;
  font-size: 8.5pt;
  font-family: 'Montserrat';
  max-width: 125pt;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

const TextSection = styled.View`
  position: relative;
  /* margin-bottom: 10pt; */
  padding-right: 10pt;
`;

const SectionLeftBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  flex-basis: ${({ small }) => (small ? '70pt' : '133pt')};
  padding-right: 10pt;
  text-align: left;
`;
const SectionTitle = styled.Text`
  font-size: 9pt;
  color: ${({ white }) => (white ? 'white' : 'black')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'semiBold')};
  letter-spacing: 0.2pt;
  text-align: ${({ right }) => (right ? 'right' : 'left')};
`;

const Section = styled.Text`
  margin: 0 0 0pt;
  color: black;
  font-size: 9pt;
  padding: 5pt 0 5pt 5pt;
  letter-spacing: 0.3pt;
`;
const SectionDate = styled.Text`
  min-height: 9pt;
  margin: 0 0 10pt;
  color: black;
  font-size: 9pt;
  letter-spacing: 0.3pt;
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
  padding: 5pt 10pt;
  height: 101pt;
`;
const FooterText = styled.Text`
  align-items: flex-end;
  font-family: 'Montserrat';
  color: #444444;
  font-size: 8pt;
  line-height: 1.5pt;
  padding: 5px 0;
  text-align: center;
`;

// Create Document Component
class MyDocument extends Component {
  render() {
    const state = store.getState();
    const { language } = this.props;
    const { currentCv, personalData, confidential } = state;
    const { name, surname, email, adress, phone, github, linkedin, profession } = personalData;
    const {
      education,
      experience,
      skills,
      languages,
      certificates,
      courses,
      publications,
      conferences,
      licenses,
      interests,
      currentItem,
    } = currentCv;
    // console.log('state', state);
    return (
      <Document title={currentItem.title} author="Maciej Fiałkowski">
        <MainContainer size="A4">
          <Masking fixed>
            <MaskContent />
          </Masking>
          <TopHeader>
            <UserNameContainer bold>
              <NameAndSurname>
                <UserName>{name}</UserName>
                <UserName>{surname}</UserName>
              </NameAndSurname>
              <UserNameContainerDecoration />
              <Profession bold>{profession}</Profession>
            </UserNameContainer>
          </TopHeader>
          <LeftColumn>
            <HeadContainerLeft>
              {!state.image.image || <ImageRound src={state.image.image} />}
            </HeadContainerLeft>

            <ContentTitleBox wrap={false} first>
              <ContentTitle>{language === 'PL' ? 'dane osobowe' : 'personal'}</ContentTitle>
              <TitleDecoration dark />
            </ContentTitleBox>
            {!phone || (
              <PersonalDataSection>
                <SectionTitleLeftIcon white bold>
                  <Icon src={phoneIcon} />
                  <IconText>{phone}</IconText>
                </SectionTitleLeftIcon>
              </PersonalDataSection>
            )}
            {!email || (
              <PersonalDataSection>
                <SectionTitleLeftIcon white bold>
                  <Icon src={emailIcon} />
                  <IconText> {email}</IconText>
                </SectionTitleLeftIcon>
              </PersonalDataSection>
            )}
            {!adress || (
              <PersonalDataSection>
                <SectionTitleLeftIcon white bold>
                  <Icon src={addressIcon} />
                  <IconText> {adress}</IconText>
                </SectionTitleLeftIcon>
              </PersonalDataSection>
            )}
            {!github || (
              <>
                <SectionTitleLeftIcon white bold>
                  <Icon src={githubIcon} />
                  <Link href={github} target="_blank" rel="noopener noreferrer">
                    {github}
                  </Link>
                </SectionTitleLeftIcon>
              </>
            )}
            {!linkedin || (
              <>
                <SectionTitleLeftIcon white bold>
                  <Icon src={linkedIcon} />
                  <Link href={linkedin} target="_blank" rel="noopener noreferrer">
                    {linkedin}
                  </Link>
                </SectionTitleLeftIcon>
              </>
            )}

            {!languages.length || (
              <ContentTitleBox wrap={false}>
                <ContentTitle>{language === 'PL' ? 'Języki obce' : 'Languages'}</ContentTitle>
                <TitleDecoration dark />
              </ContentTitleBox>
            )}

            {languages.map(item => (
              <TextSection key={item.id} wrap={false}>
                <SectionLeftBox>
                  <SectionTitleLeft bold>{item.name}</SectionTitleLeft>
                </SectionLeftBox>
                <SectionLeft>{`${item.description}`}</SectionLeft>
              </TextSection>
            ))}

            {!skills.length || (
              <ContentTitleBox wrap={false}>
                <ContentTitle>{language === 'PL' ? 'Umiejętności' : 'Skills'}</ContentTitle>
                <TitleDecoration dark />
              </ContentTitleBox>
            )}

            {skills.map(item => (
              <TextSection key={item.id} wrap={false}>
                <SectionLeftBox>
                  <SectionTitleLeft bold>{item.name}</SectionTitleLeft>
                </SectionLeftBox>
                <SectionLeft>{`${item.description || ''}`}</SectionLeft>
              </TextSection>
            ))}
            {!interests.length || (
              <ContentTitleBox wrap={false}>
                <ContentTitle>{language === 'PL' ? 'zainteresowania' : 'interests'}</ContentTitle>
                <TitleDecoration dark />
              </ContentTitleBox>
            )}
            {interests.map(item => (
              <TextSection key={item.id} wrap={false}>
                <SectionLeft>{`${item.description || ''}`}</SectionLeft>
              </TextSection>
            ))}
          </LeftColumn>
          <RightColumn>
            {!experience.length || (
              <RightSideContentTitleBox wrap={false}>
                <RightSideContentTitle>
                  {language === 'PL' ? 'Doświadczenie zawodowe' : 'work experiance'}
                </RightSideContentTitle>
              </RightSideContentTitleBox>
            )}

            {experience.map(item => (
              <TextSection key={item.id} wrap={false}>
                <ContentBox>
                  <LeftSide>
                    <SectionTitle bold>{item.name}</SectionTitle>
                    <SectionDate>
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
                    <SectionTitle bold>{item.position}</SectionTitle>
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
