"use client";

import { useState } from "react";
import type { ApplicationErrors, ApplicationField } from "@/lib/applications/parse-application";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "invalid"; errors: ApplicationErrors }
  | { state: "failed"; message: string }
  | { state: "sent" };

const fields: { name: ApplicationField; label: string; type: string; autoComplete: string; placeholder: string }[] = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", placeholder: "First Name" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization", placeholder: "Name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email", placeholder: "name@company.com" },
];

export function ApplicationForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ state: "submitting" });
    const body = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      if (response.ok) setStatus({ state: "sent" });
      else if (response.status === 422) setStatus({ state: "invalid", errors: result.errors });
      else setStatus({ state: "failed", message: result.message ?? "Something went wrong." });
    } catch {
      setStatus({ state: "failed", message: "Network error. Check your connection and try again." });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="w-full max-w-[400px] rounded-3xl border border-line bg-surface p-8 text-center">
        <h2 className="text-2xl font-medium text-heading">Application received</h2>
        <p className="mt-2 text-muted">Thanks. We review every Application and reply within two business days.</p>
      </div>
    );
  }

  const errors = status.state === "invalid" ? status.errors : {};

  return (
    <form noValidate onSubmit={onSubmit} className="w-full max-w-[400px] space-y-5 rounded-3xl border border-line bg-surface p-6">
      {fields.map((field) => {
        const error = errors[field.name];
        return (
          <div key={field.name} className="space-y-2">
            <label htmlFor={field.name} className="block text-sm font-medium text-heading">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${field.name}-error` : undefined}
              className="w-full rounded-lg border border-transparent bg-[rgb(30,30,30)] px-3 py-2.5 text-sm text-heading outline-none transition placeholder:text-text focus:border-violet aria-invalid:border-red-400"
            />
            {error && (
              <p id={`${field.name}-error`} className="text-sm text-red-400">
                {error}
              </p>
            )}
          </div>
        );
      })}
      {status.state === "failed" && (
        <p role="alert" className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {status.message}
        </p>
      )}
      <button
        type="submit"
        disabled={status.state === "submitting"}
        className="w-full rounded-lg bg-button px-4 py-2.5 text-sm font-bold text-heading transition hover:bg-[rgb(44,46,48)] disabled:opacity-60"
      >
        {status.state === "submitting" ? "Sending…" : "Apply"}
      </button>
    </form>
  );
}
