"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setState("success");
      form.reset();
    } catch (error) {
      setState("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-md border border-border bg-bg-card px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
          placeholder="What would you like to discuss?"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center gap-2 rounded-md bg-text px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-text disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "submitting" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {state === "submitting" ? "Sending..." : "Send Message"}
        </button>

        {state === "success" && (
          <p className="text-sm text-accent" role="status">
            Thanks — your message has been sent.
          </p>
        )}
        {state === "error" && (
          <p className="text-sm text-red-400" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}

function Field({ label, name, type, required, autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-md border border-border bg-bg-card px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
