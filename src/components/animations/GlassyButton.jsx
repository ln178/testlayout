import React from "react";
import "../css/GlassyButton.css";

export default function GlassyButton() {
  // Hàm xử lý hover chuyển động chuột (Chuyển từ JS Vanilla sang React Event)
  const handleMouseMove = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const offsetX = e.clientX - rect.left - centerX;
    const offsetY = e.clientY - rect.top - centerY;

    button.style.setProperty("--_x-motion", `${offsetX}px`);
    button.style.setProperty("--_y-motion", `${offsetY}px`);
  };

  return (
    <div className="glassy-button-wrapper">
      {/* Nút 1: Màu xanh */}
      <button
        className="glassy-button"
        onMouseMove={handleMouseMove}
        style={{ "--_surface": "hsl(197, 88%, 58%)" }}
      >
        <span>Get started</span>
      </button>

      {/* Nút 2: Màu cam */}
      <button
        className="glassy-button"
        onMouseMove={handleMouseMove}
        style={{ "--_surface": "hsl(41, 96%, 56%)" }}
      >
        <span>Get started</span>
      </button>
    </div>
  );
}
