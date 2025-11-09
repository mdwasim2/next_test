"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronDown,
  Heart,
  Menu,
  ShoppingCart,
  Tag,
  TrendingUp,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import LogoURl from "../../app/assets/images/logo.png";
import Container from "./Container";
import IconButton from "./IconButton";
import Logo from "./Logo";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";
// Search Bar Component

// Main Header Component
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Shop" },
    { name: "New Arrivals", icon: TrendingUp, badge: "Hot" },
    { name: "Deals", icon: Tag, badge: "Sale" },
    { name: "About", icon: null },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top banner */}
      <div className="bg-primary text-white text-center py-2 text-sm font-medium">
        🎉 Free Shipping on Orders Over $50 | Use Code: FREESHIP
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            <Logo
              // @ts-ignore
              src={LogoURl}
              title="Shop"
            />

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavLinks navlinks={links} />
            </nav>

            {/* Desktop search */}
            <div className="hidden lg:block">
              <SearchBar />
            </div>

            {/* Desktop icons */}
            <div className="hidden md:flex items-center space-x-4">
              <IconButton icon={Heart} label="Wishlist" badgeCount={3} />
              <IconButton icon={ShoppingCart} label="Cart" badgeCount={2} />
              <IconButton icon={User} label="Account" />
            </div>

            {/* Mobile menu button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-purple-50"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-80 p-0">
                {/* Menu Header */}
                <SheetHeader className="p-6 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-pink-50">
                  <SheetTitle>
                    <Logo
                      // @ts-ignore
                      src={LogoURl}
                      title="Nirapod Shop"
                    />
                  </SheetTitle>
                </SheetHeader>

                {/* Menu Content */}
                <div className="overflow-y-auto h-[calc(100vh-100px)] p-6">
                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-1 mb-8">
                    <NavLinks navlinks={links} mobile />
                  </nav>

                  {/* Account Section */}
                  <div className="mb-8 p-4 bg-primary from-purple-50 to-pink-50 rounded-xl">
                    <h3 className="text-sm font-semibold text-primary mb-3">
                      Your Account
                    </h3>
                    <div className="space-y-2">
                      <button className="w-full text-left px-4 py-2 text-sm text-primary hover:bg-white rounded-lg transition-colors">
                        Profile Settings
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-primary hover:bg-white rounded-lg transition-colors">
                        Order History
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-primary hover:bg-white rounded-lg transition-colors">
                        Sign Out
                      </button>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex justify-around py-6 border-t border-gray-100">
                    <div className="text-center">
                      <IconButton
                        icon={Heart}
                        label="Wishlist"
                        badgeCount={3}
                      />
                      <p className="text-xs text-gray-600 mt-1">Wishlist</p>
                    </div>
                    <div className="text-center">
                      <IconButton
                        icon={ShoppingCart}
                        label="Cart"
                        badgeCount={2}
                      />
                      <p className="text-xs text-gray-600 mt-1">Cart</p>
                    </div>
                    <div className="text-center">
                      <IconButton icon={User} label="Account" />
                      <p className="text-xs text-gray-600 mt-1">Account</p>
                    </div>
                  </div>

                  {/* Promo Section */}
                  <div className="mt-6 p-4 bg-primary rounded-xl text-primary-white text-center">
                    <p className="text-sm font-semibold mb-1">Special Offer!</p>
                    <p className="text-xs">Get 20% off your first order</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile search bar */}
          <div className="lg:hidden pb-4">
            <SearchBar mobile />
          </div>
        </Container>
      </header>
    </>
  );
}
