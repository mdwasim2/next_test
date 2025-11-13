"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, Menu, ShoppingCart, Tag, TrendingUp, User } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "./Container";
import IconButton from "./IconButton";
import Logo from "./Logo";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Shop" },
    { name: "New Arrivals", icon: TrendingUp, badge: "Hot" },
    { name: "Deals", icon: Tag, badge: "Sale" },
    { name: "About" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 🔹 Top Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium tracking-wide">
        Free Shipping on Orders Over $50 | Use Code: FREESHIP
      </div>

      {/* 🔹 Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-background shadow-sm"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* 🔸 Logo */}
            <Logo title="Shop" />

            {/* 🔸 Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavLinks navlinks={links} />
            </nav>

            {/* 🔸 Desktop Search */}
            <div className="hidden lg:block w-[280px]">
              <SearchBar />
            </div>

            {/* 🔸 Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <IconButton icon={Heart} label="Wishlist" badgeCount={3} />
              <IconButton icon={ShoppingCart} label="Cart" badgeCount={2} />
              <IconButton icon={User} label="Account" />
            </div>

            {/* 🔸 Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-secondary/10"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6 text-secondary" />
                </Button>
              </SheetTrigger>

              {/* 🔹 Mobile Menu Drawer */}
              <SheetContent side="right" className="w-80 p-0">
                <SheetHeader className="p-6 border-b border-border">
                  <SheetTitle>
                    <Logo title="Shop" />
                  </SheetTitle>
                </SheetHeader>

                <div className="overflow-y-auto h-[calc(100vh-100px)] p-6">
                  {/* 🔸 Mobile Nav Links */}
                  <nav className="flex flex-col space-y-2 mb-8">
                    <NavLinks navlinks={links} mobile />
                  </nav>

                  {/* 🔸 Account Section */}
                  <div className="mb-8 p-4 bg-secondary/10 rounded-xl">
                    <h3 className="text-sm font-semibold text-secondary mb-3">
                      Your Account
                    </h3>
                    <div className="space-y-2">
                      {["Profile Settings", "Order History", "Sign Out"].map(
                        (item) => (
                          <button
                            key={item}
                            className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary/20 rounded-lg transition-colors"
                          >
                            {item}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* 🔸 Quick Actions */}
                  <div className="flex justify-around py-6 border-t border-border">
                    {[
                      { icon: Heart, label: "Wishlist", badgeCount: 3 },
                      { icon: ShoppingCart, label: "Cart", badgeCount: 2 },
                      { icon: User, label: "Account" },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <IconButton
                          icon={item.icon}
                          label={item.label}
                          badgeCount={item.badgeCount}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* 🔸 Promo Section */}
                  <div className="mt-6 p-4 bg-primary rounded-xl text-primary text-center shadow-md">
                    <p className="text-sm font-semibold mb-1">
                      🎁 Special Offer!
                    </p>
                    <p className="text-xs opacity-90">
                      Get 20% off your first order
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* 🔹 Mobile Search Bar */}
          <div className="lg:hidden pb-4">
            <SearchBar mobile />
          </div>
        </Container>
      </header>
    </>
  );
}
