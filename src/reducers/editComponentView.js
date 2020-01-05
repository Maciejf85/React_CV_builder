const personal = 'personal';
const education = 'education';
const experience = 'experience';
const languages = 'languages';
const skills = 'skills';
const certificates = 'certificates';
const courses = 'courses';
const publications = 'publications';
const conferences = 'conferences';
const licenses = 'licenses';
const interests = 'interests';
const webApi = 'webApi';

const initialState = {
  currentView: 'personal',
};

const path = (state = initialState, { type }) => {
  switch (type) {
    case personal:
      return {
        currentView: 'personal',
      };
    case education:
      return {
        currentView: 'education',
      };
    case experience:
      return {
        currentView: 'experience',
      };
    case languages:
      return {
        currentView: 'languages',
      };
    case skills:
      return {
        currentView: 'skills',
      };
    case certificates:
      return {
        currentView: 'certificates',
      };
    case courses:
      return {
        currentView: 'courses',
      };
    case publications:
      return {
        currentView: 'publications',
      };
    case conferences:
      return {
        currentView: 'conferences',
      };
    case licenses:
      return {
        currentView: 'licenses',
      };
    case interests:
      return {
        currentView: 'interests',
      };
    case webApi:
      return {
        currentView: 'webApi',
      };

    default:
      return state;
  }
};

export default path;
