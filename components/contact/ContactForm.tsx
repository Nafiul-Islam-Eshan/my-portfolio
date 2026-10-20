"use client";

import { useState } from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  Spinner,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
import emailjs from "@emailjs/browser";
import { Check, Envelope, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import { siteConfig } from "@/utils/site";

const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
};

const isEmailConfigComplete =
  Boolean(emailConfig.serviceId) &&
  Boolean(emailConfig.templateId) &&
  Boolean(emailConfig.publicKey);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const fieldClassName =
  "w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-accent/60";

const labelClassName = "mb-1.5 block text-sm text-slate-300";
const errorClassName = "mt-1.5 block text-xs text-rose-400";

const contactChannels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.links.email,
    Icon: Envelope,
  },
  {
    label: "LinkedIn",
    value: "in/md-nafiul-islam",
    href: siteConfig.links.linkedin,
    Icon: LogoLinkedin,
  },
  {
    label: "GitHub",
    value: `@${siteConfig.githubUsername}`,
    href: siteConfig.links.github,
    Icon: LogoGithub,
  },
];

/**
 * Contact form backed by EmailJS. Every submit ends in an explicit success or
 * error state, and a missing configuration is reported rather than failing
 * silently.
 */
export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!isEmailConfigComplete) {
      toast.danger("The contact form is not configured yet.", {
        description: `Please email me directly at ${siteConfig.email}.`,
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        emailConfig.serviceId!,
        emailConfig.templateId!,
        payload,
        { publicKey: emailConfig.publicKey! },
      );
      form.reset();
      toast.success("Message sent.", {
        description: "Thanks for reaching out — I'll reply as soon as I can.",
      });
    } catch (error) {
      console.error("EmailJS send failed", error);
      toast.danger("Your message could not be sent.", {
        description: `Something went wrong. Please try again or email ${siteConfig.email}.`,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <TextField name="name" type="text" isRequired>
          <Label className={labelClassName}>Name</Label>
          <Input
            placeholder="Your name"
            autoComplete="name"
            className={fieldClassName}
          />
          <FieldError className={errorClassName} />
        </TextField>

        <TextField
          name="email"
          type="email"
          isRequired
          validate={(value) =>
            emailPattern.test(value) ? null : "Please enter a valid email address."
          }
        >
          <Label className={labelClassName}>Email</Label>
          <Input
            placeholder="you@example.com"
            autoComplete="email"
            className={fieldClassName}
          />
          <FieldError className={errorClassName} />
        </TextField>

        <TextField name="message" isRequired minLength={10}>
          <Label className={labelClassName}>Message</Label>
          <TextArea
            rows={6}
            placeholder="What would you like to talk about?"
            className={`${fieldClassName} resize-y`}
          />
          <FieldError className={errorClassName} />
        </TextField>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            type="submit"
            isDisabled={isSending}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-base hover:bg-accent-soft"
          >
            {isSending ? (
              <>
                <Spinner color="current" className="size-4" />
                Sending…
              </>
            ) : (
              <>
                <Check className="size-4" aria-hidden="true" />
                Send message
              </>
            )}
          </Button>
          <button
            type="reset"
            className="inline-flex h-11 items-center rounded-lg border border-line px-4 text-sm text-slate-300 transition-colors hover:border-accent/40 hover:text-white"
          >
            Clear
          </button>
        </div>

        <p aria-live="polite" className="sr-only">
          {isSending ? "Sending your message" : ""}
        </p>
      </form>

      <aside className="flex flex-col gap-4">
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-slate-500 uppercase">
            Direct
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Prefer email? These reach me too.
          </p>
        </div>

        <ul className="flex flex-col gap-2">
          {contactChannels.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="flex items-center gap-3 rounded-lg border border-line bg-surface px-3 py-2.5 transition-colors hover:border-accent/40"
              >
                <Icon className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-[11px] text-slate-500">{label}</span>
                  <span className="truncate text-sm text-slate-200">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs leading-relaxed text-slate-500">
          Based in {siteConfig.location} (GMT+6). I usually reply within a day.
        </p>
      </aside>
    </div>
  );
}
