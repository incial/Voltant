import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real application, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
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

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
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
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="peer w-full bg-transparent border-b-2 border-white pb-2 outline-none placeholder-transparent focus:border-[rgba(74,183,87,1)] transition-all"
            placeholder="Name"
          />
          <label 
            htmlFor="name" 
            className="absolute left-0 -top-6 text-white text-opacity-80 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[rgba(74,183,87,1)]"
          >
            Name
          </label>
        </div>
      </motion.div>

      <motion.div 
        className="w-full"
        variants={itemVariants}
      >
        <div className="relative mb-4">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="peer w-full bg-transparent border-b-2 border-white pb-2 outline-none placeholder-transparent focus:border-[rgba(74,183,87,1)] transition-all"
            placeholder="Email"
          />
          <label 
            htmlFor="email" 
            className="absolute left-0 -top-6 text-white text-opacity-80 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[rgba(74,183,87,1)]"
          >
            Email
          </label>
        </div>
      </motion.div>

      <motion.div 
        className="w-full"
        variants={itemVariants}
      >
        <div className="relative mb-4">
          <textarea
            name="message"
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="peer w-full bg-transparent border-b-2 border-white pb-2 outline-none placeholder-transparent focus:border-[rgba(74,183,87,1)] transition-all resize-none"
            placeholder="Message"
          ></textarea>
          <label 
            htmlFor="message" 
            className="absolute left-0 -top-6 text-white text-opacity-80 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[rgba(74,183,87,1)]"
          >
            Message
          </label>
        </div>
      </motion.div>

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
