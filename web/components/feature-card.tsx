"use client";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer flex-1 min-w-[190px]">
      <div className="mb-4">{icon}</div>
      <h3 className="font-medium text-gray-800 mb-2 text-[15px]">{title}</h3>
      <p className="text-[13px] text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

// Custom Icons matching the design exactly
export function WebReadIcon() {
  return (
    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left lens */}
        <circle cx="9" cy="12" r="4" stroke="#3B82F6" strokeWidth="1.5" fill="none"/>
        {/* Right lens */}
        <circle cx="19" cy="12" r="4" stroke="#3B82F6" strokeWidth="1.5" fill="none"/>
        {/* Bridge */}
        <path d="M13 12H15" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Left arm */}
        <path d="M5 12H4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Right arm */}
        <path d="M24 12H23" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Smile */}
        <path d="M9 19C9 19 11 21 14 21C17 21 19 19 19 19" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

export function ResearchIcon() {
  return (
    <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
      <div className="w-7 h-7 rounded-md bg-orange-500 flex items-center justify-center shadow-sm">
        <span className="text-white text-sm font-bold">P</span>
      </div>
    </div>
  );
}

export function DataMiningIcon() {
  return (
    <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="14" width="4" height="9" rx="1" fill="#0D9488"/>
        <rect x="9" y="10" width="4" height="13" rx="1" fill="#14B8A6"/>
        <rect x="15" y="6" width="4" height="17" rx="1" fill="#2DD4BF"/>
        <rect x="21" y="3" width="3" height="20" rx="1" fill="#5EEAD4"/>
      </svg>
    </div>
  );
}

export function ContentCreationIcon() {
  return (
    <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pen body */}
        <path d="M6 20L8 10L13 16L6 20Z" fill="#10B981"/>
        {/* Chart lines */}
        <path d="M10 18L14 12L17 15L22 8" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Decorative dots */}
        <circle cx="22" cy="8" r="2" fill="#F59E0B"/>
        <circle cx="17" cy="15" r="1.5" fill="#3B82F6"/>
      </svg>
    </div>
  );
}
