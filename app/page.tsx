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
    description: "调研多个短视频平台，生成汇报PPT",
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
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-[#f7f8fc] flex flex-col overflow-hidden">
        {/* Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 pb-8">
          {/* Hero Section */}
          <div className="text-center mb-14">
            <h1 className="text-[42px] font-semibold mb-3 tracking-tight">
              <span className="text-violet-500">M</span>
              <span className="text-gray-800">ore </span>
              <span className="text-violet-500">T</span>
              <span className="text-gray-800">han </span>
              <span className="text-violet-500">C</span>
              <span className="text-gray-800">oding</span>
              <span className="ml-3 px-2 py-0.5 text-[11px] font-medium text-gray-500 bg-gray-100 border border-gray-200 rounded align-middle">
                BETA
              </span>
            </h1>
            <p className="text-gray-500 text-[15px]">
              多场景办公任务，交给 SOLO 搞定
            </p>
          </div>

          {/* Feature Cards */}
          <div className="flex gap-5 mb-10 max-w-[920px]">
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
      </main>
    </div>
  );
}
