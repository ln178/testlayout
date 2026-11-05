import React from "react";
import { motion } from "framer-motion";

export default function Home({ onNavigate }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div style={{ width: "100%" }}>
      {/* HERO SECTION */}
      <motion.header
        id="hero"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        style={{
          textAlign: "center",
          padding: "100px 20px 70px 20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <motion.span
          variants={fadeInUp}
          style={{
            display: "inline-block",
            backgroundColor: "rgba(74, 222, 128, 0.12)",
            color: "#4ade80",
            padding: "8px 20px",
            borderRadius: "20px",
            fontSize: "0.95rem",
            fontWeight: "700",
            border: "1px solid rgba(74, 222, 128, 0.3)",
          }}
        >
          🚀 Khóa học thực chiến 2026
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          style={{
            fontSize: "3.8rem",
            fontWeight: "900",
            marginTop: "24px",
            lineHeight: "1.2",
            color: "#ffffff",
            letterSpacing: "-1px",
          }}
        >
          Trở thành{" "}
          <span
            style={{
              color: "#4ade80",
              textShadow: "0 0 25px rgba(74, 222, 128, 0.4)",
            }}
          >
            Fullstack Developer
          </span>{" "}
          thực thụ sau 3 tháng
        </motion.h1>

        {/* Phóng to mô tả Hero */}
        <motion.p
          variants={fadeInUp}
          style={{
            color: "#94a3b8",
            fontSize: "1.25rem",
            marginTop: "24px",
            lineHeight: "1.7",
            fontWeight: "400",
          }}
        >
          Không lý thuyết suông. Học qua dự án thực tế, tự tay code hệ thống
          lớn, chuẩn bị kiến thức vững chắc để tự tin đi làm ngay lập tức.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px -5px rgba(74, 222, 128, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate("showcase")}
            style={{
              backgroundColor: "#10b981",
              color: "#ffffff",
              border: "none",
              padding: "16px 36px",
              borderRadius: "12px",
              fontSize: "1.1rem",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            Nhận lộ trình miễn phí
          </motion.button>
        </motion.div>
      </motion.header>

      {/* FEATURES SECTION (LỢI ÍCH) */}
      <section
        id="features"
        style={{ padding: "90px 20px", maxWidth: "1150px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.4rem",
            fontWeight: "900",
            marginBottom: "50px",
            color: "#ffffff",
            letterSpacing: "-0.5px",
          }}
        >
          Bạn nhận được gì sau khóa học?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {[
            {
              title: "100% Thực chiến",
              desc: "Code trực tiếp các project thương mại điện tử, mạng xã hội, hệ thống thanh toán với kiến trúc chuẩn doanh nghiệp.",
            },
            {
              title: "Mentor hỗ trợ 1-1",
              desc: "Giải đáp mọi thắc mắc code lỗi, fix bug trực tiếp cùng các giảng viên dày dặn kinh nghiệm thực tế.",
            },
            {
              title: "Cam kết việc làm",
              desc: "Hỗ trợ viết CV chuẩn chỉnh, phỏng vấn thử 1-1 và kết nối trực tiếp với các doanh nghiệp đối tác hàng đầu.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                backgroundColor: "#0f172a",
                borderColor: "#4ade80",
                boxShadow: "0 20px 40px -15px rgba(74, 222, 128, 0.3)",
              }}
              style={{
                backgroundColor: "#0a101d",
                border: "1px solid #1e293b",
                padding: "36px",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "border-color 0.3s",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  backgroundColor: "rgba(74, 222, 128, 0.15)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  color: "#4ade80",
                  marginBottom: "24px",
                  fontWeight: "bold",
                }}
              >
                ✓
              </div>
              {/* Phóng to tiêu đề card */}
              <h3
                style={{
                  fontSize: "1.45rem",
                  marginBottom: "14px",
                  color: "#ffffff",
                  fontWeight: "800",
                }}
              >
                {item.title}
              </h3>
              {/* Phóng to và đổi màu mô tả card sang tone dễ đọc hơn */}
              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: "1.75",
                  fontSize: "1.05rem",
                  fontWeight: "400",
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION (HỌC PHÍ) */}
      <section
        id="pricing"
        style={{
          padding: "90px 20px",
          maxWidth: "580px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.4rem",
            fontWeight: "900",
            marginBottom: "16px",
            color: "#ffffff",
            letterSpacing: "-0.5px",
          }}
        >
          Đầu tư cho sự nghiệp
        </h2>
        <p
          style={{
            color: "#94a3b8",
            marginBottom: "40px",
            fontSize: "1.15rem",
          }}
        >
          Đăng ký sớm ngay hôm nay để nhận ưu đãi giảm giá 50% học phí.
        </p>

        <motion.div
          whileHover={{
            scale: 1.02,
            borderColor: "#4ade80",
            boxShadow: "0 25px 50px -12px rgba(74, 222, 128, 0.35)",
          }}
          style={{
            backgroundColor: "#0a101d",
            border: "2px solid #10b981",
            padding: "45px",
            borderRadius: "28px",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#10b981",
              color: "#ffffff",
              padding: "6px 20px",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "800",
              letterSpacing: "0.5px",
            }}
          >
            ƯU ĐÃI NỔI BẬT
          </span>
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "14px",
              color: "#ffffff",
              fontWeight: "800",
            }}
          >
            Fullstack Master Pro
          </h3>
          <div
            style={{
              fontSize: "3.2rem",
              fontWeight: "900",
              color: "#4ade80",
              margin: "18px 0",
            }}
          >
            2.490.000đ{" "}
            <span
              style={{
                fontSize: "1.2rem",
                color: "#64748b",
                textDecoration: "line-through",
                fontWeight: "500",
              }}
            >
              5.000.000đ
            </span>
          </div>
          {/* Phóng to danh sách quyền lợi bên trong card giá */}
          <ul
            style={{
              textAlign: "left",
              color: "#cbd5e1",
              listStyle: "none",
              padding: 0,
              margin: "32px 0",
              lineHeight: "2.4",
              fontSize: "1.05rem",
              fontWeight: "500",
            }}
          >
            <li>✅ Trọn bộ 50+ giờ video bài giảng chất lượng cao</li>
            <li>✅ Source code full các dự án thương mại thực tế</li>
            <li>✅ Tham gia nhóm VIP hỗ trợ giải đáp trọn đời</li>
            <li>✅ Cấp chứng nhận hoàn thành khóa học chính quy</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "#059669" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onNavigate("register")}
            style={{
              width: "100%",
              backgroundColor: "#10b981",
              color: "#ffffff",
              border: "none",
              padding: "18px",
              borderRadius: "14px",
              fontSize: "1.15rem",
              fontWeight: "800",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(16, 185, 129, 0.4)",
            }}
          >
            Thanh toán & Vào học ngay
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "50px",
          borderTop: "1px solid #1e293b",
          color: "#64748b",
          fontSize: "0.95rem",
          marginTop: "60px",
          fontWeight: "500",
        }}
      >
        <p>© 2026 DevMaster Vietnam. All rights reserved. Code by lnn178.</p>
      </footer>
    </div>
  );
}
