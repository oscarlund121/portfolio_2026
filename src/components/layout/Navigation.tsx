"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // We determine if we are on the home page. 
  // If we are, the navbar is pink. If not, it could be light. 
  // Based on the Mux screenshot, we'll keep it pink for now, or use the page's theme.
  // Actually, let's keep it pink everywhere for the true Mux vibe.
  const isPink = true;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-mux-pink border-b border-mux-border transition-colors duration-300">
      <div className="grid-container h-[72px] flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter text-black uppercase">
            Oscar
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm tracking-wide font-medium transition-colors uppercase ${
                pathname === link.path
                  ? 'text-black font-bold'
                  : 'text-black/80 lg:text-black hover:text-black/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Call to Actions */}
        <div className="hidden md:flex items-center space-x-6 border-l border-mux-border pl-6 h-full">
          <Link href="https://github.com" target="_blank" className="text-sm font-bold tracking-widest text-black uppercase hover:text-black/60 transition-colors">
            GITHUB
          </Link>
          <Link href="/contact" className="pill-button-yellow uppercase text-xs tracking-widest leading-none py-3">
            Contact Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 text-black hover:bg-black/5 focus:outline-none transition-colors"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[72px] left-0 right-0 bg-mux-bg border-b border-mux-border shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 border-x border-mux-border mx-auto max-w-[1440px]">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-bold text-black border-b border-mux-border last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <Link 
                  href="https://github.com"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-bold text-black text-center border border-black uppercase"
                >
                  GITHUB
                </Link>
                <Link 
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-bold bg-mux-yellow text-black text-center uppercase"
                >
                  CONTACT ME
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
