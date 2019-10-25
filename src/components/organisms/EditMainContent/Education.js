import React, { Component } from 'react';
import { connect } from 'react-redux';
import EducationPanel from 'components/molecules/SectionInputs/EducationPanel';

class Education extends Component {
  componentDidMount() {
    console.log(' Mount - Education Component');
  }

  componentDidUpdate() {
    console.log(' Update - Education Component');
  }

  render() {
    const { education } = this.props;
    return (
      <>
        {education &&
          education.map((item, idx) => {
            const { id } = item;
            return <EducationPanel key={id} index={idx} item={item} />;
          })}
        {/* <EducationInput>
          <Input>id</Input>
        </EducationInput> */}
      </>
    );
  }
}
const mapStateToProps = state => ({
  education: state.currentCv.education,
});
export default connect(mapStateToProps)(Education);
