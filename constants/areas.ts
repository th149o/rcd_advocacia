import {
  BriefcaseBusiness,
  Building2,
  FileText,
  Gavel,
  Home,
  Landmark,
  Scale,
  ShieldCheck,
  UsersRound,
  WalletCards,
  Handshake,
  type LucideIcon,
} from "lucide-react";

export type PracticeArea = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const practiceAreas: PracticeArea[] = [
  {
    title: "Direito Civil",
    description: "Relações privadas, obrigações, contratos e responsabilidade civil.",
    icon: Scale,
  },
  {
    title: "Direito Trabalhista",
    description: "Orientação para relações de trabalho, direitos e obrigações trabalhistas.",
    icon: UsersRound,
  },
  {
    title: "Direito Empresarial",
    description: "Assessoria para negócios, contratos, sociedades e decisões estratégicas.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Direito Previdenciário",
    description: "Orientação em benefícios, direitos e procedimentos previdenciários.",
    icon: ShieldCheck,
  },
  {
    title: "Direito de Família",
    description: "Atuação responsável e sensível às particularidades de cada família.",
    icon: Handshake,
  },
  {
    title: "Direito Imobiliário",
    description: "Imóveis, contratos, negociações e relações imobiliárias.",
    icon: Home,
  },
  {
    title: "Direito do Consumidor",
    description: "Análise e defesa de direitos nas relações de consumo.",
    icon: FileText,
  },
  {
    title: "Direito Tributário",
    description: "Orientação jurídica sobre questões tributárias e obrigações fiscais.",
    icon: WalletCards,
  },
  {
    title: "Direito Administrativo",
    description: "Demandas e procedimentos relacionados à Administração Pública.",
    icon: Landmark,
  },
  {
    title: "Consultoria Empresarial",
    description: "Apoio jurídico estratégico para decisões e prevenção de riscos.",
    icon: Building2,
  },
  {
    title: "Assessoria Jurídica",
    description: "Acompanhamento personalizado para pessoas físicas e empresas.",
    icon: Gavel,
  },
];
