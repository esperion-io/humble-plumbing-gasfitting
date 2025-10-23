import React from 'react';
import { Shield, Clock, DollarSign, Users, Award, CheckCircle, Phone, Star } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed plumbers and gasfitters with comprehensive insurance coverage for your peace of mind.",
      highlight: "100% Protected"
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "We arrive on time, every time. Our punctual service ensures your schedule isn't disrupted.",
      highlight: "On-Time Service"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. Get upfront, honest pricing before any work begins.",
      highlight: "Fixed Price Promise"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with years of training and expertise in all plumbing and gas services.",
      highlight: "10 Years Experience"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "We stand behind our work with comprehensive warranties and a commitment to excellence.",
      highlight: "Workmanship Warranty"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Hundreds of satisfied customers across Auckland trust us for their plumbing needs.",
      highlight: "5-Star Reviews"
    }
  ];

  const commitments = [
    "100% satisfaction commitment on all work",
    "Fixed pricing with no hidden costs",
    "Clean, tidy worksite - we clean up after ourselves",
    "Prompt response to all service calls",
    "Professional, uniformed technicians",
    "Comprehensive insurance coverage"
  ];

  const serviceFeatures = [
    "Prompt response to service calls",
    "Same-day service available",
    "Fully stocked service vehicles",
    "Professional consultation"
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-primary-600">Humble Plumbing</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When you choose us, you're choosing quality, reliability, and peace of mind. Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="card group hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>
                
                <div className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {benefit.highlight}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>



        {/* Customer Testimonials Preview */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: "Cindy",
                location: "Sandringham, Auckland",
                rating: 4.8,
                text: "Will get Gurvinder back again when I am ready to change water heating system. Our gas bill has been unusually high for past two months and we need to have pipes checked for a leak. We have gas for water heating and a gas fire."
              },
              {
                name: "Akerei.",
                location: "Pokeno, Franklin",
                rating: 5,
                text: "Absolutely awesome service, quick, reasonably priced and with high quality workmanship and service. Highly recommend"
              },
              {
                name: "Fawcett",
                location: "Mangere Bridge, Manukau",
                rating: 4.5,
                text: "Was easy to work worth. Fair pricing. Punctual and hard working. He was able to do another job for me on the day as well. Highly recommend."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-3">
                  {Array.from({ length: 5 }, (_, i) => {
                    const starValue = i + 1;
                    if (testimonial.rating >= starValue) {
                      // Full star
                      return <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />;
                    } else if (testimonial.rating >= starValue - 0.5) {
                      // Half star - create a half-filled star using CSS
                      return (
                        <div key={i} className="relative h-4 w-4">
                          <Star className="h-4 w-4 text-gray-300 absolute" />
                          <div className="overflow-hidden w-1/2 absolute">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </div>
                        </div>
                      );
                    } else {
                      // Empty star
                      return <Star key={i} className="h-4 w-4 text-gray-300" />;
                    }
                  })}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Show More Reviews Button */}
          <div className="text-center">
            <a 
              href="https://builderscrack.co.nz/tradies/4vjztt0c/humble-plumbing-and-gasfitting-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Show More Reviews
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center">
          <div className="bg-primary-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join hundreds of satisfied customers who trust Humble Plumbing for all their plumbing and gas fitting needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Your Free Quote
              </button>
              <a 
                href="tel:+64211234567" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now: 021 123 4567</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;