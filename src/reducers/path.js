const initialState = {
  name: 'Moje konto',
  nameL: 'My account',
  currentView: 'account',
};

const path = (state = initialState, { type }) => {
  switch (type) {
    case 'cv':
      return {
        name: 'Moje CV',
        nameL: "CV's",
        currentView: 'cv',
        caption: 'nowe CV',
        captionL: 'new CV',
      };
    case 'documents':
      return {
        name: 'Moje listy motywacyjne',
        nameL: 'Cover Letter',
        currentView: 'documents',
        caption: 'nowy dokument',
        captionL: 'new document',
      };
    case 'account':
      return {
        name: 'Moje konto',
        nameL: 'My account',
        currentView: 'account',
      };
    case 'confidentiality':
      return {
        name: 'Klauzula poufności',
        nameL: 'Confidentiality clause',
        currentView: 'confidentiality',
      };

    default:
      return state;
  }
};

export default path;
