"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/constants/site";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-off-white/10 bg-ink/90 text-off-white shadow-quiet backdrop-blur-xl transition-all duration-300 ${scrolled ? "bg-ink/95 shadow-card" : ""}`}
    >
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <a
          href="#inicio"
          aria-label="RCD Advocacia — início"
          onClick={closeMenu}
          className="group flex min-h-11 items-center gap-3"
        >
          <Logo size="small" />
          <span className="hidden text-xs font-extrabold uppercase tracking-[0.18em] text-off-white transition-colors duration-200 group-hover:text-gold sm:block">
            RCD Advocacia
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative flex min-h-11 items-center text-xs font-semibold tracking-wide text-off-white/90 transition-colors duration-200 hover:text-gold focus-visible:text-gold"
            >
              {item.label}
              <span className="absolute bottom-1 left-0 h-px w-0 bg-gold transition-all duration-200 group-hover:w-full group-focus-visible:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs"
          >
            Fale Conosco <ArrowUpRight size={15} aria-hidden="true" />
          </ButtonLink>
        </div>

        <button
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-off-white/25 text-off-white transition-colors duration-200 hover:border-gold hover:text-gold lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-navigation"
            aria-label="Navegação mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-off-white/10 bg-ink px-4 pb-6 lg:hidden"
          >
            <div className="container-shell flex flex-col pt-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex min-h-12 items-center border-b border-off-white/10 text-sm font-semibold text-off-white/80"
                >
                  {item.label}
                </a>
              ))}
              <ButtonLink
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-5 w-full"
              >
                Fale Conosco <ArrowUpRight size={16} aria-hidden="true" />
              </ButtonLink>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
