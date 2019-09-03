const initialState = {
  education: [
    {
      id: 1,
      name: 'Coders Lab',
      startYear: 2018,
      startMonth: 8,
      endYear: 2019,
      endMonth: 4,
      description:
        'JavaScript Developer : React Języki i technologie nauczane podczas kursu : HTML5, CSS3, SASS, RWD, JavaScript,  ES6, React, jQuery, AJAX, Gulp, Webpack, Git. Kurs trwał 320 godzin wykładów i ćwiczeń przygotowujących do pracy na stanowisku Frontend Developera.',
    },
  ],
  skills: [
    { id: 1, description: 'Języki programowania : JavaScript: ES6' },
    { id: 2, description: 'Frameworki : React/Redux, jQuery' },
  ],
  languages: [{ id: 1, description: 'Język angielski' }],
  interests: [
    { id: 1, description: 'Programowanie, fotografia, elektronika, mikroprocesory, sztuki walki' },
  ],
  experience: [
    {
      id: 1,
      employer: 'Coders Lab',
      experience: '...',
      startYear: 2018,
      startMonth: 8,
      endYear: 2019,
      endMonth: 4,
      description:
        'Projekt napisany w ramach ćwiczeń. Jest to responsywna strona klubu fitness, zawierająca działające 3 podstrony.',
    },
  ],
};

const skills = (state = initialState, { type }) => {
  switch (type) {
    case 'SHOW_DATA': {
      return state;
    }
    default:
      return state;
  }
};
export default skills;
