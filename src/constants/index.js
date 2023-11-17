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
    figma,
    docker,
    deanza,
    omdena,
    stjohn,
    yahoo,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    csharp,
    netcore,
    sqlserver,
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
      title: "Full-Stack .NET Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Data Science",
      icon: backend,
    },
    {
      title: "Financial Market Enthusiast",
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
      name: "MS SQL Server",
      icon: sqlserver,
    },
    {
      name: ".NET Core",
      icon: netcore,
    },
    {
      name: "C #",
      icon: csharp,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Mathematics Tutor",
      company_name: "De Anza College",
      icon: deanza,
      iconBg: "#ffffff",
      date: "August 2017 - June 2019",
      points: [
        "Achieved a significant 22% improvement in students’ grades by effectively instructing challenging topics, providing targeted practice problems to enhance critical thinking, and offering valuable exam strategies for success.",
        "Collaborated daily with 5+ tutors and supervisors from diverse student services and academic departments, working collectively to provide comprehensive education and support to students.",
        "Strategically planned and executed extended projects, setting clear goals to enhance students comprehension of mathematical concepts and elevate their academic performance.",
      ],
    },
    {
      title: "Content Analyst & Knowledge Engineer",
      company_name: "Yahoo!",
      icon: yahoo,
      iconBg: "#E6DEDD",
      date: "July 2021 - June 2022",
      points: [
        "Analyzed content and constructed structured datasets for Yahoo’s monetization platform using XPath, Regex and JavaScript, facilitating effective data extraction.",
        "Leveraged Yahoo’s annotated guidelines to accurately identify keywords and phrases from news articles, generating high-quality datasets for AI/ML models.",
        "Enhanced Query Triage on Yahoo search page, resulting in a notable 8% increase in user accuracy.",
        "Participating in code reviews and providing constructive feedback to other engineers.",
      ],
    },
    {
      title: "Jr. Machine Learning Engineer (Apprenticeship)",
      company_name: "Omdena",
      icon: omdena,
      iconBg: "#ffffff",
      date: "May 2022 - August 2022",
      points: [
        "Conducted extensive research to source relevant research papers for AI and machine learning projects, actively contributing to their development and advancement.",
        "Played a crucial role in manually verifying data across multiple datasets to ensure the provision of clean and high-quality data for AI models.",
      ],
    },
    {
      title: "Full Stack .NET Developer",
      company_name: "St John Knits",
      icon: stjohn,
      iconBg: "#ffffff",
      date: "Nov 2022 - July 2023",
      points: [
        "Demonstrated proficiency in handling intricate SQL queries, employing various types of SQL joins and leveraging stored procedures (PL/SQL, T-SQL, SQL) to efficiently retrieve and update data.",
        "Developed .NET features to establish seamless integration between an internal website and a third-party POS system, leveraging SFTP protocol for secure and efficient file transfer.",
        "Conducted comprehensive user testing to validate and ensure seamless integration across multiple third-party systems, including the POS system, CRM, and fulfillment processing.",
        "Effectively managed the parallel operation of the legacy system alongside the new system during rollout periods.",
        "Utilized SQL jobs to schedule and automate data transfer tasks, ensuring smooth and efficient data movement.",
        "Implemented version control using Git and GitLab for effective code management and collaboration."
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
      name: "FinShark",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/dylanc2607/frontend",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };