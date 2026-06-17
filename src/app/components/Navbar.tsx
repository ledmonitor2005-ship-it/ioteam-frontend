import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import logo from './logo1.png';

const solutionsMenu = [
  { label: 'Giải pháp công trình xanh (LEED/EDGE)', href: '#solutions' },

  { label: 'Giải pháp giám sát năng lượng EnMS (ISO 50001)', href: '#solutions' },
  { label: 'Giải pháp báo cáo ESG', href: '#trust' },
];

const navLinks = [
  { label: 'Trang chủ', href: '#' },
  { label: 'Giải pháp', href: '#solutions', sub: solutionsMenu },
  { label: 'Dự án', href: '#projects' },
  { label: 'Tin tức', href: '#' },
  { label: 'Liên hệ', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaOpen(false);
      }
    };
    if (megaOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [megaOpen]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + 120; // offset for header

      const sections = [
        { id: 'challenges', hash: '#solutions' },
        { id: 'platform', hash: '#solutions' },
        { id: 'projects', hash: '#projects' },
        { id: 'contact', hash: '#contact' },
      ];

      let currentActive = '#';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActive = section.hash;
            break;
          }
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentActive = '#contact';
      } else if (window.scrollY < 100) {
        currentActive = '#';
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || '#');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);



  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--nav-bg)',
        
        transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s'
      }}
      className={isScrolled ? 'shadow-sm' : ''}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4" style={{ display: 'flex', alignItems: 'center', height: '60px', gap: '24px' }}>

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}
        >
          <img
            src={logo}
            alt="IoTeamVN — Hệ thống quản lý năng lượng IoT"
            style={{ height: '25px', width: 'auto', display: 'block', filter: 'invert(0.1)' }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="lg-flex-custom mobile-hidden-custom" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
          {navLinks.map((link) => (
            <div key={link.label} style={{ position: 'relative' }}>
              {link.sub ? (
                <div ref={megaMenuRef} style={{ position: 'relative' }}>
                  <button
                    onClick={() => setMegaOpen(!megaOpen)}
                    data-active={activeSection === link.href || link.sub.some(item => activeSection === item.href)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '8px 12px',
                      fontWeight: 400,
                      border: 'none',
                      cursor: 'pointer',
                      borderRadius: '6px',
                      transition: 'all 0.2s'
                    }}
                    className="bg-transparent hover:!bg-emerald-100 hover:text-emerald-800 data-[active=true]:!bg-emerald-600 data-[active=true]:text-white data-[active=true]:shadow-md dark:hover:!bg-emerald-900/60 dark:hover:text-emerald-200 dark:data-[active=true]:!bg-emerald-700 dark:data-[active=true]:text-white text-[var(--nav-link)] text-label text-slate-700"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      style={{
                        opacity: 0.6,
                        transform: megaOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s'
                      }}
                    />
                  </button>

                  {/* Mega-menu dropdown */}
                  {megaOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: 'var(--card)',
                        border: '1px solid var(--border)',
                        borderRadius: '12px',
                        padding: '8px',
                        minWidth: '280px',
                        boxShadow: 'var(--shadow-card)',
                        marginTop: '4px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px'
                      }}
                    >
                      {link.sub.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMegaOpen(false)}
                          data-active={activeSection === item.href}
                          style={{
                            display: 'block',
                            padding: '8px 12px',
                            textDecoration: 'none',
                            borderRadius: '6px',
                            transition: 'all 0.15s ease'
                          }}
                          className="hover:bg-emerald-50 hover:text-emerald-700 data-[active=true]:bg-emerald-100 data-[active=true]:text-emerald-800 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-300 dark:data-[active=true]:bg-emerald-900/50 dark:data-[active=true]:text-emerald-200 text-[var(--foreground)] text-label text-slate-700"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={link.href}
                  data-active={activeSection === link.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 12px',
                    fontWeight: 400,
                    textDecoration: 'none',
                    borderRadius: '6px',
                    transition: 'all 0.2s'
                  }}
                  className="bg-transparent hover:!bg-emerald-100 hover:text-emerald-800 data-[active=true]:!bg-emerald-600 data-[active=true]:text-white data-[active=true]:shadow-md dark:hover:!bg-emerald-900/60 dark:hover:text-emerald-200 dark:data-[active=true]:!bg-emerald-700 dark:data-[active=true]:text-white text-[var(--nav-link)] text-label text-slate-700"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Right: CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0, marginLeft: 'auto' }}>


          <a
            href="#contact"
            className="inline-flex items-center justify-center px-3 py-2 rounded-[6px] bg-[#059669] hover:bg-[#047857] text-white transition-all duration-200 mobile-hidden-custom text-label font-semibold hover:scale-105 active:scale-[0.98]"
          >
            Yêu cầu tư vấn
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg-hidden-custom flex"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              color: 'var(--foreground)'
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="lg-hidden-custom"
          style={{
            
            backgroundColor: 'var(--card)',
            padding: '16px 24px',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          {navLinks.map((link) => {
            const hasSub = !!link.sub;
            const isExpanded = expandedMobile === link.label;

            return (
              <div key={link.label} style={{ marginBottom: '4px' }}>
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between' }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (hasSub) {
                        e.preventDefault();
                        setExpandedMobile(isExpanded ? null : link.label);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    data-active={activeSection === link.href || (hasSub && link.sub.some(sub => activeSection === sub.href))}
                    style={{
                      display: 'block',
                      padding: '8px 12px',
                      fontWeight: 400,
                      textDecoration: 'none',
                      borderRadius: '6px',
                      transition: 'all 0.2s',
                      flexGrow: 1
                    }}
                    className="hover:bg-emerald-50 hover:text-emerald-700 data-[active=true]:bg-emerald-100 data-[active=true]:text-emerald-800 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-300 dark:data-[active=true]:bg-emerald-900/50 dark:data-[active=true]:text-emerald-200 text-[var(--foreground)] text-label text-slate-700"
                  >
                    {link.label}
                  </a>
                  {hasSub && (
                    <button
                      onClick={() => setExpandedMobile(isExpanded ? null : link.label)}
                      style={{
                        padding: '8px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--foreground)'
                      }}
                    >
                      <ChevronDown
                        size={16}
                        style={{
                          transform: isExpanded ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s'
                        }}
                      />
                    </button>
                  )}
                </div>
                {hasSub && isExpanded && (
                  <div style={{ paddingLeft: '12px', borderLeft: '2px solid var(--border)', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {link.sub.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        data-active={activeSection === sub.href}
                        style={{
                          display: 'block',
                          padding: '6px 12px',
                          textDecoration: 'none',
                          borderRadius: '6px',
                          transition: 'all 0.2s'
                        }}
                        className="hover:bg-emerald-50 hover:text-emerald-700 data-[active=true]:bg-emerald-100 data-[active=true]:text-emerald-800 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-300 dark:data-[active=true]:bg-emerald-900/50 dark:data-[active=true]:text-emerald-200 text-[var(--muted-foreground)] text-label text-slate-700"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-[8px] bg-[#059669] hover:bg-[#047857] text-white transition-all duration-200 text-button hover:scale-105 active:scale-[0.98]"
            style={{ display: 'flex', justifyContent: 'center', marginTop: '12px', width: '100%' }}
          >
            Yêu cầu tư vấn
          </a>
        </div>
      )}
    </header>
  );
}
