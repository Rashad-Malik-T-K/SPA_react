import React from "react";

export default function AIStudentPerformance() {
  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: "#1363C6",
        color: "white",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ fontSize: "1.875rem", fontWeight: "bold" }}>AI</div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="/Home" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a>
          <a href="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</a>
          <a href="/projects" style={{ color: "white", textDecoration: "none" }}>Projects</a>
          <div style={{ position: "relative" }}>
            <a href="/pages" style={{ color: "white", textDecoration: "none" }}>Pages ▼</a>
          </div>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>Logout</a>
          <button style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" href="logo512.png">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right,#1363C6)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Content Container */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center"
        }}>
          {/* Left Column - Text Content */}
          <div style={{
            width: "100%",
            color: "white",
            zIndex: "10",
            flex: "1 1 50%",
            paddingRight: "2rem"
          }}>
            <div style={{
              display: "inline-block",
              padding: "0.25rem 1rem",
              backgroundColor: "#2563eb",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              marginBottom: "1.5rem"
            }}>
              AI.Tech
            </div>
            
            <h1 style={{
              fontSize: "3.75rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              lineHeight: "1.1"
            }}>
              Student Performance
              Analysis
            </h1>
            
            <p style={{
              fontSize: "1.25rem",
              marginBottom: "2.5rem",
              opacity: "0.9"
            }}>
              Tempor rebum no at dolore lorem cita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit
            </p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <button style={{
                padding: "0.75rem 2rem",
                backgroundColor: "white",
                color: "#ffff",
                fontWeight: "500",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer"
              }}>
                Read More
              </button>
              <button style={{
                padding: "0.75rem 2rem",
                width:"250px",
                backgroundColor: "transparent",
                border: "2px solid white",
                color: "white",
                fontWeight: "500",
                borderRadius: "9999px",
                cursor: "pointer"
              }}>
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Right Column - AI Figure */}
          <div style={{
            width: "100%",
            flex: "1 1 50%",
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
            zIndex: "10"
          }}>
            <div style={{ position: "relative", width: "16rem", height: "24rem" }}>
              {/* Head */}
              <div style={{
                position: "absolute",
                width: "10rem",
                height: "10rem",
                backgroundColor: "white",
                borderRadius: "9999px",
                top: "0",
                left: "50%",
                transform: "translateX(-50%)"
              }}>
                {/* Eyes */}
                <div style={{
                  position: "absolute",
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "#1f2937",
                  borderRadius: "9999px",
                  top: "4rem",
                  left: "3rem",
                  border: "1px solid #4b5563"
                }}></div>
                <div style={{
                  position: "absolute",
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "#1f2937",
                  borderRadius: "9999px",
                  top: "4rem",
                  right: "3rem",
                  border: "1px solid #4b5563"
                }}></div>
                {/* Nose */}
                <div style={{
                  position: "absolute",
                  width: "0.25rem",
                  height: "1rem",
                  backgroundColor: "#d1d5db",
                  borderRadius: "9999px",
                  top: "5rem",
                  left: "50%",
                  transform: "translateX(-50%)"
                }}></div>
                {/* Mouth */}
                <div style={{
                  position: "absolute",
                  width: "3rem",
                  height: "0.25rem",
                  backgroundColor: "#9ca3af",
                  borderRadius: "9999px",
                  top: "7rem",
                  left: "50%",
                  transform: "translateX(-50%)"
                }}></div>
              </div>
              {/* Body */}
              <div style={{
                position: "absolute",
                width: "12rem",
                height: "18rem",
                background: "linear-gradient(to bottom, white, #93c5fd)",
                top: "8rem",
                left: "50%",
                transform: "translateX(-50%)",
                borderTopLeftRadius: "9999px",
                borderTopRightRadius: "9999px"
              }}>
                {/* Blue overlay for the "liquid" effect */}
                <div style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "66.666667%",
                  background: "linear-gradient(to top, #60a5fa, transparent)",
                  opacity: "0.5"
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
