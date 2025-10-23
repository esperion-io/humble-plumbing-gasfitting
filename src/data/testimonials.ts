export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Auckland Central",
    rating: 5,
    comment: "Exceptional service! The team arrived promptly and fixed our burst pipe with minimal disruption. Professional, clean, and reasonably priced. Highly recommend Humble Plumbing!",
    service: "Pipe Repair",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "David Chen",
    location: "North Shore",
    rating: 5,
    comment: "Outstanding gas fitting service. They installed our new gas cooktop and hot water system efficiently. The technician was knowledgeable and explained everything clearly. Will definitely use again.",
    service: "Gas Appliance Installation",
    date: "2024-01-08"
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "Ponsonby",
    rating: 5,
    comment: "Fantastic experience from start to finish. Quick response time, fair pricing, and excellent workmanship. Our bathroom renovation plumbing was completed ahead of schedule. Thank you!",
    service: "Bathroom Plumbing",
    date: "2023-12-22"
  },
  {
    id: 4,
    name: "Michael Roberts",
    location: "Manukau",
    rating: 5,
    comment: "Professional and reliable service. They solved our persistent drain blockage issue that other plumbers couldn't fix. Great communication and follow-up service. Highly satisfied!",
    service: "Drain Cleaning",
    date: "2023-12-18"
  },
  {
    id: 5,
    name: "Lisa Wang",
    location: "Mt Eden",
    rating: 5,
    comment: "Excellent commercial plumbing service for our office building. The team worked efficiently during off-hours to minimize business disruption. Professional, clean, and thorough work.",
    service: "Commercial Plumbing",
    date: "2023-12-10"
  }
];