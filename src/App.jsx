import { useState } from "react";
import Header from "./components/Header";
import TabNav from "./components/TabNav";
import EmojiSearch from "./components/EmojiSearch";
import EmojiKitchen from "./components/EmojiKitchen";
import EmojiText from "./components/EmojiText";
import EmojiMaker from "./components/EmojiMaker";
import EmojiStats from "./components/EmojiStats";
import EmojiRain from "./components/EmojiRain";

const TOOLS = {
  search: EmojiSearch,
  kitchen: EmojiKitchen,
  text: EmojiText,
  maker: EmojiMaker,
  stats: EmojiStats,
  rain: EmojiRain,
};

const OTHER_PRODUCTS = [
  { name: "JSON", url: "https://json.doaide.com", desc: "JSON Formatter" },
  { name: "Color", url: "https://color.doaide.com", desc: "Color Tools" },
  { name: "Text", url: "https://text.doaide.com", desc: "Text Utilities" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("search");
  const ActiveTool = TOOLS[activeTab];

  return (
    <div className="min-h-screen bg-da-bg dark:bg-da-bg">
      <Header />
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <ActiveTool />
      </main>
      <footer className="border-t border-gray-200 bg-white mt-16 dark:bg-da-surface dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-da-primary/10 text-da-primary text-xs font-medium">
              A DoAide Product
            </span>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {OTHER_PRODUCTS.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  className="text-gray-400 hover:text-da-primary transition-colors no-underline dark:text-gray-500"
                >
                  {p.desc}
                </a>
              ))}
              <a
                href="https://doaide.com"
                className="text-gray-400 hover:text-da-primary transition-colors no-underline dark:text-gray-500"
              >
                More tools
              </a>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Free, no login required
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
