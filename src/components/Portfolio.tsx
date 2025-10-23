import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

// Import images
import before1 from '/assets/Previous-projects/Before 1.jpg';
import after1 from '/assets/Previous-projects/After 1.jpg';
import before2 from '/assets/Previous-projects/Before 2.jpg';
import after2 from '/assets/Previous-projects/After 2.jpg';
import before3 from '/assets/Previous-projects/Before 3.jpg';
import after3 from '/assets/Previous-projects/After 3.jpg';
import before4 from '/assets/Previous-projects/Before 4.jpg';
import after4 from '/assets/Previous-projects/After 4.jpg';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      beforeImage: before1,
      afterImage: after1,
      beforeAlt: "Bathroom renovation - Before showing original plumbing condition",
      afterAlt: "Bathroom renovation - After showing completed professional plumbing work"
    },
    {
      id: 2,
      beforeImage: before2,
      afterImage: after2,
      beforeAlt: "Kitchen gas line installation - Before showing original setup",
      afterAlt: "Kitchen gas line installation - After showing professional installation"
    },
    {
      id: 3,
      beforeImage: before3,
      afterImage: after3,
      beforeAlt: "Commercial plumbing system - Before showing original condition",
      afterAlt: "Commercial plumbing system - After showing upgraded system"
    },
    {
      id: 4,
      beforeImage: before4,
      afterImage: after4,
      beforeAlt: "Residential pipe replacement - Before showing old pipes",
      afterAlt: "Residential pipe replacement - After showing new installation"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Recent <span className="text-primary-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the quality workmanship and professional results we deliver for our customers across Auckland. 
            Drag the slider to compare before and after transformations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                beforeAlt={project.beforeAlt}
                afterAlt={project.afterAlt}
                className="transition-transform duration-300 group-hover:scale-[1.02] rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-primary-600 text-white rounded-2xl p-8 hover:bg-primary-700 transition-colors duration-300">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join our satisfied customers and experience quality workmanship firsthand.
            </p>
            <button 
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              aria-label="Get your free quote - scroll to quote form"
            >
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;