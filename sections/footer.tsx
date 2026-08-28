import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navItems, siteConfig } from "@/constants/site";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-off-white md:py-20">
      <Container>
        <div className="grid gap-12 border-b border-off-white/15 pb-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] md:gap-8">
          <div>
            <Logo size="medium" />
            <p className="mt-6 max-w-xs text-sm leading-7 text-off-white/55">
              Advocacia e assessoria jurídica para pessoas e empresas, com seriedade, clareza e
              responsabilidade.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Navegação</p>
            <nav aria-label="Navegação do rodapé" className="mt-5 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex min-h-8 items-center text-sm text-off-white/55 transition-colors hover:text-off-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Atuação</p>
            <ul className="mt-5 space-y-3 text-sm text-off-white/55">
              <li>Direito Civil</li>
              <li>Direito Empresarial</li>
              <li>Direito de Família</li>
              <li>Assessoria Jurídica</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Contato</p>
            <div className="mt-5 space-y-4 text-sm text-off-white/55">
              <a
                href={siteConfig.phoneHref}
                className="flex items-start gap-3 transition-colors hover:text-off-white"
              >
                <Phone size={16} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-off-white"
              >
                <MessageCircle size={16} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
                {siteConfig.whatsapp}
              </a>
              <a
                href={siteConfig.emailHref}
                className="flex items-start gap-3 break-all transition-colors hover:text-off-white"
              >
                <Mail size={16} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <span className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
                {siteConfig.city}
              </span>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar o Instagram da RCD Advocacia"
                className="inline-flex items-center gap-3 transition-colors hover:text-off-white"
              >
                <Instagram size={16} className="text-gold" aria-hidden="true" />
                Instagram <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-6 text-xs text-off-white/35 sm:flex-row">
          <span>© {new Date().getFullYear()} RCD Advocacia. Todos os direitos reservados.</span>
          <span>Advocacia e Assessoria Jurídica</span>
        </div>
      </Container>
    </footer>
  );
}
