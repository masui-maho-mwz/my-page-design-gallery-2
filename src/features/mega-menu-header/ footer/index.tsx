import { NavAndSearch } from '@/features/mega-menu-header/ footer/nav-and-search';
import { Options } from '@/features/mega-menu-header/ footer/options';

export const Footer = () => {
  return (
    <footer>
      <NavAndSearch items={[navItems1, navItems2]} />
      <Options links={links} />
    </footer>
  );
};

const navItems1 = [
  { id: 1, name: 'ナビ1-1XXXXXXXXXXXXXXXXX', href: '#' },
  { id: 2, name: 'ナビ1-2', href: '#' },
  { id: 3, name: 'ナビ1-3', href: '#' },
  { id: 4, name: 'ナビ1-4', href: '#' },
  { id: 5, name: 'ナビ1-5', href: '#' },
  { id: 6, name: 'ナビ1-6', href: '#' },
  { id: 7, name: 'ナビ1-7', href: '#' },
  { id: 8, name: 'ナビ1-8', href: '#' },
  { id: 9, name: 'ナビ1-9', href: '#' },
];

const navItems2 = [
  { id: 1, name: 'ナビ2-1XXXXXXXXXXXXXXXXXXX', href: '#' },
  { id: 2, name: 'ナビ2-2', href: '#' },
  { id: 3, name: 'ナビ2-3', href: '#' },
  { id: 4, name: 'ナビ2-4', href: '#' },
  { id: 5, name: 'ナビ2-5', href: '#' },
  { id: 6, name: 'ナビ2-6', href: '#' },
  { id: 7, name: 'ナビ2-7', href: '#' },
  { id: 8, name: 'ナビ2-8', href: '#' },
];

const links = [
  { id: 1, url: '#', text: '利用者情報の取り扱いについて' },
  { id: 2, url: '#', text: '個人情報保護への取り組みについて' },
  { id: 3, url: '#', text: '会社案内' },
  { id: 4, url: '#', text: '電子公告' },
];
