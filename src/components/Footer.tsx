const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Denilson Monteiro
            </p>
            <p className="text-muted-foreground text-xs mt-1">Coach Sportif Personnel</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/thebodyisblack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              YouTube
            </a>
          </div>
          <p className="text-muted-foreground text-xs">
            © 2025 Denilson Monteiro — Coach Sportif Personnel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
