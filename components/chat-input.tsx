"use client";

import { useState } from "react";

function FolderIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 4C1 3.45 1.45 3 2 3H5.5L6.5 4H12C12.55 4 13 4.45 13 5V11C13 11.55 12.55 12 12 12H2C1.45 12 1 11.55 1 11V4Z" stroke="#1A1A1A" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="#5B6066" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CanvasIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="5" height="12" rx="1" stroke="#1A1A1A" strokeWidth="1.2" />
      <rect x="9" y="2" width="5" height="5" rx="1" stroke="#1A1A1A" strokeWidth="1.2" />
      <rect x="9" y="9" width="5" height="5" rx="1" stroke="#1A1A1A" strokeWidth="1.2" />
    </svg>
  );
}

function AttachIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13.5 7.5L7.5 13.5C6.12 14.88 3.88 14.88 2.5 13.5C1.12 12.12 1.12 9.88 2.5 8.5L8.5 2.5C9.33 1.67 10.67 1.67 11.5 2.5C12.33 3.33 12.33 4.67 11.5 5.5L5.5 11.5C5.08 11.92 4.42 11.92 4 11.5C3.58 11.08 3.58 10.42 4 10L9.5 4.5" stroke="#1A1A1A" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 13V3M8 3L4 7M8 3L12 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChatInput() {
  const [input, setInput] = useState("");
  const hasInput = input.trim().length > 0;

  return (
    <div style={{ width: 860 }}>
      <div
        style={{
          borderRadius: 12,
          background: "white",
          boxShadow: "0px 6px 24px -1px rgba(24,24,24,0.06), 0px 3px 8px rgba(24,24,24,0.04)",
          outline: "1px solid rgba(77,107,153,0.18)",
          outlineOffset: -1,
        }}
      >
        {/* Input area */}
        <div style={{ padding: "16px 16px 12px 16px" }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="帮你整理论文综述、编写 PPT、分析 Excel 等日常工作，输出专业级工作成果。"
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              resize: "none",
              fontSize: 14,
              color: "#1A1A1A",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              lineHeight: "20px",
              background: "transparent",
              height: 64,
            }}
          />
        </div>

        {/* Bottom toolbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 12px 12px 12px",
            height: 56,
          }}
        >
          {/* Left side */}
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Create Project */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "0 8px",
                height: 32,
                borderRadius: 4,
                border: "none",
                background: "rgba(86,99,119,0.06)",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <FolderIcon />
              <span style={{ fontSize: 12, color: "#5B6066", fontWeight: 400 }}>
                创建项目
              </span>
              <ChevronDownIcon />
            </button>

            {/* Divider */}
            <div
              style={{
                width: 1,
                height: 12,
                background: "rgba(77,107,153,0.18)",
                margin: "0 4px",
              }}
            />

            {/* Canvas button */}
            <button
              style={{
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <CanvasIcon />
            </button>

            {/* Attach button */}
            <button
              style={{
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <AttachIcon />
            </button>
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* Model selector */}
            <span
              style={{
                fontSize: 11,
                color: "#1A1A1A",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                letterSpacing: "0.06px",
              }}
            >
              SOLO Auto Model
            </span>

            {/* Send button */}
            <button
              style={{
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                border: "none",
                background: hasInput ? "rgba(120,100,255,1)" : "rgba(120,100,255,0.20)",
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
