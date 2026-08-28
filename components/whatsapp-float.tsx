import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/constants/site";

export function WhatsappFloat() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a RCD Advocacia pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex min-h-14 min-w-14 items-center justify-center rounded-full bg-gold text-ink shadow-gold transition-all duration-200 hover:-translate-y-1 hover:bg-gold-deep hover:text-off-white md:bottom-8 md:right-8"
    >
      <MessageCircle size={24} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}
