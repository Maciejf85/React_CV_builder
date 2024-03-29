import React, { Component } from 'react';
import { Document, Font } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
import Montserrat from 'assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from 'assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf';
import linkedIcon from 'assets/icons/linked_dark.png';
import linkedIcon_w from 'assets/icons/linked_white.png';
import phoneIcon from 'assets/icons/phone_dark.png';
import phoneIcon_w from 'assets/icons/phone_white.png';
import emailIcon from 'assets/icons/email_dark.png';
import emailIcon_w from 'assets/icons/email_white.png';
import githubIcon from 'assets/icons/github_dark.png';
import githubIcon_w from 'assets/icons/github_white.png';
import addressIcon from 'assets/icons/address_dark.png';
import addressIcon_w from 'assets/icons/address_white.png';
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
  background-color: ${({ colorId }) => colorId || '#eee5e6'};
`;

const LeftColumn = styled.View`
  width: 176pt;
  /* overflow: hidden; */
  color: #444444;
  padding: 0 15pt;
  margin-left: 28pt;
  margin-top: 26pt;
  background-color: ${({ colorId }) => colorId || '#eee5e6'};
  font-family: 'Montserrat';
`;
const RightColumn = styled.View`
  width: 391pt;
  margin-top: 144pt;
  font-family: 'Montserrat';
  padding: 0 19pt;
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
  margin-top: 25pt;
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
  display: ${({ isPhoto }) => (isPhoto ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120pt;
`;

const Icon = styled.Image`
  height: 13px;
  /* width: 13px; */
  margin-right: 5pt;
  /* border: 1px solid red; */
`;

const IconText = styled.Text`
  color: ${({ bgIsDark }) => (bgIsDark ? 'white' : '#444444')};
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
  color: ${({ bgIsDark }) => (bgIsDark ? 'white' : '#444444')};
  font-size: 9pt;
  padding: 5pt 0;
`;

const ContentTitleBox = styled.View`
  margin: ${({ first }) => (first ? '25pt 0 15pt' : '15pt 0')};
  font-size: 11pt;
  text-transform: uppercase;
`;
const ContentTitle = styled.Text`
  font-size: 10pt;
  text-transform: uppercase;
  letter-spacing: 1pt;
  font-weight: normal;
  color: ${({ bgIsDark }) => (bgIsDark ? 'white' : '#444444')};
`;
const TitleDecoration = styled.View`
  width: 100%;
  margin-top: 5pt;
  height: 2pt;
  border-bottom: 1pt solid ${({ dark }) => (dark ? 'white' : '#444444')};
`;

const RightSideContentTitleBox = styled.View`
  margin: ${({ first }) => (first ? '10pt 0 15pt' : '25pt 0 15pt')};
  padding: 5pt 0;
  font-size: 11pt;
  background-color: ${({ colorId }) => colorId || '#eee5e6'};
`;
const RightSideContentTitle = styled.Text`
  font-size: 9.5pt;
  text-transform: uppercase;
  letter-spacing: 1pt;
  font-weight: semiBold;
  color: ${({ bgIsDark }) => (bgIsDark ? 'white' : '#444444')};
  text-align: center;
`;

const SectionTitleLeft = styled.Text`
  text-transform: capitalize;
  width: 100%;
  height: 15pt;
  color: ${({ bgIsDark }) => (bgIsDark ? 'white' : '#444444')};
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
  max-width: 120pt;
  /* border: 1px solid #444; */
`;
const Link = styled.Link`
  color: ${({ bgIsDark }) => (bgIsDark ? 'white' : '#444444')};
  font-size: 8.5pt;
`;

const TextSection = styled.View`
  position: relative;
  /* margin-bottom: 10pt; */
  padding-right: 10pt;
  color: ${({ bgIsDark }) => (bgIsDark ? 'white' : '#444444')};
`;

const SectionLeftBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContentBox = styled.View`
  display: flex;
  flex-direction: row;
  width: 430pt;
`;

const RightSide = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  max-width: 230pt;
  color: ${({ bgIsDark }) => (bgIsDark ? 'white' : '#444444')};
  padding-left: 5pt;
`;

const LeftSide = styled.View`
  flex-basis: ${({ small }) => (small ? '95pt' : '133pt')};
  /* padding-right: 5pt; */
  text-align: left;
`;
const SectionTitle = styled.Text`
  font-size: 9pt;
  width:100%;
  color: ${({ bgIsDark }) => (bgIsDark ? 'white' : '#444444;')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  letter-spacing: 0.2pt;
  text-align: ${({ right }) => (right ? 'right' : 'left')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  /* text-indent: ${({ uppercase }) => (uppercase ? '0' : '5pt')}; */
`;

const Section = styled.Text`
  color: ${({ bgIsDark }) => (bgIsDark ? 'white' : '#444444;')};
  font-size: 9pt;
  padding: 5pt 0 5pt 5pt;
  letter-spacing: 0.3pt;
`;
const SectionDate = styled.Text`
  min-height: 9pt;
  margin: 0 0 10pt;
  color: black;
  font-size: 8pt;
  letter-spacing: 0.3pt;
`;

const LiveDemo = styled.Link`
  width: 100%;
  margin-left: 5pt;
  color: black;
  font-size: 9pt;
  padding: 5pt 0 5pt 5pt;
  letter-spacing: 0.3pt;
  text-decoration: none;
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
    const { language, color, index } = this.props;
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
      webApi,
    } = currentCv;
    const bgIsDark = index !== 3 && index !== 7;
    const isPhoto = state.image.image || false;

    return (
      <Document title={currentItem.title} author="Maciej Fiałkowski">
        <MainContainer size="A4">
          <Masking fixed>
            <MaskContent colorId={color} />
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
          <LeftColumn colorId={color}>
            <HeadContainerLeft isPhoto={isPhoto}>
              {!state.image.image || <ImageRound src={state.image.image} />}
            </HeadContainerLeft>

            <ContentTitleBox wrap={false} first>
              <ContentTitle bgIsDark={bgIsDark}>
                {language === 'PL' ? 'dane osobowe' : 'personal'}
              </ContentTitle>
              <TitleDecoration dark={bgIsDark} />
            </ContentTitleBox>
            {!phone || (
              <PersonalDataSection>
                <SectionTitleLeftIcon bold>
                  <Icon src={bgIsDark ? phoneIcon_w : phoneIcon} bgIsDark={bgIsDark} />
                  <IconText bgIsDark={bgIsDark}>{phone}</IconText>
                </SectionTitleLeftIcon>
              </PersonalDataSection>
            )}
            {!email || (
              <PersonalDataSection>
                <SectionTitleLeftIcon bold>
                  <Icon src={bgIsDark ? emailIcon_w : emailIcon} bgIsDark={bgIsDark} />
                  <IconText bgIsDark={bgIsDark}> {email}</IconText>
                </SectionTitleLeftIcon>
              </PersonalDataSection>
            )}
            {!adress || (
              <PersonalDataSection>
                <SectionTitleLeftIcon bold>
                  <Icon src={bgIsDark ? addressIcon_w : addressIcon} bgIsDark={bgIsDark} />
                  <IconText bgIsDark={bgIsDark}> {adress}</IconText>
                </SectionTitleLeftIcon>
              </PersonalDataSection>
            )}
            {!github || (
              <>
                <SectionTitleLeftIcon bold>
                  <Icon src={bgIsDark ? githubIcon_w : githubIcon} bgIsDark={bgIsDark} />
                  <Link
                    bgIsDark={bgIsDark}
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    {github}
                  </Link>
                </SectionTitleLeftIcon>
              </>
            )}
            {!linkedin || (
              <>
                <SectionTitleLeftIcon bold>
                  <Icon src={bgIsDark ? linkedIcon_w : linkedIcon} bgIsDark={bgIsDark} />
                  <Link
                    bgIsDark={bgIsDark}
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    {linkedin}
                  </Link>
                </SectionTitleLeftIcon>
              </>
            )}

            {!languages.length || (
              <ContentTitleBox wrap={false} bgIsDark={bgIsDark}>
                <ContentTitle bgIsDark={bgIsDark}>
                  {language === 'PL' ? 'Języki obce' : 'Languages'}
                </ContentTitle>
                <TitleDecoration dark={bgIsDark} />
              </ContentTitleBox>
            )}

            {languages.map(item => (
              <TextSection key={item.id} wrap={false}>
                <SectionLeftBox>
                  <SectionTitleLeft bold bgIsDark={bgIsDark}>
                    {item.name}
                  </SectionTitleLeft>
                </SectionLeftBox>
                <SectionLeft bgIsDark={bgIsDark}>{`${item.description}`}</SectionLeft>
              </TextSection>
            ))}

            {!skills.length || (
              <ContentTitleBox wrap={false} bgIsDark={bgIsDark}>
                <ContentTitle bgIsDark={bgIsDark}>
                  {language === 'PL' ? 'Umiejętności' : 'Skills'}
                </ContentTitle>
                <TitleDecoration dark={bgIsDark} />
              </ContentTitleBox>
            )}

            {skills.map(item => (
              <TextSection key={item.id} wrap={false}>
                <SectionLeftBox>
                  <SectionTitleLeft bold bgIsDark={bgIsDark}>
                    {item.name}
                  </SectionTitleLeft>
                </SectionLeftBox>
                <SectionLeft bgIsDark={bgIsDark}>{`${item.description || ''}`}</SectionLeft>
              </TextSection>
            ))}
            {!interests.length || (
              <ContentTitleBox wrap={false} bgIsDark={bgIsDark}>
                <ContentTitle bgIsDark={bgIsDark}>
                  {language === 'PL' ? 'zainteresowania' : 'interests'}
                </ContentTitle>
                <TitleDecoration dark={bgIsDark} />
              </ContentTitleBox>
            )}
            {interests.map(item => (
              <TextSection key={item.id} wrap={false}>
                <SectionLeft bgIsDark={bgIsDark}>{`${item.description || ''}`}</SectionLeft>
              </TextSection>
            ))}
          </LeftColumn>
          <RightColumn colorId={color}>
            {!experience.length || (
              <RightSideContentTitleBox wrap={false} colorId={color}>
                <RightSideContentTitle bgIsDark={bgIsDark}>
                  {language === 'PL' ? 'Doświadczenie zawodowe' : 'work experiance'}
                </RightSideContentTitle>
              </RightSideContentTitleBox>
            )}

            {experience.map(item => (
              <TextSection key={item.id} wrap={false}>
                <ContentBox>
                  <LeftSide small>
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
                    <SectionTitle uppercase bold>{`${item.position} `}</SectionTitle>
                    <SectionTitle>{`${item.name}`}</SectionTitle>
                    <Section>{`${item.description}`}</Section>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}

            {!education.length || (
              <RightSideContentTitleBox wrap={false} colorId={color}>
                <RightSideContentTitle bgIsDark={bgIsDark}>
                  {language === 'PL' ? 'edukacja' : 'education'}
                </RightSideContentTitle>
              </RightSideContentTitleBox>
            )}
            {education.map(item => (
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
                    <SectionTitle bold>{item.department}</SectionTitle>
                    <Section>{`${item.description}`}</Section>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}
            {!webApi.length || (
              <RightSideContentTitleBox wrap={false} colorId={color}>
                <RightSideContentTitle bgIsDark={bgIsDark}>
                  {language === 'PL' ? 'Aplikacje webowe' : 'Web application'}
                </RightSideContentTitle>
              </RightSideContentTitleBox>
            )}
            {webApi.map(item => (
              <TextSection key={item.id}>
                <ContentBox>
                  <LeftSide small>
                    <SectionDate>{`${item.endYear}`}</SectionDate>
                  </LeftSide>
                  <RightSide>
                    <SectionTitle bold>{item.name}</SectionTitle>
                    <LiveDemo href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.link}
                    </LiveDemo>
                    <SectionTitle wrap={false}>Użyte technologie : </SectionTitle>
                    <Section minPresenceAhead={1}>{`${item.technology}`}</Section>
                    <SectionTitle wrap={false}>Opis aplikacji :</SectionTitle>
                    <Section minPresenceAhead={1}>{`${item.description}`}</Section>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}

            {!certificates.length || (
              <RightSideContentTitleBox wrap={false} colorId={color}>
                <RightSideContentTitle bgIsDark={bgIsDark}>
                  {language === 'PL' ? 'certyfikaty' : 'certificates'}
                </RightSideContentTitle>
              </RightSideContentTitleBox>
            )}

            {certificates.map(item => (
              <TextSection key={item.id} wrap={false}>
                <ContentBox>
                  <LeftSide small>
                    <SectionTitle>
                      {` ${item.endMonth < 10 ? '0' + item.endMonth + '.' : item.endMonth + '.'}${
                        item.endYear
                      }`}
                    </SectionTitle>
                    <SectionDate />
                  </LeftSide>
                  <RightSide>
                    <SectionTitle bold>{item.description}</SectionTitle>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}

            {!courses.length || (
              <RightSideContentTitleBox wrap={false} colorId={color}>
                <RightSideContentTitle bgIsDark={bgIsDark}>
                  {language === 'PL' ? 'kursy' : 'courses'}
                </RightSideContentTitle>
              </RightSideContentTitleBox>
            )}

            {courses.map(item => (
              <TextSection key={item.id} wrap={false}>
                <ContentBox>
                  <LeftSide small>
                    <SectionTitle>
                      {` ${item.endMonth < 10 ? '0' + item.endMonth + '.' : item.endMonth + '.'}${
                        item.endYear
                      }`}
                    </SectionTitle>
                    <SectionDate />
                  </LeftSide>
                  <RightSide>
                    <SectionTitle bold orphans={20} widows={20}>
                      {item.description}
                    </SectionTitle>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}

            {!publications.length || (
              <RightSideContentTitleBox wrap={false} colorId={color}>
                <RightSideContentTitle bgIsDark={bgIsDark}>
                  {language === 'PL' ? 'publikacje' : 'publications'}
                </RightSideContentTitle>
              </RightSideContentTitleBox>
            )}

            {publications.map(item => (
              <TextSection key={item.id} wrap={false}>
                <ContentBox>
                  <LeftSide small>
                    <SectionTitle>
                      {` ${item.endMonth < 10 ? '0' + item.endMonth + '.' : item.endMonth + '.'}${
                        item.endYear
                      }`}
                    </SectionTitle>
                    <SectionDate />
                  </LeftSide>
                  <RightSide>
                    <SectionTitle bold orphans={20} widows={20}>
                      {item.description}
                    </SectionTitle>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}

            {!conferences.length || (
              <RightSideContentTitleBox wrap={false} colorId={color}>
                <RightSideContentTitle bgIsDark={bgIsDark}>
                  {language === 'PL' ? 'konferencje' : 'conferences'}
                </RightSideContentTitle>
              </RightSideContentTitleBox>
            )}

            {conferences.map(item => (
              <TextSection key={item.id} wrap={false}>
                <ContentBox>
                  <LeftSide small>
                    <SectionTitle>
                      {` ${item.endMonth < 10 ? '0' + item.endMonth + '.' : item.endMonth + '.'}${
                        item.endYear
                      }`}
                    </SectionTitle>
                    <SectionDate />
                  </LeftSide>
                  <RightSide>
                    <SectionTitle bold orphans={20} widows={20}>
                      {item.description}
                    </SectionTitle>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}

            {!licenses.length || (
              <RightSideContentTitleBox colorId={color}>
                <RightSideContentTitle bgIsDark={bgIsDark}>
                  {language === 'PL' ? 'licencje' : 'licenses'}
                </RightSideContentTitle>
              </RightSideContentTitleBox>
            )}

            {!licenses.length ||
              licenses.map(item => (
                <TextSection key={item.id} wrap={false}>
                  <ContentBox>
                    <LeftSide small>
                      <SectionTitle>
                        {` ${item.endMonth < 10 ? '0' + item.endMonth + '.' : item.endMonth + '.'}${
                          item.endYear
                        }`}
                      </SectionTitle>
                      <SectionDate />
                    </LeftSide>
                    <RightSide>
                      <SectionTitle bold orphans={20} widows={20}>
                        {item.description}
                      </SectionTitle>
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
