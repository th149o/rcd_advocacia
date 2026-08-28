import Image from "next/image";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { imageAssets } from "@/constants/images";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function About() {
  return (
    <section id="escritorio" className="bg-off-white py-24 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-editorial bg-ink p-5 shadow-card md:p-8">
              <Image
                src={imageAssets.office}
                alt="Composição abstrata inspirada em arquitetura e ambiente institucional"
                width={1200}
                height={900}
                className="h-auto w-full rounded-xl opacity-90"
              />
              <div className="absolute bottom-10 left-10 flex items-center gap-4 text-off-white/80">
                <span className="h-px w-10 bg-gold" />
                <span className="text-xs uppercase tracking-[0.2em]">RCD / 01</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="O escritório"
              title={<>Uma atuação jurídica construída sobre confiança e responsabilidade.</>}
              description="A RCD Advocacia reúne uma atuação multidisciplinar voltada à orientação, prevenção e condução de demandas jurídicas. O escritório busca compreender as particularidades de cada situação para oferecer um atendimento responsável, claro e alinhado às necessidades de pessoas e empresas."
            />
            <div className="mt-10 grid gap-6 border-t border-ink/15 pt-7 sm:grid-cols-2">
              <div className="flex gap-4">
                <Compass
                  className="mt-1 shrink-0 text-gold-deep"
                  size={23}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold">Visão ampla</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/60">
                    Análise cuidadosa para compreender o contexto antes de orientar.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck
                  className="mt-1 shrink-0 text-gold-deep"
                  size={23}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold">Responsabilidade</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/60">
                    Comunicação clara e atuação pautada por ética e seriedade.
                  </p>
                </div>
              </div>
            </div>
            <ButtonLink href="#atuacao" variant="text" className="mt-9 px-0">
              Conheça nossa atuação <ArrowUpRight size={16} aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
