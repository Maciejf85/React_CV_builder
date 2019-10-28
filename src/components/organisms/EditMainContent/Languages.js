import React, { Component } from 'react';
import EducationPanel from 'components/molecules/SectionInputs/EducationPanel';
import store from 'store';
import { connect } from 'react-redux';
import { addNewItemToCurrentCv } from 'actions';
import { setNewCurrentCVData } from 'functions';

class Languages extends Component {
  componentDidUpdate() {
    const { cvId, currentCv } = this.props;
    const token = sessionStorage.getItem('userID');
    store.dispatch(setNewCurrentCVData('update', token, cvId, currentCv));
  }

  render() {
    const { cvId, currentCv } = this.props;
    const { languages } = currentCv;
    return (
      <>
        {languages &&
          languages.map((item, idx) => {
            const { id } = item;
            return <EducationPanel key={id} index={idx} item={item} cvId={cvId} />;
          })}
        <button
          type="button"
          onClick={() =>
            store.dispatch(
              addNewItemToCurrentCv('languages', {
                name: '',
                startYear: 2000,
                startMonth: 1,
                endYear: 2000,
                endMonth: 1,
                description: '',
              }),
            )
          }
        >
          Dodaj nową szkołę
        </button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentCv: state.currentCv,
  cvId: state.currentCv.currentItem.id,
});

export default connect(mapStateToProps)(Languages);
