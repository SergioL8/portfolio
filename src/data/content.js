export const personalInfo = {
  name: "Sergio Lopez",
  title: "Embedded Systems Software Engineer",
  tagline:
    "CS & Mathematics student at CU Boulder with experience in embedded systems, satellite data algorithms, and full-stack mobile development.",
  email: "s.lopez.gds@gmail.com",
  github: "https://github.com/SergioL8",
  linkedin: "https://www.linkedin.com/in/sergio-lopez-gds/",
};

export const education = {
  school: "University of Colorado Boulder",
  degrees: ["BS in Computer Science", "BA in Mathematics"],
  gpa: "3.6",
  gradYear: "2026",
  courses: [
    "Computer Systems (C)",
    "Operating Systems (C)",
    "Network Systems (C)",
    "Data Structures (C++)",
    "Linear Algebra",
    "Discrete Mathematics",
  ],
};

export const skills = {
  languages: ["C++", "Python", "C", "Shell", "Dart/Flutter"],
  tools: ["XCode", "Apple Developer", "Git", "Jupyterlab", "Docker"],
  spoken: ["English", "Spanish"],
};

export const projects = [
  {
    title: "Korazon App",
    slug: "korazon",
    subtitle: null,
    category: "Startup / Full-Stack Mobile App",
    description:
      "Built a full-stack mobile application from the ground up using Flutter and PostgreSQL (Supabase).",
    bullets: [
      "Designed system architecture, relational database schema, authentication flows, role-based access control, QR-based ticket validation, and integrated payment processing",
      "Led the product lifecycle end-to-end: UI/UX design, backend modeling, cloud deployment, TestFlight distribution, App Store submission, and iterative improvements based on real user feedback",
      "Operated in a fast-paced startup environment, prioritizing features, shipping under tight constraints, debugging production issues, and making rapid technical and product decisions with full ownership of outcomes",
    ],
    tech: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    link: null,
  },
  {
    title: "DADIP",
    slug: "dadip",
    subtitle: "Data Aggregation & Directional Interpolation Pipeline",
    category: "Research / Satellite Data Analysis",
    description:
      "Developed mathematics-based algorithms to process and interpolate large volumes of data from NASA ICESat-2 satellites for Greenland Ice Sheet mapping.",
    bullets: [
      "Improved computational speed by over 90% compared to the previous algorithm",
      "Developed advanced mathematical algorithms utilizing complex linear algebra techniques, implementing performance-critical components in C++ and supplementary functionality in Python",
      "Advanced Ordinary Kriging interpolation for generating gridded surface height and roughness maps",
      "Selected by the Engineering Excellence Fund to present in a poster session, recognizing its technical and academic impact",
      "Currently authoring a research paper on the algorithm",
    ],
    tech: ["C++", "Python", "Linear Algebra", "Geostatistics", "Kriging"],
    link: null,
  },
  {
    title: "TiagoRobot",
    slug: "tiago",
    subtitle: "Webots Simulation Program",
    category: "Robotics / AI / Path Planning",
    description:
      "Robot controller in Webots simulator combining behavior trees, A* pathfinding, AI-powered object recognition, and probabilistic mapping.",
    bullets: [
      "Behavior tree architecture for modular task execution — the robot maps the environment, navigates, recognizes jars, picks them up, and places them on a table",
      "A* search algorithm for efficient route planning, enabling quick replanning during behavior tree execution",
      "AI-powered object recognition using Webots camera package to identify and compute distance to target objects, enabling precise gripper adjustment",
      "Probabilistic mapping with lidar sensor and convolution kernel to grow obstacles by robot radius, producing collision-free navigation space",
    ],
    tech: ["Webots", "Python", "A*", "Behavior Trees", "Computer Vision"],
    link: null,
  },
];

export const experience = [
  {
    company: "Ecliptic Enterprises",
    location: "Pasadena, CA",
    role: "Embedded Systems Software Engineer Intern",
    period: "May 2025 - Present",
    bullets: [
      "Developed an automated oscilloscope testing program for an analog-to-digital board, integrating socket communication protocols to synchronize hardware components, reducing test execution from hours to under 30 seconds",
      "Engineered real-time hardware control software for a coelostat, combining Python multithreading, a PID controller, and computer vision. Achieved sub-second response and continuous laser alignment within 1.5\u00B0",
      "Integrated hardware and software systems including function generators, test boards, and motorized optical devices, applying concurrency and packet structures to increase robustness of aerospace testing workflows",
    ],
  },
  {
    company: "University of Colorado Boulder",
    location: "Boulder, CO",
    role: "Algorithm Development for Satellite Data Analysis",
    period: "Mar 2024 - May 2025",
    bullets: [
      "Developed, tested and optimized mathematics-based algorithms to process and interpolate large volumes of data from NASA satellites, improving computational speed by over 90%",
      "Implemented performance-critical components in C++ with supplementary Python functionality",
      "Selected by the Engineering Excellence Fund to present this project in a poster session",
    ],
  },
  {
    company: "University of Colorado Boulder",
    location: "Boulder, CO",
    role: "IT Support Technician",
    period: "Nov 2022 - Mar 2024",
    bullets: [
      "Troubleshot software and hardware incidents for more than 20 customers per week",
      "Coordinated software and hardware purchases, installations, and configurations, effectively identifying customer requirements and limitations",
    ],
  },
];
