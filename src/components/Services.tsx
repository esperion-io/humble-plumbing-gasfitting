import React, { useState } from 'react';
import { services, getServicesByCategory } from '../data/services';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredServices, setFilteredServices] = useState(services);

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'residential', name: 'Residential', count: services.filter(s => s.category === 'residential').length },
    { id: 'commercial', name: 'Commercial', count: services.filter(s => s.category === 'commercial').length },
    { id: 'gas', name: 'Gas Fitting', count: services.filter(s => s.category === 'gas').length }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setFilteredServices(getServicesByCategory(categoryId));
  };

  const scrollToQuoteForm = () => {
    const element = document.querySelector('#quote-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From repairs to complete installations, we provide comprehensive 
            plumbing and gas fitting services across Auckland with quality workmanship.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="card group hover:scale-105 transition-all duration-300"
              >
                {/* Service Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                      <ArrowRight className="h-4 w-4 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={scrollToQuoteForm}
                  className="w-full bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white"
                >
                  Get Quote for This Service
                </button>
              </div>
            );
          })}
        </div>




      </div>
    </section>
  );
};

export default Services;