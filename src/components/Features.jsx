import { FaShieldAlt, FaCogs, FaUsers } from 'react-icons/fa';

export default function Features() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-blue-100 p-8 rounded-lg text-center shadow-lg">
          <div className="mb-4">
            <FaShieldAlt className="text-4xl text-blue-500 mx-auto" />
          </div>
          <h3 className="text-xl font-bold mb-2 flex items-center justify-center">
            <FaShieldAlt className="mr-2" /> Secure
          </h3>
          <p>Our services are secure and reliable.</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-green-100 p-8 rounded-lg text-center shadow-lg">
          <div className="mb-4">
            <FaCogs className="text-4xl text-green-500 mx-auto" />
          </div>
          <h3 className="text-xl font-bold mb-2 flex items-center justify-center">
            <FaCogs className="mr-2" /> Customizable
          </h3>
          <p>Tailor our solutions to your needs.</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-yellow-100 p-8 rounded-lg text-center shadow-lg">
          <div className="mb-4">
            <FaUsers className="text-4xl text-yellow-500 mx-auto" />
          </div>
          <h3 className="text-xl font-bold mb-2 flex items-center justify-center">
            <FaUsers className="mr-2" /> Support
          </h3>
          <p>We offer 24/7 customer support.</p>
        </div>
      </div>
    </section>
  );
}
