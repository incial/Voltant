import Link from "next/link";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Privacy Policy | Voltant Energy",
  description:
    "How Voltant Energy LLC SOC collects, uses and protects your information.",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "sharing", title: "Sharing Your Information" },
  { id: "cookies", title: "Cookies" },
  { id: "security", title: "Security" },
  { id: "retention", title: "Data Retention" },
  { id: "rights", title: "Your Rights" },
  { id: "third-party", title: "Third-Party Links" },
  { id: "contact", title: "Contact Us" },
];

const sectionClass =
  "scroll-mt-28 mb-[25px] sm:mb-[35px] md:mb-[45px] lg:mb-[65px] last:mb-0";
const headingClass =
  "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#7f7f7f] mb-[15px] sm:mb-[20px] md:mb-[30px] lg:mb-[40px]";
const textClass =
  "text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-light text-[#7f7f7f] leading-relaxed mb-4 last:mb-0";
const listClass =
  "text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-light text-[#7f7f7f] list-disc ml-[20px] sm:ml-[30px] space-y-1 leading-relaxed mb-4 last:mb-0";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" sections={sections}>
<section id="introduction" className={sectionClass}>
              <h2 className={headingClass}>1. Introduction</h2>
              <p className={textClass}>
                This Privacy Policy explains how Voltant Energy LLC SOC
                (“Voltant”, “we”, “us” or “our”) collects, uses and protects
                your information when you use the Voltant website, mobile
                application and related services (the “Platform”). By using the
                Platform, you agree to this Policy. We may update it from time
                to time by posting the changes on this page.
              </p>
            </section>

            <section id="information-we-collect" className={sectionClass}>
              <h2 className={headingClass}>2. Information We Collect</h2>
              <ul className={listClass}>
                <li>
                  <strong className="text-[#7f7f7f]">Account details:</strong> name,
                  email address, phone number.
                </li>
                <li>
                  <strong className="text-[#7f7f7f]">
                    Vehicle and charging data:
                  </strong>{" "}
                  vehicle details, charging sessions, energy used, and session
                  history.
                </li>
                <li>
                  <strong className="text-[#7f7f7f]">Location data:</strong> to show
                  nearby charging stations and support charging sessions.
                </li>
                <li>
                  <strong className="text-[#7f7f7f]">Payment information:</strong>{" "}
                  processed by third-party payment providers. We do not store
                  full card details.
                </li>
                <li>
                  <strong className="text-[#7f7f7f]">Usage data:</strong> device
                  information, app activity and cookies.
                </li>
              </ul>
            </section>

            <section id="how-we-use" className={sectionClass}>
              <h2 className={headingClass}>3. How We Use Your Information</h2>
              <p className={textClass}>
                We use your information to provide and manage charging
                services, process payments, provide support, keep the Platform
                secure, and improve our services. With your consent, we may send
                you offers and updates, which you can opt out of at any time.
              </p>
            </section>

            <section id="sharing" className={sectionClass}>
              <h2 className={headingClass}>4. Sharing Your Information</h2>
              <p className={textClass}>
                We do not sell your personal information. We may share it with:
              </p>
              <ul className={listClass}>
                <li>
                  service providers who support the Platform, including our
                  technology platform provider, payment providers and hosting
                  services;
                </li>
                <li>
                  station owners or site hosts, where needed to operate charging
                  at their location;
                </li>
                <li>
                  authorities, including DEWA, where required by law or
                  regulation.
                </li>
              </ul>
              <p className={textClass}>
                These parties may only use your information to provide their
                services to us or as required by law.
              </p>
            </section>

            <section id="cookies" className={sectionClass}>
              <h2 className={headingClass}>5. Cookies</h2>
              <p className={textClass}>
                We use cookies and similar technologies to keep the Platform
                working, remember your preferences and analyse usage. You can
                decline cookies in your browser settings, but parts of the
                Platform may not work properly.
              </p>
            </section>

            <section id="security" className={sectionClass}>
              <h2 className={headingClass}>6. Security</h2>
              <p className={textClass}>
                We use suitable technical and organisational measures to protect
                your information from unauthorised access, loss or disclosure.
                No system is completely secure, so we cannot guarantee absolute
                security.
              </p>
            </section>

            <section id="retention" className={sectionClass}>
              <h2 className={headingClass}>7. Data Retention</h2>
              <p className={textClass}>
                We keep your information only as long as needed for the purposes
                above or as required by law.
              </p>
            </section>

            <section id="rights" className={sectionClass}>
              <h2 className={headingClass}>8. Your Rights</h2>
              <p className={textClass}>
                Under applicable UAE data protection laws, you may request
                access to, correction of, or deletion of your personal
                information, and you may withdraw consent to marketing at any
                time. To make a request, contact us using the details below.
              </p>
            </section>

            <section id="third-party" className={sectionClass}>
              <h2 className={headingClass}>9. Third-Party Links</h2>
              <p className={textClass}>
                The Platform may link to third-party websites. We are not
                responsible for their privacy practices, so please review their
                policies.
              </p>
            </section>

            <section id="contact" className={sectionClass}>
              <h2 className={headingClass}>10. Contact Us</h2>
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