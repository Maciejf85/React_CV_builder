import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  width: 100%;
  margin: 15px;
  @media ${({ theme }) => theme.media.small} {
    margin: 15px 0;
  }
`;

const Templates = ({ language }) => {
  return <StyleWrapper>'Szablony'</StyleWrapper>;
};

export default Templates;
