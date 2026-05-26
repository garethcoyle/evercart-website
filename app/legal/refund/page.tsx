import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSectionData } from "@/components/legal/LegalPage";
import { CalloutBox } from "@/components/legal/CalloutBox";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "When Evercart issues refunds for subscription fees, and how to request one.",
};

const SECTIONS: LegalSectionData[] = [
  {
    id: "scope",
    number: 1,
    title: "What this policy covers",
    content: (
      <>
        <p>
          This Refund Policy explains when Evercart will refund subscription
          fees paid to us, and how to request a refund. It applies to all
          paid Evercart subscription plans (Starter, Growth, and Pro) and to
          annual and monthly billing cycles.
        </p>
        <p>
          This policy does <strong>not</strong> apply to refunds your customers
          may request from your store. As the merchant, you are responsible for
          maintaining your own refund policy for your customers and processing
          their refunds through your payment processor. See Section 8 of our{" "}
          <Link href="/legal/terms">Terms of Service</Link>.
        </p>
      </>
    ),
  },
  {
    id: "free-trial",
    number: 2,
    title: "Free trial",
    content: (
      <>
        <p>
          Evercart offers a 14-day free trial on every plan. No credit card is
          required to begin a trial, and you will not be charged during the
          trial period. If you do not choose a paid plan before the trial
          ends, your account is suspended automatically &mdash; nothing is
          billed, and nothing needs to be refunded.
        </p>
      </>
    ),
  },
  {
    id: "monthly",
    number: 3,
    title: "Monthly plans",
    content: (
      <>
        <p>
          Monthly subscription fees are <strong>non-refundable</strong>. When
          you cancel a monthly plan, your store remains active until the end
          of the current billing period. No partial or prorated refunds are
          issued for unused time.
        </p>
        <p>
          We don&rsquo;t bill in advance for periods you don&rsquo;t intend to
          use &mdash; you can cancel at any time, and the cancellation takes
          effect at the end of your current month with no further charges.
        </p>
      </>
    ),
  },
  {
    id: "annual",
    number: 4,
    title: "Annual plans — 14-day refund window",
    content: (
      <>
        <p>
          If you purchase or renew an annual subscription and decide
          it&rsquo;s not for you, you may cancel within{" "}
          <strong>14 days of payment</strong> for a full refund.
        </p>
        <h3>How it works</h3>
        <ul>
          <li>
            The 14-day window starts on the day your annual subscription fee
            is charged
          </li>
          <li>
            Cancellation must be initiated from your account settings or by
            emailing us at{" "}
            <a href="mailto:billing@evercart.io">billing@evercart.io</a> before
            the 14-day window closes
          </li>
          <li>
            Refunds are issued to the original payment method within 5&ndash;10
            business days
          </li>
          <li>
            After the refund is issued, your store goes offline and access to
            the dashboard is revoked
          </li>
        </ul>
        <h3>After the 14-day window</h3>
        <p>
          Annual subscription fees are non-refundable after 14 days from the
          payment date. You may cancel at any time to prevent the next
          renewal, and your store will remain active until the end of the
          annual term you have already paid for.
        </p>
        <CalloutBox variant="info">
          <strong>One refund per merchant:</strong> The 14-day annual refund
          is available once per merchant. If you have previously received an
          annual refund and resubscribe, subsequent annual subscriptions are
          not eligible for the 14-day window.
        </CalloutBox>
      </>
    ),
  },
  {
    id: "billing-errors",
    number: 5,
    title: "Billing errors",
    content: (
      <>
        <p>
          If you believe you have been charged in error &mdash; for example, a
          duplicate charge, a charge after you cancelled, a charge in the
          wrong amount, or a charge for a plan you did not select &mdash;
          please contact us at{" "}
          <a href="mailto:billing@evercart.io">billing@evercart.io</a> within
          60 days of the charge.
        </p>
        <p>
          We will review the charge and, if a billing error is confirmed,
          issue a full refund of the disputed amount to your original payment
          method. This applies regardless of whether you are within the 14-day
          annual refund window.
        </p>
      </>
    ),
  },
  {
    id: "consumer-rights",
    number: 6,
    title: "Statutory consumer rights",
    content: (
      <>
        <p>
          Nothing in this policy limits or excludes your rights as a consumer
          under the laws of the country where you live. In particular:
        </p>
        <ul>
          <li>
            <strong>European Union &amp; UK:</strong> If you are a consumer
            (not a business) in the EU or UK, you may have a statutory right
            to withdraw from a digital services contract within 14 days under
            the Consumer Rights Directive / Consumer Contracts Regulations.
          </li>
          <li>
            <strong>South Africa:</strong> If you are a consumer under the
            Consumer Protection Act 68 of 2008, you may have a statutory
            cooling-off right and other rights that apply in addition to this
            policy.
          </li>
          <li>
            <strong>Other jurisdictions:</strong> If your local law provides
            stronger refund rights than this policy, those local rights
            prevail.
          </li>
        </ul>
        <p>
          To exercise any statutory right, contact us at{" "}
          <a href="mailto:billing@evercart.io">billing@evercart.io</a> with a
          clear statement of the right you are exercising.
        </p>
      </>
    ),
  },
  {
    id: "how-to-request",
    number: 7,
    title: "How to request a refund",
    content: (
      <>
        <p>To request a refund:</p>
        <ol>
          <li>
            Sign in to your Evercart account at{" "}
            <a href="https://app.evercart.io">app.evercart.io</a>
          </li>
          <li>Go to Settings &rarr; Billing</li>
          <li>
            Click &ldquo;Cancel subscription&rdquo;. If you are within an
            eligible refund window (Section 4 or 5), the option to request a
            refund will appear
          </li>
        </ol>
        <p>
          Alternatively, email{" "}
          <a href="mailto:billing@evercart.io">billing@evercart.io</a> with:
        </p>
        <ul>
          <li>The email address associated with your Evercart account</li>
          <li>The date of the charge you are requesting a refund for</li>
          <li>The reason for the refund request</li>
        </ul>
        <p>
          We aim to process all refund requests within 3 business days of
          receipt. You will receive an email confirmation once the refund has
          been issued.
        </p>
      </>
    ),
  },
  {
    id: "timing",
    number: 8,
    title: "Refund timing & method",
    content: (
      <>
        <p>
          Approved refunds are issued to the original payment method used for
          the charge. We do not issue refunds in the form of credit, gift
          cards, or alternative payment methods.
        </p>
        <p>
          Once we issue the refund, the time for the funds to appear in your
          account depends on your bank or card issuer:
        </p>
        <ul>
          <li>Credit and debit cards: typically 5&ndash;10 business days</li>
          <li>PayPal: typically 1&ndash;3 business days</li>
          <li>Bank transfers / SEPA / ACH: typically 5&ndash;7 business days</li>
        </ul>
        <p>
          Refunds are issued in the same currency as the original charge.
          Evercart is not responsible for any foreign exchange differences
          between the time of the original charge and the refund.
        </p>
      </>
    ),
  },
  {
    id: "non-refundable",
    number: 9,
    title: "What is never refundable",
    content: (
      <>
        <p>
          The following are not eligible for a refund under any circumstances:
        </p>
        <ul>
          <li>
            <strong>Payment processor fees:</strong> Fees charged by Stripe,
            PayPal, or any other payment processor on your customer
            transactions are governed by those processors&rsquo; own terms and
            are not refundable by Evercart.
          </li>
          <li>
            <strong>Custom domain registrations:</strong> If you register a
            custom domain through a third-party registrar, refund eligibility
            is determined by that registrar.
          </li>
          <li>
            <strong>Accounts terminated for cause:</strong> If your account is
            terminated by us for violating our{" "}
            <Link href="/legal/terms">Terms of Service</Link> (including
            fraudulent activity or acceptable use violations), no refunds will
            be issued.
          </li>
        </ul>
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
          We may update this Refund Policy from time to time. When we make
          material changes, we will notify you by email and display a notice
          in your dashboard at least 14 days before the changes take effect.
          Changes will not apply retroactively to refund requests that arose
          before the effective date of the change.
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
          If you have any questions about this Refund Policy or a specific
          refund request, please contact us.
        </p>
      </>
    ),
  },
];

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      effectiveDate="1 October 2026"
      lastUpdated="1 October 2026"
      version="1.0"
      contactEmail="billing@evercart.io"
      contactName="Evercart Billing"
      summary={
        <>
          <strong>The short version:</strong> Annual plans can be refunded in
          full within 14 days of payment. Monthly plans are not refundable, but
          you can cancel at any time and use the service through the end of
          the period you paid for. We always refund proven billing errors. We
          don&rsquo;t refund payment processor fees or fees you owe to third
          parties. Statutory consumer rights in your country apply on top of
          this policy.
        </>
      }
      sections={SECTIONS}
    />
  );
}
