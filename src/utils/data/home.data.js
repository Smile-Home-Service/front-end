import {
  Home,
  Wrench,
  Sparkle,
  Truck,
  Sparkles,
  HeartHandshake,
  Gem,
  Calendar,
  CheckCircle,
  CreditCard,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Home Cleaning",
    description: "Professional cleaning services for your home",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "cleaning",
    rating: 4.9,
    reviews: 1245,
    price: "$79",
  },
  {
    id: 2,
    title: "Plumbing",
    description: "Fix leaks, clogs, and installation services",
    image:
      "https://images.unsplash.com/photo-1632765859134-4c2827f6d5da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "repair",
    rating: 4.8,
    reviews: 876,
    price: "$99",
  },
  {
    id: 3,
    title: "Electrical",
    description: "Wiring, fixtures, and electrical repairs",
    image:
      "https://images.unsplash.com/photo-1580015913491-8f6de2d12191?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "repair",
    rating: 4.7,
    reviews: 654,
    price: "$89",
  },
  {
    id: 4,
    title: "Beauty & Spa",
    description: "At-home salon and spa services",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "beauty",
    rating: 4.9,
    reviews: 2310,
    price: "$65",
  },
  {
    id: 5,
    title: "Moving & Packing",
    description: "Professional movers for your relocation needs",
    image:
      "https://images.unsplash.com/photo-1541979667479-339a9c826894?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "moving",
    rating: 4.7,
    reviews: 543,
    price: "$120",
  },
  {
    id: 6,
    title: "AC Repair",
    description: "AC installation, maintenance and repair",
    image:
      "https://images.unsplash.com/photo-1611834909196-5f043931a464?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "repair",
    rating: 4.8,
    reviews: 765,
    price: "$85",
  },
];

export const categories = [
  { id: "all", name: "All Services", icon: <Home size={20} /> },
  { id: "cleaning", name: "Cleaning", icon: <Sparkle size={20} /> },
  { id: "repair", name: "Repairs", icon: <Wrench size={20} /> },
  { id: "beauty", name: "Beauty", icon: <Gem size={20} /> },
  { id: "moving", name: "Moving", icon: <Truck size={20} /> },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "HomeServe saved me so much time and stress! The cleaner was professional and my house has never looked better. Will definitely use again.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Apartment Renter",
    content:
      "The electrician arrived on time, fixed my wiring issue quickly, and was very knowledgeable. The pricing was transparent with no hidden fees.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Business Owner",
    content:
      "I use HomeServe for both my home and office cleaning needs. Consistent quality every time. Highly recommend their services!",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

export const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
];

export const footerLinks = {
  services: [
    "Cleaning",
    "Repairs",
    "Beauty",
    "Moving",
    "Plumbing",
    "Electrical",
  ],
  company: ["About Us", "How It Works", "Careers", "Press", "Blog", "Contact"],
  support: [
    "Help Center",
    "FAQ",
    "Privacy Policy",
    "Terms of Service",
    "Cancellation Policy",
  ],
};

export const steps = [
  {
    id: 1,
    title: "Book",
    description: "Select a service, time, and date that works for you",
    icon: <Calendar size={24} />,
  },
  {
    id: 2,
    title: "Confirm",
    description: "Get matched with a vetted professional and confirm details",
    icon: <CheckCircle size={24} />,
  },
  {
    id: 3,
    title: "Pay",
    description: "Pay securely through our platform after service completion",
    icon: <CreditCard size={24} />,
  },
  {
    id: 4,
    title: "Enjoy",
    description: "Relax and enjoy your professionally serviced space",
    icon: <Sparkles size={24} />,
  },
];
