// ============================================================
// CENTRAL SITE CONFIGURATION
// Every piece of contact/social/identity info lives HERE.
// Edit this file to update details across the entire site.
// ============================================================

export const siteConfig = {
  name: "Zirikana Elie",
  firstName: "Zirikana",
  lastName: "Elie",
  title: "Multimedia Creative",
  tagline: "Creating visuals. Telling stories. Bringing ideas to life.",
  location: "Muhanga, Rwanda",

  // Contact
  phone: "+250793005928",
  phoneDisplay: "+250 793 005 928",
  whatsapp: "https://wa.me/250793005928",
  email: "zirikanaerie358@gmail.com",

  // Social
  instagram: {
    handle: "young_fame_",
    url: "https://instagram.com/young_fame_",
  },
  tiktok: {
    handle: "young_fame",
    url: "https://www.tiktok.com/@young_fame",
  },

  // CV
  cvPath: "/cv/Zirikana-Elie-CV.pdf",
  cvFilename: "Zirikana-Elie-CV.pdf",

  // Services (from source portfolio)
  services: [
    "Photography",
    "Video Editing",
    "Camera Operation",
    "Graphic Design",
    "Photo Editing",
  ],

  // SEO
  seo: {
    title: "Zirikana Elie | Multimedia Creative",
    description:
      "Zirikana Elie is a multimedia creative from Rwanda specializing in Photography, Video Editing, Camera Operation, Graphic Design and Photo Editing. Creating visuals, telling stories, bringing ideas to life.",
    siteUrl: "https://zirikanaelie.com",
    ogImage: "/assets/images/hero-portrait.jpg",
  },

  // API base (overridden by env var in production)
  apiBaseUrl: import.meta.env.VITE_API_URL || "",
};

export default siteConfig;
