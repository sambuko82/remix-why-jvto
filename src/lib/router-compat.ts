'use client';

import { startTransition } from 'react';
import { useParams as useNextParams, usePathname, useRouter } from 'next/navigation';

export function useNavigate() {
  const router = useRouter();

  return (to: string) => {
    if (!to) return;

    if (/^https?:\/\//.test(to)) {
      window.location.assign(to);
      return;
    }

    startTransition(() => {
      router.push(to);
    });
  };
}

export function useLocation() {
  const pathname = usePathname();
  const search = typeof window === 'undefined' ? '' : window.location.search;
  const hash = typeof window === 'undefined' ? '' : window.location.hash;

  return {
    pathname,
    search,
    hash,
  };
}

export function useParams<T extends Record<string, string> = Record<string, string>>() {
  return useNextParams() as T;
}
