import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Family Support Line",
    details: "+977-981-234-5678",
    description: "Mon-Fri from 10am to 5pm",
    action: "Call Now",
    color: "from-blue-500 to-cyan-500",
    emergency: true,
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Our Team",
    details: "customer@smilehomenepal.com",
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

export { contactMethods };
