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

const MainContainer = styled.Page`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  background-color: white;
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
  width: 176pt;
  height: 705pt;
  color: red;
  padding: 0 17pt;
  margin-left: 28pt;
  margin-top: 36pt;
  background: #eee5e6;
  font-family: 'Montserrat';
`;
const RightColumn = styled.View`
  width: 391pt;
  height: 100%;
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
  height: 140pt;
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
          </LeftColumn>
          <RightColumn />

          <Footer wrap={false} break fixed>
            <FooterText break>{confidential.confidential}</FooterText>
          </Footer>
        </MainContainer>
      </Document>
    );
  }
}

export default MyDocument;
