"use client";

import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
  activeClassName?: string;
  className?: string;
  exact?: boolean;
}

export const ActiveLink = ({
  children,
  href,
  activeClassName,
  className,
  exact,
}: Props) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} className={clsx(className, isActive && activeClassName)}>
      {children}
    </Link>
  );
};
