"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === "/services") {
      return pathname.startsWith("/services");
    }
    return pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out ${
        isScrolled || isServicesOpen ? "bg-white shadow-md" : "bg-blue-500"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1
            className={`text-2xl font-bold transition-colors duration-500 ease-in-out ${
              isScrolled || isServicesOpen ? "text-gray-900" : "text-white"
            }`}
          >
            IT Company
          </h1>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                href="/projects"
                className={`font-medium transition-colors duration-500 ease-in-out hover:opacity-80 ${
                  isScrolled || isServicesOpen ? "text-gray-900" : "text-white"
                } ${
                  isActive("/projects")
                    ? "underline decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                Work
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`font-medium transition-colors duration-500 ease-in-out hover:opacity-80 ${
                  isScrolled || isServicesOpen ? "text-gray-900" : "text-white"
                } ${
                  isActive("/services")
                    ? "underline decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                Services
              </Link>

              {/* Invisible Bridge */}
              <div className="absolute left-0 right-0 h-8 top-full" />

              {/* Mega Menu Dropdown - Full Width */}
              <div
                className={`fixed left-0 right-0 mt-5 bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] overflow-hidden
                  ${isServicesOpen ? "animate-slideDown" : "animate-slideUp"}`}
                style={{
                  maxHeight: isServicesOpen ? "600px" : "0",
                  opacity: isServicesOpen ? 1 : 0,
                  transform: isServicesOpen
                    ? "translateY(0)"
                    : "translateY(-1rem)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  pointerEvents: isServicesOpen ? "auto" : "none",
                }}
              >
                <div className="container mx-auto px-8 py-12">
                  <div className="grid grid-cols-4 gap-12">
                    {/* All Services Column */}
                    <div>
                      <Link
                        href="/services"
                        className="block text-gray-900 font-bold text-lg mb-6 underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity duration-200"
                      >
                        All Services
                      </Link>
                    </div>

                    {/* Mobile & Web Development Column */}
                    <div>
                      <a href="/mobile-web-development">
                        <h3 className="text-gray-900 font-bold text-sm mb-6 uppercase tracking-wide">
                          MOBILE & WEB DEVELOPMENT
                        </h3>
                      </a>

                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/services/application-design"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            Application Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/web-design"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            Web Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/custom-software"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            Custom Software
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/ai-consulting"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            AI Consulting and Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/ai-chatbot"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            AI Chatbot Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/iot"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            IoT
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/web3"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            Web3
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* UX & Information Architecture Column */}
                    <div>
                      <a href="/ux-information-architecture">
                        <h3 className="text-gray-900 font-bold text-sm mb-6 uppercase tracking-wide">
                          UX & INFORMATION ARCHITECTURE
                        </h3>
                      </a>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/services/uml-conception"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            UML Conception
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/storyboards-wireframes"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            Storyboards & Wireframes
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/product-design-ui"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            Product Design - UI
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/product-design-ux"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            Product Design - UX
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Design Column */}
                    <div>
                      <a href="/design">
                        <h3 className="text-gray-900 font-bold text-sm mb-6 uppercase tracking-wide">
                          DESIGN
                        </h3>
                      </a>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/services/branding-logo"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            Branding and Logo Creations
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/style-guide"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            Style Guide Creation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/3d-modeling"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            3D Modeling
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/3d-animation"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                          >
                            3D Animation
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/about"
                className={`font-medium transition-colors duration-500 ease-in-out hover:opacity-80 ${
                  isScrolled || isServicesOpen ? "text-gray-900" : "text-white"
                } ${
                  isActive("/about")
                    ? "underline decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className={`font-medium transition-colors duration-500 ease-in-out hover:opacity-80 ${
                  isScrolled || isServicesOpen ? "text-gray-900" : "text-white"
                } ${
                  isActive("/blog")
                    ? "underline decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-green-400 to-cyan-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
