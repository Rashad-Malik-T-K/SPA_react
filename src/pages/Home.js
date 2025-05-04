import React from "react";
import { useNavigate } from "react-router-dom";
export default function AIStudentPerformance() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor:"#2c3e50",
          color: "white",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* <div style={{ fontSize: "1.875rem", fontWeight: "bold", padding: "0.75rem 2rem",
                  width: "70px",
                  backgroundColor: "#0056b3",
                  border: "none",
                  color: "white",
                  fontWeight: "500",
                  borderRadius: "10000px",
                  cursor: "pointer", }}>SPAS</div> */}
                  <div
              style={{
                display: "inline-block",
                padding: "0.25rem 1rem",
                backgroundColor: "#2563eb",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                marginBottom: "1.5rem",
                fontWeight: "500",
              }}
            >
              QuBitAix
            </div>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <a href="/Home" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a
            href="/dashboard"
            style={{ color: "white", textDecoration: "none" }}
          >
            Dashboard
          </a>
          <a href="/about" style={{ color: "white", textDecoration: "none" }}>
            About Us
          </a>
          
          <a href="/Contact" style={{ color: "white", textDecoration: "none" }}>
            Contact Us
          </a>

          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Logout
          </a>
          
        </div>
      </nav>

      {/* Main Content */}
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom right,#2c3e50)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Content Container */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "5rem 1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {/* Left Column - Text Content */}
          <div
            style={{
              width: "100%",
              color: "white",
              zIndex: "10",
              flex: "1 1 50%",
              paddingRight: "2rem",
            }}
          >
            

            <h1
              style={{
                fontSize: "3.75rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                lineHeight: "1.1",
              }}
            >
              Student Performance Analyticts
            </h1>

            <p
              style={{
                fontSize: "1.25rem",
                marginBottom: "2.5rem",
                opacity: "0.9",
              }}
            >
              Transforming Student Performance with Data-Driven Insights
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              
              <button
                onClick={() => navigate("/Dashboard")}
                style={{
                  padding: "0.75rem 2rem",
                  width: "250px",
                  backgroundColor: "transparent",
                  border: "2px solid white",
                  color: "white",
                  fontWeight: "500",
                  borderRadius: "9999px",
                  cursor: "pointer",
                }}
              >
                Get Started
              </button>
            </div>
          </div>
          {/* Right Column - New Custom AI Figure */}
<div
  style={{
    width: "100%",
    flex: "1 1 50%",
    display: "flex",
    justifyContent: "center",
    marginTop: "4rem",
    zIndex: "10",
  }}
>
  <div style={{ position: "relative", width: "16rem", height: "24rem" }}>
    {/* Large Background Circle */}
    <div
      style={{
        position: "absolute",
        width: "18rem",
        height: "18rem",
        background: "linear-gradient(to bottom right, #4f46e5, #818cf8)",
        borderRadius: "50%",
        top: "-2rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "1",
        opacity: "0.8",
      }}
    ></div>

    {/* Middle Circle */}
    <div
      style={{
        position: "absolute",
        width: "12rem",
        height: "12rem",
        background: "linear-gradient(to bottom, #ffffff, #93c5fd)",
        borderRadius: "50%",
        top: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "2",
      }}
    ></div>

    {/* Small Circle */}
    <div
      style={{
        position: "absolute",
        width: "8rem",
        height: "8rem",
        background: "linear-gradient(to bottom right, #2563eb, #60a5fa)",
        borderRadius: "50%",
        top: "6rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "3",
      }}
    ></div>

    {/* Decorative Rectangle */}
    <div
      style={{
        position: "absolute",
        width: "10rem",
        height: "14rem",
        background: "linear-gradient(to bottom, #ffffff, #60a5fa)",
        top: "5rem",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "10px",
        zIndex: "4",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    ></div>

    {/* Decorative Dots */}
    <div
      style={{
        position: "absolute",
        width: "0.75rem",
        height: "0.75rem",
        backgroundColor: "#2563eb",
        borderRadius: "50%",
        top: "8rem",
        left: "6rem",
        zIndex: "5",
      }}
    ></div>
    <div
      style={{
        position: "absolute",
        width: "0.75rem",
        height: "0.75rem",
        backgroundColor: "#2563eb",
        borderRadius: "50%",
        top: "8rem",
        right: "6rem",
        zIndex: "5",
      }}
    ></div>

    {/* Bottom Gradient Overlay */}
    <div
      style={{
        position: "absolute",
        width: "12rem",
        height: "6rem",
        background: "linear-gradient(to top, #2563eb, transparent)",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        zIndex: "6",
        opacity: "0.7",
      }}
    ></div>
  </div>
</div>
          {/* Right Column - Custom AI Figure */}
<div
  style={{
    width: "100%",
    flex: "1 1 50%",
    display: "flex",
    justifyContent: "center",
    marginTop: "4rem",
    zIndex: "10",
  }}
>
  <div style={{ position: "relative", width: "16rem", height: "24rem" }}>
    {/* Background Circle */}
    <div
      style={{
        position: "absolute",
        width: "16rem",
        height: "16rem",
        background: "linear-gradient(to bottom right, #2563eb, #93c5fd)",
        borderRadius: "50%",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "1",
      }}
    ></div>

    {/* Inner Circle */}
    <div
      style={{
        position: "absolute",
        width: "12rem",
        height: "12rem",
        background: "linear-gradient(to bottom, white, #60a5fa)",
        borderRadius: "50%",
        top: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "2",
      }}
    ></div>

    {/* Overlay Rectangle */}
    <div
      style={{
        position: "absolute",
        width: "10rem",
        height: "14rem",
        background: "linear-gradient(to bottom, #ffffff, #93c5fd)",
        top: "5rem",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "10px",
        zIndex: "3",
      }}
    ></div>

    {/* Decorative Dots */}
    <div
      style={{
        position: "absolute",
        width: "0.75rem",
        height: "0.75rem",
        backgroundColor: "#2563eb",
        borderRadius: "50%",
        top: "6rem",
        left: "6rem",
        zIndex: "4",
      }}
    ></div>
    <div
      style={{
        position: "absolute",
        width: "0.75rem",
        height: "0.75rem",
        backgroundColor: "#2563eb",
        borderRadius: "50%",
        top: "6rem",
        right: "6rem",
        zIndex: "4",
      }}
    ></div>

    {/* Bottom Gradient */}
    <div
      style={{
        position: "absolute",
        width: "12rem",
        height: "6rem",
        background: "linear-gradient(to top, #2563eb, transparent)",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        zIndex: "5",
        opacity: "0.7",
      }}
    ></div>
  </div>
</div>

          {/* Right Column - AI Figure */}
          <div
            style={{
              width: "100%",
              flex: "1 1 50%",
              display: "flex",
              justifyContent: "center",
              marginTop: "4rem",
              zIndex: "10",
            }}
          >
            <div style={{ position: "relative", width: "16rem", height: "24rem" }}>
              {/* Head */}
              <div
                style={{
                  position: "absolute",
                  width: "10rem",
                  height: "10rem",
                  backgroundColor: "white",
                  borderRadius: "9999px",
                  top: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {/* Eyes */}
                <div
                  style={{
                    position: "absolute",
                    width: "0.75rem",
                    height: "0.75rem",
                    backgroundColor: "#1f2937",
                    borderRadius: "9999px",
                    top: "4rem",
                    left: "3rem",
                    border: "1px solid #4b5563",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    width: "0.75rem",
                    height: "0.75rem",
                    backgroundColor: "#1f2937",
                    borderRadius: "9999px",
                    top: "4rem",
                    right: "3rem",
                    border: "1px solid #4b5563",
                  }}
                ></div>
                {/* Nose */}
                <div
                  style={{
                    position: "absolute",
                    width: "0.25rem",
                    height: "1rem",
                    backgroundColor: "#d1d5db",
                    borderRadius: "9999px",
                    top: "5rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                ></div>
                {/* Mouth */}
                <div
                  style={{
                    position: "absolute",
                    width: "3rem",
                    height: "0.25rem",
                    backgroundColor: "#9ca3af",
                    borderRadius: "9999px",
                    top: "7rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                ></div>
              </div>
              {/* Body */}
              <div
                style={{
                  position: "absolute",
                  width: "12rem",
                  height: "18rem",
                  background: "linear-gradient(to bottom, white, #93c5fd)",
                  top: "8rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderTopLeftRadius: "9999px",
                  borderTopRightRadius: "9999px",
                }}
                
              >
                {/* Blue overlay for the "liquid" effect */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "66.666667%",
                    background: "linear-gradient(to top, #60a5fa, transparent)",
                    opacity: "0.5",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}