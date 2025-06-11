
import { Layout } from "../components/Layout";

const Original = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Original Meme from Dev</h2>
        <div className="bg-white rounded-xl p-8 shadow-md">
          <div className="aspect-square max-w-md mx-auto mb-6 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Coming Soon!</h3>
              <p className="text-gray-600">Original memes from the developer will be available soon</p>
            </div>
          </div>
          <p className="text-gray-600">
            This page will showcase original memes created specifically by the developer.
            Stay tuned for exclusive content!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Original;
