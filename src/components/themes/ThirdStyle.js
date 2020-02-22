import React, { Component } from 'react';
import { Document, Font } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
import Montserrat from 'assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from 'assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf';
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
  background-color: ${({ colorId }) => colorId || '#2f2f2f'};
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
  padding: 0 10px;
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

const UserNameContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid grey;
  border-radius: 3pt;
  margin-top: 45pt;
  margin-bottom: 7pt;
  padding-left: 5pt;
  padding-right: 5pt;
  padding-top: 5pt;
  padding-bottom: 5pt;
`;

const UserName = styled.Text`
  font-size: 11pt;
  font-family: 'Montserrat';
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  margin-right: 5pt;
  /* border: 1px solid blanchedalmond; */
`;

const Profession = styled.Text`
  font-size: 9pt;
  font-family: 'Montserrat';
  letter-spacing: 1pt;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 15pt;
`;

const ImageRound = styled.Image`
  margin-top: 40pt;
  width: 120pt;
  height: 160pt;
  border: 2px solid white;
`;

const ContentTitleBox = styled.View`
  margin: 10pt 0 15pt;
  font-size: 11pt;
  text-transform: uppercase;
  text-align: center;
  min-width: 145pt;
`;
const ContentTitle = styled.Text`
  min-width: 145pt;
  font-size: ${({ rightSide }) => (rightSide ? '13pt' : '11pt')};
  text-transform: uppercase;
  letter-spacing: 0.5pt;
  font-weight: semiBold;
  font-weight: ${({ rightSide }) => (rightSide ? 'bold' : 'semiBold')};
  padding-bottom: 3pt;
  margin-top: 10pt;
  text-align: ${({ leftSide }) => (leftSide ? 'center' : 'left')};
  color: ${({ leftSide }) => (leftSide ? 'white' : '#494949')};
  border-bottom: ${({ leftSide }) => (leftSide ? '1pt solid #ddd' : 'none')};
`;
const TitleDecoration = styled.View`
  width: 30pt;
  height: 5pt;
  border-bottom: 3pt solid ${({ white }) => (white ? 'white' : '#494949')};
`;

const SectionTitle = styled.Text`
  margin-top: 10pt;
  font-size: 9pt;
  color: ${({ white }) => (white ? 'white' : 'black')};
  font-weight: ${({ bold }) => (bold ? 'semiBold' : 'normal')};
  letter-spacing: 0.2pt;
  text-align: ${({ right }) => (right ? 'right' : 'left')};
  text-transform: uppercase;
`;
const SectionSubTitle = styled.Text`
  font-size: 8.5pt;
  color: #494949;
  margin-left: 10pt;
  font-weight: ${({ bold }) => (bold ? 'semiBold' : 'normal')};
  margin: 2pt 0 7pt;
  /* letter-spacing: 0.2pt; */
  text-transform: uppercase;
`;

const Section = styled.Text`
  margin: 0 0 0pt;
  color: black;
  font-size: 9pt;
  padding: 5pt 0 5pt 0pt;
  letter-spacing: 0.3pt;
`;
const SectionDate = styled.Text`
  min-height: 8.5pt;
  margin: 10pt 0;
  color: black;
  font-size: 10pt;
  letter-spacing: 0.3pt;
  text-align: left;
`;

const SectionLeftBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SectionTitleLeft = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  color: white;
  font-size: 9.8pt;
  font-weight: normal;
  letter-spacing: -0.1pt;
  min-width: ${({ listItems }) => (listItems ? '135pt' : '145pt')};
  padding-right: ${({ listItems }) => (listItems ? '15pt' : '0')};
  margin-top: 10pt;
`;

const SectionTitleLeftDot = styled.View`
  margin: 0 4pt;
  width: 4pt;
  height: 4pt;
  background: white;
  border-radius: 50pt;
  margin-top: 9pt;
`;

const PersonalDataSection = styled.View`
  display: flex;
  flex-direction: column;
  min-width: 145pt;
`;

const SectionLeft = styled.Text`
  padding: 3pt 0;
  color: white;
  font-size: 8pt;
  min-width: 145pt;
  text-align: center;
  text-align: ${({ leftSide }) => (leftSide ? 'left' : 'center')};
`;

const Link = styled.Link`
  margin: 0 0 10pt;
  color: white;
  font-size: 8.5pt;
  padding: 5pt 0 0 11pt;
  font-family: 'Montserrat';
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-decoration: none;
  text-decoration-color: transparent;
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
  padding-left: 15pt;
  padding-right: 5pt;
`;

const LeftSide = styled.View`
  flex-basis: ${({ small }) => (small ? '70pt' : '133pt')};
  text-align: center;
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
    } = currentCv;
    // console.log('state', state);
    return (
      <Document title={currentItem.title} author="Maciej Fiałkowski">
        <MainContainer size="A4" colorId={color}>
          <Masking fixed />
          <LeftColumn>
            <HeadContainerLeft>
              {!state.image.image || <ImageRound src={state.image.image} />}
            </HeadContainerLeft>
            <UserNameContainer bold>
              <UserName>{name}</UserName>
              <UserName>{surname}</UserName>
            </UserNameContainer>
            <Profession>{profession}</Profession>

            <ContentBox>
              <LeftSide>
                <ContentTitleBox wrap={false}>
                  <ContentTitle leftSide>{language === 'PL' ? 'Informacje' : 'Info'}</ContentTitle>
                </ContentTitleBox>
                {!phone || (
                  <PersonalDataSection>
                    <SectionTitleLeft white bold>
                      {language === 'PL' ? 'telefon' : 'phone'}
                    </SectionTitleLeft>

                    <SectionLeft>{phone}</SectionLeft>
                  </PersonalDataSection>
                )}
                {!email || (
                  <PersonalDataSection>
                    <SectionTitleLeft white bold>
                      Email
                    </SectionTitleLeft>
                    <SectionLeft>{email}</SectionLeft>
                  </PersonalDataSection>
                )}
                {!adress || (
                  <PersonalDataSection>
                    <SectionTitleLeft white bold>
                      {language === 'PL' ? 'adres' : 'address'}
                    </SectionTitleLeft>

                    <SectionLeft>{adress}</SectionLeft>
                  </PersonalDataSection>
                )}
                {!github || (
                  <>
                    <PersonalDataSection>
                      <SectionTitleLeft white bold>
                        Github
                      </SectionTitleLeft>

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
                    <PersonalDataSection>
                      <SectionTitleLeft white bold>
                        Linkedin
                      </SectionTitleLeft>

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
              </LeftSide>
            </ContentBox>

            {!languages.length || (
              <ContentTitleBox wrap={false}>
                <ContentTitle leftSide>
                  {language === 'PL' ? 'Języki obce' : 'Languages'}
                </ContentTitle>
              </ContentTitleBox>
            )}

            {languages.map(item => (
              <TextSection key={item.id} wrap={false}>
                <SectionLeftBox>
                  <SectionTitleLeftDot />
                  <SectionTitleLeft bold listItems>
                    {item.name}
                  </SectionTitleLeft>
                </SectionLeftBox>
                <SectionLeft>{`${item.description}`}</SectionLeft>
              </TextSection>
            ))}

            {!skills.length || (
              <ContentTitleBox wrap={false}>
                <ContentTitle leftSide>
                  {language === 'PL' ? 'Umiejętności' : 'Skills'}
                </ContentTitle>
              </ContentTitleBox>
            )}

            {skills.map(item => (
              <TextSection key={item.id} wrap={false}>
                <SectionLeftBox>
                  <SectionTitleLeftDot />
                  <SectionTitleLeft bold listItems>
                    {item.name}
                  </SectionTitleLeft>
                </SectionLeftBox>
                <SectionLeft>{`${item.description || ''}`}</SectionLeft>
              </TextSection>
            ))}
            {!interests.length || (
              <ContentTitleBox wrap={false}>
                <ContentTitle leftSide>
                  {language === 'PL' ? 'zainteresowania' : 'interests'}
                </ContentTitle>
              </ContentTitleBox>
            )}
            {interests.map(item => (
              <TextSection key={item.id} wrap={false}>
                <SectionLeftBox>
                  <SectionTitleLeft bold>{item.name}</SectionTitleLeft>
                </SectionLeftBox>
                <SectionLeft>{`${item.description || ''}`}</SectionLeft>
              </TextSection>
            ))}
          </LeftColumn>
          <RightColumn>
            {!experience.length || (
              <ContentTitleBox wrap={false}>
                <ContentTitle rightSide>
                  {language === 'PL' ? 'Doświadczenie zawodowe' : 'work experiance'}
                </ContentTitle>
                <TitleDecoration />
              </ContentTitleBox>
            )}

            {experience.map(item => (
              <TextSection key={item.id} wrap={false}>
                <ContentBox>
                  <LeftSide>
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
                    <SectionTitle bold>{item.name}</SectionTitle>
                    <SectionSubTitle bold>{item.position}</SectionSubTitle>
                    <Section>{`${item.description}`}</Section>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}
            {!education.length || (
              <ContentTitleBox wrap={false}>
                <ContentTitle rightSide>
                  {language === 'PL' ? 'edukacja' : 'education'}
                </ContentTitle>
                <TitleDecoration />
              </ContentTitleBox>
            )}
            {education.map(item => (
              <TextSection key={item.id} wrap={false}>
                <ContentBox>
                  <LeftSide>
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
                    <SectionTitle bold>{item.name}</SectionTitle>
                    <SectionSubTitle bold>{item.department}</SectionSubTitle>
                    <Section>{`${item.description}`}</Section>
                  </RightSide>
                </ContentBox>
              </TextSection>
            ))}

            {!certificates.length || (
              <ContentTitleBox wrap={false} orphans={3}>
                <ContentTitle rightSide>
                  {language === 'PL' ? 'certyfikaty' : 'certificates'}
                </ContentTitle>
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
                <ContentTitle rightSide>{language === 'PL' ? 'kursy' : 'courses'}</ContentTitle>
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
                <ContentTitle rightSide>
                  {language === 'PL' ? 'publikacje' : 'publications'}
                </ContentTitle>
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
                <ContentTitle rightSide>
                  {language === 'PL' ? 'konferencje' : 'conferences'}
                </ContentTitle>
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
                <ContentTitle rightSide>{language === 'PL' ? 'licencje' : 'licenses'}</ContentTitle>
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
