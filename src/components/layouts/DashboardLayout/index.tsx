import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Settings,
  ShoppingCart,
  Users2,
  CircleUserRound
} from 'lucide-react';
import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

const menuList = [
  { title: 'Users', icon: Users2 },
  { title: 'Dashboard', icon: Home },
  { title: 'ShoppingCart', icon: ShoppingCart },
  { title: 'Products', icon: Package },
  { title: 'Setting', icon: LineChart }
];

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <nav className={styles.navbar}>
          <Link href='#' className={styles['navbar__item']}>
            <Package2 />
          </Link>
          {menuList.map((item) => {
            const Icon = item.icon;
            return (
              <Tooltip key={item.title}>
                <TooltipTrigger asChild>
                  <Link href='#' className={styles['navbar__item']}>
                    <Icon className={styles['navbar__item__icon']} />
                    <span className={styles['navbar__item__title']}>{item.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side='right'>{item.title}</TooltipContent>
              </Tooltip>
            );
          })}
        </nav>
        <nav className={styles.navbarBottom}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href='#' className={styles['navbar__item']}>
                <Settings className={styles['navbar__item__icon']} />
                <span className={styles['navbar__item__title']}>Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className={styles.pageContainer}>
        <header className={styles.headerContainer}>
          <Sheet>
            <SheetTrigger asChild>
              <Button size='icon' variant='outline' className='sm:hidden'>
                <PanelLeft className='h-5 w-5' />
                <span className='sr-only'>Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className={styles.navbarMobile}>
              <nav className={styles['navbarMobile__navbar']}>
                {menuList.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href='#'
                      className={styles['navbarMobile__navbar__item']}
                    >
                      <Icon className={styles['navbarMobile__navbar__icon']} />
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className={styles['headerContainer__breadcrumb']}>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href='#'>Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              {[{ title: 'Users', url: '/users' }].map(({ title, url }) => (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href={url}>{title}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={styles['headerContainer__profileIcon']}
              asChild
            >
              <Button
                variant='outline'
                size='icon'
                className={styles['headerContainer__button']}
              >
                <CircleUserRound className={styles['headerContainer__button']} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className={styles.contentContainer}>{children}</main>
      </div>
    </div>
  );
};

export { DashboardLayout };
