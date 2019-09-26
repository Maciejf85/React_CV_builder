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
    case 'CHANGE_NAME':
      return payload;

    default:
      return state;
  }
};

export default personalData;
