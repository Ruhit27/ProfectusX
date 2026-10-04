"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import type { process } from "@/data/home";
import { Icon } from "./icon";
import { Reveal } from "./reveal";

type Step = (typeof process.steps)[number];

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative mx-auto max-w-[1200px] space-y-16 md:space-y-24">
      <div aria-hidden="true" className="absolute inset-y-0 left-4 w-px bg-[rgb(60,60,60)] md:left-1/2">
        <motion.div
          className="h-full w-px origin-top bg-[linear-gradient(0deg,var(--purple)_0%,var(--purple)_100%)]"
          style={{ scaleY: progress }}
        />
      </div>
      {steps.map((step, i) => {
        const cardOnRight = i % 2 === 0;
        return (
          <li key={step.title} className="relative grid items-start gap-6 pl-12 md:grid-cols-2 md:gap-24 md:pl-0">
            <span
              aria-hidden="true"
              className="absolute left-4 top-7 grid size-6 -translate-x-1/2 place-items-center rounded-full bg-background md:left-1/2"
            >
              <span className={`size-3 rounded-full ${i === 0 ? "bg-ember" : "bg-[rgb(120,120,120)]"}`} />
            </span>
            <div className={`flex ${cardOnRight ? "md:justify-end" : "md:order-2 md:justify-start"}`}>
              <span className="rounded-full bg-[rgb(22,22,22)] px-7 py-2.5 text-lg font-medium text-muted">
                Step {i + 1}
              </span>
            </div>
            <Reveal className={cardOnRight ? "" : "md:order-1"}>
              <div className="rounded-3xl border border-line bg-background p-8">
                <Icon name={step.icon} className="size-12" />
                <h3 className="mt-6 text-[30px] font-medium leading-[1.1] tracking-[-0.04em] text-text">{step.title}</h3>
                {step.body && <p className="mt-4 text-lg leading-[1.4] tracking-[-0.02em] text-muted">{step.body}</p>}
                {step.points && (
                  <dl className="mt-4 text-lg leading-[1.4] tracking-[-0.02em]">
                    {step.points.map((point) => (
                      <div key={point.label}>
                        <dt className="font-bold text-text">{point.label}</dt>
                        <dd className="text-muted">{point.body}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
