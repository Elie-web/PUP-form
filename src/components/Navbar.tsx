import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  const links = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Services", href: "/services" },
    { label: "Programme", href: "/programme" },
    { label: "Contact", href: "/contact" },
  ];

  const transparent = isHome && !scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${transparent ? "bg-transparent border-transparent" : "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className={`font-heading text-lg font-semibold uppercase tracking-wider transition-colors ${transparent ? "text-white" : "text-foreground"}`}>
          PUP Form
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm transition-colors ${location.pathname === l.href ? (transparent ? "text-white font-medium" : "text-brand font-medium") : (transparent ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground")}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-brand text-white font-medium px-5 py-2 rounded-md text-sm hover:bg-brand/90 transition-colors"
          >
            Réserver
          </Link>
        </div>
        <button
          className={`md:hidden transition-colors ${transparent ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`block text-sm transition-colors ${location.pathname === l.href ? "text-brand font-medium" : "text-muted-foreground hover:text-foreground"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block bg-brand text-white font-medium px-5 py-2 rounded-md text-sm text-center hover:bg-brand/90 transition-colors"
          >
            Réserver
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
