import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav>
      <ul
        className={`flex ${
          mobile ? "flex-col space-y-4" : "space-x-6"
        } text-gray-700`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-indigo-600">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
