import React, { Component } from 'react';
import { connect } from 'react-redux';
import EducationPanel from 'components/molecules/SectionInputs/EducationPanel';
import store from 'store';
import { setNewCurrentCVData } from 'functions';
import { addNewItemToCurrentCv } from 'actions';

class Education extends Component {
  componentDidMount() {
    console.log(' Mount - Education Component');
  }

  componentDidUpdate() {
    const { cvId, currentCv } = this.props;
    const token = sessionStorage.getItem('userID');
    store.dispatch(setNewCurrentCVData('update', token, cvId, currentCv));
  }

  render() {
    const { cvId, currentCv, current } = this.props;
    const { education } = currentCv;
    const { currentView } = current;
    return (
      <>
        {education &&
          education.map((item, idx) => {
            const { id } = item;
            return (
              <EducationPanel key={id} index={idx} item={item} cvId={cvId} current={currentView} />
            );
          })}
      </>
    );
  }
}
const mapStateToProps = state => ({
  currentCv: state.currentCv,
  cvId: state.currentCv.currentItem.id,
  current: state.editComponentView,
});
export default connect(mapStateToProps)(Education);
