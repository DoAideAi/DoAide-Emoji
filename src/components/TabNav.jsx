import { routes } from "../routeMeta";

const TABS = [
  { id: "search", label: "Search", icon: "🔍" },
  { id: "kitchen", label: "Kitchen", icon: "🧑‍🍳" },
  { id: "text", label: "Text", icon: "🔤" },
  { id: "maker", label: "Maker", icon: "🎨" },
  { id: "stats", label: "Stats", icon: "📊" },
  { id: "rain", label: "Rain", icon: "🌧️" },
];

export default function TabNav({ activeTab, setActiveTab }) {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-da-surface dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide -mb-px">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={routes.find((r) => r.tool === tab.id).path}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab.id);
              }}
              className={`flex items-center gap-1.5 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors cursor-pointer no-underline ${
                activeTab === tab.id
                  ? "border-da-primary text-da-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
