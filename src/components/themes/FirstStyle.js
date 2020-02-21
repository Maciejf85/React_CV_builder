import React, { Component } from 'react';
import { Document, Font } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
import Montserrat from 'assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from 'assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf';
import linkedIcon from 'assets/icons/linked.png';
import phoneIcon from 'assets/icons/phone.png';
import emailIcon from 'assets/icons/email.png';
import githubIcon from 'assets/icons/github.png';
import addressIcon from 'assets/icons/address.png';
import store from 'store';

Font.register({
  family: 'Montserrat',
  fonts: [
    { src: Montserrat, fontWeight: 'normal' },
    { src: MontserratSemiBold, fontWeight: 'semiBold' },
    { src: MontserratBold, fontWeight: 'bold' },
  ],
});

Font.registerHyphenationCallback(word => {
  if (word.length > 23) {
    const newWord = word.split('in/');
    if (newWord[1] && newWord[1].length > 23) {
      const secPart = newWord[1].substring(0, 23);
      const third = newWord[1].substring(23);
      const result = [];
      result.push(newWord[0], secPart, third);
      return result;
    }
    return newWord;
  }
  return [word];
});
const MainContainer = styled.Page`
  display: flex;
  flex-direction: row;
  background-color: ${({ colorId }) => colorId || '#494949'};
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
  color: white;
  padding: 0 5pt;
  font-family: 'Montserrat';
`;
const RightColumn = styled.View`
  width: 430pt;
  /* height: 100%; */
  font-family: 'Montserrat';
  padding: 0 15pt;
  background: white;
`;

const HeadContainerLeft = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140pt;
`;

const HeadContainerRight = styled.View`
  width: 100%;
  height: 140pt;
`;

const UserNameContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 44pt;
`;

const UserName = styled.Text`
  font-size: 30pt;
  font-family: 'Montserrat';
  font-weight: bold;
  margin-right: 10px;
  color: #494949;
  text-transform: uppercase;
  letter-spacing: 2pt;

  /* border: 1px solid blanchedalmond; */
`;

const Profession = styled.Text`
  font-size: 11pt;
  font-family: 'Montserrat';
  letter-spacing: 1pt;
  text-transform: uppercase;
`;

const ImageRound = styled.Image`
  width: 100pt;
  height: 100pt;
  border-radius: 100pt;
`;

const ContentTitleBox = styled.View`
  margin: 15pt 0;
  font-size: 11pt;
  text-transform: uppercase;
`;
const ContentTitle = styled.Text`
  font-size: 11pt;
  text-transform: uppercase;
  letter-spacing: 0.5pt;
  font-weight: semiBold;
`;
const TitleDecoration = styled.View`
  width: 30pt;
  height: 5pt;
  border-bottom: 3pt solid ${({ white }) => (white ? 'white' : '#494949')};
`;

const SectionTitle = styled.Text`
  font-size: 9pt;
  color: ${({ white }) => (white ? 'white' : '#494949')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'semiBold')};
  letter-spacing: 0.2pt;
  text-align: ${({ right }) => (right ? 'right' : 'left')};
`;

const Section = styled.Text`
  margin: 0;
  color: black;
  font-size: 9pt;
  padding: 5pt 0 5pt 5pt;
  letter-spacing: 0.3pt;
`;
const SectionDate = styled.Text`
  min-height: 9pt;
  margin: 5pt 0 10pt;
  color: black;
  font-size: 9pt;
  letter-spacing: 0.3pt;
`;
const LiveDemo = styled.Link`
  margin-left: 5pt;
  color: black;
  font-size: 9pt;
  padding: 5pt 0 5pt 5pt;
  letter-spacing: 0.3pt;
  text-decoration: none;
`;

const SectionLeftBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.Image`
  width: 15pt;
  height: 9pt;
  background-position: center center;
`;

const SectionTitleLeft = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-transform: capitalize;
  color: white;
  font-size: 9.8pt;
  font-weight: semiBold;
  letter-spacing: 0.2pt;
`;
const SectionTitleLeftDot = styled.View`
  margin: 0 4pt;
  width: 4pt;
  height: 4pt;
  background: white;
  border-radius: 50pt;
`;

const PersonalDataSection = styled.View`
  display: flex;
  flex-direction: column;
`;

const SectionLeft = styled.Text`
  margin: 0 0 10pt;
  color: white;
  font-size: 9pt;
  padding: 5pt 0 0 11pt;
`;

const Link = styled.Link`
  margin: 0 0 10pt;
  font-size: 8.5pt;
  padding: 5pt 0 0 11pt;
  font-size: 8.5pt;
  font-family: 'Montserrat';
  color: white;
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
  width: 410pt;
`;

const RightSide = styled.View`
  position: relative;
  border-left: 1pt solid #494949;
  flex-basis: 277pt;
  padding: 10pt 10pt 10pt 15pt;
`;

const LeftSide = styled.View`
  flex-basis: ${({ small }) => (small ? '70pt' : '133pt')};
  padding: ${({ leftSide }) => (leftSide ? '0 10pt 10pt 5pt' : '10pt 10pt 10pt 5pt')};
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

// Create Document Component
class MyDocument extends Component {
  render() {
    const state = store.getState();
    const { language, color } = this.props;
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
    return (
      <Document title={currentItem.title} author="Maciej Fiałkowski">
        <MainContainer size="A4" colorId={color}>
          <Masking fixed />
          <LeftColumn>
            <HeadContainerLeft>
              {!state.image.image || <ImageRound src={state.image.image} />}
            </HeadContainerLeft>

            <LeftSide leftSide>
              <ContentTitleBox wrap={false}>
                <ContentTitle>{language === 'PL' ? 'dane osobowe' : 'personal'}</ContentTitle>
                <TitleDecoration white />
              </ContentTitleBox>
              {!phone || (
                <PersonalDataSection>
                  <SectionTitleLeft white bold>
                    <Icon src={phoneIcon} /> {language === 'PL' ? 'telefon' : 'phone'}:
                  </SectionTitleLeft>
                  <SectionLeft>{phone}</SectionLeft>
                </PersonalDataSection>
              )}
              {!email || (
                <PersonalDataSection>
                  <SectionTitleLeft white bold>
                    <Icon src={emailIcon} /> Email:
                  </SectionTitleLeft>
                  <SectionLeft>{email}</SectionLeft>
                </PersonalDataSection>
              )}
              {!adress || (
                <PersonalDataSection>
                  <SectionTitleLeft white bold>
                    <Icon src={addressIcon} /> {language === 'PL' ? 'adres' : 'address'}:
                  </SectionTitleLeft>
                  <SectionLeft>{adress}</SectionLeft>
                </PersonalDataSection>
              )}
              {!github || (
                <>
                  <SectionTitleLeft white bold>
                    <Icon src={githubIcon} /> Github:
                  </SectionTitleLeft>
                  <PersonalDataSection>
                    <Link
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      {github}
                    </Link>
                  </PersonalDataSection>
                </>
              )}
              {!linkedin || (
                <>
                  <SectionTitleLeft white bold>
                    <Icon src={linkedIcon} /> Linkedin:
                  </SectionTitleLeft>
                  <PersonalDataSection>
                    <Link
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      {linkedin}
                    </Link>
                  </PersonalDataSection>
                </>
              )}

              {!languages.length || (
                <ContentTitleBox wrap={false}>
                  <ContentTitle>{language === 'PL' ? 'Języki obce' : 'Languages'}</ContentTitle>
                  <TitleDecoration white />
                </ContentTitleBox>
              )}

              {languages.map(item => (
                <TextSection key={item.id} wrap={false}>
                  <SectionLeftBox>
                    <SectionTitleLeftDot />
                    <SectionTitleLeft bold>{item.name}</SectionTitleLeft>
                  </SectionLeftBox>
                  <SectionLeft>{`${item.description}`}</SectionLeft>
                </TextSection>
              ))}

              {!skills.length || (
                <ContentTitleBox wrap={false}>
                  <ContentTitle>{language === 'PL' ? 'Umiejętności' : 'Skills'}</ContentTitle>
                  <TitleDecoration white />
                </ContentTitleBox>
              )}

              {skills.map(item => (
                <TextSection key={item.id} wrap={false}>
                  <SectionLeftBox>
                    <SectionTitleLeftDot />
                    <SectionTitleLeft bold>{item.name}</SectionTitleLeft>
                  </SectionLeftBox>
                  <SectionLeft>{`${item.description || ''}`}</SectionLeft>
                </TextSection>
              ))}
              {!interests.length || (
                <ContentTitleBox wrap={false}>
                  <ContentTitle>{language === 'PL' ? 'zainteresowania' : 'interests'}</ContentTitle>
                  <TitleDecoration white />
                </ContentTitleBox>
              )}
              {interests.map(item => (
                <TextSection key={item.id} wrap={false}>
                  <SectionLeft>{`${item.description || ''}`}</SectionLeft>
                </TextSection>
              ))}
            </LeftSide>
          </LeftColumn>
          <RightColumn>
            <HeadContainerRight>
              <UserNameContainer bold>
                <UserName>{name}</UserName>
                <UserName>{surname}</UserName>
              </UserNameContainer>
              <Profession bold>{profession}</Profession>
            </HeadContainerRight>
            {!experience.length || (
              <ContentTitleBox wrap={false}>
                <ContentTitle>
                  {language === 'PL' ? 'Doświadczenie zawodowe' : 'work experiance'}
                </ContentTitle>
                <TitleDecoration />
              </ContentTitleBox>
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
            {!education.length || (
              <ContentTitleBox wrap={false}>
                <ContentTitle>{language === 'PL' ? 'edukacja' : 'education'}</ContentTitle>
                <TitleDecoration />
              </ContentTitleBox>
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
                    <Decoration />
                    <DecorationBottom />
                    <SectionTitle bold>{item.department}</SectionTitle>
                    <Section>{`${item.description}`}</Section>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}
            {!webApi.length || (
              <ContentTitleBox wrap={false}>
                <ContentTitle>
                  {language === 'PL' ? 'Aplikacje webowe' : 'Web application'}
                </ContentTitle>
                <TitleDecoration />
              </ContentTitleBox>
            )}
            {webApi.map(item => (
              <TextSection key={item.id} wrap={false}>
                <ContentBox>
                  <LeftSide small>
                    <SectionDate>{`${item.endYear}`}</SectionDate>
                  </LeftSide>
                  <RightSide>
                    <Decoration />
                    <DecorationBottom />
                    <SectionTitle bold>{item.name}</SectionTitle>
                    <LiveDemo href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.link}
                    </LiveDemo>
                    <SectionTitle>Użyte technologie : </SectionTitle>
                    <Section>{`${item.technology}`}</Section>
                    <SectionTitle>Opis aplikacji :</SectionTitle>
                    <Section>{`${item.description}`}</Section>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}

            {!certificates.length || (
              <ContentTitleBox wrap={false} orphans={3}>
                <ContentTitle>{language === 'PL' ? 'certyfikaty' : 'certificates'}</ContentTitle>
                <TitleDecoration />
              </ContentTitleBox>
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
                    <Decoration />
                    <DecorationBottom />
                    <SectionTitle bold orphans={20} widows={20}>
                      {item.description}
                    </SectionTitle>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}

            {!courses.length || (
              <ContentTitleBox>
                <ContentTitle>{language === 'PL' ? 'kursy' : 'courses'}</ContentTitle>
                <TitleDecoration />
              </ContentTitleBox>
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
                    <Decoration />
                    <DecorationBottom />
                    <SectionTitle bold orphans={20} widows={20}>
                      {item.description}
                    </SectionTitle>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}

            {!publications.length || (
              <ContentTitleBox>
                <ContentTitle>{language === 'PL' ? 'publikacje' : 'publications'}</ContentTitle>
                <TitleDecoration />
              </ContentTitleBox>
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
                    <Decoration />
                    <DecorationBottom />
                    <SectionTitle bold orphans={20} widows={20}>
                      {item.description}
                    </SectionTitle>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}

            {!conferences.length || (
              <ContentTitleBox>
                <ContentTitle>{language === 'PL' ? 'konferencje' : 'conferences'}</ContentTitle>
                <TitleDecoration />
              </ContentTitleBox>
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
                    <Decoration />
                    <DecorationBottom />
                    <SectionTitle bold orphans={20} widows={20}>
                      {item.description}
                    </SectionTitle>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}

            {!licenses.length || (
              <ContentTitleBox>
                <ContentTitle>{language === 'PL' ? 'licencje' : 'licenses'}</ContentTitle>
                <TitleDecoration />
              </ContentTitleBox>
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
                      <Decoration />
                      <DecorationBottom />
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
