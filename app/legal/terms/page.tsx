import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSectionData } from "@/components/legal/LegalPage";
import { CalloutBox } from "@/components/legal/CalloutBox";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of Evercart, our merchant dashboard, and the storefronts you build with us.",
};

const SECTIONS: LegalSectionData[] = [
  {
    id: "acceptance",
    number: 1,
    title: "Acceptance of terms",
    content: (
      <>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) form a legally binding
          agreement between you (&ldquo;Merchant&rdquo;, &ldquo;you&rdquo;, or
          &ldquo;your&rdquo;) and Evercart (&ldquo;Evercart&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) governing
          your access to and use of the Evercart platform, including our website
          at www.evercart.io, our merchant dashboard at app.evercart.io, and all
          related services (collectively, the &ldquo;Service&rdquo;).
        </p>
        <p>
          By creating an account, clicking &ldquo;I agree&rdquo;, or otherwise
          accessing or using the Service, you confirm that you have read,
          understood, and agree to be bound by these Terms and our{" "}
          <Link href="/legal/privacy">Privacy Policy</Link>. If you do not
          agree, do not use the Service.
        </p>
        <p>
          If you are using the Service on behalf of a business or organisation,
          you represent that you have the authority to bind that entity to
          these Terms.
        </p>
      </>
    ),
  },
  {
    id: "service",
    number: 2,
    title: "The Evercart service",
    content: (
      <>
        <p>
          Evercart provides a multi-tenant software-as-a-service (SaaS) platform
          that allows merchants to create, customise, and operate online stores.
          The Service includes:
        </p>
        <ul>
          <li>
            A merchant dashboard for managing products, orders, customers, and
            settings
          </li>
          <li>A storefront engine that renders your store for your customers</li>
          <li>
            Payment processing integration via Stripe and other supported
            gateways
          </li>
          <li>
            Custom domain connection and automatic SSL certificate provisioning
          </li>
          <li>Theme selection and visual store customisation tools</li>
          <li>Order management, inventory tracking, and analytics tools</li>
          <li>Email notifications for merchants and their customers</li>
        </ul>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of
          the Service at any time with reasonable notice. We will not be liable
          to you or any third party for any modification, suspension, or
          discontinuation of the Service.
        </p>
      </>
    ),
  },
  {
    id: "account",
    number: 3,
    title: "Account registration",
    content: (
      <>
        <p>To use the Service, you must create an account. You agree to:</p>
        <ul>
          <li>
            Provide accurate, current, and complete information during
            registration
          </li>
          <li>
            Maintain and promptly update your account information to keep it
            accurate
          </li>
          <li>
            Keep your password confidential and not share it with any third
            party
          </li>
          <li>
            Notify us immediately at{" "}
            <a href="mailto:security@evercart.io">security@evercart.io</a> if
            you suspect unauthorised access to your account
          </li>
          <li>Be responsible for all activity that occurs under your account</li>
        </ul>
        <p>
          You must be at least 18 years old to create an account. By creating
          an account, you confirm that you meet this age requirement.
        </p>
        <p>
          One account may be used by one merchant. You may not share your
          account credentials with others unless you have added them as staff
          members through the platform&rsquo;s staff account feature.
        </p>
      </>
    ),
  },
  {
    id: "billing",
    number: 4,
    title: "Subscription & billing",
    content: (
      <>
        <h3>Plans and pricing</h3>
        <p>
          Evercart offers three subscription plans: Starter ($9/month), Growth
          ($29/month), and Pro ($79/month), billed in USD. Annual billing
          options are available at a 20% discount. Current pricing is always
          displayed at <Link href="/pricing">evercart.io/pricing</Link>.
        </p>
        <h3>Payment</h3>
        <p>
          Subscription fees are billed in advance on a monthly or annual basis.
          Payment is processed by Stripe. By providing your payment details,
          you authorise Evercart to charge your payment method for all fees
          incurred.
        </p>
        <h3>Failed payments</h3>
        <p>
          If a payment fails, we will retry it up to three times over seven
          days. If payment cannot be collected, your account will be downgraded
          to a restricted state. You will have 14 days to update your payment
          method before your store is suspended. We will notify you by email at
          each stage.
        </p>
        <h3>No transaction fees</h3>
        <p>
          Evercart charges 0% transaction fees on all plans. Standard payment
          processing fees charged by Stripe (currently 2.9% + $0.30 per
          transaction) apply separately and are not set by Evercart.
        </p>
        <h3>Price changes</h3>
        <p>
          We may change subscription prices with at least 30 days&rsquo; written
          notice. Price changes take effect at the start of your next billing
          period after the notice period. Your continued use of the Service
          after a price change constitutes acceptance of the new price.
        </p>
        <h3>Refunds</h3>
        <p>
          Subscription fees are non-refundable except as set out in our{" "}
          <Link href="/legal/refund">Refund Policy</Link> or where required by
          applicable law. If you cancel your subscription, you will retain
          access to the Service until the end of your current paid period.
        </p>
      </>
    ),
  },
  {
    id: "trial",
    number: 5,
    title: "Free trial",
    content: (
      <>
        <p>
          New accounts receive a 14-day free trial on any plan. No credit card
          is required to start a trial. At the end of the trial period, you
          must provide payment details to continue using the Service.
        </p>
        <CalloutBox variant="warning">
          <strong>Important:</strong> If you do not add payment details before
          your trial ends, your account will be suspended and your store will
          go offline. Your data will be retained for 30 days, after which it
          will be permanently deleted.
        </CalloutBox>
        <p>
          You may only use one free trial per person and per business. Creating
          multiple accounts to extend free trial access is a violation of these
          Terms and may result in all associated accounts being terminated.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    number: 6,
    title: "Acceptable use",
    content: (
      <>
        <p>
          You agree to use the Service only for lawful purposes and in
          compliance with all applicable laws and regulations. You must not use
          the Service to:
        </p>
        <ul>
          <li>
            Sell illegal goods or services, including but not limited to
            controlled substances, weapons, or counterfeit products
          </li>
          <li>
            Engage in fraudulent activity, including fake reviews, false
            advertising, or identity fraud
          </li>
          <li>Infringe any intellectual property rights of any third party</li>
          <li>
            Transmit malware, viruses, or any code designed to damage or
            interfere with systems
          </li>
          <li>
            Collect or store personal data about others without appropriate
            legal basis
          </li>
          <li>
            Violate any applicable consumer protection laws or payment card
            industry regulations
          </li>
          <li>
            Attempt to gain unauthorised access to Evercart&rsquo;s systems or
            another user&rsquo;s account
          </li>
          <li>
            Resell or sublicense the Service without our express written
            permission
          </li>
          <li>
            Use the Service in a way that could damage, disable, or impair the
            platform or servers
          </li>
        </ul>
        <p>
          We reserve the right to investigate and take appropriate action
          against anyone who, in our sole discretion, violates these provisions,
          including suspending or terminating their account without notice.
        </p>
      </>
    ),
  },
  {
    id: "your-content",
    number: 7,
    title: "Your content",
    content: (
      <>
        <p>
          You retain full ownership of all content you upload to Evercart,
          including product images, descriptions, store branding, and customer
          data (&ldquo;Your Content&rdquo;).
        </p>
        <p>
          By uploading Your Content to Evercart, you grant us a worldwide,
          non-exclusive, royalty-free licence to host, store, reproduce, and
          display Your Content solely to provide the Service to you and your
          customers. This licence ends when you delete the content or close
          your account.
        </p>
        <p>You are solely responsible for Your Content. You represent and warrant that:</p>
        <ul>
          <li>You own or have the right to use all content you upload</li>
          <li>
            Your Content does not violate any third party&rsquo;s intellectual
            property, privacy, or other rights
          </li>
          <li>Your Content complies with all applicable laws</li>
          <li>Your Content does not contain malware or harmful code</li>
        </ul>
      </>
    ),
  },
  {
    id: "storefronts",
    number: 8,
    title: "Merchant storefronts",
    content: (
      <>
        <p>
          Your Evercart store is your responsibility. You are the seller of
          record for all transactions conducted through your store. This means:
        </p>
        <ul>
          <li>
            You are responsible for the accuracy of product descriptions,
            images, and pricing
          </li>
          <li>
            You are responsible for fulfilling orders and processing refunds in
            accordance with your stated policies
          </li>
          <li>
            You are responsible for collecting and remitting applicable taxes
            on your sales (Stripe Tax handles calculation &mdash; remittance is
            your responsibility)
          </li>
          <li>
            You are responsible for complying with consumer protection laws in
            all jurisdictions you sell to
          </li>
          <li>
            You are responsible for maintaining your own privacy policy and
            terms for your customers
          </li>
        </ul>
        <p>
          Evercart is a platform provider, not a party to transactions between
          you and your customers. We are not responsible for the quality,
          legality, or delivery of products sold through your store.
        </p>
      </>
    ),
  },
  {
    id: "domains",
    number: 9,
    title: "Custom domains",
    content: (
      <>
        <p>
          You may connect a custom domain to your Evercart store on any plan.
          By connecting a domain, you confirm that you are the legitimate owner
          or authorised user of that domain.
        </p>
        <p>
          Evercart will provision an SSL certificate for your custom domain via
          Let&rsquo;s Encrypt automatically. You are responsible for maintaining
          ownership of your domain and renewing your domain registration. If
          your domain expires, your store will go offline and Evercart is not
          liable for any resulting loss.
        </p>
        <p>
          When you remove a domain from Evercart or close your account, we will
          remove all domain routing configuration within 48 hours.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    number: 10,
    title: "Payments & payouts",
    content: (
      <>
        <p>
          Evercart integrates with Stripe and other third-party payment
          processors to facilitate payments from your customers. Use of these
          payment processors is subject to their own terms of service.
        </p>
        <p>
          Payouts from your store sales go directly to your connected payment
          processor account (e.g. Stripe) according to that processor&rsquo;s
          payout schedule. Evercart does not hold or process your sales revenue
          &mdash; it flows directly from your customers to your payment
          processor account.
        </p>
        <p>
          You are responsible for ensuring that your use of any payment
          processor complies with their terms, including restrictions on
          certain product categories. If your payment processor account is
          suspended or terminated, your store&rsquo;s ability to accept
          payments will be affected. This is not a breach of these Terms by
          Evercart.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    number: 11,
    title: "Intellectual property",
    content: (
      <>
        <h3>Evercart&rsquo;s intellectual property</h3>
        <p>
          The Service, including its software, design, themes, documentation,
          and all related intellectual property, is owned by Evercart and
          protected by copyright, trademark, and other laws. You are granted a
          limited, non-exclusive, non-transferable licence to use the Service
          during your subscription. You may not copy, modify, distribute, sell,
          or sublicense any part of the Service.
        </p>
        <h3>Feedback</h3>
        <p>
          If you provide us with feedback, suggestions, or ideas about the
          Service, you grant Evercart the right to use that feedback without
          restriction or compensation to you. We appreciate feedback and use it
          to improve the product.
        </p>
        <h3>Themes</h3>
        <p>
          Free themes are licenced for use on your Evercart store. Premium
          themes are licenced for use on the number of stores permitted by your
          plan. Themes may not be reverse engineered, resold, or used outside
          of the Evercart platform.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    number: 12,
    title: "Confidentiality",
    content: (
      <>
        <p>
          Each party may have access to confidential information of the other
          party. Both parties agree to keep confidential information
          confidential and not to disclose it to third parties without the
          other party&rsquo;s consent, except as required by law.
        </p>
        <p>
          Confidential information does not include information that is or
          becomes publicly available through no breach of these Terms, was
          already known to the receiving party, or is independently developed
          without reference to the confidential information.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    number: 13,
    title: "Disclaimers",
    content: (
      <>
        <p>
          THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
          AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
          IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, EVERCART DISCLAIMS
          ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT.
        </p>
        <p>
          We do not warrant that the Service will be uninterrupted, error-free,
          or completely secure. We do not warrant that any specific results
          will be achieved through use of the Service.
        </p>
        <CalloutBox variant="info">
          Some jurisdictions do not allow the exclusion of certain warranties.
          If you are in such a jurisdiction, some of the above exclusions may
          not apply to you.
        </CalloutBox>
      </>
    ),
  },
  {
    id: "liability",
    number: 14,
    title: "Limitation of liability",
    content: (
      <>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, EVERCART&rsquo;S TOTAL
          LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING TO THE
          SERVICE SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNTS YOU PAID TO
          EVERCART IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR (B) $100 USD.
        </p>
        <p>
          IN NO EVENT SHALL EVERCART BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF
          PROFITS, DATA, OR GOODWILL, EVEN IF ADVISED OF THE POSSIBILITY OF
          SUCH DAMAGES.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    number: 15,
    title: "Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify, defend, and hold harmless Evercart and its
          officers, directors, employees, and agents from and against any
          claims, liabilities, damages, judgments, costs, and expenses
          (including reasonable legal fees) arising out of or relating to:
        </p>
        <ul>
          <li>Your use of the Service in violation of these Terms</li>
          <li>Your Content and the products or services you sell through your store</li>
          <li>Your violation of any applicable law or regulation</li>
          <li>Any claim by a third party arising from your store or your merchant activities</li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    number: 16,
    title: "Term & termination",
    content: (
      <>
        <h3>Term</h3>
        <p>
          These Terms begin when you create an account and continue until
          terminated by either party.
        </p>
        <h3>Cancellation by you</h3>
        <p>
          You may cancel your subscription at any time from your account
          settings. Your store will remain active until the end of your current
          paid billing period. Refunds, where applicable, are governed by our{" "}
          <Link href="/legal/refund">Refund Policy</Link>.
        </p>
        <h3>Termination by Evercart</h3>
        <p>
          We may suspend or terminate your account immediately and without
          notice if:
        </p>
        <ul>
          <li>You violate these Terms or our Acceptable Use Policy</li>
          <li>We are required to do so by law</li>
          <li>You engage in fraudulent, illegal, or abusive activity</li>
          <li>Your account poses a security risk to the platform or other merchants</li>
        </ul>
        <p>
          For non-critical violations, we will attempt to give you reasonable
          notice and opportunity to remedy the breach before termination.
        </p>
        <h3>Effect of termination</h3>
        <p>
          Upon termination, your store will go offline and your access to the
          dashboard will be revoked. Your data will be retained for 30 days to
          allow for any necessary exports, after which it will be permanently
          deleted. Provisions of these Terms that by their nature should
          survive termination will do so, including payment obligations,
          intellectual property rights, disclaimers, and limitations of
          liability.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    number: 17,
    title: "Governing law & disputes",
    content: (
      <>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the Republic of South Africa, without regard to conflict of law
          principles. Any disputes arising under these Terms shall be subject
          to the exclusive jurisdiction of the courts of Johannesburg, South
          Africa.
        </p>
        <p>
          If you are a consumer located in the EU, UK, or any other
          jurisdiction with mandatory consumer protection laws, you may also
          have rights under the consumer protection laws of your local
          jurisdiction, which these Terms do not affect. Nothing in these Terms
          limits or excludes your statutory rights as a consumer.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: 18,
    title: "Changes to terms",
    content: (
      <>
        <p>
          We may update these Terms from time to time. When we make material
          changes, we will notify you by email and display a prominent notice
          in your dashboard at least 14 days before the changes take effect.
        </p>
        <p>
          If you disagree with the updated Terms, you may cancel your account
          before the effective date. Your continued use of the Service after
          the effective date constitutes acceptance of the updated Terms.
        </p>
        <p>
          For minor changes (such as corrections, clarifications, or changes
          required by law), we may update the Terms without advance notice,
          though we will always update the &ldquo;Last updated&rdquo; date at
          the top of this page.
        </p>
      </>
    ),
  },
  {
    id: "general",
    number: 19,
    title: "General provisions",
    content: (
      <>
        <h3>Entire agreement</h3>
        <p>
          These Terms, together with our Privacy Policy, Refund Policy, and
          Cookie Policy, constitute the entire agreement between you and
          Evercart regarding the Service, and supersede any prior agreements
          between you and Evercart relating to the Service.
        </p>
        <h3>Severability</h3>
        <p>
          If any provision of these Terms is held to be unenforceable or
          invalid, that provision will be limited or eliminated to the minimum
          extent necessary so that the remaining Terms remain in full force
          and effect.
        </p>
        <h3>Waiver</h3>
        <p>
          Our failure to enforce any right or provision of these Terms will not
          be considered a waiver of that right or provision. A waiver of any
          provision of these Terms will only be effective if it is in writing
          and signed by us.
        </p>
        <h3>Assignment</h3>
        <p>
          You may not assign or transfer these Terms, or any of your rights
          under these Terms, without our prior written consent. We may assign
          these Terms at any time, including in connection with a merger,
          acquisition, or sale of assets, with reasonable notice to you.
        </p>
        <h3>Force majeure</h3>
        <p>
          Neither party shall be liable for any failure or delay in performance
          under these Terms due to circumstances beyond its reasonable control,
          including acts of God, natural disasters, war, terrorism, riots,
          civil unrest, government action, labour disputes, internet or
          telecommunications outages, or third-party service provider
          failures.
        </p>
        <h3>Notices</h3>
        <p>
          We may send you notices via the email address associated with your
          account or by displaying a notice in your dashboard. You may send us
          legal notices in writing to{" "}
          <a href="mailto:legal@evercart.io">legal@evercart.io</a>.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: 20,
    title: "Contact",
    content: (
      <>
        <p>If you have any questions about these Terms, please contact us.</p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      effectiveDate="1 October 2026"
      lastUpdated="1 October 2026"
      version="1.0"
      contactEmail="legal@evercart.io"
      summary={
        <>
          <strong>Plain English summary:</strong> By using Evercart, you agree
          to these terms. You own your content and your customer data. We
          provide the platform and charge a monthly fee. You must not use
          Evercart for illegal purposes. We can terminate accounts that violate
          these terms.
        </>
      }
      sections={SECTIONS}
    />
  );
}
