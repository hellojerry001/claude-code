export function WebReadIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7">
          <circle cx="10" cy="10" r="2" fill="#3B82F6" />
          <circle cx="22" cy="10" r="2" fill="#3B82F6" />
          <circle cx="16" cy="20" r="2" fill="#3B82F6" />
          <path d="M10 10L16 20M22 10L16 20" stroke="#3B82F6" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export function ResearchIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="6"
          width="14"
          height="14"
          rx="2"
          stroke="#EF4444"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <path d="M20 20L26 26" stroke="#EF4444" strokeWidth="1.5" opacity="0.7" />
      </svg>
    </div>
  );
}

export function DataMiningIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7">
          <rect x="7" y="18" width="3" height="8" fill="#F59E0B" />
          <rect x="13" y="12" width="3" height="14" fill="#F59E0B" />
          <rect x="19" y="6" width="3" height="20" fill="#F59E0B" />
        </g>
      </svg>
    </div>
  );
}

export function ContentCreationIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7">
          <path
            d="M8 10H24M8 16H20M8 22H12"
            stroke="#06B6D4"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M28 8H10V26H28V8Z"
            stroke="#06B6D4"
            strokeWidth="1.5"
          />
        </g>
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
    <div className="flex-1 rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
