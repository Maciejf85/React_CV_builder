import React from 'react';
import styled from 'styled-components';
import Panel from 'components/molecules/DefaultPanel/defaultPanel';
import { useSelector } from 'react-redux';

const StyleWrapper = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  margin: 15px;
  @media ${({ theme }) => theme.media.small} {
    margin: 15px 0;
  }
`;

const MyDocuments = () => {
  const { name, nameL, caption, captionL } = useSelector(state => state.path);
  const { language } = useSelector(({ appState }) => appState);

  return (
    <StyleWrapper>
      <Panel
        name={language === 'PL' ? name : nameL}
        content={[]}
        caption={language === 'PL' ? caption : captionL}
        language={language}
      />
    </StyleWrapper>
  );
};

export default MyDocuments;
