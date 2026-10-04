import { ButtonLink } from "./button-link";

export const applyCtaLabel = "Start your Application";

export function ApplyCta() {
  return <ButtonLink href="/apply">{applyCtaLabel}</ButtonLink>;
}
