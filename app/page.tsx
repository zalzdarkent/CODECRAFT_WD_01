import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Interactive Navigation
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Watch the navigation change as you scroll and hover
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Our Navigation
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            This navigation menu demonstrates interactive features including color changes on scroll,
            hover effects, smooth transitions, and responsive design. The background becomes opaque
            with a blur effect when scrolling, while maintaining visibility across all sections.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-400">Responsive Design</h3>
              <p className="text-gray-600">Adapts perfectly to all screen sizes with mobile-friendly menu</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-400">Smooth Animations</h3>
              <p className="text-gray-600">Beautiful transitions and hover effects enhance user experience</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-400">Fixed Position</h3>
              <p className="text-gray-600">Always accessible navigation that stays visible while scrolling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Services
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Professional web development services with modern navigation solutions
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {item}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-400">Service {item}</h3>
                <p className="text-gray-600">Professional development service with attention to detail and user experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Portfolio
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Showcase of interactive navigation implementations
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-400 to-purple-600 h-64 rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"></div>
                <h3 className="text-xl font-semibold mb-2 text-gray-400">Project {item}</h3>
                <p className="text-gray-600">Interactive navigation implementation with modern design</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Contact Us
          </h2>
          <p className="text-lg mb-12 opacity-90">
            Ready to implement your interactive navigation? Get in touch!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                📧
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="opacity-80">2210631170004@student.unsika.ac.id</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                📱
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="opacity-80">+62 813 6141 5931</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                📍
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="opacity-80">Karawang, West Java</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
}
