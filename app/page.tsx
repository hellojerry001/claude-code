"use client";

import { Sidebar } from "@/components/sidebar";
import {
  FeatureCard,
  WebReadIcon,
  ResearchIcon,
  DataMiningIcon,
  ContentCreationIcon,
} from "@/components/feature-card";
import { ChatInput } from "@/components/chat-input";

const features = [
  {
    icon: <WebReadIcon />,
    title: "网页读取",
    description: "研读在线论文，产出论文综述的文档",
  },
  {
    icon: <ResearchIcon />,
    title: "调研分析",
    description: "调研多个短视频平台，生成\u6c47\u62a5PPT",
  },
  {
    icon: <DataMiningIcon />,
    title: "数据挖掘",
    description: "挖掘市场增长数据，分析数据发展趋势",
  },
  {
    icon: <ContentCreationIcon />,
    title: "内容创作",
    description: "根据产品资料文件，撰写宣传推文稿",
  },
];

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        background: "#EDEFF2",
        overflow: "hidden",
        minWidth: 900,
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main white rounded container with 8px padding around */}
      <div
        style={{
          flex: 1,
          padding: "8px 8px 8px 0",
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <div
          style={{
            flex: 1,
            background: "white",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Top bar placeholder - 48px height per Figma */}
          <div style={{ height: 48, flexShrink: 0 }} />

          {/* Centered content */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 16,
            }}
          >
            {/* Hero */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <h1
                style={{
                  fontSize: 42,
                  fontWeight: 600,
                  lineHeight: "1.2",
                  marginBottom: 8,
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                <span style={{ color: "#715CFF" }}>M</span>
                <span style={{ color: "#1A1A1A" }}>ore </span>
                <span style={{ color: "#715CFF" }}>T</span>
                <span style={{ color: "#1A1A1A" }}>han </span>
                <span style={{ color: "#715CFF" }}>C</span>
                <span style={{ color: "#1A1A1A" }}>oding</span>
                <span
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginLeft: 10,
                    padding: "1px 4px",
                    fontSize: 10,
                    fontWeight: 500,
                    fontFamily: "JetBrains Mono, monospace",
                    color: "#8A9096",
                    background: "#EDEFF2",
                    borderRadius: 2,
                    outline: "1px solid rgba(77,107,153,0.18)",
                    outlineOffset: -1,
                    lineHeight: "15px",
                  }}
                >
                  BETA
                </span>
              </h1>
              <p
                style={{
                  fontSize: 15,
                  color: "#1A1A1A",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              >
                多场景办公任务，交给 SOLO 搞定
              </p>
            </div>

            {/* Feature Cards — 860px wide, 4 cards × 203px + gaps */}
            <div
              style={{
                width: 860,
                display: "flex",
                gap: 16,
                marginBottom: 28,
              }}
            >
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            {/* Chat Input */}
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
}
