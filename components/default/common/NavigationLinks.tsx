import { FC } from "react";
import { NavigationLink } from "@/types/navigationLinks";
import Link from "next/link";

interface NavigationLinksProps {
  navigationLinks: NavigationLink[];
  handleLinkClick?: (link: NavigationLink) => void;
  NavigationLinkClass: string;
}

const Navigation: FC<NavigationLinksProps> = ({
  navigationLinks,
  handleLinkClick,
  NavigationLinkClass,
}) => {
  return (
    <>
      {navigationLinks.map((link: NavigationLink) => (
        <Link
          key={link.id}
          href={link.href}
          className={NavigationLinkClass}
          onClick={() => handleLinkClick?.(link)} // Передача link в handleLinkClick
        >
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default Navigation;
