"use client";
import { Heart, Menu, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "./Container";
import IconButton from "./IconButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-30 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLinks />
          </div>
          <SearchBar />
          <div className="flex items-center space-x-4">
            <IconButton icon={Heart} label="Wishlist" badgeCount={3} />
            <IconButton icon={ShoppingCart} label="Cart" badgeCount={2} />
            <IconButton icon={User} label="Account" />
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col p-4">
          <div className="flex justify-end">
            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
              <Menu className="h-6 w-6 text-gray-700 rotate-45" />
            </button>
          </div>
          <NavLinks mobile />
        </div>
      )}
    </header>
  );
}
