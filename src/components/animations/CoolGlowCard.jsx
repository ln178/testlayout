import React from "react";
import { motion } from "framer-motion";

export default function CoolGlowCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        width: "190px",
        height: "95px",
        background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#070b12",
        fontWeight: "900",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)",
      }}
    >
      <span>✨ Glow Hover</span>
      <span
        style={{
          fontSize: "0.75rem",
          fontWeight: "600",
          opacity: 0.8,
          marginTop: "4px",
        }}
      >
        Component riêng
      </span>
    </motion.div>
  );
}
