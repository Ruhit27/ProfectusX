import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">This page drifted off course</h1>
      <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-8">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </Container>
  );
}
