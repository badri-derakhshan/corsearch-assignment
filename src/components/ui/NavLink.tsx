import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Link> & {
  activeClassName: string;
  nonActiveClassName?: string;
};

const NavLink = ({
  children,
  href,
  activeClassName,
  nonActiveClassName,
  className,
  ...rest
}: Props) => {
  const pathname = usePathname();
  const isActive =
    pathname.endsWith(href.toString()) ||
    (href.toString().includes(pathname) && pathname !== '/');
  const newClassName = cn(
    className,
    `${isActive ? activeClassName : nonActiveClassName}`
  );
  return (
    <Link href={href} className={newClassName} {...rest}>
      {children}
    </Link>
  );
};
export default NavLink;
