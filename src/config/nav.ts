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
    title: 'Experience',
    href: '/#experience',
  },
  {
    title: 'Projects',
    href: '/#projects',
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