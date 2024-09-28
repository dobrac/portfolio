export interface SidebarNavItem {
  title: string;
  href: string;
  children?: SidebarNavItem[];
}

export const navbar: SidebarNavItem[] = [
  {
    title: 'Home & About Me',
    href: '/',
  },
  {
    title: 'Skills',
    href: '/#skills',
  },
  {
    title: 'Projects',
    href: '/#projects',
  },
  {
    title: 'Experience',
    href: '/#experience',
  },
  {
    title: 'Awards',
    href: '/#awards',
  },
  {
    title: 'Education',
    href: '/#education',
  },
  {
    title: 'Contact',
    href: '/#contact',
  },
]