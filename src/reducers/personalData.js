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
    case 'UPDATE_PERSONAL_DATA':
      return {
        ...state,
        name: payload.currentName,
        surname: payload.currentSurname,
        email: payload.currentEmail,
        birthday: payload.currentBirthday,
        adress: payload.currentAdress,
        github: payload.currentGithub,
        linkedin: payload.currentLinkedin,
        profession: payload.currentProfession,
      };
    default:
      return state;
  }
};

export default personalData;
