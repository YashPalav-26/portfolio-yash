import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export const SOCIAL_LINKS = [
  { 
    icon: Github, 
    href: "https://github.com/YashPalav-26", 
    label: "GitHub" 
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/yashpalav/", 
    label: "LinkedIn" 
  },
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/_highkeyyash_/", 
    label: "Instagram" 
  },
  { 
    icon: Twitter, 
    href: "https://x.com/yashpalav26", 
    label: "Twitter" 
  },
] as const;

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const SECTIONS = ["hero", "about", "skills", "experience", "projects", "contact"] as const;

export const EMAIL = "yashpalav48@gmail.com";

export const MOBILE_BREAKPOINT = 768;
