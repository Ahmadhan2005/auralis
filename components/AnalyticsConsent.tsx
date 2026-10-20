"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const consentKey = "auralis-analytics-consent";
const validGaId = gaId && /^G-[A-Z0-9]+$/i.test(gaId) ? gaId : null;

type ConsentState = "unknown" | "accepted" | "declined";

function getConsentSnapshot(): ConsentState {
  const saved = window.localStorage.getItem(consentKey);
  return saved === "accepted" || saved === "declined" ? saved : "unknown";
}

function getServerConsentSnapshot(): ConsentState {
  return "unknown";
}

function subscribeToConsent(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("auralis-consent-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("auralis-consent-change", onChange);
  };
}

export function AnalyticsConsent() {
  if (!validGaId) return null;

  return <AnalyticsPrompt measurementId={validGaId} />;
}

function AnalyticsPrompt({ measurementId }: { measurementId: string }) {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );

  function chooseConsent(value: Exclude<ConsentState, "unknown">) {
    window.localStorage.setItem(consentKey, value);
    window.dispatchEvent(new Event("auralis-consent-change"));
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="auralis-google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${measurementId}', { anonymize_ip: true });`}
          </Script>
        </>
      )}
      {consent === "unknown" && (
        <aside
          aria-label="Analytics consent"
          className="auralis-light-surface fixed inset-x-4 bottom-4 z-[60] mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-outline bg-white p-5 shadow-card sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-xs leading-relaxed text-secondary">
            We can use Google Analytics to understand visits and improve this
            site. Analytics loads only if you accept.{" "}
            <a
              className="font-medium text-primary underline underline-offset-2"
              href="https://policies.google.com/privacy"
              rel="noreferrer"
              target="_blank"
            >
              Google privacy policy
            </a>
          </p>
          <div className="flex shrink-0 gap-2">
            <button
              className="rounded-full border border-outline px-4 py-2 text-xs font-medium transition-colors hover:bg-surface-low"
              onClick={() => chooseConsent("declined")}
              type="button"
            >
              Decline
            </button>
            <button
              className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-black/80"
              onClick={() => chooseConsent("accepted")}
              type="button"
            >
              Accept analytics
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
