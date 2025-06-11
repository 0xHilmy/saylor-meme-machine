
import { Layout } from "../components/Layout";
import { Bitcoin, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About This Website</h2>
          <p className="text-lg text-gray-600">
            Website generator meme Michael Saylor untuk komunitas Bitcoin Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Bitcoin className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Bitcoin Enthusiast</h3>
            <p className="text-gray-600 text-sm">
              Dibuat oleh dan untuk komunitas Bitcoin yang mengapresiasi wisdom dari Michael Saylor
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Open Source</h3>
            <p className="text-gray-600 text-sm">
              Website ini dibuat dengan teknologi modern dan dikembangkan secara open source
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Driven</h3>
            <p className="text-gray-600 text-sm">
              Dikembangkan dengan cinta untuk komunitas crypto dan meme lovers
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Tentang Michael Saylor</h3>
          <p className="text-gray-600 mb-4">
            Michael Saylor adalah CEO MicroStrategy dan salah satu advocate Bitcoin terbesar di dunia. 
            Beliau dikenal dengan quote-quote inspiratif tentang Bitcoin dan teknologi yang sering 
            menjadi viral di media sosial.
          </p>
          <p className="text-gray-600">
            Website ini dibuat sebagai tribute kepada beliau dan untuk memberikan platform bagi 
            komunitas untuk membuat dan berbagi meme-meme kreatif yang terinspirasi dari wisdom 
            Michael Saylor tentang Bitcoin dan masa depan digital.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl p-8 text-white text-center">
          <h3 className="text-xl font-semibold mb-4">Mari Berkolaborasi!</h3>
          <p className="mb-4">
            Punya ide untuk mengembangkan website ini? Atau ingin berkontribusi dengan meme original?
          </p>
          <p className="text-sm opacity-90">
            Hubungi kami di social media atau kirim pull request di GitHub!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
