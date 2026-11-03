import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CoolGlowCard from "../components/animations/CoolGlowCard";

export default function RoadmapShowcase({ onNavigate }) {
  // State quản lý Modal Live Demo và Toast Notification
  const [activeModal, setActiveModal] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Hàm hiển thị Toast thông báo nổi và tự tắt sau 2 giây
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  // Danh sách các animation showcase mẫu
  const [animations] = useState([
    {
      id: 1,
      title: "Cool Glow Card",
      category: "Button Interaction",
      tag: "Component",
      desc: "Hiệu ứng component tương tác mượt mà tách riêng từng file gọn gàng.",
      preview: <CoolGlowCard />,
    },
    {
      id: 2,
      title: "3D Card Hover Perspective",
      category: "Card Effect",
      tag: "3D Transform",
      desc: "Thẻ bài nổi 3D theo góc nghiêng khi rê con trỏ chuột vào.",
    },
    {
      id: 3,
      title: "Glassmorphism Blurred Badge",
      category: "UI Component",
      tag: "CSS Backdrop Filter",
      desc: "Hộp thông báo hiệu ứng kính mờ xịn xò chuẩn xu hướng.",
    },
    {
      id: 4,
      title: "Staggered Text Gradient Fade",
      category: "Text Animation",
      tag: "Typography",
      desc: "Tiêu đề xuất hiện từng chữ kèm màu sắc chuyển tầng gradient mượt mà.",
    },
  ]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px 100px 20px",
      }}
    >
      {/* HEADER TỰA TRANG */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <button
          onClick={() => onNavigate("home")}
          style={{
            backgroundColor: "#1e293b",
            color: "#94a3b8",
            border: "1px solid #334155",
            padding: "8px 18px",
            borderRadius: "20px",
            cursor: "pointer",
            fontSize: "0.9rem",
            fontWeight: "600",
            marginBottom: "24px",
          }}
        >
          ← Quay lại Trang Chủ
        </button>

        <span
          style={{
            display: "block",
            color: "#4ade80",
            fontSize: "0.95rem",
            fontWeight: "800",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          ⚡ Animation Showcase & Resources
        </span>
        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: "900",
            color: "#ffffff",
            letterSpacing: "-1px",
          }}
        >
          Lộ Trình & Kho Animation Thực Chiến
        </h1>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "1.2rem",
            marginTop: "16px",
            maxWidth: "700px",
            margin: "16px auto 0 auto",
            lineHeight: "1.6",
          }}
        >
          Nơi tổng hợp các hiệu ứng UI/UX, micro-interactions và animation độc
          đáo. Bấm "Live Demo" để trải nghiệm trực tiếp!
        </p>
      </div>

      {/* TẢI LỘ TRÌNH (DOWNLOAD SECTION) */}
      <motion.div
        whileHover={{
          borderColor: "#4ade80",
          boxShadow: "0 20px 40px -15px rgba(74, 222, 128, 0.25)",
        }}
        style={{
          backgroundColor: "#0a101d",
          border: "2px dashed #1e293b",
          padding: "40px",
          borderRadius: "24px",
          textAlign: "center",
          marginBottom: "70px",
          transition: "border-color 0.3s",
        }}
      >
        <h3
          style={{
            fontSize: "1.6rem",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "12px",
          }}
        >
          📘 Tải Lộ Trình Fullstack Developer 2026 (.PDF)
        </h3>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "1.05rem",
            marginBottom: "24px",
          }}
        >
          Bao gồm toàn bộ các bước từ Frontend, Backend, Database cho đến DevOps
          và triển khai thực tế.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#059669" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => showToast("Đang tải xuống bộ lộ trình PDF!")}
          style={{
            backgroundColor: "#10b981",
            color: "#ffffff",
            border: "none",
            padding: "14px 32px",
            borderRadius: "12px",
            fontSize: "1.05rem",
            fontWeight: "800",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(16, 185, 129, 0.4)",
          }}
        >
          ⬇️ Tải Ngay Lộ Trình PDF (Miễn Phí)
        </motion.button>
      </motion.div>

      {/* LƯỚI SHOWCASE CÁC ANIMATION */}
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "900",
          color: "#ffffff",
          marginBottom: "32px",
        }}
      >
        🔥 Animation Gallery & Snippets
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "30px",
        }}
      >
        {animations.map((anim) => (
          <motion.div
            key={anim.id}
            whileHover={{
              y: -8,
              backgroundColor: "#0f172a",
              borderColor: "#4ade80",
            }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "#0a101d",
              border: "1px solid #1e293b",
              borderRadius: "20px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* VÙNG PREVIEW */}
            <div
              style={{
                height: "200px",
                backgroundColor: "#070b12",
                borderBottom: "1px solid #1e293b",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  backgroundColor: "#1e293b",
                  color: "#4ade80",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  border: "1px solid rgba(74, 222, 128, 0.3)",
                }}
              >
                {anim.tag}
              </span>

              {anim.preview ? (
                anim.preview
              ) : (
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "rgba(74, 222, 128, 0.1)",
                    border: "1px solid #4ade80",
                    color: "#4ade80",
                    borderRadius: "10px",
                    fontWeight: "800",
                    fontSize: "0.95rem",
                  }}
                >
                  Hover / Demo State
                </motion.div>
              )}
            </div>

            {/* THÔNG TIN CARD */}
            <div
              style={{
                padding: "28px",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    color: "#10b981",
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {anim.category}
                </span>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "800",
                    color: "#ffffff",
                    marginTop: "8px",
                    marginBottom: "10px",
                  }}
                >
                  {anim.title}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.98rem",
                    lineHeight: "1.6",
                  }}
                >
                  {anim.desc}
                </p>
              </div>

              <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
                {/* NÚT GET CODE CÓ GỌI SHOWTOAST */}
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#334155" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `// Source code cho ${anim.title}`,
                    );
                    showToast(`⚡ Đã sao chép nhanh code của "${anim.title}"!`);
                  }}
                  style={{
                    flex: 1,
                    backgroundColor: "#1e293b",
                    color: "#f1f5f9",
                    border: "1px solid #334155",
                    padding: "10px",
                    borderRadius: "8px",
                    fontWeight: "700",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                  }}
                >
                  ⚡ Get Code
                </motion.button>

                {/* NÚT LIVE DEMO CÓ MOTION */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(74, 222, 128, 0.25)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveModal(anim)}
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(74, 222, 128, 0.15)",
                    color: "#4ade80",
                    border: "1px solid rgba(74, 222, 128, 0.3)",
                    padding: "10px",
                    borderRadius: "8px",
                    fontWeight: "700",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                  }}
                >
                  👁 Live Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL POPUP PHÓNG TO LIVE DEMO */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(7, 11, 18, 0.85)",
              backdropFilter: "blur(10px)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "750px",
                backgroundColor: "#0a101d",
                border: "1px solid #1e293b",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(74, 222, 128, 0.25)",
                position: "relative",
              }}
            >
              {/* Nút đóng (✕) */}
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#334155" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveModal(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  backgroundColor: "#1e293b",
                  color: "#ffffff",
                  border: "none",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </motion.button>

              {/* Vùng xem trước phóng to */}
              <div
                style={{
                  height: "320px",
                  backgroundColor: "#070b12",
                  borderBottom: "1px solid #1e293b",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "40px",
                }}
              >
                {activeModal.preview ? (
                  <div style={{ transform: "scale(1.4)" }}>
                    {activeModal.preview}
                  </div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    style={{
                      padding: "20px 40px",
                      backgroundColor: "rgba(74, 222, 128, 0.15)",
                      border: "2px solid #4ade80",
                      color: "#4ade80",
                      borderRadius: "14px",
                      fontWeight: "900",
                      fontSize: "1.3rem",
                    }}
                  >
                    🚀 Phóng to Live Demo State
                  </motion.div>
                )}
              </div>

              {/* Thông tin trong Modal */}
              <div style={{ padding: "36px" }}>
                <span
                  style={{
                    color: "#10b981",
                    fontSize: "0.9rem",
                    fontWeight: "800",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {activeModal.category}
                </span>
                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: "900",
                    color: "#ffffff",
                    marginTop: "8px",
                    marginBottom: "14px",
                  }}
                >
                  {activeModal.title}
                </h2>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    marginBottom: "30px",
                  }}
                >
                  {activeModal.desc} - Chế độ xem trước toàn màn hình giúp ông
                  dễ dàng trải nghiệm chi tiết từng hiệu ứng trước khi lấy mã
                  nguồn.
                </p>

                <div style={{ display: "flex", gap: "16px" }}>
                  {/* NÚT SAO CHÉP SOURCE CODE CÓ GỌI SHOWTOAST */}
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#059669" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      const dummyCode = `// Code component: ${activeModal.title}\nimport React from 'react';\n\nexport default function Component() {\n  return <div>Code here</div>;\n}`;
                      navigator.clipboard.writeText(dummyCode);
                      showToast(
                        `✨ Đã sao chép Source Code của "${activeModal.title}"!`,
                      );
                      setActiveModal(null);
                    }}
                    style={{
                      flex: 1,
                      backgroundColor: "#10b981",
                      color: "#ffffff",
                      border: "none",
                      padding: "14px",
                      borderRadius: "12px",
                      fontWeight: "800",
                      fontSize: "1rem",
                      cursor: "pointer",
                      boxShadow: "0 4px 14px rgba(16, 185, 129, 0.4)",
                    }}
                  >
                    📋 Sao chép Source Code
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#334155" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveModal(null)}
                    style={{
                      backgroundColor: "#1e293b",
                      color: "#f1f5f9",
                      border: "1px solid #334155",
                      padding: "14px 24px",
                      borderRadius: "12px",
                      fontWeight: "700",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    Đóng
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOAST NOTIFICATION NỔI GIỮA MÀN HÌNH */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            style={{
              position: "fixed",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#0f172a",
              color: "#4ade80",
              border: "1px solid #4ade80",
              padding: "14px 28px",
              borderRadius: "16px",
              fontWeight: "800",
              fontSize: "1rem",
              boxShadow: "0 10px 30px -5px rgba(74, 222, 128, 0.4)",
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backdropFilter: "blur(10px)",
            }}
          >
            <span>✅</span> {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
