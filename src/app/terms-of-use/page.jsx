import Link from "next/link";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Terms of Use | Voltant Energy",
  description:
    "The terms that govern your use of the Voltant website, mobile application and charging services.",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "our-services", title: "Our Services" },
  { id: "general-information", title: "General Information" },
  { id: "accounts", title: "Accounts" },
  { id: "charging-stations", title: "Use of Charging Stations" },
  { id: "pricing-payments", title: "Pricing and Payments" },
  { id: "acceptable-use", title: "Acceptable Use" },
  { id: "privacy", title: "Privacy" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "suspension", title: "Suspension and Changes" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact", title: "Contact" },
];

const sectionClass =
  "scroll-mt-28 mb-[25px] sm:mb-[35px] md:mb-[45px] lg:mb-[65px] last:mb-0";
const headingClass =
  "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#7f7f7f] mb-[15px] sm:mb-[20px] md:mb-[30px] lg:mb-[40px]";
const textClass =
  "text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-light text-[#7f7f7f] leading-relaxed mb-4 last:mb-0";
const listClass =
  "text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-light text-[#7f7f7f] list-disc ml-[20px] sm:ml-[30px] space-y-1 leading-relaxed mb-4 last:mb-0";

export default function TermsOfUsePage() {
  return (
    <LegalLayout title="Terms of Use" sections={sections}>
<section id="introduction" className={sectionClass}>
              <h2 className={headingClass}>1. Introduction</h2>
              <p className={textClass}>
                These Terms of Use (“Terms”) govern your use of the Voltant
                website, mobile application and related services (the
                “Platform”), made available by Voltant Energy LLC SOC
                (“Voltant”, “we”, “us” or “our”). By using the Platform, you
                agree to these Terms and our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#2e7a38] underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                . If you do not agree, please do not use the Platform.
              </p>
            </section>

            <section id="our-services" className={sectionClass}>
              <h2 className={headingClass}>2. Our Services</h2>
              <p className={textClass}>
                Voltant operates as a Charge Point Operator (CPO). Through the
                Platform you can locate charging stations, check availability
                and tariffs, start and stop charging sessions, pay, and view
                your charging history. Our services are provided in line with
                applicable UAE regulations, including the requirements of the
                Dubai Electricity and Water Authority (DEWA), where applicable.
              </p>
            </section>

            <section id="general-information" className={sectionClass}>
              <h2 className={headingClass}>3. General Information</h2>
              <p className={textClass}>
                Platform content is for general information only and may change
                without notice. Station availability, charger status, tariffs
                and charging times are indicative. We do not warrant their
                accuracy or completeness, and exclude liability for errors to
                the fullest extent permitted by law.
              </p>
            </section>

            <section id="accounts" className={sectionClass}>
              <h2 className={headingClass}>4. Accounts</h2>
              <p className={textClass}>
                You must provide accurate information when registering, keep
                your login details confidential, and notify us promptly of any
                unauthorised use. You are responsible for all activity under
                your account.
              </p>
            </section>

            <section id="charging-stations" className={sectionClass}>
              <h2 className={headingClass}>5. Use of Charging Stations</h2>
              <ul className={listClass}>
                <li>
                  Follow all on-site signage and safety instructions, and use
                  only compatible vehicles and connectors.
                </li>
                <li>Do not tamper with or damage charging equipment.</li>
                <li>
                  Do not leave your vehicle at a charger after charging is
                  complete where idle or overstay fees apply.
                </li>
                <li>
                  We may suspend or end a session for safety, faults, misuse, or
                  grid or maintenance reasons.
                </li>
                <li>
                  Charging is at your own risk. Voltant is not responsible for
                  vehicle incompatibility, damage or interrupted charging,
                  except as required by law.
                </li>
              </ul>
            </section>

            <section id="pricing-payments" className={sectionClass}>
              <h2 className={headingClass}>6. Pricing and Payments</h2>
              <p className={textClass}>
                Tariffs and fees are shown on the Platform or at the station
                before you start a session. Prices may change, and VAT applies
                where applicable. By starting a session, you authorise us or our
                payment provider to charge your selected payment method.
                Payments are processed by third-party providers, and Voltant
                does not store full card details. Refunds, where applicable,
                follow our refund policy and applicable law.
              </p>
            </section>

            <section id="acceptable-use" className={sectionClass}>
              <h2 className={headingClass}>7. Acceptable Use</h2>
              <p className={textClass}>
                You must not use the Platform for unlawful or fraudulent
                purposes, attempt unauthorised access, interfere with the
                Platform or charging network, or use bots or scrapers without
                our written consent.
              </p>
            </section>

            <section id="privacy" className={sectionClass}>
              <h2 className={headingClass}>8. Privacy</h2>
              <p className={textClass}>
                We process personal data in accordance with our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#2e7a38] underline underline-offset-4"
                >
                  Privacy Policy
                </Link>{" "}
                and applicable UAE data protection laws.
              </p>
            </section>

            <section id="liability" className={sectionClass}>
              <h2 className={headingClass}>9. Limitation of Liability</h2>
              <p className={textClass}>
                To the fullest extent permitted by law, Voltant is not liable
                for indirect or consequential loss, loss of profit or data, or
                any loss arising from use of, or inability to use, the Platform
                or charging services, including interruptions due to
                maintenance, grid issues, or events beyond our reasonable
                control. Nothing in these Terms excludes liability that cannot
                be excluded by law.
              </p>
            </section>

            <section id="suspension" className={sectionClass}>
              <h2 className={headingClass}>10. Suspension and Changes</h2>
              <p className={textClass}>
                We may suspend or terminate your access if you breach these
                Terms or where required for safety, legal or operational
                reasons. We may update these Terms from time to time; updates
                take effect when posted, and continued use means you accept
                them.
              </p>
            </section>

            <section id="governing-law" className={sectionClass}>
              <h2 className={headingClass}>11. Governing Law</h2>
              <p className={textClass}>
                These Terms are governed by the laws of the United Arab Emirates
                as applied in the Emirate of [Dubai], and the courts of [Dubai]
                have exclusive jurisdiction, subject to any mandatory consumer
                rights.
              </p>
            </section>

            <section id="contact" className={sectionClass}>
              <h2 className={headingClass}>12. Contact</h2>
              <p className={textClass}>
                Voltant Energy LLC SOC
                <br />
                Email:{" "}
                <a
                  href="mailto:contact@voltant.energy"
                  className="text-[#2e7a38] underline underline-offset-4"
                >
                  contact@voltant.energy
                </a>
              </p>
            </section>
    </LegalLayout>
  );
}