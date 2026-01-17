"use client";

import React, { useState, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaTimesCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// Form validation schema
const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

// EmailJS configuration - Updated for Next.js
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

const ContactForm = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const formRef = useRef();
  const messageRef = useRef();

  // React Hook Form setup with Yup resolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // When the form opens, ensure the view is centered properly
  useEffect(() => {
    if (formRef.current) {
      // Ensure form is in view
      formRef.current.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }
  }, []);

  // Improved focus handler for textarea to position cursor at the line
  const handleMessageFocus = () => {
    const textarea = messageRef.current;
    if (textarea) {
      // Set cursor to the bottom
      textarea.focus();

      // Force text area to show cursor at bottom line
      setTimeout(() => {
        // Place cursor at the end of text
        const length = textarea.value.length;
        textarea.selectionStart = length;
        textarea.selectionEnd = length;

        // Scroll to the bottom of the textarea
        textarea.scrollTop = textarea.scrollHeight;
      }, 10);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      if (
        process.env.NODE_ENV === "development" &&
        process.env.NEXT_PUBLIC_USE_MOCK === "true"
      ) {
        // In development mode with mock flag, just simulate sending email
        console.log("Development mode - Email would be sent with:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
        setSubmitSuccess(true);
        reset();
      } else {
        // Initialize EmailJS (only needed once, can be done in useEffect)
        emailjs.init(EMAILJS_PUBLIC_KEY);

        // Prepare template parameters for EmailJS
        const templateParams = {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: "Voltant Energy", // You can customize this
          reply_to: data.email,
        };

        console.log("Sending email via EmailJS with params:", templateParams);

        // Send email using EmailJS
        const result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams
        );

        console.log("EmailJS result:", result);

        if (result.status === 200) {
          setSubmitSuccess(true);
          reset();
        } else {
          throw new Error("Failed to send email via EmailJS");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      // More specific error messages based on EmailJS errors
      let errorMessage = "Failed to send your message. Please try again later.";

      if (error.text) {
        // EmailJS specific error
        errorMessage = `Email service error: ${error.text}`;
      } else if (error.message) {
        errorMessage = error.message;
      }

      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const successVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const closeButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center gap-6 sm:gap-8 relative border border-[rgba(255,255,255,0.3)] rounded-2xl p-8 sm:p-10 md:p-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        WebkitBackdropFilter: "blur(25px) saturate(150%)",
        backdropFilter: "blur(25px) saturate(150%)",
        MozBackdropFilter: "blur(25px) saturate(150%)",
        msBackdropFilter: "blur(25px) saturate(150%)",
      }}
    >
      {/* Close button */}
      {onClose && (
        <motion.button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-white hover:text-gray-300 z-10"
          variants={closeButtonVariants}
          whileHover="hover"
          whileTap="tap"
          aria-label="Close form"
        >
          <FaTimesCircle size={20} className="sm:text-2xl" />
        </motion.button>
      )}

      <motion.div
        className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center w-full"
        variants={itemVariants}
      >
        Get In Touch
      </motion.div>

      <motion.div className="w-full" variants={itemVariants}>
        <div className="relative mb-6">
          <input
            type="text"
            id="name"
            {...register("name")}
            className="peer w-full bg-transparent border-b border-white pb-2 outline-none placeholder-transparent focus:border-white transition-all text-white text-sm"
            placeholder="Name"
            style={{
              fontSize: "16px",
              touchAction: "manipulation",
            }}
          />
          <label
            htmlFor="name"
            className="absolute left-0 -top-5 text-white text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white"
          >
            Name
          </label>
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
      </motion.div>

      <motion.div className="w-full" variants={itemVariants}>
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            {...register("email")}
            className="peer w-full bg-transparent border-b border-white pb-2 outline-none placeholder-transparent focus:border-white transition-all text-white text-sm"
            placeholder="Email"
            style={{
              fontSize: "16px",
              touchAction: "manipulation",
            }}
          />
          <label
            htmlFor="email"
            className="absolute left-0 -top-5 text-white text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white"
          >
            Email
          </label>
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </motion.div>

      <motion.div className="w-full" variants={itemVariants}>
        <div className="relative mb-6">
          <textarea
            id="message"
            rows="3"
            ref={messageRef}
            onFocus={handleMessageFocus}
            onClick={handleMessageFocus}
            onKeyUp={(e) => {
              const textarea = e.target;
              textarea.scrollTop = textarea.scrollHeight;
            }}
            {...register("message")}
            className="peer w-full bg-transparent border-b border-white pb-2 outline-none placeholder-transparent focus:border-white transition-all text-white text-sm min-h-[80px]"
            placeholder="Message"
            style={{
              verticalAlign: "bottom",
              resize: "none",
              lineHeight: "1.5",
              paddingBottom: "1rem",
              fontSize: "16px",
              touchAction: "manipulation",
              position: "relative",
              display: "block",
            }}
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 -top-5 text-white text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white"
          >
            Message
          </label>
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
      </motion.div>

      {submitError && (
        <motion.div
          className="text-center text-red-400 mt-2 text-sm w-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {submitError}
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#4AB757] text-white w-40 sm:w-44 font-normal whitespace-nowrap text-center mt-4 px-8 py-2.5 rounded-full border-2 border-[#4AB757] hover:bg-[#3da048] transition-colors duration-300 disabled:opacity-70 active:scale-95 text-sm sm:text-base"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        style={{
          WebkitTapHighlightColor: "transparent",
          touchAction: "manipulation",
        }}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </motion.button>

      {submitSuccess && (
        <motion.div
          className="text-center text-green-400 mt-3 text-sm w-full"
          variants={successVariants}
          initial="hidden"
          animate="visible"
        >
          Thank you for your message! We'll get back to you soon.
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
