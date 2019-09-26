const initialState = {
  id: '',
  name: '',
  surname: '',
  adress: '',
  email: '',
  birthday: '',
  github: '',
  linkedin: '',
  profession: '',
  created: '',
};

const personalData = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_PERSONAL_DATA':
      return payload;

    default:
      return state;
  }
};

export default personalData;
