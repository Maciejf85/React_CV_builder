import React, { Component } from 'react';
import { connect } from 'react-redux';
import StyledInputSection from 'components/atoms/Inputs/StyledInputSection';

class Education extends Component {
  componentDidMount() {
    console.log('education did mount');
  }

  render() {
    const { education } = this.props;
    return (
      <>
        {education &&
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
        }
        <StyledInputSection>
          <div>id</div>
          <div>name</div>
          <div>startYear</div>
          <div>startMonth</div>
          <div>endYear</div>
          <div>endMonth</div>
        </StyledInputSection>
      </>
    );
  }
}
const mapStateToProps = state => ({
  education: state.currentCv.education,
});
export default connect(mapStateToProps)(Education);
