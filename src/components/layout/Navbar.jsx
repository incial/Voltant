"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useContactForm } from "@/context/ContactFormContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const { toggleContactForm, isContactFormOpen } = useContactForm();

  // Handle scroll effect
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Section tracking
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname.slice(1) || "home");
      return;
    }

    const whoAreWeSection = document.getElementById("who-are-we");
    if (!whoAreWeSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActiveSection(entry.isIntersecting ? "who-are-we" : "home");
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(whoAreWeSection);
    return () => observer.disconnect();
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const isLinkActive = useCallback(
    (path) => {
      if (path === "/") {
        return pathname === "/" && activeSection === "home";
      }
      return pathname === path;
    },
    [pathname, activeSection],
  );

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/ev-charging", label: "EV Charging" },
    { href: "/waste-to-energy", label: "Waste To Energy" },
    { href: "/whoarewe", label: "Explore" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-black/30" : "bg-transparent"
        }`}
        id="navbar"
      >
        <div className="relative max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center z-10">
            <Image
              src="/assets/images/Home/Logo_white.png"
              alt="Voltant Energy"
              width={160}
              height={40}
              className="h-8 w-auto md:h-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-6 text-lg font-normal mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isLinkActive(link.href) ? "text-green-400" : "text-white"
                } hover:text-blue-100 font-medium transition-colors px-2 relative`}
              >
                {link.label}
                {link.href !== "/" && isLinkActive(link.href) && (
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-green-400 w-full"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleContactForm}
              className="bg-transparent text-white border-2 border-solid border-white py-2 px-6 rounded-full font-medium cursor-pointer transition-colors hover:bg-white/10"
              style={{ border: "2px solid white" }}
            >
              Get in Touch
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 z-10"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMobileMenuOpen ? (
                <path d="M6 6 L18 18 M18 6 L6 18" />
              ) : (
                <>
                  <path d="M4 6 H20" />
                  <path d="M4 12 H20" />
                  <path d="M4 18 H20" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center z-[9999]"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-white p-2"
                aria-label="Close menu"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6 L18 18 M18 6 L6 18" />
                </svg>
              </button>

              <div className="flex flex-col items-center space-y-10 text-white text-xl">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={toggleMobileMenu}
                    className={isLinkActive(link.href) ? "text-green-400" : ""}
                  >
                    {link.label}
                  </Link>
                ))}
                <motion.button
                  onClick={() => {
                    toggleMobileMenu();
                    setTimeout(toggleContactForm, 300);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    isContactFormOpen
                      ? "text-green-400 border-green-400"
                      : "text-white border-white"
                  } py-2 px-6 rounded-full font-medium border-2 border-solid mt-4`}
                  style={{ borderWidth: "2px", borderStyle: "solid" }}
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default Navbar;
