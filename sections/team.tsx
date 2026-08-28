import Image from "next/image";
import { Linkedin, UserRound } from "lucide-react";
import { imageAssets } from "@/constants/images";
import { teamMembers } from "@/constants/team";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";

export function Team() {
  return (
    <section className="bg-off-white py-24 md:py-36">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Nossa equipe"
            title={<>Profissionais preparados para diferentes desafios jurídicos.</>}
            description="Uma estrutura pronta para apresentar os profissionais que fazem parte da RCD Advocacia."
          />
          <p className="max-w-xs text-sm leading-7 text-ink/55">
            Os perfis abaixo são placeholders editáveis para receber os dados reais da equipe.
          </p>
        </div>
        <Reveal className="relative mt-16 min-h-[340px] overflow-hidden rounded-editorial bg-ink shadow-card md:min-h-[460px]">
          <Image
            src={imageAssets.team}
            alt="Equipe profissional em ambiente institucional"
            fill
            sizes="(max-width: 768px) 100vw, 1180px"
            className="object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
          <div className="absolute inset-x-7 bottom-7 max-w-md text-off-white md:inset-x-12 md:bottom-12">
            <p className="eyebrow dark-eyebrow">Pessoas e perspectivas</p>
            <p className="mt-4 font-display text-4xl leading-none md:text-5xl">
              Uma equipe que combina escuta, preparo e responsabilidade.
            </p>
          </div>
        </Reveal>
        <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
          {teamMembers.map((member) => (
            <StaggerItem
              key={member.id}
              className="group overflow-hidden rounded-editorial border border-ink/12 bg-off-white shadow-quiet transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative flex aspect-[4/4.3] items-center justify-center overflow-hidden bg-ink">
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, transparent 0 48%, rgba(220,169,71,.18) 48% 49%, transparent 49% 100%), linear-gradient(45deg, transparent 0 61%, rgba(246,246,246,.08) 61% 62%, transparent 62% 100%)",
                  }}
                />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-3xl font-display text-gold">
                  <UserRound size={42} strokeWidth={1.1} aria-hidden="true" />
                </div>
                <span className="absolute bottom-5 left-6 font-mono text-xs tracking-widest text-off-white/40">
                  {member.initials}
                </span>
                <a
                  href="#contato"
                  aria-label={`Entrar em contato sobre ${member.name}`}
                  className="absolute bottom-5 right-5 flex min-h-11 min-w-11 items-center justify-center rounded-full border border-off-white/20 text-off-white transition-colors hover:border-gold hover:text-gold"
                >
                  <Linkedin size={16} aria-hidden="true" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl leading-none">{member.name}</h3>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-gold-deep">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-6 text-ink/60">{member.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
