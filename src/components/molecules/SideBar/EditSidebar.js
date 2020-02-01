import React from 'react';
import styled from 'styled-components';
import EditNavList from 'components/atoms/List/EditNavList';
import { editViews } from 'data';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.colors.mainGrey};
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 999;
  ul {
    margin-top: 70px;
    @media ${({ theme }) => theme.media.small} {
      margin-top: 60px;
    }
    @media ${({ theme }) => theme.media.medium} {
      display: flex;
      margin: 20px 0;
      border-bottom: 5px solid hsl(0, 0%, 96%);
    }
    @media ${({ theme }) => theme.media.tablet} {
      margin-top: 43px;
    }
    @media ${' (width:568px)'} {
      display: flex;
      margin: 45px 0;
      border-bottom: 5px solid hsl(0, 0%, 96%);
    }
    @media ${' (width:812px)'} {
      display: flex;
      margin: 20px 0;
      border-bottom: 5px solid hsl(0, 0%, 96%);
    }
    @media ${' (width:823px)'} {
      display: flex;
      border-bottom: 5px solid hsl(0, 0%, 96%);
      margin: 20px 0;
    }
  }

  @media ${({ theme }) => theme.media.small} {
    width: 50px;
    padding: 0;
  }
  @media ${({ theme }) => theme.media.medium} {
    width: 100%;
    height: 50px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 190px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: 230px;
  }
  @media ${' (width:568px) and (orientation: landscape)'} {
    width: 100%;
    height: 50px;
  }
  @media ${' (width:812px) and (orientation: landscape)'} {
    width: 100%;
    height: 50px;
  }
  @media ${' (width:823px) and (orientation: landscape)'} {
    width: 100%;
    height: 50px;
  }
`;

const EditSidebar = ({ language }) => {
  return (
    <StyledWrapper>
      <ul>
        {editViews.map(item => (
          <EditNavList
            key={item.link}
            name={language === 'PL' ? item.name : item.nameL}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </ul>
    </StyledWrapper>
  );
};
export default EditSidebar;
