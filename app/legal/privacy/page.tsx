import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { LegalPage, type LegalSectionData } from "@/components/legal/LegalPage";
import { LegalTable } from "@/components/legal/LegalTable";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Evercart handles personal information: what we collect and why, who we share it with, where it is stored, how long we keep it, and your rights.",
};

// Every statement on this page is checked against how Evercart works today.
// Change the page when the product changes: a new provider, a new place where
// information is stored, a new use, or a new retention period.

const PRIVACY_EMAIL = "privacy@evercart.io";

function PrivacyEmail({ className }: { className?: string }) {
  return (
    <a href={`mailto:${PRIVACY_EMAIL}`} className={className}>
      {PRIVACY_EMAIL}
    </a>
  );
}

function External({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

const SECTIONS: LegalSectionData[] = [
  {
    id: "who-we-are",
    number: 1,
    title: "Who we are",
    content: (
      <>
        <p>
          Evercart is an online store platform. Merchants use it to build and
          run their stores, and shoppers buy from those stores. Evercart is run
          from South Africa by its founder, Gareth Coyle, who is responsible for
          the personal information this policy describes. In this policy,
          “Evercart”, “we” and “us” mean Gareth Coyle, trading as Evercart.
        </p>
        <p>This policy covers three groups of people:</p>
        <ul>
          <li>
            <strong>Merchants and their staff</strong>, who use the Evercart
            dashboard at app.evercart.io. We are responsible for your account
            and store information as its controller (the “responsible party”
            under South Africa’s Protection of Personal Information Act,
            POPIA).
          </li>
          <li>
            <strong>Shoppers</strong>, who visit and buy from stores built on
            Evercart. Each merchant is responsible for their own shoppers’
            information, and we process it for them as their processor (the
            “operator” under POPIA). <a href="#shoppers">Section 2</a> explains
            what that means for you.
          </li>
          <li>
            <strong>Visitors</strong> to www.evercart.io, and anyone who emails
            us.
          </li>
        </ul>
        <p>
          Questions about this policy or your information go to{" "}
          <PrivacyEmail />.
        </p>
      </>
    ),
  },
  {
    id: "shoppers",
    number: 2,
    title: "Shopping on an Evercart store",
    content: (
      <>
        <p>
          If you shop on a store built on Evercart, the store is in charge of
          your information. Its own privacy policy, usually linked at the foot
          of its pages, explains what it collects and why. Ask the store first
          about anything to do with your information: it can give you a copy,
          correct it or delete it.
        </p>
        <p>
          We hold and process your information for the store, on its
          instructions: your orders, your account with the store if you have
          one, the emails it sends you, the reviews you write, and its visit
          statistics if you allow them. Within Evercart, only our own team can
          look at a store’s information, and only to help the merchant or keep
          Evercart secure.
        </p>
        <h3>What we decide ourselves</h3>
        <p>We are responsible for three things we do on our own account:</p>
        <ul>
          <li>
            <strong>Security.</strong> Your IP address reaches our servers when
            you visit a store. We use it to limit repeated attempts, for example
            at checkout or when you sign in, and to protect stores and Evercart
            from fraud and abuse.
          </li>
          <li>
            <strong>Email delivery.</strong> Stores send their emails through
            Evercart. If an email to you bounces because your address doesn’t
            work, or you mark one as spam, we stop sending email to that address
            from every store on Evercart. This keeps unwanted email away from you
            and keeps email from Evercart’s stores reliable. To receive emails
            again, write to <PrivacyEmail />.
          </li>
          <li>
            <strong>Legal duties.</strong> We answer lawful requests from
            authorities, as <a href="#sharing">section 5</a> explains.
          </li>
        </ul>
        <p>
          We don’t sell your information, use it to advertise to you, build a
          profile of you across stores, or use it to train AI. If you send us a
          request about a store’s information, we’ll pass it to the store and
          tell you we have.
        </p>
        <h3>Tools stores choose</h3>
        <p>
          A store may add Google Analytics or the Meta Pixel. They run only if
          you allow them in the store’s cookie banner, and they work under the
          merchant’s own accounts. The store’s payment provider (Stripe, PayPal
          or PayFast) also works under the merchant’s account, and takes your
          card details itself. Our <Link href="/legal/cookie">Cookie Policy</Link>{" "}
          lists what stores keep in your browser.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    number: 3,
    title: "What we collect",
    content: (
      <>
        <h3>Merchants and their staff</h3>
        <LegalTable
          id="merchant-information"
          label="Information we collect about merchants and their staff"
          head={["Information", "What it includes"]}
          rows={[
            [
              "Account",
              "Your email address, your password (kept only in hashed form, which can’t be turned back into your password), and when you signed up and last signed in. If you sign in with Google or Facebook, they send us your name, email address, a link to your profile picture and your account ID with them.",
            ],
            [
              "Sign-in sessions",
              "The IP address and browser details of each device you sign in on.",
            ],
            [
              "Your stores",
              "Each store’s name, web address and contact details; the business and legal details you add for your legal notice and invoices, such as a legal name, address, and registration and VAT numbers; tax registrations; logo and settings; the email addresses that receive its alerts; and the IDs of any Google Analytics or Meta Pixel accounts you connect.",
            ],
            [
              "Your team",
              "The email address, role and status of each person you invite, and who invited them.",
            ],
            [
              "Plan and billing",
              "Your plan, its status and billing dates, and Paddle’s reference for you. Paddle holds your card and billing details, not us.",
            ],
            [
              "Payment connections",
              "The keys you enter to connect Stripe, PayPal or PayFast, which we store encrypted, and your Stripe account’s ID, email address, country and currency.",
            ],
            [
              "Support",
              "What you send us in support tickets and emails, including attachments.",
            ],
            [
              "Email delivery",
              "Whether our emails to you are delivered, bounce or are marked as spam.",
            ],
            [
              "Security",
              "IP addresses we use to limit repeated attempts, and the checks Cloudflare Turnstile makes on our sign-up, sign-in and password reset forms to tell people from automated programs.",
            ],
          ]}
        />
        <p>
          Most of this comes from you. Some comes from others: Google or
          Facebook when you sign in with them, Paddle about your plan, Stripe
          about the account you connect and, if you’re staff, the merchant who
          invites you.
        </p>
        <p>
          We don’t track how you use the dashboard: it has no analytics or
          advertising tags.
        </p>
        <h3>Shoppers</h3>
        <p>
          For each store, we hold what the store collects through Evercart, such
          as your name, contact details and delivery address, your orders, your
          account with the store, the reviews you write, and your choices about
          the store’s marketing emails. Payment providers take your card details
          themselves: stores see only the card type and its last four digits. A
          store’s own visit statistics don’t record your IP address or device.
        </p>
        <h3>Visitors to www.evercart.io</h3>
        <p>
          Our website sets no cookies and runs no analytics or advertising tags.
          When you visit, your IP address and browser details reach our host,
          Vercel, as they would for any website, and are kept in its logs for
          up to seven days.
        </p>
        <h3>When you email us</h3>
        <p>
          We keep your email address, your name if you give it, and what you
          write.
        </p>
        <h3>What you need to give us</h3>
        <p>
          To open an account, you need an email address and a password, or a
          Google or Facebook account. Without these we can’t provide Evercart.
          Everything else is up to you, though some features need it: a store
          can’t take payments online until you connect a payment provider, for
          example.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    number: 4,
    title: "How we use it",
    content: (
      <>
        <p>
          We use personal information about merchants, staff, visitors and
          people who email us only for the purposes below. The table gives the
          legal basis for each under the GDPR and the UK GDPR. South Africa’s
          POPIA allows the same grounds.
        </p>
        <LegalTable
          id="legal-bases"
          label="What we use personal information for, and our legal basis"
          minWidth={600}
          head={["What we use it for", "Information", "Legal basis"]}
          rows={[
            [
              "Opening and running your account and stores, and providing the features you use",
              "Account, your stores, your team, payment connections",
              "Contract: we need it to provide the service you signed up for. For people a merchant invites, legitimate interests: letting merchants give their team access",
            ],
            [
              "Signing you in, including with Google or Facebook if you choose",
              "Account, sign-in sessions",
              "Contract",
            ],
            [
              "Selling and renewing your plan through Paddle",
              "Plan and billing",
              "Contract",
            ],
            [
              "Sending the emails the service needs, such as sign-in links, alerts and store summaries",
              "Account, email delivery",
              "Contract",
            ],
            [
              "Answering support requests and emails",
              "Support, and what you send us",
              "Contract, for merchants and staff. For anyone else, legitimate interests: answering the people who write to us",
            ],
            [
              "Keeping Evercart secure: limiting repeated attempts, telling people from automated programs, preventing fraud and abuse, and recording what our team does on accounts",
              "Sign-in sessions, security, your team, server logs",
              "Legitimate interests: protecting merchants, shoppers and Evercart",
            ],
            [
              "Not emailing addresses that bounce or report spam",
              "Email delivery",
              "Legitimate interests: respecting complaints and keeping email from Evercart reliable",
            ],
            [
              "Meeting legal duties, such as answering lawful requests and keeping records the law requires",
              "Whatever the duty needs",
              "Legal obligation",
            ],
            [
              "Establishing or defending legal claims",
              "Whatever the claim needs",
              "Legitimate interests: protecting our legal rights",
            ],
          ]}
        />
        <p>
          For the three things in <a href="#shoppers">section 2</a> that we do
          on our own account with shoppers’ information, we rely on legitimate
          interests (security, and not emailing addresses that bounce or report
          spam) or legal obligation (legal duties).
        </p>
        <p>
          Where we rely on legitimate interests, you can object, and we’ll stop
          unless we have compelling reasons that outweigh yours, or we need the
          information for a legal claim.
        </p>
        <p>
          We don’t send merchants marketing emails. If we start, we’ll send them
          only where the law allows, and each will have an unsubscribe link.
        </p>
        <p>
          For everything else about shoppers’ information, the store decides
          the purposes and the legal basis, and its own privacy policy sets them
          out.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    number: 5,
    title: "Who we share it with",
    content: (
      <>
        <p>
          These organisations receive personal information from us. Supabase,
          Vercel, Resend, Cloudflare and Hostinger handle it for us, under
          contract and only to provide their service. Paddle, Google, Meta, HMRC
          and the EU’s VIES service use it under their own responsibility.
        </p>
        <LegalTable
          id="providers"
          label="Companies that handle personal information for Evercart"
          minWidth={600}
          head={["Who", "What it does for us", "What it receives"]}
          rows={[
            [
              "Supabase",
              "Our database, sign-in and file storage",
              "Everything we store, including the shoppers’ information we hold for stores",
            ],
            [
              "Vercel",
              "Hosts www.evercart.io, the dashboard and every store, and resizes images",
              "All web traffic to them, including IP addresses and browser details, and our server logs",
            ],
            [
              "Resend",
              "Sends email for Evercart and for stores",
              "Email addresses, the emails themselves, delivery events and, for stores’ marketing emails, which links were clicked",
            ],
            [
              "Paddle",
              "Sells Evercart plans, as merchant of record",
              "Your email address, the plan you choose, and our IDs for your store and account. Paddle collects your card and billing details itself",
            ],
            [
              "Cloudflare",
              "Turnstile checks on our sign-up, sign-in and password reset forms, and checks on custom domains you connect",
              "Your IP address and browser signals during a check; domain names",
            ],
            [
              "Hostinger",
              "Our email inbox, and the registrar of evercart.io",
              "Emails you send us, and our alerts about support tickets and stores",
            ],
            [
              "Google and Meta",
              "Sign in with Google, or Facebook Login, if you choose them",
              "Your request to sign in. They send us your name, email address, a link to your profile picture and your account ID with them",
            ],
            [
              "The EU’s VIES service, and HMRC (the UK tax authority) once our access is live",
              "Check business buyers’ VAT numbers at checkout, for stores that use it",
              "The VAT number being checked, and the store’s own",
            ],
          ]}
        />
        <h3>Paddle</h3>
        <p>
          Paddle sells you your Evercart plan as merchant of record. It takes
          your payment, handles the tax and sends your receipts, and is
          responsible for your card and billing details under{" "}
          <External href="https://www.paddle.com/legal/privacy">
            its own privacy policy
          </External>
          .
        </p>
        <h3>Services merchants choose</h3>
        <p>
          Merchants can connect a payment provider (Stripe, PayPal or PayFast),
          Google Analytics and the Meta Pixel to their stores. These work under
          the merchant’s own accounts and instructions, and each provider’s
          privacy policy covers what it receives. Videos from YouTube or Vimeo
          load only when a shopper presses play; once one plays, the video site
          may keep data in the shopper’s browser under its own policy. Pictures a merchant links from
          elsewhere, such as images imported from Shopify, can load from that
          site.
        </p>
        <h3>Other times we share information</h3>
        <ul>
          <li>
            <strong>Legal requests.</strong> We give information to a court, a
            regulator or the police only when the law requires it. Unless the
            law forbids it, we tell the person concerned first or, for a store’s
            information, the merchant.
          </li>
          <li>
            <strong>Protecting people.</strong> We share information when it’s
            needed to prevent fraud or to protect someone’s safety.
          </li>
          <li>
            <strong>A change of owner.</strong> If Evercart becomes a company,
            or its business is sold or merged, personal information will pass to
            the new owner, who must keep to this policy. We’ll tell merchants
            before it happens.
          </li>
          <li>
            <strong>With your agreement.</strong> In any other case, only if you
            ask us to or agree.
          </li>
        </ul>
        <p>
          We don’t sell personal information, and we don’t share it for
          advertising.
        </p>
      </>
    ),
  },
  {
    id: "where-stored",
    number: 6,
    title: "Where it’s stored",
    content: (
      <>
        <p>
          Our database (Supabase) and our servers (Vercel) are in the United
          States, in Northern Virginia and Washington DC. Vercel’s network
          carries each visit through the location nearest to you, and Resend
          sends our emails from Ireland. We run Evercart from South Africa, so we
          also reach your information from there.
        </p>
        <p>
          So if you’re in the UK, the European Economic Area or South Africa,
          your information is transferred to the United States. For transfers
          from the UK and the EEA, we rely on the EU–US Data Privacy Framework
          and its UK extension for providers certified to them, and otherwise on
          the standard contractual clauses approved for UK and EU transfers, in
          each provider’s data processing terms. The United States has no
          national privacy law like POPIA, so for South Africa we rely on the
          same terms, which bind our providers to a similar standard (POPIA,
          section 72). You can ask us for a copy.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    number: 7,
    title: "How long we keep it",
    content: (
      <>
        <LegalTable
          id="retention-periods"
          label="How long we keep personal information"
          head={["Information", "How long we keep it"]}
          rows={[
            [
              "Your account and stores",
              "While your account is open. When you ask us to close it, we delete your account and your stores, with everything in them, within one month, apart from the records below that we keep for longer. Before we do, we’ll help you take a copy of anything you need to keep, such as your order records.",
            ],
            [
              "Sign-in sessions",
              "Until you sign out on that device, or your account is closed.",
            ],
            [
              "Plan and billing",
              "While your account is open. Paddle keeps its own records of your payments, under its own policy.",
            ],
            ["Support tickets", "While your account is open."],
            [
              "Emails to our inbox",
              "Up to two years after the conversation ends.",
            ],
            [
              "Records of what our team does on accounts",
              "No set end date, so we can account for our team’s actions.",
            ],
            [
              "IP addresses used to limit repeated attempts",
              "Deleted within a few days.",
            ],
            [
              "Server logs",
              "Up to seven days, kept by Vercel and Supabase.",
            ],
            [
              "Records of emails that bounce, are delayed or are reported as spam",
              "No set end date. A permanent bounce or a spam report stops all email to that address until you ask us to remove it.",
            ],
            [
              "Shoppers’ information",
              "As long as the store decides, while it’s on Evercart. When a store is deleted, its shoppers’ information goes with it.",
            ],
          ]}
        />
        <p>
          We keep anything else only as long as we need it for the purposes in{" "}
          <a href="#how-we-use">section 4</a>.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    number: 8,
    title: "Your rights",
    content: (
      <>
        <p>Wherever you live, you can ask us to:</p>
        <ul>
          <li>
            <strong>Access:</strong> give you a copy of the personal information
            we hold about you
          </li>
          <li>
            <strong>Correct:</strong> fix anything inaccurate or incomplete
          </li>
          <li>
            <strong>Delete:</strong> erase your information, unless the law
            requires us to keep it
          </li>
          <li>
            <strong>Restrict:</strong> limit how we use it while a concern is
            looked into
          </li>
          <li>
            <strong>Object:</strong> stop using it where we rely on legitimate
            interests
          </li>
          <li>
            <strong>Port:</strong> give you the information you gave us in a
            format you can take elsewhere
          </li>
          <li>
            <strong>Withdraw consent:</strong> at any time, where we rely on it
          </li>
        </ul>
        <p>
          Some of these rights have legal limits, but we handle every request
          the same way, wherever you live.
        </p>
        <h3>What you can do yourself</h3>
        <ul>
          <li>Correct your store’s details in Settings.</li>
          <li>
            Download your products, customers, discount codes, analytics and
            waitlist as CSV files.
          </li>
          <li>
            Turn store summaries and alerts on or off in Settings ›
            Notifications.
          </li>
          <li>
            If you own the store, <strong>Request account deletion</strong> in
            Settings › Account &amp; security gives you an email to send us. You
            can also write to{" "}
            <a href="mailto:support@evercart.io">support@evercart.io</a>.
          </li>
        </ul>
        <h3>Asking us</h3>
        <p>
          Email <PrivacyEmail />. We may ask you to confirm it’s you, usually by
          replying from the email address on your account. We reply within one
          month. If a request is complex, we may need up to two more months, and
          we’ll tell you why within the first month. If we can’t do what you ask,
          we’ll tell you why within one month, and how to complain. Requests are
          free. If one is clearly unfounded or excessive, we may refuse it or
          charge a reasonable fee, and we’ll say why.
        </p>
        <p>
          If you’re a shopper, ask the store first: it’s responsible for your
          information and can export or erase it. If you ask us, we’ll pass your
          request to the store and tell you we have.
        </p>
        <h3>Complaints</h3>
        <p>
          If you’re unhappy with how we’ve handled your information, please
          tell us first at <PrivacyEmail />. We’ll acknowledge it within 30
          days, usually much sooner, keep you updated and tell you the outcome.
          You can also complain to a regulator:
        </p>
        <ul>
          <li>
            In the UK, the{" "}
            <External href="https://ico.org.uk/make-a-complaint/data-protection-complaints/">
              Information Commission (ICO)
            </External>
          </li>
          <li>
            In the European Economic Area, the data protection authority where
            you live or work (the{" "}
            <External href="https://www.edpb.europa.eu/about-edpb/our-members_en">
              European Data Protection Board lists them
            </External>
            )
          </li>
          <li>
            In South Africa, the{" "}
            <External href="https://inforegulator.org.za/complaints/">
              Information Regulator
            </External>
          </li>
          <li>Anywhere else, your local privacy regulator</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    number: 9,
    title: "Cookies",
    content: (
      <>
        <p>
          www.evercart.io uses no cookies and keeps nothing in your browser. The
          dashboard keeps your sign-in and a few settings in your browser’s
          storage, only what it needs to work. Stores keep what they need to
          work, such as your cart, and use optional cookies only if you allow
          them in the store’s banner. Our{" "}
          <Link href="/legal/cookie">Cookie Policy</Link> lists each one.
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
        <p>We protect personal information with measures including:</p>
        <ul>
          <li>Encrypted connections (HTTPS) to every Evercart site and store</li>
          <li>
            Access rules on every database table, so each account reaches only
            its own stores’ information
          </li>
          <li>Passwords kept only in hashed form</li>
          <li>Payment provider keys stored encrypted</li>
          <li>
            Limits on repeated attempts at sign-in, checkout and other
            sensitive steps
          </li>
          <li>
            No card numbers on Evercart: payment providers take card details
            themselves
          </li>
        </ul>
        <p>
          No system is perfectly secure. If a breach puts your information at
          risk, we’ll tell you and the regulators as the law requires. For
          shoppers’ information, we tell the store straight away so it can tell
          you. To report
          a security problem, email{" "}
          <a href="mailto:security@evercart.io">security@evercart.io</a>.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    number: 11,
    title: "AI and automated decisions",
    content: (
      <>
        <p>
          No AI service sees merchants’ or shoppers’ information, and we don’t
          make decisions about anyone by automated means that have legal or
          similarly significant effects.
        </p>
        <p>
          One store feature uses a small model. When a shopper adds a photo to
          a review, their own browser checks it for explicit content before
          it’s uploaded. The model runs on the shopper’s device, so the photo
          isn’t sent anywhere for the check, and only clear cases are blocked.
        </p>
        <p>
          If we add AI features, we’ll update this policy before they go live,
          and say what they do with your information.
        </p>
      </>
    ),
  },
  {
    id: "children",
    number: 12,
    title: "Children",
    content: (
      <>
        <p>
          Evercart is for businesses: you must be 18 or over to open an account.
          We don’t knowingly collect children’s information for our own
          purposes. If you think a child has given us personal information,
          email <PrivacyEmail /> and we’ll delete it. Each store decides who it
          sells to, under its own terms and privacy policy.
        </p>
      </>
    ),
  },
  {
    id: "regional",
    number: 13,
    title: "Regional information",
    content: (
      <>
        <h3>UK and European Economic Area</h3>
        <p>
          <a href="#how-we-use">Section 4</a> gives our legal basis for each
          use, <a href="#where-stored">section 6</a> how we protect transfers,
          and <a href="#your-rights">section 8</a> your rights and where to
          complain.
        </p>
        <h3>South Africa</h3>
        <p>
          Under POPIA, we are the responsible party for merchants’ information
          and the operator for stores’ shoppers’ information. You can ask to see,
          correct or delete your information, and object to how we use it. Our
          Information Officer is named in <a href="#contact">section 15</a>. You
          can complain to the Information Regulator, Woodmead North Office Park,
          54 Maxwell Drive, Woodmead, Johannesburg 2191,{" "}
          <a href="mailto:enquiries@inforegulator.org.za">
            enquiries@inforegulator.org.za
          </a>
          . Complaints go through its{" "}
          <External href="https://inforegulator.org.za/complaints/">
            eServices Portal
          </External>
          .
        </p>
        <h3>United States</h3>
        <p>
          We don’t sell personal information or share it for cross-context
          behavioural advertising, and we don’t use sensitive personal
          information to infer things about you. You can ask to know what we
          hold about you, and to correct or delete it, and we won’t treat you
          differently for asking. If we turn down your request, you can appeal
          by replying to our answer. We’ll respond within 45 days and, if we
          still say no, tell you how to complain to your state attorney general.
          For shoppers’ information, we act
          as the store’s service provider. Our own sites run no advertising
          tags, so there’s nothing for a Global Privacy Control signal to opt
          you out of.
        </p>
        <h3>Everywhere else</h3>
        <p>
          You can use the rights in <a href="#your-rights">section 8</a>{" "}
          wherever you live, and complain to your local privacy regulator.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: 14,
    title: "Changes to this policy",
    content: (
      <>
        <p>
          When we change this policy, we update the date at the top and add a
          line below. If a change affects how we use your information, we’ll
          email merchants at least 14 days before it takes effect.
        </p>
        <h3>Versions</h3>
        <ul>
          <li>
            <strong>2.0, 12 November 2026.</strong> Rewritten in full. It now
            names every company that handles personal information for us, and
            says where information is stored, how long we keep it and what
            Evercart keeps in your browser. It corrects version 1.0, which
            described where information is stored, who handles billing and some
            of our security measures inaccurately.
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
    number: 15,
    title: "Contact us",
    content: (
      <>
        <p>
          Email <PrivacyEmail /> about this policy or your information. Our
          Information Officer under POPIA, and the person responsible for data
          protection at Evercart, is Gareth Coyle.
        </p>
        <p>
          To report a security problem, email{" "}
          <a href="mailto:security@evercart.io">security@evercart.io</a>.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="12 November 2026"
      lastUpdated="12 November 2026"
      version="2.0"
      contactEmail={PRIVACY_EMAIL}
      contactName="Evercart privacy"
      summary={
        <>
          <p className="font-bold">The short version</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-ink/40">
            <li>
              Merchants: we’re responsible for your account and store
              information, and use it to run Evercart for you and keep it
              secure.
            </li>
            <li>
              Shoppers: the store you buy from is responsible for your
              information. We hold and process it for the store, on its
              instructions.
            </li>
            <li>
              We don’t sell personal information or share it for advertising.
              www.evercart.io and the dashboard run no analytics or advertising
              tags.
            </li>
            <li>No AI service sees your information.</li>
            <li>
              Our database and servers are in the United States.{" "}
              <a
                href="#sharing"
                className="font-semibold underline underline-offset-[3px]"
              >
                Section 5
              </a>{" "}
              names every company that handles information for us.
            </li>
            <li>
              <a
                href="#retention"
                className="font-semibold underline underline-offset-[3px]"
              >
                Section 7
              </a>{" "}
              says how long we keep each kind of information.
            </li>
            <li>
              Questions or requests:{" "}
              <PrivacyEmail className="font-semibold underline underline-offset-[3px]" />
            </li>
          </ul>
        </>
      }
      sections={SECTIONS}
    />
  );
}
