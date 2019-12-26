const initialState = {
  token: '',
  name: '',
  surname: '',
  adress: '',
  email: '',
  phone: '',
  birthday: '',
  github: '',
  linkedin: '',
  profession: '',
  image: '',
  created: '',
};

const personalData = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_PERSONAL_DATA':
      return payload;
    case 'UPDATE_PERSONAL_DATA':
      return {
        name: payload.currentName,
        surname: payload.currentSurname,
        email: payload.currentEmail,
        phone: payload.currentPhone,
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
