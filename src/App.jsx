import React, { useState } from "react";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RoadmapShowcase from "./pages/RoadmapShowcase";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // 'home' | 'login' | 'register' | 'showcase'

  const handleNavigate = (page, sectionId = null) => {
    setCurrentPage(page);
    if (page === "home") {
      setTimeout(() => {
        if (sectionId) {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#070b12",
        color: "#ffffff",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* NAVBAR CỐ ĐỊNH */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 80px",
          borderBottom: "1px solid #1e293b",
          position: "sticky",
          top: 0,
          backgroundColor: "rgba(7, 11, 18, 0.95)",
          backdropFilter: "blur(12px)",
          zIndex: 100,
        }}
      >
        <motion.h2
          whileHover={{ scale: 1.05 }}
          onClick={() => handleNavigate("home", "hero")}
          style={{
            fontSize: "1.4rem",
            fontWeight: "900",
            color: "#4ade80",
            letterSpacing: "-0.5px",
            cursor: "pointer",
            textShadow: "0 0 15px rgba(74, 222, 128, 0.4)",
          }}
        >
          🌱 DEVMASTER.VN
        </motion.h2>

        <div
          style={{
            display: "flex",
            gap: "32px",
            color: "#cbd5e1",
            fontSize: "0.95rem",
            fontWeight: "600",
          }}
        >
          <motion.span
            onClick={() => handleNavigate("home", "hero")}
            whileHover={{ color: "#4ade80", scale: 1.05 }}
            style={{ cursor: "pointer" }}
          >
            Trang chủ
          </motion.span>
          <motion.span
            onClick={() => handleNavigate("home", "features")}
            whileHover={{ color: "#4ade80", scale: 1.05 }}
            style={{ cursor: "pointer" }}
          >
            Lợi ích
          </motion.span>
          <motion.span
            onClick={() => handleNavigate("home", "pricing")}
            whileHover={{ color: "#4ade80", scale: 1.05 }}
            style={{ cursor: "pointer" }}
          >
            Học phí
          </motion.span>
          <motion.span
            onClick={() => handleNavigate("showcase")}
            whileHover={{ color: "#4ade80", scale: 1.05 }}
            style={{ cursor: "pointer" }}
          >
            Animation Showcase
          </motion.span>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <motion.button
            whileHover={{ scale: 1.05, color: "#4ade80" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigate("login")}
            style={{
              backgroundColor: "transparent",
              color: "#f1f5f9",
              border: "1px solid #334155",
              padding: "10px 18px",
              borderRadius: "8px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Đăng nhập
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#059669",
              boxShadow: "0 0 25px rgba(74, 222, 128, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigate("register")}
            style={{
              backgroundColor: "#10b981",
              color: "#ffffff",
              border: "none",
              padding: "10px 22px",
              borderRadius: "8px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Đăng ký ngay
          </motion.button>
        </div>
      </motion.nav>

      {/* CHUYỂN TRANG THEO ROUTE */}
      {currentPage === "home" && <Home onNavigate={handleNavigate} />}
      {currentPage === "login" && <Login onNavigate={handleNavigate} />}
      {currentPage === "register" && <Register onNavigate={handleNavigate} />}
      {currentPage === "showcase" && (
        <RoadmapShowcase onNavigate={handleNavigate} />
      )}
    </div>
  );
}
