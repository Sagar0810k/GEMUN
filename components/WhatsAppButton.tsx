"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+918755058526";
  const message = "Hello, I have a question about the MUNERA 2025 conference.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-[#2591f5] text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </Link>
  );
};

export default WhatsAppButton;