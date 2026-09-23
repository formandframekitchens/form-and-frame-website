"use client";

import Link from "next/link";

import { useRef } from "react";
import { navigation } from "../lib/home-data";
import { planContactHref } from "../lib/contact";

export function Wordmark() {
  return <Link className="wordmark" href="/" aria-label="Form and Frame home">FORM <span>&amp;</span> FRAME</Link>;
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
        <Link className="button header-contact" href={planContactHref}>WhatsApp <span aria-hidden="true">↗</span></Link>
        <details className="mobile-menu" ref={menu} onKeyDown={event => { if (event.key === "Escape") { closeMenu(); menu.current?.querySelector("summary")?.focus(); } }}>
          <summary>Menu <span aria-hidden="true">☰</span></summary>
          <nav aria-label="Mobile navigation">{navigation.map(item => <Link onClick={closeMenu} key={item.href} href={item.href}>{item.label}</Link>)}<Link onClick={closeMenu} href={planContactHref}>WhatsApp ↗</Link></nav>
        </details>
      </div></header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div><Wordmark /><p>Independent kitchen installation and joinery services.<br />Luton, Bedfordshire.</p></div>
        <nav aria-label="Footer navigation">{[...navigation, { label: "In-Frame Kitchens", href: "/in-frame-kitchens" }, { label: "Internal Doors", href: "/internal-door-installation" }, { label: "Contact", href: "/#quote-contact" }].map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      </div>
      <div className="container footer-bottom"><span>FORM &amp; FRAME</span><span>Considered installation. From plan to finish.</span></div>
    </footer>
  );
}
