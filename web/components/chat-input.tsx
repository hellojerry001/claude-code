"use client";

import { ChevronDown, Paperclip, ArrowUp } from "lucide-react";

// Custom icons
function FolderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 4C2 3.44772 2.44772 3 3 3H6L7.5 5H13C13.5523 5 14 5.44772 14 6V12C14 12.5523 13.5523 13 13 13H3C2.44772 13 2 12.5523 2 12V4Z" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function CanvasIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="12" height="12" rx="2" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
      <path d="M5 11L7 6L9 9L11 5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ChatInput() {
  return (
    <div className="w-full max-w-[880px] mx-auto">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Text Area */}
        <div className="px-5 pt-5 pb-4">
          <textarea
            placeholder="帮你整理论文综述、编写 PPT、分析 Excel 等日常工作，输出专业级工作成果。"
            className="w-full resize-none border-none outline-none text-[14px] text-gray-700 placeholder:text-gray-400 min-h-[70px] bg-transparent"
            rows={3}
          />
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-1">
            {/* Create Project Button */}
            <button className="flex items-center gap-1.5 px-3 py-2 text-[14px] text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <FolderIcon />
              <span>创建项目</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>

            <div className="w-px h-5 bg-gray-200 mx-2" />

            {/* Canvas Button */}
            <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
              <CanvasIcon />
            </button>

            {/* Attachment Button */}
            <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
              <Paperclip className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[13px] text-gray-500">SOLO Auto Model</span>
            <button className="w-9 h-9 bg-violet-100 hover:bg-violet-200 rounded-xl flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4 text-violet-600" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
