import { ArrowUpRight } from "lucide-react";
import { practiceAreas } from "@/constants/areas";
import { Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";

export function PracticeAreas() {
  return (
    <section id="atuacao" className="bg-ink py-24 text-off-white md:py-36">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            dark
            eyebrow="Atuação"
            title={<>Clareza para diferentes necessidades jurídicas.</>}
            description="Conheça algumas das áreas em que a RCD Advocacia oferece orientação e suporte jurídico."
          />
          <p className="max-w-xs text-sm leading-7 text-off-white/55 lg:pb-1">
            Cada caso merece uma leitura própria. Nossa atuação parte do entendimento e se adapta ao
            contexto.
          </p>
        </div>
        <Stagger className="mt-16 grid gap-px overflow-hidden border border-off-white/15 bg-off-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map(({ title, description, icon: Icon }, index) => (
            <StaggerItem
              key={title}
              className="group min-h-[250px] bg-ink p-7 transition-colors duration-300 hover:bg-gold hover:text-ink md:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <Icon
                  size={25}
                  strokeWidth={1.35}
                  className="text-gold transition-colors duration-300 group-hover:text-ink"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs text-off-white/35 transition-colors group-hover:text-ink/50">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-16 font-display text-3xl leading-none tracking-tight">{title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-6 text-off-white/55 transition-colors group-hover:text-ink/70">
                {description}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-ink">
                Saiba mais <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
