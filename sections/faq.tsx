"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";

const items = [
  [
    "Quais áreas do Direito a RCD Advocacia atende?",
    "A RCD Advocacia oferece orientação e assessoria em diferentes áreas, incluindo Direito Civil, Trabalhista, Empresarial, Previdenciário, de Família, Imobiliário, do Consumidor, Tributário e Administrativo.",
  ],
  [
    "Como posso entrar em contato com o escritório?",
    "Você pode falar com a equipe pelo WhatsApp, telefone, e-mail ou pelo formulário disponível nesta página.",
  ],
  [
    "O atendimento é realizado apenas presencialmente?",
    "O escritório está em Miguel Pereira/RJ e pode avaliar a melhor forma de atendimento de acordo com a necessidade e as características de cada caso.",
  ],
  [
    "Empresas podem contratar assessoria jurídica?",
    "Sim. A RCD Advocacia oferece consultoria e assessoria jurídica voltadas às necessidades do ambiente empresarial.",
  ],
  [
    "Como funciona o primeiro contato?",
    "No primeiro contato, você apresenta brevemente sua necessidade para que a equipe possa compreender o contexto e orientar sobre os próximos passos.",
  ],
  [
    "Posso entrar em contato pelo WhatsApp?",
    "Sim. O WhatsApp é um dos principais canais de atendimento da RCD Advocacia.",
  ],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-off-white py-24 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title={<>Respostas para começar com mais clareza.</>}
            description="Informações institucionais para orientar o primeiro contato."
          />
          <Reveal>
            <div className="border-t border-ink/15">
              {items.map(([question, answer], index) => {
                const isOpen = open === index;
                return (
                  <div key={question} className="border-b border-ink/15">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      className="flex min-h-20 w-full cursor-pointer items-center justify-between gap-6 text-left text-base font-semibold transition-colors hover:text-gold-deep"
                      onClick={() => setOpen(isOpen ? null : index)}
                    >
                      <span>{question}</span>
                      <ChevronDown
                        size={19}
                        className={`shrink-0 text-gold-deep transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen ? (
                      <div className="max-w-2xl pb-7 pr-10 text-sm leading-7 text-ink/60">
                        {answer}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
