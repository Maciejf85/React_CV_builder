const initialState = {
  currentView: 'personal',
};

const path = (state = initialState, { type }) => {
  switch (type) {
    case 'personal':
      return {
        currentView: 'personal',
      };
    case 'education':
      return {
        currentView: 'education',
      };
    case 'experience':
      return {
        currentView: 'experience',
      };
    case 'languages':
      return {
        currentView: 'languages',
      };
    case 'skills':
      return {
        currentView: 'skills',
      };
    case 'interests':
      return {
        currentView: 'interests',
      };
    case 'confidential':
      return {
        currentView: 'confidential',
      };

    default:
      return state;
  }
};

export default path;
