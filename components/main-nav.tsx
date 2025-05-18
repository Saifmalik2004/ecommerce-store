// components/main-nav.tsx
'use client';

import { cn } from '@/lib/utils';
import { Category } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = [
    ...data.map((route) => ({
      href: `/category/${route.id}`,
      label: route.name,
      active: pathname?.startsWith(`/category/${route.id}`),
    })),
    {
      href: '/contact',
      label: 'Contact',
      active: pathname === '/contact',
    },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className="flex flex-col md:flex-row items-center overflow-x-auto md:overflow-visible space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 px-4 py-2 md:p-0"
    >
      {routes.length === 0 ? (
        <p className="text-sm text-neutral-500">No categories available</p>
      ) : (
        routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-black',
              route.active ? 'text-black' : 'text-neutral-500',
              'w-full md:w-auto py-2 md:py-0'
            )}
          >
            {route.label}
          </Link>
        ))
      )}
    </nav>
  );
};

export default MainNav;