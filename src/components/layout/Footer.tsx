export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <span className="text-gold font-bold text-lg">RM11</span>
            <nav className="flex gap-6">
              <a
                href="https://rm11.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold-muted hover:text-gold transition-colors"
              >
                Main Site
              </a>
              <a
                href="https://rm11.com/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold-muted hover:text-gold transition-colors"
              >
                Blog
              </a>
              <a
                href="#apply"
                className="text-sm text-gold-muted hover:text-gold transition-colors"
              >
                Apply
              </a>
            </nav>
          </div>
          <p className="text-sm text-white-dim">
            &copy; {new Date().getFullYear()} RM11. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
