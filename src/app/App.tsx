import { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { PlatformSection } from './components/PlatformSection';
import { TimelineSection } from './components/TimelineSection';
import { Projects } from './components/Projects';
import { ProvenImpactSection } from '../components/sections/ProvenImpactSection';
import { SpecialOffer } from './components/SpecialOffer';
import { CTASection } from './components/CTASection';
import { SiteFooter } from './components/SiteFooter';
import { ScrollReveal } from './components/ScrollReveal';
import FloatingContact from './components/FloatingContact';

export default function App() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  const smoothScrollTo = (targetId: string, _duration = 800, offset = 60) => {
    if (targetId === 'top' || targetId === '') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(targetId);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Expose smoothScrollTo globally
    (window as any).smoothScrollTo = smoothScrollTo;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        if (targetId === '') {
          e.preventDefault();
          smoothScrollTo('top');
          window.history.pushState(null, '', '#');
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            e.preventDefault();
            smoothScrollTo(targetId);
            window.history.pushState(null, '', href);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const winH = window.innerHeight;
          const contactEl = document.getElementById('contact');
          const inContact = contactEl
            ? contactEl.getBoundingClientRect().top < winH * 0.5
            : false;
          setShowStickyBar(scrollY > winH * 0.6 && !inContact);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="antialiased font-sans" style={{ background: 'var(--background)', minHeight: '100vh', color: 'var(--foreground)', overflowX: 'hidden' }}>
      <Navbar />

      {/* 01 · HERO */}
      <Hero />

      {/* 02.5 · PROBLEMS — 5 Pain Points */}
      <ScrollReveal delay={100}>
        <Problems />
      </ScrollReveal>

      {/* 03 · BENEFITS */}
      <ScrollReveal delay={100}>
        <ProvenImpactSection />
      </ScrollReveal>

      {/* 04 · PLATFORM — Hardware + Software */}
      <ScrollReveal delay={100}>
        <PlatformSection />
      </ScrollReveal>

      {/* 07 · TIMELINE — 6-step deployment */}
      <ScrollReveal delay={100}>
        <TimelineSection />
      </ScrollReveal>

      {/* 06 · PROJECTS — Case Studies */}
      <ScrollReveal delay={100}>
        <Projects />
      </ScrollReveal>

      {/* 09.5 · SPECIAL OFFER */}
      <ScrollReveal delay={100}>
        <SpecialOffer />
      </ScrollReveal>

      {/* 10 · CTA — Conversion section */}
      <div ref={contactRef}>
        <ScrollReveal delay={100}>
          <CTASection />
        </ScrollReveal>
      </div>

      {/* 11 · FOOTER */}
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}
