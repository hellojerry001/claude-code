"use client";

import { MessageCircle, RefreshCw, PanelRight } from "lucide-react";

// Custom icons
function MTCIcon() {
  return (
    <div className="w-5 h-5 bg-violet-500 rounded flex items-center justify-center">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <rect x="2" y="2" width="3" height="3" rx="0.5" fill="white"/>
        <rect x="7" y="2" width="3" height="3" rx="0.5" fill="white"/>
        <rect x="2" y="7" width="3" height="3" rx="0.5" fill="white"/>
        <rect x="7" y="7" width="3" height="3" rx="0.5" fill="white"/>
      </svg>
    </div>
  );
}

function NewTaskIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke="#A78BFA" strokeWidth="2"/>
      <circle cx="9" cy="9" r="2" fill="#A78BFA"/>
    </svg>
  );
}

function SkillsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="6" height="6" rx="1" stroke="#6B7280" strokeWidth="1.5"/>
      <rect x="10" y="2" width="6" height="6" rx="1" stroke="#6B7280" strokeWidth="1.5"/>
      <rect x="2" y="10" width="6" height="6" rx="1" stroke="#6B7280" strokeWidth="1.5"/>
      <rect x="10" y="10" width="6" height="6" rx="1" stroke="#6B7280" strokeWidth="1.5"/>
    </svg>
  );
}

export function Sidebar() {
  return (
    <aside className="w-[280px] h-screen bg-white border-r border-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm">
          <MTCIcon />
          <span className="font-semibold text-sm text-gray-800">MTC</span>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <PanelRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* New Task Button */}
      <div className="px-3 py-2">
        <button className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-violet-50 rounded-lg transition-colors group">
          <div className="flex items-center gap-2.5 text-gray-700">
            <NewTaskIcon />
            <span className="font-medium text-sm">新建任务</span>
          </div>
          <span className="text-xs text-gray-400">^ ⌘ N</span>
        </button>
      </div>

      {/* Skills Section */}
      <div className="px-3 py-1">
        <button className="w-full flex items-center gap-2.5 px-3 py-2.5 hover:bg-gray-50 rounded-lg transition-colors text-gray-600">
          <SkillsIcon />
          <span className="font-medium text-sm">技能</span>
        </button>
      </div>

      {/* Project List */}
      <div className="px-3 py-2 mt-2">
        <div className="flex items-center justify-between px-3 py-1">
          <span className="text-sm text-gray-400">项目列表</span>
          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
            <RefreshCw className="w-3.5 h-3.5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-3">
          <MessageCircle className="w-5 h-5 text-gray-400" />
        </div>
        <p className="text-sm text-gray-500 mb-1">暂无项目</p>
        <p className="text-xs text-gray-400">选择一个项目开始工作</p>
      </div>

      {/* User Profile */}
      <div className="border-t border-[hsl(var(--sidebar-border))] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-white text-sm font-medium">
            J
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">JerryLee Lee</span>
            <span className="px-1.5 py-0.5 text-xs text-gray-500 bg-gray-100 rounded">Free</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
