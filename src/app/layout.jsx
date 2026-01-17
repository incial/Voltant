import { Cairo } from "next/font/google";
import "./globals.css";
import { ContactFormProvider } from "@/context/ContactFormContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactFormModal from "@/components/forms/ContactFormModal";
import ChatButton from "@/components/features/ChatButton";

// Configure Cairo font with next/font
const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cairo",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Voltant Energy",
  description:
    "Shaping a net-zero future with smart, sustainable energy solutions. We provide innovative waste-to-energy technology, EV charging infrastructure, and energy monitoring systems for businesses committed to sustainability.",
  keywords: [
    "Voltant Energy",
    "EV Charging",
    "Waste to Energy",
    "Sustainable Energy",
    "Net Zero",
  ],
  authors: [{ name: "Voltant Energy" }],
  creator: "Voltant Energy",
  publisher: "Voltant Energy",
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Voltant Energy",
  },
  icons: {
    icon: "/Logo_icon.svg",
  },
};

// Viewport configuration (Next.js 16)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#16a34a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cairo.variable}>
      <body className="font-cairo">
        <ContactFormProvider>
          <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ContactFormModal />
            <ChatButton />
          </div>
        </ContactFormProvider>
      </body>
    </html>
  );
}
