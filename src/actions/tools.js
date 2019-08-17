const tools = (payload = 'Webstorm') => {
  return {
    type: 'tools',
    payload,
  };
};
export default tools;
