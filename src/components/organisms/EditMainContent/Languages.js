import React, { Component } from 'react';
import LanguagePanel from 'components/molecules/SectionInputs/LanguagePanel';
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
    const { cvId, currentCv, current } = this.props;
    const { languages } = currentCv;
    const { currentView } = current;

    return (
      <>
        {languages &&
          languages.map((item, idx) => {
            const { id } = item;
            return (
              <LanguagePanel key={id} index={idx} item={item} cvId={cvId} current={currentView} />
            );
          })}
        <button
          type="button"
          onClick={() =>
            store.dispatch(
              addNewItemToCurrentCv(currentView, {
                name: '',
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
  current: state.editComponentView,
});

export default connect(mapStateToProps)(Languages);
