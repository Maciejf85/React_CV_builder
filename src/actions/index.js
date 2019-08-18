export const changeName = (payload = { name: 'MACIEJ' }) => {
  return {
    type: 'changeName',
    payload,
  };
};

export const tools = (payload = 'Webstorm') => {
  return {
    type: 'tools',
    payload,
  };
};

// change component on main view

export const currentView = (type = 'cv') => {
  return {
    type,
  };
};
