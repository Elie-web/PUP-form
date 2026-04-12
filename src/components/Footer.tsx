import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <p className="font-heading text-xl font-semibold uppercase tracking-wider text-foreground mb-2">
              PUP Form
            </p>
            <p className="text-muted-foreground text-sm mb-4 max-w-xs">
              Coaching sportif, bien-être et mental ultra-personnalisé pour parents et couples trop fatigués. Par Emily et Antoine.
            </p>
            <a href="tel:0682311224" className="text-brand font-medium text-sm hover:underline">
              06 82 31 12 24
            </a>
          </div>
          <div>
            <p className="font-medium text-sm uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "/" },
                { label: "À propos", href: "/a-propos" },
                { label: "Services", href: "/services" },
                { label: "Programme", href: "/programme" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-sm uppercase tracking-widest mb-4">Contact</p>
            <p className="text-muted-foreground text-sm mb-1">27 Av. Jean Jaurès</p>
            <p className="text-muted-foreground text-sm mb-4">38400 Saint-Martin-d'Hères</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand transition-colors text-sm">Facebook</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand transition-colors text-sm">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6">
          <p className="text-muted-foreground text-xs text-center">
            © 2026 PUP Form · Coaching sportif, bien-être et mental pour parents et couples
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
