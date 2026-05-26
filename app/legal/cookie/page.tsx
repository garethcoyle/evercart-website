import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSectionData } from "@/components/legal/LegalPage";
import { CalloutBox } from "@/components/legal/CalloutBox";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "What cookies Evercart uses, why we use them, and how to control them.",
};

const SECTIONS: LegalSectionData[] = [
  {
    id: "what-are-cookies",
    number: 1,
    title: "What are cookies?",
    content: (
      <>
        <p>
          Cookies are small text files that a website stores on your device
          when you visit. They allow the site to recognise you on future
          visits, remember your preferences, and understand how the site is
          being used. We also use similar technologies such as local storage,
          session storage, and pixel tags &mdash; in this policy, all of these
          are referred to collectively as &ldquo;cookies&rdquo;.
        </p>
        <p>
          Cookies set by Evercart are &ldquo;first-party&rdquo; cookies.
          Cookies set by third-party services we use (such as analytics or
          payment providers) are &ldquo;third-party&rdquo; cookies.
        </p>
      </>
    ),
  },
  {
    id: "why-we-use",
    number: 2,
    title: "Why we use cookies",
    content: (
      <>
        <p>We use cookies for four purposes:</p>
        <ul>
          <li>
            <strong>Essential cookies</strong> keep the platform running and
            secure
          </li>
          <li>
            <strong>Preference cookies</strong> remember your settings
            (language, theme, dismissed banners)
          </li>
          <li>
            <strong>Analytics cookies</strong> help us understand how
            merchants use the dashboard so we can improve it
          </li>
          <li>
            <strong>Marketing cookies</strong> help us measure the
            effectiveness of our advertising on the evercart.io marketing
            website
          </li>
        </ul>
        <p>
          Essential and preference cookies are set automatically. Analytics
          and marketing cookies are only set after you accept them via our
          consent banner.
        </p>
      </>
    ),
  },
  {
    id: "essential",
    number: 3,
    title: "Essential cookies",
    content: (
      <>
        <p>
          These are required for Evercart to function. You cannot opt out of
          them &mdash; if you block them, parts of the platform will stop
          working.
        </p>
        <ul>
          <li>
            <strong>Authentication:</strong> Keeps you signed in to the
            dashboard. Stored as an httpOnly session token, never accessible
            to JavaScript.
          </li>
          <li>
            <strong>CSRF protection:</strong> A short-lived token included in
            forms to prevent cross-site request forgery attacks.
          </li>
          <li>
            <strong>Cart state:</strong> On merchant storefronts, remembers
            what a shopper has added to their cart between page loads.
          </li>
          <li>
            <strong>Consent preferences:</strong> Remembers which categories
            of cookies you have accepted or declined so you don&rsquo;t have to
            choose again on every visit.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "preference",
    number: 4,
    title: "Preference cookies",
    content: (
      <>
        <p>
          These remember choices you have made so the platform behaves the way
          you expect on your next visit.
        </p>
        <ul>
          <li>
            <strong>Display preferences:</strong> Light or dark theme, table
            density, dashboard layout choices.
          </li>
          <li>
            <strong>Dismissed notices:</strong> Banners and onboarding tips
            you have closed.
          </li>
          <li>
            <strong>Recently viewed:</strong> The last few items you opened in
            your dashboard for quick access.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "analytics",
    number: 5,
    title: "Analytics cookies",
    content: (
      <>
        <p>
          We use a small number of analytics tools to understand how
          merchants use Evercart so we can improve the product. These cookies
          only activate after you consent via the cookie banner.
        </p>
        <ul>
          <li>
            <strong>Plausible Analytics:</strong> Aggregated, privacy-friendly
            usage analytics. Plausible does not use cross-site tracking or
            collect personal data.
          </li>
          <li>
            <strong>Server-side event tracking:</strong> Anonymised events
            sent from our servers about which features are used most. No
            cookies are set in your browser for this; it&rsquo;s included here
            for transparency.
          </li>
        </ul>
        <p>
          We do not use Google Analytics on the merchant dashboard. If we add
          additional analytics tools in future, we will update this list and
          notify you before they take effect.
        </p>
      </>
    ),
  },
  {
    id: "marketing",
    number: 6,
    title: "Marketing cookies",
    content: (
      <>
        <p>
          On our marketing website (www.evercart.io), we may use marketing
          cookies to measure the effectiveness of our advertising campaigns
          and reach people who may be interested in Evercart. These cookies
          only activate after you consent via the cookie banner.
        </p>
        <ul>
          <li>
            <strong>Meta Pixel:</strong> Helps us measure the effectiveness of
            our advertising on Facebook and Instagram.
          </li>
          <li>
            <strong>Google Ads conversion tracking:</strong> Tells us when
            someone who clicked one of our ads goes on to sign up.
          </li>
          <li>
            <strong>LinkedIn Insight Tag:</strong> Helps us measure the
            effectiveness of advertising on LinkedIn.
          </li>
        </ul>
        <p>
          We never use marketing cookies on the merchant dashboard
          (app.evercart.io). They are confined to our marketing site.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    number: 7,
    title: "Third-party cookies",
    content: (
      <>
        <p>
          A small number of third-party services we use may set their own
          cookies when their content loads on Evercart pages. These cookies
          are governed by the third party&rsquo;s privacy policy, not ours.
        </p>
        <ul>
          <li>
            <strong>Stripe:</strong> Sets cookies when payment forms are
            loaded, used for fraud detection.{" "}
            <a
              href="https://stripe.com/cookies-policy/legal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe cookie policy
            </a>
          </li>
          <li>
            <strong>Cloudflare:</strong> Sets security cookies to protect the
            site from bots and attacks.{" "}
            <a
              href="https://www.cloudflare.com/cookie-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare cookie policy
            </a>
          </li>
          <li>
            <strong>YouTube / Vimeo:</strong> If we embed videos on the
            marketing site, those players may set cookies.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "managing",
    number: 8,
    title: "Managing your cookies",
    content: (
      <>
        <p>
          You have several ways to control which cookies are set:
        </p>
        <h3>Our cookie banner</h3>
        <p>
          On your first visit to evercart.io, we show a consent banner that
          lets you accept all cookies, reject non-essential cookies, or
          customise your preferences by category. You can reopen this banner
          at any time by clicking &ldquo;Cookie settings&rdquo; in the footer.
        </p>
        <h3>Your browser settings</h3>
        <p>
          All major browsers allow you to block cookies, clear existing
          cookies, or be notified when cookies are set. Refer to your
          browser&rsquo;s help pages:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <CalloutBox variant="warning">
          <strong>Heads up:</strong> Blocking essential cookies will break
          parts of Evercart. You won&rsquo;t be able to sign in, and shopping
          carts won&rsquo;t persist between pages. Blocking analytics or
          marketing cookies has no effect on the functionality of the
          platform.
        </CalloutBox>
      </>
    ),
  },
  {
    id: "do-not-track",
    number: 9,
    title: "Do Not Track signals",
    content: (
      <>
        <p>
          Some browsers send a &ldquo;Do Not Track&rdquo; signal. Because
          there is no agreed industry standard for how to respond to it, we
          do not currently change our behaviour based on this signal. We
          honour the choices you make via our consent banner instead.
        </p>
        <p>
          We do honour the Global Privacy Control (GPC) signal. If your
          browser sends a GPC header, we treat it as an opt-out of any sale
          or sharing of personal information for cross-context behavioural
          advertising. (We do not sell or share personal information for
          such purposes in any event &mdash; see Section 4 of our{" "}
          <Link href="/legal/privacy">Privacy Policy</Link>.)
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: 10,
    title: "Changes to this policy",
    content: (
      <>
        <p>
          We may update this Cookie Policy from time to time as we add or
          remove tools that use cookies. When we make material changes, we
          will update the &ldquo;Last updated&rdquo; date at the top of this
          page and, if the change affects analytics or marketing cookies,
          we will surface a new consent prompt before they activate.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: 11,
    title: "Contact",
    content: (
      <>
        <p>
          If you have questions about this Cookie Policy or how we use
          cookies, please get in touch.
        </p>
      </>
    ),
  },
];

export default function CookiePage() {
  return (
    <LegalPage
      title="Cookie Policy"
      effectiveDate="1 October 2026"
      lastUpdated="1 October 2026"
      version="1.0"
      contactEmail="privacy@evercart.io"
      contactName="Evercart Privacy Team"
      summary={
        <>
          <strong>The short version:</strong> We use a small number of cookies
          to keep Evercart running, remember your preferences, and understand
          how the platform is being used. Essential cookies are always on.
          Analytics and marketing cookies only activate after you accept them.
          You can change your choices at any time via the cookie banner or
          your browser settings.
        </>
      }
      sections={SECTIONS}
    />
  );
}
