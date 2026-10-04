import { Resend } from "resend";
import type { Application } from "./parse-application";
import type { ApplicationNotifier } from "./submit-application";

export const consoleNotifier: ApplicationNotifier = {
  async notify(application) {
    console.info("New Application (set RESEND_API_KEY to email these):", application);
  },
};

export function resendNotifier(apiKey: string, inbox: string, from: string): ApplicationNotifier {
  const resend = new Resend(apiKey);
  return {
    async notify(application: Application) {
      const { error } = await resend.emails.send({
        from,
        to: inbox,
        replyTo: application.email,
        subject: `New Application from ${application.company}`,
        text: [
          `Name: ${application.name}`,
          `Company: ${application.company}`,
          `Email: ${application.email}`,
        ].join("\n"),
      });
      if (error) throw new Error(`Resend rejected the email: ${error.message}`);
    },
  };
}

export function notifierFromEnv(env: NodeJS.ProcessEnv = process.env): ApplicationNotifier {
  const { RESEND_API_KEY, APPLICATION_INBOX, APPLICATION_FROM } = env;
  if (!RESEND_API_KEY || !APPLICATION_INBOX) return consoleNotifier;
  return resendNotifier(
    RESEND_API_KEY,
    APPLICATION_INBOX,
    APPLICATION_FROM ?? "Northbound <onboarding@resend.dev>",
  );
}
