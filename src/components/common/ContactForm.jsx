import React, { useState, useRef } from "react";
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

// Define the server URL - it can be replaced with your production URL when deployed
const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3001';

const ContactForm = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const formRef = useRef();
  
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

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      if (process.env.NODE_ENV === 'development' && !SERVER_URL.startsWith('http')) {
        // In development mode without server URL, just simulate sending email
        console.log('Development mode - Email would be sent with:', data);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
        setSubmitSuccess(true);
        reset();
      } else {
        // Send to our custom mail server
        const response = await fetch(`${SERVER_URL}/api/send-email`, {
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
      className="w-full flex flex-col items-center gap-10 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Close button */}
      {onClose && (
        <motion.button
          type="button"
          onClick={onClose}
          className="absolute top-0 right-0 text-white hover:text-green-400 z-10"
          variants={closeButtonVariants}
          whileHover="hover"
          whileTap="tap"
          aria-label="Close form"
        >
          <FaTimesCircle size={24} />
        </motion.button>
      )}

      <motion.div 
        className="text-5xl font-bold text-center max-md:text-[40px]"
        variants={itemVariants}
      >
        Get In Touch
      </motion.div>

      <motion.div 
        className="w-full max-md:mt-10"
        variants={itemVariants}
      >
        <div className="relative mb-4">
          <input
            type="text"
            id="name"
            {...register("name")}
            className="peer w-full bg-transparent border-b-2 border-white pb-2 outline-none placeholder-transparent focus:border-[rgba(74,183,87,1)] transition-all"
            placeholder="Name"
          />
          <label 
            htmlFor="name" 
            className="absolute left-0 -top-6 text-white text-opacity-80 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[rgba(74,183,87,1)]"
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
        <div className="relative mb-4">
          <input
            type="email"
            id="email"
            {...register("email")}
            className="peer w-full bg-transparent border-b-2 border-white pb-2 outline-none placeholder-transparent focus:border-[rgba(74,183,87,1)] transition-all"
            placeholder="Email"
          />
          <label 
            htmlFor="email" 
            className="absolute left-0 -top-6 text-white text-opacity-80 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[rgba(74,183,87,1)]"
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
        <div className="relative mb-4">
          <textarea
            id="message"
            rows="4"
            {...register("message")}
            className="peer w-full bg-transparent border-b-2 border-white pb-2 outline-none placeholder-transparent focus:border-[rgba(74,183,87,1)] transition-all resize-none"
            placeholder="Message"
          ></textarea>
          <label 
            htmlFor="message" 
            className="absolute left-0 -top-6 text-white text-opacity-80 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[rgba(74,183,87,1)]"
          >
            Message
          </label>
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
        </div>
      </motion.div>

      {submitError && (
        <motion.div 
          className="text-center text-red-400 mt-2"
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
        className="bg-gradient-to-b from-[rgba(0,0,0,0.43)] to-[rgba(0,0,0,0.43)] bg-[#4AB757] text-white w-44 max-w-full font-normal whitespace-nowrap text-center mt-[50px] px-[59px] py-6 rounded-[31px] border-[#4AB757] border-solid border-2 transition-colors duration-300 max-md:mt-10 max-md:px-5 disabled:opacity-70"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </motion.button>

      {submitSuccess && (
        <motion.div 
          className="text-center text-green-400 mt-4"
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
