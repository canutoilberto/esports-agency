"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaSun, FaMoon } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-background/80 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              E-Sports Central
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/news">News</NavLink>
              <NavLink href="/teams">Teams</NavLink>
              <NavLink href="/events">Events</NavLink>
            </div>
            <ThemeToggle />
          </div>
          <div className="sm:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <RiCloseLine className="h-6 w-6" />
              ) : (
                <RiMenu3Line className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-background/80 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/news" onClick={toggleMenu}>
              News
            </MobileNavLink>
            <MobileNavLink href="/teams" onClick={toggleMenu}>
              Teams
            </MobileNavLink>
            <MobileNavLink href="/events" onClick={toggleMenu}>
              Events
            </MobileNavLink>
          </div>
          <div className="px-2 pt-2 pb-3">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="ml-3"
    >
      {theme === "dark" ? (
        <FaSun className="h-5 w-5" />
      ) : (
        <FaMoon className="h-5 w-5" />
      )}
    </Button>
  );
};

export default Navbar;
