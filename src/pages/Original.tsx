import { Layout } from "../components/Layout";
import { Scroll, Sparkles } from "lucide-react";

const Original = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-bold text-purple-300 flex items-center justify-center gap-2">
          <span>📜</span>
          Ancient Scrolls of Wisdom
          <span>📜</span>
        </h2>
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-purple-500/20">
          <div className="aspect-square max-w-md mx-auto mb-6 bg-gradient-to-br from-purple-900/50 to-fuchsia-900/50 rounded-xl flex items-center justify-center p-8">
            <div className="text-center space-y-4">
              <Scroll className="w-16 h-16 mx-auto text-purple-400 animate-pulse" />
              <h3 className="text-xl font-bold text-purple-300 mb-2">The Ancient Texts Are Being Transcribed...</h3>
              <p className="text-purple-300/70">
                The mystical scrolls from the Oracle's personal collection will soon be revealed
              </p>
              <div className="flex justify-center gap-2 text-purple-400/60">
                <Sparkles className="w-4 h-4" />
                <Sparkles className="w-4 h-4" />
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </div>
          <p className="text-purple-300/70">
            Soon, this sacred chamber will house the original prophecies,
            carefully preserved by the keepers of digital wisdom.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Original;
