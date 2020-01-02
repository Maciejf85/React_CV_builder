import {
  faUserAlt,
  faEnvelope,
  faFileAlt,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons';

export const editViews = [
  { name: 'Dane osobowe', nameL: 'Personal info', link: 'personal', icon: 'faUserAlt' },
  { name: 'Edukacja', nameL: 'Education', link: 'education', icon: 'graduation-cap' },
  { name: 'Doświadczenie', nameL: 'Experience', link: 'experience', icon: 'graduation-cap' },
  { name: 'Umiejętności', nameL: 'Skills', link: 'skills', icon: 'coffee' },
  { name: 'Języki obce', nameL: 'Languages', link: 'languages', icon: 'flag' },
  { name: 'Certyfikaty', nameL: 'Certificates', link: 'certificates', icon: 'graduation-cap' },
  { name: 'Kursy', nameL: 'Courses', link: 'courses', icon: 'graduation-cap' },
  { name: 'Publikacje', nameL: 'Publications', link: 'publications', icon: 'graduation-cap' },
  { name: 'Konferencje', nameL: 'Conferences', link: 'conferences', icon: 'graduation-cap' },
  { name: 'Licencje', nameL: 'Licenses', link: 'licenses', icon: 'graduation-cap' },
  { name: 'Zainteresowania', nameL: 'Interests', link: 'interests', icon: 'graduation-cap' },
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
