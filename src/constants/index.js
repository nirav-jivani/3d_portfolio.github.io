import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,neoapps,vision,netflix,ovs,detection,chat,management,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    aavenir_logo,coders,ldce_logo,limitless,
    stock_portfolio,
    first_aid,
    learn_with_ar,DDU,
    blog_page,ISRO,
    nlp_video
  } from "../assets";


  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI/ML Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
      {
      title: "Software Engineer",
      company_name: "Intuit Inc. (Persistent Systems)",
      icon: Intuit,
      iconBg: "#383E56",
      date: "August 2025 - Present",
      points: [
         "Contributed to Profile Tax team, developing and refactoring 50+ compliance forms and logic for a desktop application serving 20K+ Canadian tax professionals, ensuring 100% CRA alignment.",
         "Collaborated with CRA employees and internal tax analysts to translate legislative tax updates into functional requirements, achieving 98% compliance accuracy across all Canadian provinces." 
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Neopric Inc.",
      icon: neoapps,
      iconBg: "#383E56",
      date: "April 2023 - May 2024",
      points: [
         "Led the 'Low Code and No Code Generator' project utilizing the .NET Core Framework, achieving a 40% efficiency boost and a 25% cost reduction, streamlining development processes and delivering significant savings.",
        "Enhanced user experience by 40% and reduced design time by 35% through implementing drag-and-drop functionality with React, Material-UI, and prompt engineering, enabling faster and more intuitive application development." 
        
      ],
    },
    {
      title: "Research Development Intern",
      company_name: "Indian Space Reasearch Organization",
      icon: ISRO,
      iconBg: "#E6DEDD",
      date: "October 2022 - April 2023",
      points: [
        "Compared ERA5 and GSMaP_ISRO rainfall data during lightning events using Python and MATLAB, boosting extreme weather forecasting accuracy by 25%.",
        "Published a study in QJRMS after analyzing 50+ research papers on LIS, ERA5, GSMaP, and remote sensing, enhancing predictive insights on lightning and rainfall patterns in India."
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "DDU",
      icon: DDU,
      iconBg: "#383E56",
      date: "May 2022 - September 2022",
      points: [
        "Led the development of an innovative Faculty Profile Management solution, achieving a 40% increase in administrative efficiency.",
"Enhanced administrative capabilities and provided faculty with advanced profile customization options, increasing user satisfaction by 35% and boosting productivity."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "FREE-CHAT",
      description:
      "Tech Stack: React.js, Express.js, Redux, MongoDB, Firebase, Socket.io, React Chat Engine, Swagger API.Used For: Created a dynamic chat platform with private/group messaging and one-to-one video calling, similar to Instagram and WhatsApp. Integrated real-time communication with Socket.io and React Chat Engine, supporting seamless messaging, image sharing, and video calls.",      
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "Socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://github.com/krishgoti2002/Free-Chat.git",
    },
    {
      name: "virtual guided app ",
      description:
      "Tech Stack: FastAPI, Uvicorn, PyTorch, Timm, OpenCV, Ultralytics, Python-Multipart, Pydantic. Used For: Developing an ML-powered application to assist blind individuals by detecting objects in real-time using only a live camera feed without any external sensors. Tools: Implemented Git for version control and ensured optimized deployment for seamless real-time performance.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "AI/ML",
          color: "green-text-gradient",
        },
        {
          name: "FASTAPI",
          color: "pink-text-gradient",
        },
      ],
      image: vision,
      source_code_link: "https://github.com/dbkalaria/virtual-guided-app.git",
    },
    {
      name: "DDU Faculty Management Portal",
      description:
      "Tech Stack: React.js, Express.js, MySQL, Material-UI, JavaScript.Used For: Built a Faculty Profile Management platform, streamlining administration and enabling advanced faculty profile customization. Leveraged React.js and Material-UI for an intuitive front-end, with Express.js and MySQL ensuring efficient backend and data management.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "MUI",
          color: "pink-text-gradient",
        },
      ],
      image: management,
      source_code_link: "https://github.com/nirav-jivani/faculty_management.git",
    },
    {
      name: "Paraphrase Detection",
      description:
      "Tech Stack: Python, PyTorch, TensorFlow, Pandas, scikit-learn, RoBERTa Transformer.Used For: Developed a robust paraphrase detection system using Python, incorporating cutting-edge RoBERTa Transformer models. Created a versatile solution that identifies paraphrases across multiple languages, showcasing expertise in cross-lingual natural language processing. Applied advanced deep learning and NLP techniques to achieve high accuracy in paraphrase detection.",
tags: [
        {
          name: "PyTorch",
          color: "blue-text-gradient",
        },
        {
          name: "RoBERTa",
          color: "green-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "pink-text-gradient",
        },
      ],
      image: detection,
      source_code_link: "https://github.com/nirav-jivani/Paraphrase-Detection.git",
    },
    {
      name: "Online Voting System",
      description:
      "Tech Stack: C#, .NET Core, .NET Framework, MySQL, PhpMyAdmin, Swagger API.Used For: Developed an Online Voting System using the .NET Framework, ensuring secure and efficient voting. Designed a user-friendly interface for smooth voting processes for both administrators and users. Implemented strong data validation and security protocols, preserving vote integrity and preventing unauthorized access. Leveraged .NET technologies for a scalable back-end that supports large-scale elections. Optimized system performance for real-time voting and result tallying, enhancing operational efficiency.",
      tags: [
        {
          name: ".NET",
          color: "blue-text-gradient",
        },
        {
          name: "SWAGGER",
          color: "green-text-gradient",
        },
        {
          name: "MYSQL",
          color: "pink-text-gradient",
        },
      ],
      image: ovs,
      source_code_link: "https://github.com/nirav-jivani/online_voting_system",
    },
    {
      name: "Netflix Clone",
      description:
      "Tech Stack: ReactJS, ExpressJS, Redux, Firebase, Material-UI (MUI).Used For: Built a Netflix Clone using ReactJS, Redux, and Firebase, replicating core features like movie browsing, streaming, and user authentication. Implemented Firebase for secure user authentication and personalized content delivery. Enhanced the UI/UX with responsive design and seamless video playback, improving overall user experience. Optimized performance through Redux state management, ensuring smooth navigation and streaming.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/nirav-jivani/netflix-clone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
