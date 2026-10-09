"use client";

import Link from "next/link";
import { useRef } from "react";
import { navigation } from "../lib/home-data";
import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY, EMAIL_HREF, PHONE_HREF, WHATSAPP_HREF } from "../lib/contact";

export function Wordmark() {
  return (
    <Link className="brand-lockup" href="/" aria-label="Form and Frame home">
      <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
          <path d="M6 7h52M10 55V11h44v44M32 11v44M10 28h13M41 28h13M6 58h52" />
        </g>
        <g className="brand-mark-handles">
          <path d="M27 31h3v13h-3zM34 31h3v13h-3z" />
        </g>
      </svg>
      <span className="brand-name">FORM <i>&amp;</i> FRAME</span>
    </Link>
  );
}

export function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  function closeMenu() { if (menu.current) menu.current.open = false; }

  return (
    <>
      <Link className="skip-link" href="#main-content">Skip to content</Link>
      <header className="site-header"><div className="container header-inner">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
        <a className="button header-contact" href={WHATSAPP_HREF}>WhatsApp <span aria-hidden="true">↗</span></a>
        <details className="mobile-menu" ref={menu} onKeyDown={event => { if (event.key === "Escape") { closeMenu(); menu.current?.querySelector("summary")?.focus(); } }}>
          <summary>Menu <span aria-hidden="true">☰</span></summary>
          <nav aria-label="Mobile navigation">{navigation.map(item => <Link onClick={closeMenu} key={item.href} href={item.href}>{item.label}</Link>)}<a onClick={closeMenu} href={WHATSAPP_HREF}>WhatsApp ↗</a></nav>
        </details>
      </div></header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div><Wordmark /><p>Form &amp; Frame Kitchens<br />Kitchen installation, fitted furniture and bespoke joinery.<br />Luton, Bedfordshire.</p><p><a href={PHONE_HREF}>{BUSINESS_PHONE_DISPLAY}</a><br /><a href={EMAIL_HREF}>{BUSINESS_EMAIL}</a></p><p>Contact hours: Monday–Friday, 08:00–17:00.<br />We visit customers at their properties.</p><p><a href="https://www.instagram.com/formandframekitchens/" data-analytics="instagram" data-social-content="profile">Follow our kitchen and furniture work on Instagram ↗</a></p></div>
        <nav aria-label="Footer navigation">{[...navigation, { label: "Joinery Portfolio", href: "/bespoke-joinery/projects" }, { label: "All Projects", href: "/gallery" }, { label: "Kitchen Installation", href: "/kitchen-installation" }, { label: "Bespoke Kitchens", href: "/bespoke-kitchens" }, { label: "In-Frame Kitchens", href: "/in-frame-kitchens" }, { label: "Materials & Finishes", href: "/guides/joinery-materials-finishes" }, { label: "Internal Doors", href: "/internal-door-installation" }, { label: "Privacy", href: "/privacy" }].map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      </div>
      <div className="container footer-bottom"><span>FORM &amp; FRAME</span><span>Considered installation. From plan to finish.</span></div>
    </footer>
  );
}
