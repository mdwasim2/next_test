// Nav Links Component
export function NavLinks({ mobile = false, navlinks }) {
  return (
    <>
      {navlinks.map((link) => (
        <a
          key={link.name}
          href="#"
          className={`${
            mobile
              ? "text-lg font-medium text-primary-black  flex items-center justify-between py-3 "
              : "text-sm font-medium text-primary-black  flex items-center space-x-1 transition-colors relative group"
          }`}
        >
          <span className="flex items-center space-x-2">
            {link.icon && <link.icon className="h-4 w-4" />}
            <span>{link.name}</span>
          </span>
          {link.badge && (
            <span className="ml-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-semibold">
              {link.badge}
            </span>
          )}
          {!mobile && (
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          )}
        </a>
      ))}
    </>
  );
}
