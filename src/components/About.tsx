import React from 'react';
import { Users, Award, Shield, Clock, CheckCircle, Wrench } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: Clock },
    { number: "100%", label: "Licensed & Insured", icon: Shield },
    { number: "5★", label: "Customer Rating", icon: Award }
  ];

  const certifications = [
    "Licensed Plumber & Gasfitter",
    "WorkSafe New Zealand Certified",
    "Master Plumbers Association Member",
    "Gas Safety Certified",
    "Backflow Prevention Certified",
    "Green Plumbing Specialist"
  ];

  const values = [
    {
      title: "Quality Workmanship",
      description: "We take pride in delivering exceptional results that stand the test of time.",
      icon: Award
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices you can trust.",
      icon: Shield
    },
    {
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen, understand, and deliver.",
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-primary-600">Humble Plumbing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted local plumbing and gas fitting experts, serving Auckland with integrity and excellence since 2023.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Story */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Humble Plumbing & Gasfitting Ltd is a certified plumbing, gas, and drainage company proudly based in Auckland, New Zealand. Established in 2023, we deliver reliable, high-quality services for new builds, renovations, maintenance, and both residential and commercial projects.
              </p>
              <p>
                As a 100% NZ-owned and operated business, we're recognised for our friendly service, expert craftsmanship, and honest approach. Every project is handled safely, efficiently, and to the highest professional standard.
              </p>
              <p>
                At Humble Plumbing & Gasfitting, our mission is simple — to provide trusted, professional plumbing and gasfitting solutions built on quality, integrity, and pride. We stand by our name in everything we do: humble service, quality work, and pride in every job.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Our Values</h4>
              <div className="space-y-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">{value.title}</h5>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative">
            <img 
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20plumbing%20team%20in%20work%20uniforms%20with%20tools%20and%20van%20friendly%20approachable%20Auckland%20setting&image_size=portrait_4_3"
              alt="Humble Plumbing Team"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-bold mb-2">Meet Our Team</h4>
              <p className="text-sm opacity-90">Experienced professionals dedicated to your satisfaction</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary-600 text-white rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <IconComponent className="h-8 w-8 text-accent-400" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications & Licenses */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Licenses</h3>
            <div className="grid grid-cols-1 gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                We proudly serve customers throughout the greater Auckland region, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div>• Auckland</div>
                <div>• Franklin</div>
                <div>• Hauraki Islands</div>
                <div>• Manukau</div>
                <div>• North Shore</div>
                <div>• Papakura</div>
                <div>• Rodney</div>
                <div>• Waitakere</div>
                <div>• Waiheke Island</div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Don't see your area listed? Give us a call - we may still be able to help!
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Experience the Humble Difference
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Ready to work with Auckland's most trusted plumbing professionals?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+64210420062" 
                className="btn-primary"
              >
                Call Us Today
              </a>
              <button 
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;