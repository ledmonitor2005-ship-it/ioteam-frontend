import { MapPin, Mail, Phone, Facebook, MessageCircle } from 'lucide-react';
import logo from './image.png';

const footerLinks = {
  solutions: [
    { label: 'Quản lý năng lượng (EnMS)', href: '#' },
    { label: 'Nhà máy thông minh', href: '#' },
    { label: 'ISO 50001 - ESG ready', href: '#' },
    { label: 'Công trình xanh', href: '#' },
    { label: 'Giải pháp tưới cây tự động', href: '#' },
  ],
  company: [
    { label: 'Về chúng tôi', href: '#' },
    { label: 'Dự án', href: '#projects' },
    { label: 'Tin tức', href: '#' },
  ],
};

const socials = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/ioteamvietnam' },
  { icon: MessageCircle, label: 'Zalo OA', href: '#' },
];

export function SiteFooter() {
  return (
    <footer
      aria-label="Site footer"
      style={{ backgroundColor: 'var(--card)', padding: '48px 0 24px', transition: 'background-color 0.3s, border-color 0.3s' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '32px', marginBottom: '36px' }}>

          {/* Col 1: Brand */}
          <div>
            <img
              src={logo}
              alt="IoTeamVN — Hệ thống quản lý năng lượng IoT"
              style={{ height: '25px', width: 'auto', display: 'block', marginBottom: '16px' }}
            />

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <MapPin size={14} className="text-emerald-600 shrink-0 mt-0.5" style={{ transition: 'color 0.3s' }} />
                <span className="text-body-sm text-slate-500 dark:text-slate-300" style={{ transition: 'color 0.3s' }}>Số 3 ngõ 220 Bạch Mai, Hai Bà Trưng, Hà Nội</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={14} className="text-emerald-600 shrink-0" style={{ transition: 'color 0.3s' }} />
                <a href="mailto:contact@ioteamvn.com" className="text-body-sm text-slate-500 dark:text-slate-300 hover:text-emerald-700 transition-colors" style={{ textDecoration: 'none' }}>contact@ioteamvn.com</a>
              </li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={14} className="text-emerald-600 shrink-0" style={{ transition: 'color 0.3s' }} />
                <a href="tel:+84968336043" className="text-body-sm text-slate-500 dark:text-slate-300 hover:text-emerald-700 transition-colors" style={{ textDecoration: 'none' }}>(+84) 96 833 6043</a>
              </li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="text-eyebrow uppercase text-slate-500 dark:text-slate-400 mb-4 tracking-wider" style={{ transition: 'color 0.3s' }}>Giải pháp</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-body-sm text-slate-500 dark:text-slate-300 hover:text-emerald-700 transition-colors" style={{ textDecoration: 'none' }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-eyebrow uppercase text-slate-500 dark:text-slate-400 mb-4 tracking-wider" style={{ transition: 'color 0.3s' }}>Công ty</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-body-sm text-slate-500 dark:text-slate-300 hover:text-emerald-700 transition-colors" style={{ textDecoration: 'none' }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Social + CTA */}
          <div>
            <h4 className="text-eyebrow uppercase text-slate-500 dark:text-slate-400 mb-4 tracking-wider" style={{ transition: 'color 0.3s' }}>Liên hệ nhanh</h4>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: '36px', height: '36px',
                    backgroundColor: 'var(--secondary)', border: '1px solid var(--border)',
                    borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--muted-foreground)', textDecoration: 'none',
                    transition: 'all 0.15s ease' }}
                  className="hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[var(--accent)] hover:scale-105 active:scale-[0.98]"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', transition: 'border-color 0.3s' }}>
          <p className="text-caption text-slate-500 dark:text-slate-400 m-0" style={{ transition: 'color 0.3s' }}>
            © 2026 IoTeamVN. Giải pháp quản lý năng lượng IoT hàng đầu Việt Nam.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <a key={label} href="#" className="text-caption text-slate-500 dark:text-slate-400 hover:text-emerald-700 transition-colors" style={{ textDecoration: 'none', transition: 'color 0.3s' }}>{label}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
