import React from "react";
import { motion } from "framer-motion";

export default function Register({ onNavigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 100px)",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          backgroundColor: "#0a101d",
          border: "1px solid #1e293b",
          borderRadius: "24px",
          padding: "40px",
          position: "relative",
        }}
      >
        <button
          onClick={() => onNavigate("home")}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            backgroundColor: "transparent",
            color: "#94a3b8",
            border: "none",
            fontSize: "0.9rem",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          ← Quay lại
        </button>

        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "900",
            color: "#ffffff",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "8px",
          }}
        >
          Tạo Tài Khoản
        </h2>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "0.95rem",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Bắt đầu hành trình trở thành Fullstack Dev ngay hôm nay
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Đăng ký thành công!");
            onNavigate("home");
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                color: "#e2e8f0",
                fontSize: "0.9rem",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              Họ và tên
            </label>
            <input
              type="text"
              placeholder="Nguyễn Văn A"
              required
              style={{
                width: "100%",
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                color: "#ffffff",
                padding: "12px 16px",
                borderRadius: "10px",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                color: "#e2e8f0",
                fontSize: "0.9rem",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="dev@example.com"
              required
              style={{
                width: "100%",
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                color: "#ffffff",
                padding: "12px 16px",
                borderRadius: "10px",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                color: "#e2e8f0",
                fontSize: "0.9rem",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              Mật khẩu
            </label>
            <input
              type="password"
              placeholder="••••••••"
              required
              style={{
                width: "100%",
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                color: "#ffffff",
                padding: "12px 16px",
                borderRadius: "10px",
                outline: "none",
              }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#059669" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#10b981",
              color: "#ffffff",
              border: "none",
              padding: "14px",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            Đăng Ký Tài Khoản
          </motion.button>
        </form>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "0.9rem",
            marginTop: "24px",
          }}
        >
          Đã có tài khoản?{" "}
          <span
            onClick={() => onNavigate("login")}
            style={{
              color: "#4ade80",
              fontWeight: "700",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Đăng nhập
          </span>
        </p>
      </div>
    </motion.div>
  );
}
