export const personalInfo = {
  name: "Mohammad Shohan",
  title: "Competitive Programmer & Technology Enthusiast",
  tagline: "Practice makes a man perfect",
  description: "I was born in Noakhali but raised in Chattogram. I am pursuing my B.Sc degree in CSE at International Islamic University of Chittagong. I am an optimistic competitive Programming Problems solver.",
  profileImage: "/images/me1.jpg",
  cvLink: "https://drive.google.com/file/d/1ZPWJpaBX5h6gZ4hhXmOrSNMiLK2tyX_o/view?usp=sharing",
  contact: {
    address: "Teri Bazar, Katawali(4000), Chattogram",
    phone: "01757470639",
    email: "mohammad.shohan2032@gmail.com"
  },
  social: {
    linkedin: "https://www.linkedin.com/in/md-shohan-b7214220a/",
    facebook: "https://www.facebook.com/profile.php?id=100090266858282&mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/shohan.mohammad/?hl=en",
    github: "https://github.com/shohan2032"
  }
};

export const ojHandles = [
  {
    name: "Codeforces",
    period: "2020 - Present",
    description: "Codeforces is a web site where anybody can enrich his knowledge by solving problems. This is my favourite web site for practicing coding problems. There are some category of problems. Such as Adhoc, Intuition, Algorithm, Data Structure etc.",
    link: "https://codeforces.com/profile/mohammad.shohan2032"
  },
  {
    name: "AtCoder",
    period: "2020 - Present", 
    description: "AtCoder is a japanese website. This is a famous website for the beginner. I am an active contestant of atcoder beginner contest.",
    link: "https://atcoder.jp/users/shohan2032"
  },
  {
    name: "CodeChef",
    period: "2020 - Present",
    description: "Perhaps CodeChef is the most favourite website for the contestant of this subcontinent. Mostly i use this website only for contests.",
    link: "https://www.codechef.com/users/shohan2032"
  },
  {
    name: "StopStalk",
    period: "2020 - Present",
    description: "",
    link: "https://www.stopstalk.com/user/profile/shohan2032"
  }
];

// Education
export const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    period: "2021 - 2024",
    institution: "International Islamic University Chittagong",
    description: "Completed Bachelor in Computer Science and Engineering at International Islamic University of Chittagong with CGPA 3.65 out of 4."
  },
  {
    degree: "Higher Secondary Certificate Examination(Science)",
    period: "2017 - 2019",
    institution: "Bakalia Govt College",
    // description: "I passed my Higher Secondary Certificate Examination from Bakalia Govt College with GPA 3.83 in 2019."
    description: "I passed my Higher Secondary Certificate Examination from Bakalia Govt College."
  },
  {
    degree: "Secondary School Certificate Examination(Science)",
    period: "2015 - 2017",
    institution: "Government Muslim High School",
    description: "I passed my Secondary School Certificate Examination from Government Muslim High School with GPA 5 in 2017."
  }
];

// Development Skills
export const developmentSkills = [
  "HTML",
  "CSS", 
  "Tailwind CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "AdoniJS",
  "NextJS",
  "C",
  "C++",
  "Python",
  "MySQL",
  "Lucid ORM",
  "Redux Toolkit",
  "Vite",
  "Git & GitHub"
];

// DevOps Skills  
export const devopsSkills = [
  "CI/CD",
  "GitHub Action",
  "SonarQube", 
  "Linux",
  "Cloud Computing",
  "Docker",
  "Docker Compose",
  "AWS ECS",
  "AWS EC2",
  "Nginx",
  "SSL Integration",
  "Bash Scripting",
];

// Combined skills for backward compatibility (removing percentage levels)
export const skills = developmentSkills.map(skill => ({ name: skill, level: 0 }));

export const languages = [
  { name: "English", level: 80 },
  { name: "Bangla", level: 100 }
];

export const projects = [
  {
    id: 1,
    title: "Blog Platform",
    image: "/images/blog-flatform.png", // Placeholder image
    description: "Utilized Vite for fast build and development. Developed the frontend using React, ensuring a responsive and user-friendly interface. Implemented secure user authentication for account creation and access. Integrated Redux Toolkit for efficient global state management.",
    demoLink: "https://blog-site-two-psi.vercel.app/",
    technologies: ["React", "Vite", "Redux Toolkit", "Authentication"]
  },
  {
    id: 2,
    title: "Food App",
    image: "/images/food-app.png", // Placeholder image
    description: "Implemented using React and Vite, ensuring a fast and efficient user experience. Developed dynamic search functionality, allowing users to find recipes based on keywords. Learnt JSX & Virtual DOM for efficient UI rendering and component-based architecture. Asynchronous JavaScript for managed API calls using async/await and Promises.",
    demoLink: "https://food-app-ten-rouge.vercel.app/",
    technologies: ["React", "Vite", "JSX", "Virtual DOM", "Async JavaScript"]
  },
  {
    id: 3,
    title: "NewsPortal using API",
    image: "/images/new-portal-api.jpg",
    description: "A web-based project developed using HTML, CSS, JSON where user can read news of many category.",
    demoLink: "https://news-portal-qo9l.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "JSON"]
  },
  {
    id: 4,
    title: "Restaurant Management System(V.1)",
    image: "/images/restaurant_management_system.jpg",
    description: "The project is about handling all the information about the restaurant regarding Owners and Customers. Also, it manages resources that were managed and operated by the admin.",
    demoLink: "https://youtu.be/cA2wyck0QlU",
    technologies: ["Web Development"]
  },
  {
    id: 5,
    title: "Restaurant Management System(V.2)",
    image: "/images/restaurant(v.2).jpg",
    description: "Enhanced version of the restaurant management system with improved features and user interface.",
    demoLink: "https://restaurant-management-system-final.netlify.app/",
    technologies: ["Web Development"]
  },
  {
    id: 6,
    title: "Area Calculation of Shapes",
    image: "/images/area-calculation.png",
    description: "A web-based application for calculating area of different shapes.",
    demoLink: "https://shohan2032.github.io/Area-Calculation/",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
];

// Professional Experience
export const experience = [
  {
    id: 1,
    position: "Junior Software Engineer",
    company: "AppifyLab",
    location: "Sylhet, Bangladesh",
    period: "February 2025 - present",
    type: "Full-time",
    description: "Working on frontend and backend development with modern technologies. Exploring microservices architecture on AWS using ECS and working on no-code SaaS LMS platform.",
    technologies: ["NextJS", "AdoniJS", "MySQL", "Lucid ORM", "AWS ECS", "EzyCourse"],
    achievements: [
      "Developed responsive frontend using NextJS and React",
      "Implemented backend solutions with AdoniJS framework",
      "Explored microservices architecture on AWS using ECS",
      "Worked on no-code SaaS LMS platform EzyCourse"
    ]
  },
  {
    id: 2,
    position: "DevOps Engineer", 
    company: "AppifyLab",
    location: "Sylhet, Bangladesh",
    period: "February 2025 - present",
    type: "Full-time",
    description: "Managing CI/CD pipelines, containerization, and cloud infrastructure. Working with Docker, AWS services, and implementing automated deployment processes.",
    technologies: ["Docker", "GitHub Action", "SonarQube", "Linux", "AWS ECS", "AWS EC2", "Nginx", "SSL Integration"],
    achievements: [
      "Implemented CI/CD pipelines using GitHub Actions",
      "Containerized applications using Docker and Docker Compose", 
      "Managed Linux servers and cloud computing infrastructure",
      "Set up SSL integration and Nginx configurations"
    ]
  },
  {
    id: 3,
    position: "DevOps Intern",
    company: "AppifyLab", 
    location: "Sylhet, Bangladesh",
    period: "November 2024 - January 2025",
    type: "Internship",
    description: "Gained hands-on experience with DevOps practices, CI/CD pipelines, and cloud technologies. Worked on Docker containerization and AWS services integration.",
    technologies: ["Docker", "Nginx", "SSL Integration", "CI/CD", "GitHub Action", "Linux", "Bash Scripting", "AWS EC2"],
    achievements: [
      "Successfully completed DevOps internship program",
      "Learned Docker containerization and deployment",
      "Implemented CI/CD pipelines from scratch",
      "Gained practical experience with AWS cloud services"
    ]
  }
];

// Activities and Leadership
export const activities = [
  {
    id: 1,
    role: "Teaching Assistant",
    organization: "Department of CSE at IIUC",
    period: "July 2023 - June 2024",
    description: "Course: Competitive Programming I & II",
    responsibilities: [
      "Assisted students in learning competitive programming concepts",
      "Conducted lab sessions and problem-solving workshops",
      "Helped in grading assignments and exam papers"
    ]
  },
  {
    id: 2,
    role: "Assistant Organizing Secretary",
    organization: "IIUC Competitive Programming Society",
    period: "January 2023 - July 2023",
    description: "Arranging Programming Contest and Bootcamp for CP",
    responsibilities: [
      "Organized programming contests for university students",
      "Conducted competitive programming bootcamps",
      "Managed event logistics and participant coordination"
    ]
  },
  {
    id: 3,
    role: "Competitive Programming Mentor and Trainer",
    organization: "IIUC Competitive Programming Society", 
    period: "Ongoing",
    description: "Guiding Juniors in CP, Assisting in problem solving and taking classes in CP bootcamp",
    responsibilities: [
      "Mentoring junior students in competitive programming",
      "Teaching problem-solving techniques and algorithms",
      "Conducting regular training sessions and workshops"
    ]
  }
];

export const achievements = [
  {
    id: 1,
    title: "SEC Intra University Programming Contest. Ranked 61 out of 98 teams.",
    image: "/images/sy con2.jpg"
  },
  {
    id: 2,
    title: "IIUC Codeforces Rating Based Contest. 1st Runner Up.",
    image: "/images/rating based con.jpg"
  },
  {
    id: 3,
    title: "2021 ICPC Asia Dhaka Regional Site Online Preliminary Contest. Team IIUC UNKNOWN_THREE.",
    image: "/images/icpc2022me.jpg"
  },
  {
    id: 4,
    title: "2021 ICPC Asia Dhaka Regional Site Online Preliminary Contest",
    image: "/images/icpc2022team.jpg"
  },
  {
    id: 5,
    title: "Completed Six Month Long competitive Programming Bootcamp(intermediate)",
    image: "/images/intermediate-certificate.jpg"
  },
  {
    id: 6,
    title: "Completed Basic First Aid Training",
    image: "/images/red-crescent-certificate.jpg"
  },
  {
    id: 7,
    title: "Assistant Organizing Secretary (Jan 2023-Present) at IIUC Competitive Programming Society",
    image: "/images/assistant-organizing-secretary.jpg"
  }
];
