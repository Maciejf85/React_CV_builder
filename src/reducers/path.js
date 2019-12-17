const initialState = {
  name: 'Moje CV',
  currentView: 'cv',
  caption: 'nowe CV',
};

const path = (state = initialState, { type }) => {
  switch (type) {
    case 'cv':
      return {
        name: 'Moje CV',
        nameL: "CV's",
        currentView: 'cv',
        caption: 'nowe CV',
      };
    case 'documents':
      return {
        name: 'Moje listy motywacyjne',
        nameL: 'Cover Letter',
        currentView: 'documents',
        caption: 'nowy dokument',
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
