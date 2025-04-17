import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const ChatButton = ({ phoneNumber = '971XXXXXXXXX' }) => {
  return (
    <motion.a 
      href={`https://wa.me/${phoneNumber}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center backdrop-blur-sm bg-white/20 text-gray-400 rounded-full rounded-r-none py-3 pl-4 md:pl-4 pr-5 shadow-lg border-2 border-[#7F7F7F] border-r-0"
      initial={{ x: "+15%" }}
      whileHover={{ x: "0%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <span className="mr-4 font-medium hidden md:inline">Chat</span>
      <FaWhatsapp className="text-2xl text-gray-400" />
    </motion.a>
  );
};

export default ChatButton;
