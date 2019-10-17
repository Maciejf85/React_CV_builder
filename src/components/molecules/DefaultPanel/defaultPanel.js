import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StripBody from 'components/molecules/DefaultPanel/StripBody';
import StripTitle from 'components/molecules/DefaultPanel/StripTitle';
// import { Link } from 'react-router-dom';
import OptionButton from 'components/atoms/Buttons/ImageOptionButton';

const StyledWrapper = styled.div`
  position: relative;
  min-width: 300px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};

  header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    padding: 0 10px;
    font-size: ${({ theme }) => theme.fontSize.ms};
    font-weight: ${({ theme }) => theme.font.bold};
    background: ${({ theme }) => theme.colors.lightGrey};
  }
  section {
    width: 100%;
    min-height: 140px;
    padding: 10px 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.ms};
    line-height: 25px;
    background: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    p {
      font-size: ${({ theme }) => theme.fontSize.ms};
    }
    .empty {
      position: absolute;
      top: calc(50% + 10px);
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      text-align: center;
      color: ${({ theme }) => theme.colors.secondaryGrey};
    }
  }
`;

const defaultPanel = props => {
  const { name, content, caption } = props;
  return (
    <StyledWrapper>
      <header>{name}</header>
      <section>
        {!content.length || <StripTitle />}
        {content.length ? (
          content.map(({ id, title, date }) => (
            <StripBody key={date} id={id} title={title} date={date} />
          ))
        ) : (
          <div className="empty">
            {/* <Link to='/edit'> */}
            <OptionButton
              onClick={props.newCv}
              primary={name === 'Moje CV'}
              disabled={name === 'Moje listy motywacyjne'}
            >
              {`dodaj ${caption}`}
            </OptionButton>
            {/* </Link> */}
          </div>
        )}
      </section>
      <OptionButton
        onClick={props.newCv}
        primary={name === 'Moje CV'}
        disabled={name === 'Moje listy motywacyjne'}
      >
        {`dodaj ${caption}`}
      </OptionButton>
    </StyledWrapper>
  );
};

defaultPanel.propTypes = {
  name: PropTypes.string,
  content: PropTypes.array,
};
defaultPanel.defaultProps = {
  name: 'panel title',
  content: [],
};

export default defaultPanel;
