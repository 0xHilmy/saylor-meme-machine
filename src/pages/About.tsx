
import { Layout } from "../components/Layout";
import { Bitcoin, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About This Website</h2>
          <p className="text-lg text-gray-600">
            Michael Saylor meme generator website for the Bitcoin community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Bitcoin className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Bitcoin Enthusiast</h3>
            <p className="text-gray-600 text-sm">
              Created by and for the Bitcoin community who appreciate Michael Saylor's wisdom
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Open Source</h3>
            <p className="text-gray-600 text-sm">
              This website is built with modern technology and developed as open source
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Driven</h3>
            <p className="text-gray-600 text-sm">
              Developed with love for the crypto community and meme lovers
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">About Michael Saylor</h3>
          <p className="text-gray-600 mb-4">
            Michael Saylor is the CEO of MicroStrategy and one of the biggest Bitcoin advocates in the world. 
            He is known for his inspirational quotes about Bitcoin and technology that often go viral on social media.
          </p>
          <p className="text-gray-600">
            This website was created as a tribute to him and to provide a platform for 
            the community to create and share creative memes inspired by Michael Saylor's wisdom 
            about Bitcoin and the digital future.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl p-8 text-white text-center">
          <h3 className="text-xl font-semibold mb-4">Let's Collaborate!</h3>
          <p className="mb-4">
            Have ideas to improve this website? Or want to contribute with original memes?
          </p>
          <p className="text-sm opacity-90">
            Contact us on social media or send a pull request on GitHub!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
