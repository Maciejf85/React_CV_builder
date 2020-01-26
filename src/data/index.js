import {
  faUserAlt,
  faEnvelope,
  faFileAlt,
  faFileContract,
  faUserGraduate,
  faBriefcase,
  faPuzzlePiece,
  faFlag,
  faCertificate,
  faChalkboardTeacher,
  faNewspaper,
  faUsers,
  faAddressCard,
  faBiking,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';

export const editViews = [
  { name: 'Dane osobowe', nameL: 'Personal info', link: 'personal', icon: [faUserAlt] },
  { name: 'Edukacja', nameL: 'Education', link: 'education', icon: [faUserGraduate] },
  { name: 'Doświadczenie', nameL: 'Experience', link: 'experience', icon: [faBriefcase] },
  { name: 'Umiejętności', nameL: 'Skills', link: 'skills', icon: [faPuzzlePiece] },
  { name: 'Języki obce', nameL: 'Languages', link: 'languages', icon: [faFlag] },
  { name: 'Certyfikaty', nameL: 'Certificates', link: 'certificates', icon: [faCertificate] },
  { name: 'Kursy', nameL: 'Courses', link: 'courses', icon: [faChalkboardTeacher] },
  { name: 'Publikacje', nameL: 'Publications', link: 'publications', icon: [faNewspaper] },
  { name: 'Konferencje', nameL: 'Conferences', link: 'conferences', icon: [faUsers] },
  { name: 'Licencje', nameL: 'Licenses', link: 'licenses', icon: [faAddressCard] },
  { name: 'Zainteresowania', nameL: 'Interests', link: 'interests', icon: [faBiking] },
  { name: 'Aplikacje webowe', nameL: 'Web aplications', link: 'webApi', icon: [faWindowMaximize] },
];

export const mainViews = [
  { name: 'Moje konto', nameL: 'Account', link: 'account', icon: [faUserAlt] },
  { name: 'Moje CV', nameL: "CV's", link: 'cv', icon: [faFileAlt] },
  { name: 'Moje listy motywacyjne', nameL: 'Cover Letter', link: 'documents', icon: [faEnvelope] },
  {
    name: 'Klauzula poufności',
    nameL: 'Confidentiality clause',
    link: 'confidentiality',
    icon: [faFileContract],
  },
];
