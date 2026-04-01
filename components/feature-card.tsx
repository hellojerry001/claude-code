"use client";

import React from "react";

export function WebReadIcon() {
  return (
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 12,
        background: "#F0F4FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="38" height="32" viewBox="0 0 38 32" fill="none">
        {/* Glasses frame */}
        <circle cx="11" cy="18" r="7" stroke="#4D6B99" strokeWidth="2" fill="white" />
        <circle cx="27" cy="18" r="7" stroke="#4D6B99" strokeWidth="2" fill="white" />
        <path d="M18 18h2" stroke="#4D6B99" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 18c0 0 1-6 7-6" stroke="#4D6B99" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 18c0 0-1-6-7-6" stroke="#4D6B99" strokeWidth="2" strokeLinecap="round" />
        {/* Dots above */}
        <circle cx="7" cy="8" r="2" fill="#E74C3C" />
        <circle cx="14" cy="8" r="2" fill="#F39C12" />
        <circle cx="21" cy="8" r="2" fill="#2ECC71" />
      </svg>
    </div>
  );
}

export function ResearchIcon() {
  return (
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 12,
        background: "#FFF0F0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        {/* PPT card */}
        <rect x="8" y="8" width="28" height="28" rx="4" fill="#E74C3C" />
        <text x="22" y="27" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">P</text>
      </svg>
    </div>
  );
}

export function DataMiningIcon() {
  return (
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 12,
        background: "#F5FFF5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="36" height="32" viewBox="0 0 36 32" fill="none">
        {/* Dots */}
        <circle cx="6" cy="6" r="2.5" fill="#E74C3C" />
        <circle cx="14" cy="6" r="2.5" fill="#F39C12" />
        <circle cx="22" cy="6" r="2.5" fill="#2ECC71" />
        {/* Bar chart */}
        <rect x="4" y="20" width="6" height="10" rx="1" fill="#2ECC71" />
        <rect x="13" y="14" width="6" height="16" rx="1" fill="#F39C12" />
        <rect x="22" y="10" width="6" height="20" rx="1" fill="#E74C3C" />
      </svg>
    </div>
  );
}

export function ContentCreationIcon() {
  return (
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 12,
        background: "#F0F4FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        {/* Document lines */}
        <rect x="4" y="4" width="22" height="28" rx="3" fill="#E8EFFF" stroke="#4D6B99" strokeWidth="1.5" />
        <line x1="9" y1="12" x2="21" y2="12" stroke="#4D6B99" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="17" x2="21" y2="17" stroke="#4D6B99" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="22" x2="16" y2="22" stroke="#4D6B99" strokeWidth="1.5" strokeLinecap="round" />
        {/* Pen/star */}
        <circle cx="28" cy="28" r="6" fill="#715CFF" />
        <path d="M25 28l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div
      style={{
        width: 203,
        height: 180,
        flexShrink: 0,
        borderRadius: 12,
        background: "white",
        outline: "1px solid rgba(77,107,153,0.12)",
        outlineOffset: -1,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {/* Icon */}
      <div style={{ position: "absolute", left: 17, top: 17 }}>
        {icon}
      </div>
      {/* Text */}
      <div
        style={{
          position: "absolute",
          left: 17,
          top: 107,
          width: 169,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "#1A1A1A",
            fontFamily: "Inter, sans-serif",
            lineHeight: "20px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: "#8A9096",
            fontFamily: "Inter, sans-serif",
            lineHeight: "16px",
          }}
          suppressHydrationWarning
        >
          {description}
        </div>
      </div>
    </div>
  );
}
