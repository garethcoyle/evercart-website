import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSectionData } from "@/components/legal/LegalPage";
import { CalloutBox } from "@/components/legal/CalloutBox";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Evercart collects, uses, and protects your information. Written for humans, not lawyers.",
};

const SECTIONS: LegalSectionData[] = [
  {
    id: "who-we-are",
    number: 1,
    title: "Who we are",
    content: (
      <>
        <p>
          Evercart (&ldquo;Evercart&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
          or &ldquo;our&rdquo;) operates the e-commerce platform available at
          www.evercart.io and app.evercart.io. This Privacy Policy explains how
          we collect, use, disclose, and protect information about you when you
          use our services.
        </p>
        <p>
          For the purposes of the General Data Protection Regulation (GDPR),
          the UK GDPR, and the South African Protection of Personal Information
          Act (POPIA), Evercart is the data controller (in POPIA terms, the
          &ldquo;responsible party&rdquo;) for merchant account data. For data
          that merchants collect from their customers through their Evercart
          stores, the merchant is the data controller / responsible party and
          Evercart acts as the data processor (the &ldquo;operator&rdquo;).
        </p>
        <p>
          If you have any questions about this policy, please contact us at{" "}
          <a href="mailto:privacy@evercart.io">privacy@evercart.io</a>.
        </p>
      </>
    ),
  },
  {
    id: "information-collected",
    number: 2,
    title: "Information we collect",
    content: (
      <>
        <h3>Information you provide to us</h3>
        <ul>
          <li>
            <strong>Account information:</strong> When you create an Evercart
            account, we collect your name, email address, and password. If you
            sign up via Google, we receive your name, email address, and
            profile photo from Google.
          </li>
          <li>
            <strong>Store information:</strong> Store name, description, logo,
            contact email, and address that you provide when setting up your
            store.
          </li>
          <li>
            <strong>Billing information:</strong> Payment details for your
            Evercart subscription. Card data is processed and stored by Stripe
            &mdash; Evercart never stores raw card numbers.
          </li>
          <li>
            <strong>Communications:</strong> Any messages you send to our
            support team, feedback you submit, or responses to surveys.
          </li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Usage data:</strong> Pages visited, features used, time
            spent in the dashboard, and actions taken within the platform.
          </li>
          <li>
            <strong>Device and browser data:</strong> Browser type, operating
            system, IP address, and device identifiers.
          </li>
          <li>
            <strong>Log data:</strong> Server logs including request
            timestamps, error reports, and referring URLs.
          </li>
          <li>
            <strong>Cookies and similar technologies:</strong> See Section 5
            and our{" "}
            <Link href="/legal/cookie">Cookie Policy</Link> for details.
          </li>
        </ul>
        <h3>Merchant customer data</h3>
        <p>
          When shoppers purchase from a merchant&rsquo;s Evercart store, the
          merchant collects customer information (name, email, address, order
          history) through our platform. Evercart processes this data on behalf
          of the merchant. Merchants are responsible for their own privacy
          policies governing their customer relationships.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    number: 3,
    title: "How we use your information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and improve the Evercart platform</li>
          <li>
            Process your subscription payments and send billing communications
          </li>
          <li>
            Send transactional emails including account confirmations, password
            resets, and billing receipts
          </li>
          <li>
            Respond to your support requests and communicate with you about
            your account
          </li>
          <li>
            Send product updates and platform announcements (you can opt out
            at any time)
          </li>
          <li>
            Detect, investigate, and prevent fraudulent transactions and other
            illegal activities
          </li>
          <li>Comply with our legal obligations</li>
          <li>
            Analyse usage patterns to improve the platform&rsquo;s features and
            performance
          </li>
        </ul>
        <p>
          <strong>
            We will never use your data to train AI models, sell to third
            parties for advertising, or share with data brokers.
          </strong>
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    number: 4,
    title: "How we share your information",
    content: (
      <>
        <p>
          We do not sell your personal data. We share information only in the
          following limited circumstances:
        </p>
        <h3>Service providers</h3>
        <p>
          We work with trusted third-party companies to operate our platform.
          These providers are contractually required to protect your data and
          may only use it to provide services to Evercart:
        </p>
        <ul>
          <li>
            <strong>Stripe</strong> &mdash; payment processing and subscription
            billing
          </li>
          <li>
            <strong>Cloudflare</strong> &mdash; CDN, DDoS protection, and
            custom domain routing
          </li>
          <li>
            <strong>Railway</strong> &mdash; cloud infrastructure and database
            hosting
          </li>
          <li>
            <strong>Resend</strong> &mdash; transactional email delivery
          </li>
          <li>
            <strong>Vercel</strong> &mdash; frontend hosting and edge functions
          </li>
        </ul>
        <h3>Legal requirements</h3>
        <p>
          We may disclose your information if required to do so by law or in
          response to valid legal process, including to meet national security
          or law enforcement requirements.
        </p>
        <h3>Business transfers</h3>
        <p>
          If Evercart is acquired, merged, or undergoes a change of control,
          your information may be transferred as part of that transaction. We
          will notify you before your data is transferred and becomes subject
          to a different privacy policy.
        </p>
        <h3>With your consent</h3>
        <p>
          We may share your information for any other purpose with your
          explicit consent.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    number: 5,
    title: "Cookies & tracking",
    content: (
      <>
        <p>
          We use cookies and similar technologies to operate the platform,
          remember your preferences, and understand how people use Evercart. A
          full inventory of the cookies we set, and the controls you have over
          them, is documented in our{" "}
          <Link href="/legal/cookie">Cookie Policy</Link>.
        </p>
        <h3>Essential cookies</h3>
        <p>
          Required for the platform to function. These cannot be disabled. They
          include your authentication session, security tokens, and shopping
          cart state.
        </p>
        <h3>Analytics cookies</h3>
        <p>
          Help us understand how merchants use the dashboard. We use this to
          improve the product. These are only set after you accept cookies via
          our consent banner.
        </p>
        <h3>Marketing cookies</h3>
        <p>
          Used on our marketing website (evercart.io) to measure the
          effectiveness of our advertising campaigns. Only active after
          consent.
        </p>
        <p>
          You can control non-essential cookies at any time via the cookie
          settings link in the footer of evercart.io, or through your browser
          settings.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    number: 6,
    title: "Data retention",
    content: (
      <>
        <p>
          We retain your personal data for as long as your account is active or
          as needed to provide services. If you close your account:
        </p>
        <ul>
          <li>
            Your store data (products, orders, customers) is retained for 30
            days and then permanently deleted
          </li>
          <li>
            Your billing records are retained for 7 years to comply with
            financial regulations
          </li>
          <li>
            Anonymised, aggregated analytics data may be retained indefinitely
          </li>
          <li>You may request immediate deletion at any time &mdash; see Section 7</li>
        </ul>
      </>
    ),
  },
  {
    id: "your-rights",
    number: 7,
    title: "Your rights",
    content: (
      <>
        <p>
          Depending on where you live, you may have the following rights
          regarding your personal data. We honour these rights for all users
          regardless of location.
        </p>
        <ul>
          <li>
            <strong>Access:</strong> Request a copy of the personal data we
            hold about you
          </li>
          <li>
            <strong>Correction:</strong> Ask us to correct inaccurate or
            incomplete data
          </li>
          <li>
            <strong>Deletion:</strong> Request that we delete your personal
            data (right to erasure)
          </li>
          <li>
            <strong>Portability:</strong> Receive your data in a structured,
            machine-readable format
          </li>
          <li>
            <strong>Objection:</strong> Object to processing of your data for
            direct marketing
          </li>
          <li>
            <strong>Restriction:</strong> Request that we restrict processing
            of your data in certain circumstances
          </li>
          <li>
            <strong>Withdrawal of consent:</strong> Withdraw consent at any
            time where processing is based on consent
          </li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a href="mailto:privacy@evercart.io">privacy@evercart.io</a> or use
          the data export and deletion tools available in your account
          settings. We will respond within 30 days.
        </p>
        <CalloutBox variant="info">
          <strong>Regional rights:</strong> If you are based in the EU or UK,
          you have the right to lodge a complaint with your local data
          protection authority. If you are based in South Africa, you may
          lodge a complaint with the Information Regulator. If you are a
          California resident, you have additional rights under the CCPA/CPRA,
          including the right to opt out of the sale or sharing of your
          personal information (we do not sell or share for cross-context
          behavioural advertising).
        </CalloutBox>
      </>
    ),
  },
  {
    id: "transfers",
    number: 8,
    title: "International transfers",
    content: (
      <>
        <p>
          Evercart is a global platform. Your data may be processed in
          countries other than where you live. When we transfer data
          internationally, we ensure appropriate safeguards are in place,
          including:
        </p>
        <ul>
          <li>
            Standard Contractual Clauses (SCCs) approved by the European
            Commission for transfers from the EEA
          </li>
          <li>
            UK International Data Transfer Agreements for transfers from the
            UK
          </li>
          <li>
            Conditions for cross-border transfers under POPIA Section 72
          </li>
          <li>Data Processing Agreements with all third-party service providers</li>
        </ul>
        <p>
          EU and UK customer data is hosted on EU-region servers and is not
          transferred outside the EEA without appropriate safeguards.
        </p>
      </>
    ),
  },
  {
    id: "children",
    number: 9,
    title: "Children's privacy",
    content: (
      <>
        <p>
          Evercart is not directed at children under the age of 16. We do not
          knowingly collect personal information from children. If you believe
          we have inadvertently collected data from a child, please contact us
          at <a href="mailto:privacy@evercart.io">privacy@evercart.io</a> and
          we will delete it promptly.
        </p>
      </>
    ),
  },
  {
    id: "security",
    number: 10,
    title: "Security",
    content: (
      <>
        <p>
          We take the security of your data seriously and implement appropriate
          technical and organisational measures, including:
        </p>
        <ul>
          <li>All data encrypted in transit via TLS 1.3</li>
          <li>
            Passwords hashed using bcrypt with a minimum of 12 salt rounds
            &mdash; never stored in plain text
          </li>
          <li>Authentication tokens stored in httpOnly cookies, not localStorage</li>
          <li>Daily automated database backups with 30-day retention</li>
          <li>
            Card data handled entirely by Stripe &mdash; Evercart is never in
            scope for raw card numbers
          </li>
          <li>Rate limiting on all authentication endpoints</li>
        </ul>
        <p>
          No system is completely secure. If you discover a security
          vulnerability, please report it responsibly to{" "}
          <a href="mailto:security@evercart.io">security@evercart.io</a>.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: 11,
    title: "Changes to this policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. When we make
          material changes, we will notify you by email (to the address on
          your account) and by displaying a prominent notice in your dashboard
          at least 14 days before the changes take effect.
        </p>
        <p>
          Your continued use of Evercart after the effective date of any
          changes constitutes acceptance of the updated policy. If you do not
          agree to the revised policy, you may close your account before the
          changes take effect.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: 12,
    title: "Contact us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how we handle your
          data, please get in touch.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="1 October 2026"
      lastUpdated="1 October 2026"
      version="1.0"
      contactEmail="privacy@evercart.io"
      contactName="Evercart Privacy Team"
      summary={
        <>
          <strong>The short version:</strong> Evercart collects information to
          provide and improve our platform. We don&rsquo;t sell your personal
          data. Merchants control the data of their own customers. You have
          the right to access, correct, or delete your information at any
          time.
        </>
      }
      sections={SECTIONS}
    />
  );
}
