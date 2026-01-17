"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useContactForm } from "@/context/ContactFormContext";
import ContactForm from "./ContactForm";

const ContactFormModal = () => {
  const { isContactFormOpen, toggleContactForm } = useContactForm();

  return (
    <AnimatePresence>
      {isContactFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] flex items-center justify-center overflow-y-auto"
          style={{
            WebkitBackdropFilter: "blur(8px)",
            backdropFilter: "blur(8px)",
            MozBackdropFilter: "blur(8px)",
            msBackdropFilter: "blur(8px)",
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="p-4 max-w-4xl w-full mx-4 relative my-8 flex items-center justify-center"
          >
            <ContactForm onClose={toggleContactForm} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
