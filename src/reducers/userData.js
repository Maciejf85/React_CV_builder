const initialState = {
  id: 'bad3e7665d3c14b042a18f72082ddf76',
  name: 'Maciej',
  surname: 'Fiałkowski',
  adress: 'Wrocław, Polska',
  email: 'Fialek85@gmail.com',
  birthday: '12.08.1985',
  github: 'https://github.com/Maciejf85',
  linkedin: 'https://www.linkedin.com/in/maciej-fia%C5%82kowski-527813176/',
  profession: 'Junior Frontend Developer',
  created: '04-09-2019',
};

const userData = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'changeName':
      return payload;

    default:
      return state;
  }
};

export default userData;
