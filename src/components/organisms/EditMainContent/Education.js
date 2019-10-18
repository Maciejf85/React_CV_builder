import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  background: #000;
  color: white;
`;
const StyledInputSection = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '100%'};
  min-height: ${({ height }) => height || '135px;'};
  padding: 15px;
  border-radius: 7px;
  background: white;
  margin-bottom: 15px;
  overflow: hidden;

  img {
    max-height: 160px;
  }
  .image {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    color: white;
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
    }
  }
  :hover .image {
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: visible;
    transition: visibility 0.6s, opacity 0.6s;
    background: rgba(0, 0, 0, 0.75);
  }
`;

class Education extends Component {
  componentDidMount() {
    console.log('education did mount');
  }

  render() {
    const { education } = this.props;
    console.log('this.props.', this.props);
    return (
      <>
        {education ? (
          education.map(item => {
            const { id, name, startYear, startMonth, endYear, endMonth } = item;
            return (
              <StyledInputSection key={id}>
                <div>{id}</div>
                <div>{name}</div>
                <div>{startYear}</div>
                <div>{startMonth}</div>
                <div>{endYear}</div>
                <div>{endMonth}</div>
              </StyledInputSection>
            );
          })
        ) : (
          <div>brak danych</div>
        )}
      </>
    );
  }
}
const mapStateToProps = state => ({
  education: state.currentCv.education,
});
export default connect(mapStateToProps)(Education);
