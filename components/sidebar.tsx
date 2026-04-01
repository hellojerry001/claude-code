"use client";

import { PanelRight, RefreshCw } from "lucide-react";

function MTCIcon() {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        background: "#715CFF",
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <rect x="2" y="2" width="3" height="3" rx="0.5" fill="white" />
        <rect x="7" y="2" width="3" height="3" rx="0.5" fill="white" />
        <rect x="2" y="7" width="3" height="3" rx="0.5" fill="white" />
        <rect x="7" y="7" width="3" height="3" rx="0.5" fill="white" />
      </svg>
    </div>
  );
}

function NewTaskIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="#715CFF" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="2" fill="#715CFF" />
    </svg>
  );
}

function SkillsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="5" height="5" rx="1" stroke="#566377" strokeWidth="1.3" />
      <rect x="9" y="2" width="5" height="5" rx="1" stroke="#566377" strokeWidth="1.3" />
      <rect x="2" y="9" width="5" height="5" rx="1" stroke="#566377" strokeWidth="1.3" />
      <rect x="9" y="9" width="5" height="5" rx="1" stroke="#566377" strokeWidth="1.3" />
    </svg>
  );
}

function EmptyStateIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke="#8A9096" strokeWidth="1.5" opacity="0.4" />
      <circle cx="10" cy="12" r="1.5" fill="#8A9096" opacity="0.4" />
      <circle cx="18" cy="12" r="1.5" fill="#8A9096" opacity="0.4" />
      <path d="M10 18C10 18 11.5 20 14 20C16.5 20 18 18 18 18" stroke="#8A9096" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function Sidebar() {
  return (
    <aside
      style={{
        width: 300,
        flexShrink: 0,
        height: "100vh",
        background: "#EDEFF2",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 12px 8px 12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            background: "#1A1A1A",
            borderRadius: 8,
          }}
        >
          <MTCIcon />
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "white",
              fontFamily: "Inter, sans-serif",
            }}
          >
            MTC
          </span>
        </div>
        <button
          style={{
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 6,
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <PanelRight size={16} color="#8A9096" />
        </button>
      </div>

      {/* New Task Button */}
      <div style={{ padding: "2px 8px" }}>
        <button
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 12px",
            borderRadius: 8,
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <NewTaskIcon />
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#1A1A1A",
                fontFamily: "Inter, sans-serif",
              }}
            >
              新建任务
            </span>
          </div>
          <span
            style={{
              fontSize: 11,
              color: "#8A9096",
              fontFamily: "Inter, sans-serif",
            }}
          >
            ^ ⌘ N
          </span>
        </button>
      </div>

      {/* Skills */}
      <div style={{ padding: "2px 8px" }}>
        <button
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 12px",
            borderRadius: 8,
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <SkillsIcon />
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "#566377",
              fontFamily: "Inter, sans-serif",
            }}
          >
            技能
          </span>
        </button>
      </div>

      {/* Project List Header */}
      <div style={{ padding: "12px 20px 4px 20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 13,
              color: "#8A9096",
              fontFamily: "Inter, sans-serif",
            }}
          >
            项目列表
          </span>
          <button
            style={{
              width: 24,
              height: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <RefreshCw size={13} color="#8A9096" />
          </button>
        </div>
      </div>

      {/* Empty State */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <EmptyStateIcon />
        <p
          style={{
            fontSize: 13,
            color: "#8A9096",
            fontFamily: "Inter, sans-serif",
            margin: 0,
          }}
        >
          暂无项目
        </p>
        <p
          style={{
            fontSize: 12,
            color: "#8A9096",
            fontFamily: "Inter, sans-serif",
            margin: 0,
            opacity: 0.7,
          }}
        >
          选择一个项目开始工作
        </p>
      </div>

      {/* User Info */}
      <div
        style={{
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#31353A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "white",
              fontFamily: "Inter, sans-serif",
            }}
          >
            J
          </span>
        </div>
        <span
          style={{
            flex: 1,
            fontSize: 13,
            fontWeight: 500,
            color: "#1A1A1A",
            fontFamily: "Inter, sans-serif",
          }}
        >
          JerryLee Lee
        </span>
        <span
          style={{
            fontSize: 11,
            color: "#8A9096",
            fontFamily: "Inter, sans-serif",
            background: "rgba(86,99,119,0.1)",
            padding: "2px 8px",
            borderRadius: 10,
          }}
        >
          Free
        </span>
      </div>
    </aside>
  );
}
