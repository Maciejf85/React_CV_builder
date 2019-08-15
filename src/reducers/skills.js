const initialState = {
  languages: ['English'],
  frameworsks: ['React', 'jQuery'],
  stack: [],
  tools: ['VScode'],
};

const skills = (state = initialState, { type, payload }) => {
  if (type === 'tools') {
    return {
      ...state,
      tools: [...state.tools, payload],
    };
  }
  return state;
};

export default skills;
