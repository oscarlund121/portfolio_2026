"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { FiSend } from "react-icons/fi";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formRef.current!,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    );
    setSent(true);
  }

  if (sent) {
    return (
      <div className="max-w-md w-full mx-auto flex flex-col items-center justify-center gap-4 py-16">
        <p className="text-2xl font-black text-black uppercase tracking-tight">
          Message sent
        </p>
        <p className="text-black/60 font-medium">
          Thanks for reaching out. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md w-full mx-auto"
    >
      <div>
        <label
          htmlFor="name"
          className="tech-mono text-black mb-2 block font-bold"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="from_name"
          required
          className="neo-input"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="tech-mono text-black mb-2 block font-bold"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="from_email"
          required
          className="neo-input"
          placeholder="Your email"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="tech-mono text-black mb-2 block font-bold"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="neo-input resize-none"
          placeholder="How can we work together?"
        />
      </div>
      <Button
        type="submit"
        variant="accent"
        className="w-full cursor-pointer flex items-center justify-center py-4 mt-8"
        disabled={pending}
      >
        <span>{pending ? "SENDING..." : "SEND MESSAGE"}</span>
        <FiSend className="h-4 w-4" />
      </Button>
    </form>
  );
}
