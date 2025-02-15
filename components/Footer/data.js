import { FaFacebookF } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

/**
 * blocks in the footer section
 */
export const sections = [
  {
    title: 'Produits',
    links: [
      { text: 'Solutions logiciels', href: '' },
      { text: 'API & integrations', href: '' },
      { text: 'Sécurité & Conformité', href: '' },
      { text: 'Tarification', href: '' },
      { text: 'Témoignages Clients', href: '' },
    ],
  },
  {
    title: 'Pour les développeurs',
    links: [
      { text: 'Documentation', href: '' },
      { text: 'Base de connaissances', href: '' },
      { text: 'Statut du système', href: '' },
      { text: 'Tutoriels', href: '' },
      { text: 'Sécurité', href: '' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { text: 'A propos', href: '' },
      { text: 'Equipe', href: '' },
      { text: 'Carrières', href: '' },
      { text: 'Blog', href: '' },
      { text: 'Contact', href: '' },
    ],
  },
];

export const socialLinks = [
  {
    href: '/',
    icon: <FaFacebookF />,
    classes:
      'w-9 h-9 rounded-full border-2 border-gray-700 flex justify-center items-center hover:bg-indigo-600 transition-all duration-100',
  },
  {
    href: '/',
    icon: <FaGooglePlusG className="text-red-500 text-xl" />,
    classes:
      'w-9 h-9 rounded-full border-2 border-gray-700 flex justify-center items-center hover:bg-indigo-600 transition-all duration-100',
  },
  {
    href: '/',
    icon: <FaXTwitter className="text-white" />,
    classes:
      'w-9 h-9 rounded-full border-2 border-gray-700 flex justify-center items-center hover:bg-indigo-600 transition-all duration-100',
  },
  {
    href: '/',
    icon: <FaInstagram className="text-lg" />,
    classes:
      'w-9 h-9 rounded-full border-2 border-gray-700 flex justify-center items-center hover:bg-indigo-600 transition-all duration-100',
  },
];
