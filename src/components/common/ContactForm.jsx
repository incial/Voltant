import React, { useState, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaTimesCircle } from 'react-icons/fa';

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
    .min(10, "Message must be at least 10 characters")
});

// Update this to use Netlify Functions
const FUNCTION_URL = '/.netlify/functions/send-email';

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
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  // When the form opens, ensure the view is centered properly
  useEffect(() => {
    if (formRef.current) {
      // Ensure form is in view
      formRef.current.scrollIntoView({ 
        behavior: 'auto',
        block: 'center',
        inline: 'center'
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
      if (import.meta.env.MODE === 'development' && import.meta.env.VITE_USE_MOCK === 'true') {
        // In development mode with mock flag, just simulate sending email
        console.log('Development mode - Email would be sent with:', data);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
        setSubmitSuccess(true);
        reset();
      } else {
        // Send to our Netlify Function
        const response = await fetch(FUNCTION_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
        const result = await response.json();
        
        if (response.ok) {
          setSubmitSuccess(true);
          reset();
        } else {
          throw new Error(result.message || 'Failed to send email');
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError('Failed to send your message. Please try again later.');
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
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "transparent",
      background: "transparent",
      color: "#4AB757",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const successVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const closeButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[95%] mx-auto sm:max-w-4xl flex flex-col items-center gap-4 sm:gap-6 md:gap-10 relative bg-transparent border-2 border-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ 
        WebkitBackdropFilter: 'blur(15px)',
        backdropFilter: 'blur(15px)',
        MozBackdropFilter: 'blur(15px)',
        msBackdropFilter: 'blur(15px)'
      }}
    >
      {/* Close button */}
      {onClose && (
        <motion.button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-3 sm:right-3 md:top-10 md:right-10 text-white hover:text-green-400 z-10"
          variants={closeButtonVariants}
          whileHover="hover"
          whileTap="tap"
          aria-label="Close form"
        >
          <FaTimesCircle size={20} className="md:text-2xl" />
        </motion.button>
      )}

      <motion.div 
        className="text-white text-xl sm:text-2xl md:text-5xl font-bold text-center w-full mt-2"
        variants={itemVariants}
      >
        Get In Touch
      </motion.div>

      <motion.div 
        className="w-full mt-4 sm:mt-2 md:mt-0"
        variants={itemVariants}
      >
        <div className="relative mb-6 sm:mb-4">
          <input
            type="text"
            id="name"
            {...register("name")}
            className="peer w-full bg-transparent border-b-2 border-white pb-2 outline-none placeholder-transparent focus:border-[rgba(74,183,87,1)] transition-all text-white text-base"
            placeholder="Name"
            style={{
              fontSize: '16px', // Prevents auto-zoom on iOS
              touchAction: 'manipulation'
            }}
          />
          <label 
            htmlFor="name" 
            className="absolute left-0 -top-5 text-white text-opacity-80 text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[rgba(74,183,87,1)]"
          >
            Name
          </label>
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>
      </motion.div>

      <motion.div 
        className="w-full"
        variants={itemVariants}
      >
        <div className="relative mb-6 sm:mb-4">
          <input
            type="email"
            id="email"
            {...register("email")}
            className="peer w-full bg-transparent border-b-2 border-white pb-2 outline-none placeholder-transparent focus:border-[rgba(74,183,87,1)] transition-all text-white text-base"
            placeholder="Email"
            style={{
              fontSize: '16px', // Prevents auto-zoom on iOS
              touchAction: 'manipulation'
            }}
          />
          <label 
            htmlFor="email" 
            className="absolute left-0 -top-5 text-white text-opacity-80 text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[rgba(74,183,87,1)]"
          >
            Email
          </label>
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </motion.div>

      <motion.div 
        className="w-full"
        variants={itemVariants}
      >
        <div className="relative mb-6 sm:mb-4">
          <textarea
            id="message"
            rows="3"
            ref={messageRef}
            onFocus={handleMessageFocus}
            onClick={handleMessageFocus}
            onKeyUp={(e) => {
              // Always keep cursor at bottom after each keystroke
              const textarea = e.target;
              textarea.scrollTop = textarea.scrollHeight;
            }}
            {...register("message")}
            className="peer w-full bg-transparent border-b-2 border-white pb-2 outline-none placeholder-transparent focus:border-[rgba(74,183,87,1)] transition-all text-white text-base min-h-[100px] sm:min-h-[80px]"
            placeholder="Message"
            style={{ 
              verticalAlign: 'bottom',
              resize: 'none',
              lineHeight: '1.5',
              paddingBottom: '1rem',
              fontSize: '16px', // Prevents auto-zoom on iOS
              touchAction: 'manipulation',
              position: 'relative',
              display: 'block'
            }}
          ></textarea>
          <label 
            htmlFor="message" 
            className="absolute left-0 -top-5 text-white text-opacity-80 text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[rgba(74,183,87,1)]"
          >
            Message
          </label>
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
          
          {/* Line indicator for text input */}
          <div className="h-[1px] w-full mt-0"></div>
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
        className="bg-gradient-to-b from-[rgba(0,0,0,0.43)] to-[rgba(0,0,0,0.43)] bg-[#4AB757] text-white w-full sm:w-44 font-normal whitespace-nowrap text-center mt-4 px-6 py-2 sm:py-3 rounded-3xl sm:rounded-4xl border-[#4AB757] border-solid border-2 transition-colors duration-300 disabled:opacity-70 active:scale-95"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        style={{ 
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation'
        }}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </motion.button>

      {submitSuccess && (
        <motion.div 
          className="text-center text-green-400 mt-3 text-sm sm:text-base w-full"
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
