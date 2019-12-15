import {
  faUserAlt,
  faEnvelope,
  faFileAlt,
  faFileContract,
  faThLarge,
} from '@fortawesome/free-solid-svg-icons';

export const editViews = [
  { name: 'Dane osobowe', link: 'personal', icon: 'faUserAlt' },
  { name: 'Edukacja', link: 'education', icon: 'graduation-cap' },
  { name: 'Doświadczenie', link: 'experience', icon: 'graduation-cap' },
  { name: 'Umiejętności', link: 'skills', icon: 'coffee' },
  { name: 'Języki obce', link: 'languages', icon: 'flag' },
  { name: 'Certyfikaty', link: 'certificates', icon: 'graduation-cap' },
  { name: 'Kursy', link: 'courses', icon: 'graduation-cap' },
  { name: 'Publikacje', link: 'publications', icon: 'graduation-cap' },
  { name: 'Konferencje', link: 'conferences', icon: 'graduation-cap' },
  { name: 'Licencje', link: 'licenses', icon: 'graduation-cap' },
  { name: 'Zainteresowania', link: 'interests', icon: 'graduation-cap' },
  // { name: 'Klauzula poufności', link: 'confidential', icon: 'apple-alt' },
];

export const mainViews = [
  { name: 'Moje konto', link: 'account', icon: [faUserAlt] },
  { name: 'Moje CV', link: 'cv', icon: [faFileAlt] },
  { name: 'Moje listy motywacyjne', link: 'documents', icon: [faEnvelope] },
  { name: 'Klauzula poufności', link: 'confidentiality', icon: [faFileContract] },
  { name: 'Szablony', link: 'templates', icon: [faThLarge] },
];
