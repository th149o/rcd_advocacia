"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type FormValues = { name: string; email: string; phone: string; subject: string; message: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Informe seu nome.";
  if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email))
    errors.email = "Informe um e-mail válido.";
  if (!values.phone.trim()) errors.phone = "Informe seu telefone.";
  if (!values.subject.trim()) errors.subject = "Informe o assunto.";
  if (!values.message.trim() || values.message.trim().length < 12)
    errors.message = "Descreva brevemente sua necessidade.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setStatus("ready");
  }

  function update(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  }

  const fields: Array<{
    name: keyof FormValues;
    label: string;
    type: string;
    placeholder: string;
  }> = [
    { name: "name", label: "Nome", type: "text", placeholder: "Seu nome completo" },
    { name: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
    { name: "phone", label: "Telefone", type: "tel", placeholder: "(00) 00000-0000" },
    { name: "subject", label: "Assunto", type: "text", placeholder: "Como podemos ajudar?" },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="text-xs font-bold uppercase tracking-[0.14em] text-off-white/60"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={values[field.name]}
              onChange={(event) => update(field.name, event.target.value)}
              placeholder={field.placeholder}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              className="mt-3 min-h-12 w-full border-b border-off-white/25 bg-transparent px-0 py-3 text-sm text-off-white placeholder:text-off-white/35 transition-colors focus:border-gold focus:outline-none"
            />
            {errors[field.name] ? (
              <p id={`${field.name}-error`} role="alert" className="mt-2 text-xs text-gold">
                {errors[field.name]}
              </p>
            ) : null}
          </div>
        ))}
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-xs font-bold uppercase tracking-[0.14em] text-off-white/60"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Conte brevemente sobre sua necessidade"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-3 w-full resize-y border-b border-off-white/25 bg-transparent px-0 py-3 text-sm text-off-white placeholder:text-off-white/35 transition-colors focus:border-gold focus:outline-none"
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="mt-2 text-xs text-gold">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit">
          Validar mensagem <span aria-hidden="true">↗</span>
        </Button>
        <p aria-live="polite" className="max-w-xs text-xs leading-5 text-off-white/45">
          {status === "ready"
            ? "Dados validados. A integração de envio será conectada em uma próxima etapa."
            : "Este formulário é um protótipo preparado para integração."}
        </p>
      </div>
    </form>
  );
}
