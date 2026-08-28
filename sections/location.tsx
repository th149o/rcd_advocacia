import { ArrowUpRight, MapPin } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;

export function Location() {
  return (
    <section className="bg-gold-wash py-24 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="Onde estamos"
              title={<>Presença próxima para uma conversa importante.</>}
              description="A RCD Advocacia está localizada em Miguel Pereira, no estado do Rio de Janeiro."
            />
            <div className="mt-9 flex gap-4">
              <MapPin size={21} className="mt-1 shrink-0 text-gold-deep" aria-hidden="true" />
              <address className="not-italic text-sm leading-7 text-ink/65">
                {siteConfig.addressLines.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <ButtonLink href={mapsHref} target="_blank" rel="noopener noreferrer" className="mt-9">
              Como Chegar <ArrowUpRight size={16} aria-hidden="true" />
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              role="img"
              aria-label="Mapa ilustrativo com localização aproximada da RCD Advocacia em Miguel Pereira, Rio de Janeiro"
              className="relative min-h-[390px] overflow-hidden rounded-editorial border border-ink/15 bg-ink p-7 shadow-card md:min-h-[510px]"
            >
              <div
                className="absolute inset-0 opacity-45"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(220,169,71,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(220,169,71,.25) 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                }}
              />
              <div className="absolute inset-8 border border-gold/25" />
              <svg
                viewBox="0 0 640 420"
                className="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] opacity-70"
                aria-hidden="true"
              >
                <path
                  d="M-20 316 C90 258 116 302 186 248 S306 178 366 212 S488 272 660 120"
                  fill="none"
                  stroke="rgb(246 246 246 / .22)"
                  strokeWidth="12"
                />
                <path
                  d="M-20 316 C90 258 116 302 186 248 S306 178 366 212 S488 272 660 120"
                  fill="none"
                  stroke="rgb(220 169 71 / .7)"
                  strokeDasharray="2 18"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <path
                  d="M82 12 C144 98 190 108 238 164 S322 294 394 430 M474 -10 C442 76 474 122 542 174 S596 300 576 440"
                  fill="none"
                  stroke="rgb(246 246 246 / .13)"
                  strokeWidth="7"
                />
                <path
                  d="M24 106 H198 M356 92 H612 M52 372 H252 M374 324 H624"
                  fill="none"
                  stroke="rgb(220 169 71 / .16)"
                  strokeWidth="2"
                />
                <circle cx="354" cy="208" r="42" fill="rgb(220 169 71 / .1)" />
                <circle cx="354" cy="208" r="4" fill="rgb(220 169 71)" />
              </svg>
              <span className="absolute right-12 top-12 rounded-full border border-off-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-off-white/45">
                Miguel Pereira · RJ
              </span>
              <div className="absolute left-[56%] top-[49%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink shadow-gold">
                  <MapPin size={21} aria-hidden="true" />
                </span>
                <span className="rounded-full border border-off-white/10 bg-ink/95 px-4 py-2 text-xs font-semibold text-off-white shadow-quiet">
                  RCD Advocacia
                </span>
              </div>
              <p className="absolute bottom-8 left-8 max-w-xs text-xs uppercase tracking-[0.14em] text-off-white/45">
                Mapa preparado para integração com Google Maps
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
