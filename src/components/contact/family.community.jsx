import { motion } from "framer-motion";
import { Home, Facebook, Instagram, Twitter } from "lucide-react";
import socialMediaLink from "@/utils/data/social.media.data.json";

const IconMap = {
  Facebook: Facebook,
  Instagram: Instagram,
  Twitter: Twitter,
};

export const FamilyCommunity = () => {
  return (
    <motion.div
      className="bg-linear-to-br from-indigo-600 to-rose-600 rounded-2xl p-6 text-white"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-xl font-bold mb-4">Join Our Family</h2>
      <p className="text-indigo-100 mb-4">
        Connect with other families and get exclusive tips for home care
      </p>

      <div className="flex space-x-4 mb-4">
        {socialMediaLink.map((link) => {
          const Icon = IconMap[link.icon];
          return (
            <a
              key={link.title}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-2 rounded-xl hover:bg-white/30 transition-colors"
              title={link.title}
            >
              {Icon && <Icon className="h-5 w-5" />}
            </a>
          );
        })}
      </div>

      {/* <div className="bg-white/10 rounded-xl p-3 text-sm">
        <div className="flex items-center">
          <Home className="w-4 h-4 mr-2" />
          <span>1000+ families served this year</span>
        </div>
      </div> */}
    </motion.div>
  );
};
