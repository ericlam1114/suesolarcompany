'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import logoImage from '../../public/images/taxappeal.png';

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about-us',
    label: 'About Us',
  },
  {
    href: '/services',
    label: 'Services',
  },
  {
    href: '/free-tax-review',
    label: 'Free Tax Review',
  },
  {
    href: '/tax-appeal-case-studies',
    label: 'Case Studies',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: 'mailto::info@sftaxappeal.com?subject=New%20Inquiry',
    label: 'Contact Us',
  },
];

export const Header: React.FC = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    const newIsMenuOpen = !isMenuOpen;

    setIsMenuOpen(newIsMenuOpen);

    document.documentElement.style.overflowY = newIsMenuOpen
      ? 'hidden'
      : 'auto';
  };

  const onLinkClick = () => {
    setIsMenuOpen(false);

    document.documentElement.style.overflowY = 'auto';
  };

  useEffect(() => {
    return () => {
      document.documentElement.style.overflowY = 'auto';
    };
  }, []);

  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="nav w-nav"
    >
      <div className="nav-container ">
        <Link href="/" className="logo w-nav-brand">
          <Image
            width={91}
            src={logoImage}
            alt="san francisco tax appeal logo"
            className="image"
          />
        </Link>
        <nav role="navigation" className="nav-menu w-nav-menu">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current="page"
              className={`nav-link-2 w-nav-link ${
                pathname === link.href ? 'w--current' : ''
              }
                `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div
          className={`w-nav-button ${isMenuOpen ? 'w--open' : ''}`}
          onClick={onToggleMenu}
        >
          <div className="w-icon-nav-menu"></div>
        </div>
        <div
          className="w-nav-overlay"
          data-wf-ignore=""
          id="w-nav-overlay-0"
          style={{
            height: '100vh',
            maxHeight: isMenuOpen ? '100vh' : 0,
            display: 'flex',
            transition: 'all 400ms ease 0s',
          }}
        >
          <nav
            role="navigation"
            className="nav-menu w-nav-menu"
            data-nav-menu-open=""
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current="page"
                className={`nav-link-2 w-nav-link w--nav-link-open ${
                  pathname === link.href ? 'w--current' : ''
                }
                `}
                onClick={onLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
