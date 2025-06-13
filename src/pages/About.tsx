import { Layout } from "../components/Layout";
import { Sparkles, Scroll, Book, Users } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-4 py-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-purple-300 mb-4 flex items-center justify-center gap-2">
            
            The Saylor's Prophecy Machine
           
          </h2>
          <p className="text-lg text-purple-300/80">
            Where Bitcoin maximalism meets meme magic
          </p>
        </div>

      

        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-purple-500/20">
          <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
            <Book className="w-5 h-5" />
            The Creator's Note
          </h3>
          <p className="text-purple-300/70 mb-4">
            Created by <a href="https://x.com/CryptQmy" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">@CryptQmy</a>, 
            this sacred meme generator was forged in the depths of crypto winter, powered by pure hopium and an unhealthy obsession with 
            Michael Saylor's prophecies. 
          </p>
          <p className="text-purple-300/70">
            Special thanks to <a href="https://x.com/GoMining_token" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">@GoMining_token</a> for 
            inspiring this mystical creation. Remember, in a world of shitcoins and rugpulls, 
            there's only one true digital gold - and Saylor's been stacking it since before it was cool! 🌟
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-xl p-8 text-center backdrop-blur-sm border border-purple-500/20">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">Words of Wisdom</h3>
          <p className="mb-4 text-purple-300/80">
            "When in doubt, zoom out. When in fear, Saylor is here!" 
          </p>
          <p className="text-sm text-purple-300/60 italic">
            "Not financial advice, just digital prophecies" 🔮
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
