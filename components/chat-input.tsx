"use client";

import { ChevronDown, ImagePlus, Send } from "lucide-react";
import { useState } from "react";

export function ChatInput() {
  const [input, setInput] = useState("");

  return (
    <div className="w-full max-w-[920px]">
      <div className="rounded-lg border border-gray-200 bg-white shadow-lg">
        {/* Main Input Area */}
        <div className="p-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="帮你管理论文翻译、编写 PPT、分析 Excel 等日常工作，输出专业级工作成果。"
            className="w-full text-sm text-gray-700 placeholder-gray-400 resize-none outline-none font-normal leading-relaxed"
            rows={3}
          />
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100" />

        {/* Bottom Controls */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            {/* Create Project Button */}
            <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors group">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-gray-600"
              >
                <path
                  d="M2 8H14M8 2V14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xs font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
                创建项目
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>

            {/* Canvas Button */}
            <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-gray-600"
              >
                <rect
                  x="2"
                  y="2"
                  width="12"
                  height="12"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>

            {/* Attachment Button */}
            <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
              <ImagePlus className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Model Selector */}
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-xs font-medium text-gray-700">
                SOLO Auto Model
              </span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="text-gray-400"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Send Button */}
            <button className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
