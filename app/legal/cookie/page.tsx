import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { LegalPage, type LegalSectionData } from "@/components/legal/LegalPage";
import { LegalTable } from "@/components/legal/LegalTable";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "The cookies and browser storage used on www.evercart.io, in the Evercart dashboard and on Evercart stores, and how to control them.",
};

// Every name and duration on this page comes from the code. When the
// dashboard or the stores start keeping something new in the browser, add it
// here, and keep the store tables in step with the store cookie policy that
// Evercart writes for each merchant (lib/legalTemplates.ts in the app).

const PRIVACY_EMAIL = "privacy@evercart.io";

function External({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

const STORAGE_HEAD = ["Name", "What it’s for", "Where", "How long"];

const SECTIONS: LegalSectionData[] = [
  {
    id: "what-are-cookies",
    number: 1,
    title: "What cookies are",
    content: (
      <>
        <p>
          Cookies are small pieces of data a website stores in your browser. A
          website can also keep data in your browser’s localStorage, which stays
          until it’s cleared, and sessionStorage, which is cleared when you
          close the tab. This policy covers all three.
        </p>
        <p>
          In the tables below, a name part in angle brackets, such as{" "}
          <code>&lt;store&gt;</code>, stands for a store’s own name or ID.
        </p>
      </>
    ),
  },
  {
    id: "website",
    number: 2,
    title: "www.evercart.io",
    content: (
      <>
        <p>
          Our website sets no cookies and keeps nothing in your browser’s
          storage. It runs no analytics, advertising or social media tags, and
          loads nothing from other companies: its fonts and pictures come from
          our own site.
        </p>
      </>
    ),
  },
  {
    id: "dashboard",
    number: 3,
    title: "The Evercart dashboard",
    content: (
      <>
        <p>
          The dashboard at app.evercart.io sets no cookies for merchants and
          their staff, and runs no analytics or advertising tags. It keeps these
          in your browser: what it needs to work, and a few preferences you set
          yourself.
        </p>
        <LegalTable
          id="dashboard-storage"
          label="What the Evercart dashboard keeps in your browser"
          minWidth={640}
          head={STORAGE_HEAD}
          rows={[
            [
              <code key="n">sb-&lt;project&gt;-auth-token</code>,
              "Keeps you signed in",
              "localStorage",
              "Until you sign out",
            ],
            [
              <code key="n">evercart-used-links</code>,
              "Remembers sign-in links already used in this browser, so pressing one again doesn’t show an error",
              "localStorage",
              "The last 10 links, each for an hour",
            ],
            [
              <code key="n">evercart-recovery-opened</code>,
              "Notes that a password reset link was opened in this tab",
              "sessionStorage",
              "Until you close the tab",
            ],
            [
              <code key="n">ec_editor_prefs</code>,
              "Which store editor panels are open, and the preview size",
              "localStorage",
              "Until you clear it",
            ],
            [
              <code key="n">ec_editor_page:&lt;store&gt;</code>,
              "The page you last had open in the store editor",
              "localStorage",
              "Until you clear it",
            ],
            [
              <code key="n">evercart_checklist_dismissed</code>,
              "Whether you’ve collapsed the checklist on your home page",
              "localStorage",
              "Until you clear it",
            ],
            [
              <code key="n">ec.campaign-edits.&lt;campaign&gt;.&lt;tab&gt;</code>,
              "Unsaved changes to an email campaign, so a reload doesn’t lose them",
              "localStorage",
              "Until you save, send or delete the campaign in this browser",
            ],
            [
              <code key="n">ec.tab</code>,
              "Tells this tab’s unsaved changes from another tab’s",
              "sessionStorage",
              "Until you close the tab",
            ],
            [
              <span key="n">
                <code>ec-plan-confirming:&lt;store&gt;</code>,{" "}
                <code>ec-plan-claim:&lt;store&gt;</code>
              </span>,
              "A plan purchase in progress",
              "sessionStorage",
              "Until you close the tab",
            ],
          ]}
        />
        <p>
          Two services on the dashboard may store data of their own, under
          their own policies:{" "}
          <External href="https://www.paddle.com/legal/privacy">Paddle</External>
          ’s checkout, which opens when you choose a plan, and{" "}
          <External href="https://www.cloudflare.com/privacypolicy/">
            Cloudflare
          </External>{" "}
          Turnstile, which checks our sign-up, sign-in and password reset forms.
          Signing in with Google or Facebook takes you to their sites, where
          their own cookies apply.
        </p>
      </>
    ),
  },
  {
    id: "stores",
    number: 4,
    title: "Evercart stores",
    content: (
      <>
        <p>
          Stores keep what they need to work, and use optional cookies only if
          you allow them. Each merchant chooses their store’s optional tools, so
          the store’s own cookie policy, linked at the foot of its pages, is the
          final word for that store.
        </p>
        <h3>Always used</h3>
        <LegalTable
          id="store-essential"
          label="What every Evercart store keeps in your browser"
          minWidth={640}
          head={STORAGE_HEAD}
          rows={[
            [
              <code key="n">evercart_cookie_consent</code>,
              "Your cookie choice, so the store can respect it",
              "localStorage",
              "6 months, or 12 if you accepted everything",
            ],
            [
              <code key="n">evercart_cart_&lt;store&gt;</code>,
              "Your cart",
              "localStorage",
              "Expires after 14 days without a visit, and is deleted the next time you open the store",
            ],
            [
              <code key="n">evercart_ordered_&lt;store&gt;</code>,
              "Your last 20 orders, so each is taken out of your cart only once",
              "localStorage",
              "Until you clear it",
            ],
            [
              <code key="n">evercart_wishlist_&lt;store&gt;</code>,
              "Products you’ve saved",
              "localStorage",
              "Until you clear it",
            ],
            [
              <code key="n">evercart_wallets:&lt;key&gt;</code>,
              "Whether your device offers Apple Pay, Google Pay or Link (Stripe’s saved payment details)",
              "sessionStorage",
              "Until you close the tab",
            ],
            [
              <code key="n">ec_customer</code>,
              "Keeps you signed in to your account with the store",
              "Cookie",
              "30 days, or until you sign out",
            ],
          ]}
        />
        <h3>Only if you allow them</h3>
        <LegalTable
          id="store-optional"
          label="What Evercart stores keep in your browser only with your permission"
          minWidth={640}
          head={STORAGE_HEAD}
          rows={[
            [
              <code key="n">evercart_recent_&lt;store&gt;</code>,
              "Preferences: products you’ve looked at recently",
              "localStorage",
              "Until you clear it, or turn recently viewed off",
            ],
            [
              <code key="n">evercart_session</code>,
              "Statistics: a random ID for this visit",
              "sessionStorage",
              "Until you close the tab, or turn statistics off",
            ],
            [
              <span key="n">
                <code>_ga</code>, <code>_ga_&lt;ID&gt;</code>
              </span>,
              "Statistics: Google Analytics, if the store uses it",
              "Cookies",
              "Up to 2 years, or until you turn statistics off",
            ],
            [
              <span key="n">
                <code>_fbp</code>, <code>_fbc</code>
              </span>,
              "Advertising: the Meta Pixel, if the store uses it, at the store’s own domain",
              "Cookies",
              "90 days, or until you turn advertising off",
            ],
            [
              <span key="n">
                <code>_ec_fbp</code>, <code>_ec_fbc</code>
              </span>,
              "Advertising: the Meta Pixel, if the store uses it, at the store’s evercart.io address",
              "Cookies",
              "90 days, or until you turn advertising off",
            ],
          ]}
        />
        <p>
          A store’s own statistics count the pages viewed, the products looked
          at and how far visits get towards a purchase, with the random ID for
          that visit. They don’t record your IP address or device. Google
          Analytics runs with its advertising features switched off.
        </p>
        <h3>Payments and videos</h3>
        <p>
          Stripe’s express payment buttons (Apple Pay, Google Pay and Link) can
          appear on product pages, in the cart and at checkout, and load when a
          page shows them. They, and the payment pages of Stripe, PayPal and
          PayFast, may use cookies of their own under each provider’s policy.
          Videos from YouTube or Vimeo load only when you press play, using
          YouTube’s privacy-enhanced mode and Vimeo’s do-not-track setting.
          Once a video plays, the video site may keep data in your browser under
          its own policy.
        </p>
      </>
    ),
  },
  {
    id: "choices",
    number: 5,
    title: "Your choices",
    content: (
      <>
        <p>
          On a store, use <strong>Cookie settings</strong>, at the foot of every
          page, to change your choice at any time. When you turn something off,
          it stops straight away, and what it stored under the store’s address
          is removed. Cookies that Google or Meta keep under their own addresses
          can be cleared in your browser’s settings.
        </p>
        <p>
          Your browser can also block or clear cookies and storage. If you block
          them, a store can’t keep your cart between visits or keep you signed
          in, and the dashboard can’t keep you signed in. Your browser’s help
          pages explain how:
        </p>
        <ul>
          <li>
            <External href="https://support.google.com/chrome/answer/95647">
              Google Chrome
            </External>
          </li>
          <li>
            <External href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">
              Mozilla Firefox
            </External>
          </li>
          <li>
            <External href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac">
              Safari on Mac
            </External>
          </li>
          <li>
            <External href="https://support.apple.com/en-gb/guide/iphone/iphacc5f0202/ios">
              Safari on iPhone
            </External>
          </li>
          <li>
            <External href="https://support.microsoft.com/en-us/edge/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use">
              Microsoft Edge
            </External>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "signals",
    number: 6,
    title: "Do Not Track and Global Privacy Control",
    content: (
      <>
        <p>
          Our own sites, www.evercart.io and the dashboard, run no advertising
          or analytics tags, so there’s nothing for a Do Not Track or Global
          Privacy Control signal to switch off. On stores, optional cookies wait
          for your choice in the store’s banner. Stores don’t read these signals
          yet.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: 7,
    title: "Changes to this policy",
    content: (
      <>
        <p>
          When what we keep in your browser changes, we update this page and
          its date. On a store, a new optional tool stays off until you allow
          it.
        </p>
        <h3>Versions</h3>
        <ul>
          <li>
            <strong>2.0, 12 November 2026.</strong> Rewritten to list exactly
            what www.evercart.io, the dashboard and stores keep in your browser.
            It corrects version 1.0, which described a cookie banner, analytics
            and advertising cookies that Evercart’s own sites don’t use.
          </li>
          <li>
            <strong>1.0, 1 October 2026.</strong> First version.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "contact",
    number: 8,
    title: "Contact us",
    content: (
      <>
        <p>
          Questions about this policy? Email{" "}
          <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>. For a store’s
          cookies, ask the store. Our{" "}
          <Link href="/legal/privacy">Privacy Policy</Link> explains how we
          handle personal information.
        </p>
      </>
    ),
  },
];

export default function CookiePage() {
  return (
    <LegalPage
      title="Cookie Policy"
      effectiveDate="12 November 2026"
      lastUpdated="12 November 2026"
      version="2.0"
      contactEmail={PRIVACY_EMAIL}
      contactName="Evercart privacy"
      summary={
        <>
          <p className="font-bold">The short version</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-ink/40">
            <li>www.evercart.io uses no cookies and keeps nothing in your browser.</li>
            <li>
              The Evercart dashboard keeps your sign-in and a few settings in
              your browser, only what it needs to work.
            </li>
            <li>
              Stores keep what they need, such as your cart, and use optional
              cookies only if you allow them.
            </li>
          </ul>
        </>
      }
      sections={SECTIONS}
    />
  );
}
