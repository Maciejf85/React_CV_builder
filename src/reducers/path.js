const initialState = {
  name: 'Moje CV',
  currentView: 'cv',
};

const path = (state = initialState, { type }) => {
  switch (type) {
    case 'cv':
      return {
        name: 'Moje CV',
        currentView: 'cv',
      };
    case 'documents':
      return {
        name: 'Moje listy motywacyjne',
        currentView: 'documents',
      };
    case 'account':
      return {
        name: 'Moje konto',
        currentView: 'account',
      };
    case 'confidentiality':
      return {
        name: 'Klauzula poufności',
        currentView: 'confidentiality',
      };

    default:
      return state;
  }
};

export default path;
