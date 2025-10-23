import { 
  Home, 
  Building, 
  Flame, 
  Droplets, 
  Wrench, 
  Search, 
  Thermometer,
  Shield,
  Filter
} from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
  category: 'residential' | 'commercial' | 'gas';
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Residential Plumbing",
    description: "Complete plumbing solutions for homes including repairs, installations, and maintenance services.",
    icon: Home,
    category: "residential",
    features: [
      "Bathroom and kitchen plumbing",
      "Fixture installation and repair",
      "Pipe repairs and replacements",
      "Water pressure optimization"
    ]
  },
  {
    id: 2,
    title: "Commercial Plumbing",
    description: "Professional plumbing services for businesses, offices, and commercial properties.",
    icon: Building,
    category: "commercial",
    features: [
      "Commercial pipe systems",
      "Industrial plumbing solutions",
      "Maintenance contracts",
      "Priority commercial repairs"
    ]
  },
  {
    id: 3,
    title: "Gas Fitting Services",
    description: "Licensed gas fitting for LPG and natural gas installations, repairs, and safety inspections.",
    icon: Flame,
    category: "gas",
    features: [
      "Gas appliance installation",
      "Gas line repairs and installation",
      "Safety inspections and compliance",
      "LPG and natural gas systems"
    ]
  },
  {
    id: 4,
    title: "Hot Water Systems",
    description: "Installation, repair, and maintenance of hot water cylinders and heating systems.",
    icon: Thermometer,
    category: "residential",
    features: [
      "Hot water cylinder installation",
      "System repairs and maintenance",
      "Energy-efficient upgrades",
      "Hot water system repairs"
    ]
  },
  {
    id: 5,
    title: "Drain Cleaning & Maintenance",
    description: "Professional drain cleaning services to keep your plumbing systems flowing smoothly.",
    icon: Droplets,
    category: "residential",
    features: [
      "Blocked drain clearing",
      "High-pressure water jetting",
      "Drain camera inspections",
      "Preventive maintenance programs"
    ]
  },
  {
    id: 6,
    title: "Leak Detection & Repair",
    description: "Advanced leak detection technology to find and fix leaks quickly and efficiently.",
    icon: Search,
    category: "residential",
    features: [
      "Electronic leak detection",
      "Hidden pipe leak location",
      "Water damage prevention",
      "Insurance claim assistance"
    ]
  },
  {
    id: 7,
    title: "Pipe Repairs & Replacements",
    description: "Expert pipe repair and replacement services using modern materials and techniques.",
    icon: Wrench,
    category: "residential",
    features: [
      "Burst pipe repairs",
      "Pipe relining services",
      "Modern pipe materials",
      "Minimal disruption methods"
    ]
  },
  {
    id: 8,
    title: "Gas Appliance Installation",
    description: "Professional installation of gas cooktops, ovens, hot water systems, and heaters.",
    icon: Wrench,
    category: "gas",
    features: [
      "Cooktop and oven installation",
      "Gas heater installation",
      "Hot water system setup",
      "Safety testing and certification"
    ]
  },
  {
    id: 9,
    title: "Water Filtration Systems",
    description: "Installation and maintenance of water filtration systems for clean, safe drinking water.",
    icon: Filter,
    category: "residential",
    features: [
      "Whole house filtration",
      "Under-sink systems",
      "Filter replacement services",
      "Water quality testing"
    ]
  },
  {
    id: 10,
    title: "Backflow Prevention",
    description: "Installation and testing of backflow prevention systems to protect your water supply.",
    icon: Shield,
    category: "commercial",
    features: [
      "Backflow device installation",
      "Annual testing and certification",
      "Compliance with regulations",
      "System maintenance and repairs"
    ]
  }
];

export const getServicesByCategory = (category: string) => {
  if (category === 'all') return services;
  return services.filter(service => service.category === category);
};