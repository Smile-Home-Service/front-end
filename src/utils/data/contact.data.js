import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Family Support Line",
    details: "+1 (555) 123-FAMILY",
    description: "Mon-Fri from 7am to 9pm",
    action: "Call Now",
    color: "from-blue-500 to-cyan-500",
    emergency: true,
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Our Team",
    details: "family@homeserve.com",
    description: "We reply within 2 hours",
    action: "Send Email",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Instant Chat",
    details: "Available 24/7",
    description: "Get help while managing kids",
    action: "Start Chat",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Service Areas",
    details: "50+ Cities Covered",
    description: "Growing to serve more families",
    action: "Check Availability",
    color: "from-amber-500 to-orange-500",
  },
];

const faqItems = [
  {
    question: "How quickly can you help with family emergencies?",
    answer:
      "We prioritize family emergencies and aim to respond within 30 minutes. For urgent issues like plumbing leaks or electrical problems, we have emergency teams available 24/7 to keep your family safe and comfortable.",
  },
  {
    question: "Are your services safe for children and pets?",
    answer:
      "Absolutely! All our professionals use child-safe and pet-friendly products. We conduct thorough background checks and provide special training for working in family homes. Your family's safety is our top priority.",
  },
  {
    question: "Can I schedule around my children's activities?",
    answer:
      "Yes! We understand family schedules can be hectic. Our flexible scheduling allows you to book services around school runs, naptimes, and extracurricular activities. Evening and weekend appointments are available.",
  },
  {
    question: "What if I need to reschedule last minute?",
    answer:
      "No worries! We offer free rescheduling for family emergencies or unexpected events. Just give us a call or message us through the app - we know family life can be unpredictable!",
  },
  {
    question: "Do you offer senior or family discounts?",
    answer:
      "We offer special pricing for seniors, military families, and households with multiple children. We also have bundle packages for regular home maintenance that help families save throughout the year.",
  },
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Family Support Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    specialties: ["Child Safety", "Flexible Scheduling"],
  },
  {
    name: "Michael Chen",
    role: "Service Coordinator",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    specialties: ["Emergency Response", "Pet-Friendly Services"],
  },
  {
    name: "Emma Rodriguez",
    role: "Family Experience Specialist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    specialties: ["Senior Care", "Family Discounts"],
  },
];

export { contactMethods, faqItems, teamMembers };
