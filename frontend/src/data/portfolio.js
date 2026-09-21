// ============================================================
// PORTFOLIO DATA
// All content here is sourced directly from the supplied
// portfolio PDF and CV. Nothing is invented.
// Replace image paths in /public/assets/images to update media.
// ============================================================

export const hero = {
  eyebrow: "Dream / Create / Produce",
  firstName: "Elie",
  lastName: "Zirikana",
  // Hero-only display order (white line over gold line), matching the design.
  // firstName/lastName above are left as-is because the Contact section reads them.
  heroLine1: "Zirikana",
  heroLine2: "Elie",
  title: "Multimedia Creative",
  services: [
    "Photography",
    "Video Editing",
    "Camera Operation",
    "Graphic Design",
    "Photo Editing",
  ],
  quote: ["Creating visuals.", "Telling stories.", "Bringing ideas to life."],
  meta: "Portfolio — 2026",
  image: {
    src: "/assets/images/hero-zirikana.jpg",
    alt: "Portrait of Zirikana Elie, multimedia creative",
  },
};

export const about = {
  sectionNumber: "02",
  title: "About Me",
  subtitle: "A multidisciplinary creative portfolio",
  name: "Zirikana Elie",
  role: "Multimedia Creative",
  description:
    "I am Zirikana Elie, a multimedia creative focused on visual storytelling, digital content and creative production. My work brings together photography, video editing, camera operation, graphic design and photo editing.",
  approachTitle: "My Approach",
  approach:
    "Create with purpose. Work with creativity. Pay attention to detail. Tell the story through visuals.",
  keywords: ["Visual storytelling", "Creative production", "Digital content"],
  image: {
    src: "/assets/images/about-portrait.jpg",
    alt: "Zirikana Elie seated studio portrait",
  },
};

export const photography = {
  sectionNumber: "03",
  title: "Photography",
  subtitle: "A selection of portrait and creative photography",
  images: [
    {
      src: "/assets/images/photography-1.jpg",
      alt: "Portrait photography with teal fabric styling, resting on bed",
      objectPosition: "center 20%",
    },
    {
      src: "/assets/images/photography-2.jpg",
      alt: "Portrait photography, seated pose with teal fabric",
      objectPosition: "center 15%",
    },
    {
      src: "/assets/images/photography-3.jpg",
      alt: "Portrait photography, laughing expression with teal drape",
      objectPosition: "center 15%",
    },
    {
      src: "/assets/images/photography-4.jpg",
      alt: "Black and white creative portrait photography",
      objectPosition: "center 25%",
    },
    {
      src: "/assets/images/photography-5.jpg",
      alt: "Portrait photography with jewelry detail",
      objectPosition: "center 20%",
    },
    {
      src: "/assets/images/photography-6.jpg",
      alt: "Portrait photography, smiling expression with teal fabric",
      objectPosition: "center 15%",
    },
  ],
};

export const videoEditing = {
  sectionNumber: "04",
  title: "Video Editing",
  subtitle: "Turning raw footage into engaging visual stories",
  description:
    "I shape footage through storytelling, pacing, music, transitions, sound, color correction and visual consistency.",
  services: [
    {
      title: "Social Media Content",
      description: "Short-form videos designed for digital platforms.",
    },
    {
      title: "Promotional Videos",
      description:
        "Visual content for businesses, products, services and events.",
    },
    {
      title: "Event Highlights",
      description:
        "Focused edits that preserve the key moments and atmosphere.",
    },
    {
      title: "Color & Visual Enhancement",
      description: "Correction and grading for a consistent final look.",
    },
  ],
  keywords: [
    "Storytelling",
    "Timing",
    "Music",
    "Transitions",
    "Color",
    "Sound",
  ],
  images: [
    { src: "/assets/images/video-editing-1.jpg", alt: "Video editing timeline on screen" },
    { src: "/assets/images/video-editing-2.jpg", alt: "Video editing software interface" },
    { src: "/assets/images/video-editing-3.jpg", alt: "Color grading interface with timeline" },
  ],
};

export const cameraOperation = {
  sectionNumber: "05",
  title: "Camera Operation",
  subtitle: "Capturing purposeful footage with control and intention",
  description:
    "A strong video begins with strong footage. I focus on framing, composition, camera movement, lighting and timing to support the story.",
  skills: [
    "Framing & Composition",
    "Camera Movement",
    "Lighting",
    "Event Coverage",
    "Creative Cinematography",
  ],
  closingLine: "Capture the moment. Control the frame. Support the story.",
  image: {
    src: "/assets/images/camera-operation.jpg",
    alt: "Zirikana Elie operating a camera at an outdoor event under a tent",
    objectPosition: "center 30%",
  },
};

export const graphicDesign = {
  sectionNumber: "06",
  title: "Graphic Design",
  subtitle: "Selected design work",
  description:
    "I create visual communication through posters, flyers, promotional layouts, social-media graphics and print-ready designs.",
  focusLabel: "Design focus:",
  focus: ["Typography", "Layout", "Color", "Visual hierarchy", "Consistency"],
  images: [
    {
      src: "/assets/images/graphic-design-1.jpg",
      alt: "Karama TVET School promotional brochure design",
    },
    {
      src: "/assets/images/graphic-design-2.jpg",
      alt: "Karama TVET School welcome poster design",
    },
    {
      src: "/assets/images/graphic-design-3.jpg",
      alt: "Karama TVET School trades poster design",
    },
  ],
};

export const photoEditing = {
  sectionNumber: "07",
  title: "Photo Editing",
  subtitle: "Retouching, color correction and creative finishing",
  label: "Portrait Editing / Color",
  description:
    "I refine images while keeping the subject natural and the visual story intact. My workflow includes portrait retouching, color correction, creative grading, cleanup and social-media preparation.",
  capabilities: [
    "Portrait retouching",
    "Color correction",
    "Creative grading",
    "Cleanup",
    "Social-media preparation",
  ],
  closingLine: "Enhance the image without losing its story.",
  images: [
    {
      src: "/assets/images/photo-editing-before.jpg",
      alt: "Edited portrait photograph, smiling pose",
    },
    {
      src: "/assets/images/photo-editing-after.jpg",
      alt: "Edited portrait photograph, laughing pose",
    },
  ],
};

// Project labels are intentionally generic — no fabricated client
// names, as none were supplied in the source material.
export const projects = {
  sectionNumber: "08",
  title: "Selected Projects",
  subtitle: "A cross-section of creative work",
  processLine: "Idea → Creation → Editing → Final Result",
  items: [
    {
      title: "Editorial Portrait",
      category: "Photography",
      src: "/assets/images/project-1.jpg",
      alt: "Editorial style portrait, seated with tie",
    },
    {
      title: "Outdoor Portrait",
      category: "Photography",
      src: "/assets/images/project-2.jpg",
      alt: "Outdoor styled portrait with decorative pottery",
    },
    {
      title: "Studio Portrait",
      category: "Photography",
      src: "/assets/images/project-3.jpg",
      alt: "Studio portrait, seated with styled outfit",
    },
    {
      title: "Graphic Design Project",
      category: "Graphic Design",
      src: "/assets/images/project-4.jpg",
      alt: "Karama TVET School brochure design",
    },
  ],
};

export const skills = {
  sectionNumber: "09",
  title: "Skills & Tools",
  subtitle: "Technical and creative capabilities",
  creative: [
    "Photography",
    "Video Editing",
    "Camera Operation",
    "Graphic Design",
    "Photo Editing & Retouching",
    "Visual Storytelling",
    "Color Correction",
    "Creative Concept Development",
  ],
  tools: [
    "Adobe Photoshop",
    "Adobe Premiere Pro",
    "CapCut",
    "Canva",
    "Camera & Lenses",
    "Lighting Equipment",
    "Social Media Content",
  ],
  // Additional general computer skills, from the CV
  additional: [
    "Microsoft Word",
    "Microsoft Excel",
    "Microsoft PowerPoint",
    "Internet and Email",
  ],
  languages: [
    { name: "Kinyarwanda", level: "Excellent" },
    { name: "English", level: "Excellent" },
  ],
  note: "I continue to develop my technical and creative skills through practice, projects and learning new production techniques.",
};

export const contact = {
  sectionNumber: "10",
  title: "Let's Work Together",
  subtitle: "Available for creative projects, freelance work and collaborations",
  line1: "Your idea deserves to be seen.",
  line2: "Let's turn it into something visual.",
  image: {
    src: "/assets/images/contact-portrait.jpg",
    alt: "Zirikana Elie seated studio portrait",
  },
};
