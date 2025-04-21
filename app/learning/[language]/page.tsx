"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, Code, ExternalLink, FileText, Layers, GraduationCap, Youtube, Play } from "lucide-react"

interface YouTubeVideo {
  id: string
  title: string
  channel: string
  thumbnail: string
  url: string
  description: string
}

interface LanguageData {
  id: string
  name: string
  description: string
  icon: string
  roadmap: {
    beginner: RoadmapItem[]
    intermediate: RoadmapItem[]
    advanced: RoadmapItem[]
  }
  frameworks: {
    name: string
    description: string
    url: string
    logo: string
  }[]
  libraries: {
    name: string
    description: string
    url: string
    logo: string
  }[]
  resources: {
    name: string
    description: string
    url: string
    type: "documentation" | "tutorial" | "course" | "book"
    image: string
  }[]
  videos: YouTubeVideo[]
  gradient: string
  image: string
}

interface RoadmapItem {
  title: string
  description: string
  resources?: string[]
}

export default function LanguagePage({ params }: { params: { language: string } }) {
  const router = useRouter()
  const languageId = params.language

  const languageData: Record<string, LanguageData> = {
    python: {
      id: "python",
      name: "Python",
      description: "A versatile language used for web development, data science, AI, and automation.",
      icon: "🐍",
      image: "/placeholder.svg?height=300&width=600",
      gradient: "from-blue-500 to-cyan-500",
      roadmap: {
        beginner: [
          {
            title: "Python Syntax and Basic Concepts",
            description:
              "Learn the fundamental syntax rules, data types, variables, operators, and control structures in Python.",
            resources: ["Official Python Documentation", "Learn Python in Y Minutes", "Python for Everybody"],
          },
          {
            title: "Control Flow and Functions",
            description:
              "Master if/else conditionals, loops (for, while), functions, parameters, return values, and scope.",
            resources: ["Python Cookbook", "Automate the Boring Stuff with Python"],
          },
          {
            title: "Data Structures",
            description: "Learn how to use lists, tuples, dictionaries, sets, and understand when to use each one.",
            resources: ["Python Data Science Handbook", "Python Crash Course"],
          },
          {
            title: "File Handling",
            description: "Work with files, understand read/write operations, file paths, and context managers.",
            resources: ["Real Python's File Handling Guide", "Python Cookbook"],
          },
          {
            title: "Error and Exception Handling",
            description: "Learn about exception types, try/except blocks, and creating custom exceptions.",
            resources: ["Official Python Documentation", "Effective Python"],
          },
          {
            title: "Modules and Packages",
            description: "Understand importing, module creation, and package organization in Python.",
            resources: ["Python Module of the Week", "Python Cookbook"],
          },
        ],
        intermediate: [
          {
            title: "Object-Oriented Programming",
            description: "Master classes, objects, inheritance, polymorphism, encapsulation, and class methods.",
            resources: ["Python 3 Object-Oriented Programming", "Fluent Python"],
          },
          {
            title: "Advanced Data Structures and Algorithms",
            description: "Learn about queues, stacks, trees, searching, sorting, and algorithm complexity.",
            resources: [
              "Problem Solving with Algorithms and Data Structures",
              "Classic Computer Science Problems in Python",
            ],
          },
          {
            title: "Database Integration",
            description: "Work with SQLite, MySQL, PostgreSQL, and ORMs like SQLAlchemy.",
            resources: ["Essential SQLAlchemy", "Flask Web Development"],
          },
          {
            title: "Web Development Frameworks",
            description: "Introduction to Django, Flask, or FastAPI for web application development.",
            resources: ["Django for Professionals", "Flask Web Development"],
          },
          {
            title: "APIs and Web Services",
            description: "Consume and create APIs, work with JSON, XML, and RESTful services.",
            resources: ["Python API Development Fundamentals", "RESTful Web APIs"],
          },
          {
            title: "Testing and Debugging",
            description: "Learn unit testing, TDD, debugging techniques, and tools like pytest.",
            resources: ["Python Testing with pytest", "Serious Python"],
          },
        ],
        advanced: [
          {
            title: "Concurrency and Parallelism",
            description: "Master threading, multiprocessing, asyncio, and concurrent execution patterns.",
            resources: ["Python Concurrency with asyncio", "High Performance Python"],
          },
          {
            title: "Design Patterns",
            description: "Implement software design patterns, understand SOLID principles and clean code.",
            resources: ["Python Design Patterns", "Architecture Patterns with Python"],
          },
          {
            title: "Performance Optimization",
            description: "Profile code, optimize memory usage, improve CPU performance, and use Cython.",
            resources: ["High Performance Python", "Cython: A Guide for Python Programmers"],
          },
          {
            title: "Advanced Web Development",
            description: "Advanced features of Django/Flask, RESTful APIs, WebSockets, and GraphQL.",
            resources: ["Two Scoops of Django", "Building GraphQL APIs with Python"],
          },
          {
            title: "Machine Learning and Data Science",
            description: "Work with NumPy, Pandas, Scikit-learn, TensorFlow, or PyTorch.",
            resources: ["Hands-On Machine Learning with Scikit-Learn and TensorFlow", "Deep Learning with Python"],
          },
          {
            title: "DevOps and Deployment",
            description: "Docker, CI/CD, cloud deployment, serverless applications, and microservices.",
            resources: ["Python for DevOps", "Cloud Native Python"],
          },
        ],
      },
      frameworks: [
        {
          name: "Django",
          logo: "https://cdn.worldvectorlogo.com/logos/django.svg",
          description: "A high-level web framework that encourages rapid development and clean, pragmatic design.",
          url: "https://www.djangoproject.com/",
        },
        {
          name: "Flask",
          logo: "https://flask.palletsprojects.com/en/2.0.x/_images/flask-logo.png",
          description: "A lightweight WSGI web application framework designed to make getting started quick and easy.",
          url: "https://flask.palletsprojects.com/",
        },
        {
          name: "FastAPI",
          logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
          description:
            "A modern, fast web framework for building APIs with Python based on standard Python type hints.",
          url: "https://fastapi.tiangolo.com/",
        },
        {
          name: "Pyramid",
          logo: "https://trypyramid.com/img/pyramid-logo-red-horizontal.svg",
          description: "A flexible Python web framework that can start small and scale up to complex applications.",
          url: "https://trypyramid.com/",
        },
      ],
      libraries: [
        {
          name: "NumPy",
          logo: "https://numpy.org/images/logo.svg",
          description: "The fundamental package for scientific computing with Python.",
          url: "https://numpy.org/",
        },
        {
          name: "Pandas",
          logo: "https://pandas.pydata.org/static/img/pandas_mark.svg",
          description: "A fast, powerful, flexible and easy to use open source data analysis and manipulation tool.",
          url: "https://pandas.pydata.org/",
        },
        {
          name: "Matplotlib",
          logo: "https://matplotlib.org/_static/logo2.svg",
          description:
            "A comprehensive library for creating static, animated, and interactive visualizations in Python.",
          url: "https://matplotlib.org/",
        },
        {
          name: "TensorFlow",
          logo: "https://www.tensorflow.org/images/tf_logo_social.png",
          description: "An end-to-end open source platform for machine learning.",
          url: "https://www.tensorflow.org/",
        },
        {
          name: "PyTorch",
          logo: "https://pytorch.org/assets/images/pytorch-logo.png",
          description:
            "An open source machine learning framework that accelerates the path from research prototyping to production deployment.",
          url: "https://pytorch.org/",
        },
        {
          name: "Requests",
          logo: "https://requests.readthedocs.io/en/latest/_static/requests-sidebar.png",
          description: "A simple, yet elegant HTTP library for Python.",
          url: "https://requests.readthedocs.io/",
        },
      ],
      resources: [
        {
          name: "Python Official Documentation",
          description: "The official Python documentation with tutorials, library references, and more.",
          url: "https://docs.python.org/",
          type: "documentation",
          image: "https://www.python.org/static/img/python-logo.png",
        },
        {
          name: "Real Python",
          description: "Python tutorials for developers of all skill levels, covering a wide range of Python topics.",
          url: "https://realpython.com/",
          type: "tutorial",
          image: "https://realpython.com/static/real-python-logo.893c30edea53.svg",
        },
        {
          name: "Python Crash Course",
          description: "A hands-on, project-based introduction to programming with Python.",
          url: "https://nostarch.com/pythoncrashcourse2e",
          type: "book",
          image: "https://nostarch.com/sites/default/files/styles/uc_product/public/pcc2e_cover-front_final.png",
        },
        {
          name: "Automate the Boring Stuff with Python",
          description: "A practical programming guide for total beginners.",
          url: "https://automatetheboringstuff.com/",
          type: "book",
          image: "https://automatetheboringstuff.com/images/cover_automate2_thumb.png",
        },
        {
          name: "CS50's Introduction to Programming with Python",
          description: "Harvard University's introduction to programming using Python.",
          url: "https://cs50.harvard.edu/python/",
          type: "course",
          image: "https://cs50.harvard.edu/python/2022/assets/harvard.png",
        },
      ],
      videos: [
        {
          id: "1",
          title: "Python for Beginners - Learn Python in 1 Hour",
          channel: "Programming with Mosh",
          thumbnail: "https://i.ytimg.com/vi/kqtD5dpn9C8/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
          description: "This Python tutorial for beginners shows how to get started with Python quickly.",
        },
        {
          id: "2",
          title: "Python Tutorial - Python Full Course for Beginners",
          channel: "freeCodeCamp.org",
          thumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
          description: "A complete Python course for beginners covering all the basics of Python programming.",
        },
        {
          id: "3",
          title: "Python OOP Tutorial - Object Oriented Programming for Beginners",
          channel: "Corey Schafer",
          thumbnail: "https://i.ytimg.com/vi/ZDa-Z5JzLYM/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM",
          description: "Learn object-oriented programming principles in Python with clear examples.",
        },
        {
          id: "4",
          title: "Python Django Tutorial for Beginners",
          channel: "Traversy Media",
          thumbnail: "https://i.ytimg.com/vi/PtQiiknWUcI/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=PtQiiknWUcI",
          description: "Learn how to build a Django application from scratch in this beginner-friendly tutorial.",
        },
        {
          id: "5",
          title: "Python Crash Course For Beginners",
          channel: "Traversy Media",
          thumbnail: "https://i.ytimg.com/vi/JJmcL1N2KQs/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=JJmcL1N2KQs",
          description: "A crash course that covers Python fundamentals in under 2 hours.",
        },
        {
          id: "6",
          title: "Data Analysis with Python - Full Course for Beginners",
          channel: "freeCodeCamp.org",
          thumbnail: "https://i.ytimg.com/vi/r-uOLxNrNk8/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=r-uOLxNrNk8",
          description: "Learn data analysis with Python in this comprehensive course for beginners.",
        },
      ],
    },
    javascript: {
      id: "javascript",
      name: "JavaScript",
      description: "The language of the web, used for frontend, backend, mobile, and desktop applications.",
      icon: "🟨",
      image: "/placeholder.svg?height=300&width=600",
      gradient: "from-yellow-400 to-orange-500",
      roadmap: {
        beginner: [
          {
            title: "JavaScript Syntax and Basic Concepts",
            description:
              "Learn fundamental syntax, variables, data types, operators, and control structures in JavaScript.",
            resources: ["MDN Web Docs - JavaScript", "JavaScript.info", "Eloquent JavaScript"],
          },
          {
            title: "Functions and Scope",
            description:
              "Understand function declarations, expressions, parameters, return values, and variable scope.",
            resources: ["You Don't Know JS: Scope & Closures", "JavaScript: The Definitive Guide"],
          },
          {
            title: "DOM Manipulation",
            description: "Learn to interact with HTML elements, modify content, attributes, and styles.",
            resources: ["MDN Web Docs - DOM", "JavaScript & jQuery: Interactive Front-End Development"],
          },
          {
            title: "Events and Event Handling",
            description: "Understand event listeners, event bubbling, and custom events.",
            resources: ["Eloquent JavaScript - Chapter 15: Events", "MDN Web Docs - Events"],
          },
          {
            title: "Array Methods and Objects",
            description: "Work with arrays, array methods, objects, properties, and methods.",
            resources: ["JavaScript for impatient programmers", "You Don't Know JS: Objects & Classes"],
          },
          {
            title: "Basic Web APIs",
            description: "Introduction to common browser APIs like Fetch, Storage, and Geolocation.",
            resources: ["MDN Web Docs - Web APIs", "JavaScript: The Definitive Guide"],
          },
        ],
        intermediate: [
          {
            title: "Advanced JavaScript Concepts",
            description: "Master closures, prototypes, 'this' keyword, call, apply, and bind methods.",
            resources: ["You Don't Know JS: this & Object Prototypes", "JavaScript: The Good Parts"],
          },
          {
            title: "ES6+ Features",
            description:
              "Learn arrow functions, template literals, destructuring, spread operator, classes, and modules.",
            resources: ["ES6 for Everyone", "Exploring ES6"],
          },
          {
            title: "Asynchronous JavaScript",
            description: "Understand callbacks, promises, async/await, and handling asynchronous operations.",
            resources: ["You Don't Know JS: Async & Performance", "JavaScript Async"],
          },
          {
            title: "Error Handling",
            description: "Learn try/catch blocks, error objects, custom errors, and error propagation.",
            resources: ["MDN Web Docs - Error Handling", "Node.js Design Patterns"],
          },
          {
            title: "Working with APIs",
            description: "Master Fetch API, axios, RESTful APIs, JWT authentication, and GraphQL basics.",
            resources: ["Consuming REST APIs", "GraphQL in Action"],
          },
          {
            title: "JavaScript Design Patterns",
            description: "Learn common patterns like module, singleton, factory, observer, and MVC.",
            resources: ["Learning JavaScript Design Patterns", "JavaScript Patterns"],
          },
        ],
        advanced: [
          {
            title: "Performance Optimization",
            description: "Understand memory management, optimizing rendering, memoization, and lazy loading.",
            resources: ["High Performance JavaScript", "Web Performance in Action"],
          },
          {
            title: "Advanced Framework Concepts",
            description:
              "Master state management, component architecture, and advanced topics in React, Vue, or Angular.",
            resources: ["React Hooks in Action", "Angular in Depth", "Vue.js: Up and Running"],
          },
          {
            title: "Server-Side JavaScript",
            description: "Develop with Node.js, Express, databases, authentication, and authorization.",
            resources: ["Node.js Design Patterns", "Express in Action"],
          },
          {
            title: "Testing and Debugging",
            description: "Use Jest, React Testing Library, Cypress, Chrome DevTools, and debugging techniques.",
            resources: ["Testing JavaScript Applications", "Effective Debugging"],
          },
          {
            title: "Modern JavaScript Tools",
            description: "Master webpack, Babel, ESLint, npm/yarn, and modern build workflows.",
            resources: ["Webpack in Action", "Modern JavaScript Tools and Skills"],
          },
          {
            title: "Advanced Browser APIs",
            description: "Work with Web Workers, Service Workers, WebRTC, WebSockets, and Canvas.",
            resources: ["Progressive Web Apps", "Building Browser Extensions"],
          },
        ],
      },
      frameworks: [
        {
          name: "React",
          logo: "https://reactjs.org/logo-og.png",
          description: "A JavaScript library for building user interfaces, particularly single-page applications.",
          url: "https://reactjs.org/",
        },
        {
          name: "Vue.js",
          logo: "https://vuejs.org/images/logo.png",
          description: "A progressive framework for building user interfaces, designed to be incrementally adoptable.",
          url: "https://vuejs.org/",
        },
        {
          name: "Angular",
          logo: "https://angular.io/assets/images/logos/angular/angular.svg",
          description:
            "A platform and framework for building single-page client applications using HTML and TypeScript.",
          url: "https://angular.io/",
        },
        {
          name: "Next.js",
          logo: "https://nextjs.org/static/favicon/favicon-32x32.png",
          description: "A React framework that enables server-side rendering and generating static websites.",
          url: "https://nextjs.org/",
        },
        {
          name: "Express.js",
          logo: "https://expressjs.com/images/express-facebook-share.png",
          description: "A minimal and flexible Node.js web application framework.",
          url: "https://expressjs.com/",
        },
      ],
      libraries: [
        {
          name: "jQuery",
          logo: "https://jquery.com/jquery-wp-content/themes/jquery.com/i/favicon.ico",
          description:
            "A fast, small, and feature-rich JavaScript library for HTML document traversal and manipulation.",
          url: "https://jquery.com/",
        },
        {
          name: "Lodash",
          logo: "https://lodash.com/assets/img/lodash.svg",
          description: "A modern JavaScript utility library delivering modularity, performance & extras.",
          url: "https://lodash.com/",
        },
        {
          name: "Axios",
          logo: "https://axios-http.com/assets/favicon.ico",
          description: "Promise based HTTP client for the browser and Node.js.",
          url: "https://axios-http.com/",
        },
        {
          name: "D3.js",
          logo: "https://d3js.org/logo.svg",
          description: "A JavaScript library for producing dynamic, interactive data visualizations in web browsers.",
          url: "https://d3js.org/",
        },
        {
          name: "Three.js",
          logo: "https://threejs.org/files/favicon.ico",
          description:
            "A cross-browser JavaScript library and API used to create and display animated 3D computer graphics.",
          url: "https://threejs.org/",
        },
      ],
      resources: [
        {
          name: "MDN Web Docs - JavaScript",
          description: "The Mozilla Developer Network's comprehensive JavaScript documentation.",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          type: "documentation",
          image: "https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png",
        },
        {
          name: "JavaScript.info",
          description: "A modern JavaScript tutorial with simple explanations and practical examples.",
          url: "https://javascript.info/",
          type: "tutorial",
          image: "https://javascript.info/img/site_preview_en.png",
        },
        {
          name: "Eloquent JavaScript",
          description: "A book about JavaScript, programming, and the wonders of the digital.",
          url: "https://eloquentjavascript.net/",
          type: "book",
          image: "https://eloquentjavascript.net/img/cover.jpg",
        },
        {
          name: "You Don't Know JS",
          description: "A book series diving deep into the core mechanisms of the JavaScript language.",
          url: "https://github.com/getify/You-Dont-Know-JS",
          type: "book",
          image: "https://raw.githubusercontent.com/getify/You-Dont-Know-JS/1st-ed/up%20%26%20going/cover.jpg",
        },
        {
          name: "freeCodeCamp JavaScript Curriculum",
          description: "A free, interactive way to learn JavaScript through challenges and projects.",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
          type: "course",
          image: "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg",
        },
      ],
      videos: [
        {
          id: "1",
          title: "JavaScript Crash Course For Beginners",
          channel: "Traversy Media",
          thumbnail: "https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
          description: "A crash course to get up and running with JavaScript basics quickly.",
        },
        {
          id: "2",
          title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
          channel: "Programming with Mosh",
          thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          description: "A concise tutorial covering JavaScript fundamentals in just one hour.",
        },
        {
          id: "3",
          title: "JavaScript Full Course for Beginners",
          channel: "freeCodeCamp.org",
          thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
          description: "A comprehensive JavaScript course covering all the basics.",
        },
        {
          id: "4",
          title: "Learn JavaScript - Full Course for Beginners",
          channel: "freeCodeCamp.org",
          thumbnail: "https://i.ytimg.com/vi/jS4aFq5-91M/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=jS4aFq5-91M",
          description: "A complete JavaScript course for beginners that covers all the essential concepts.",
        },
        {
          id: "5",
          title: "Modern JavaScript Tutorial #1 - Intro & Setup",
          channel: "The Net Ninja",
          thumbnail: "https://i.ytimg.com/vi/iWOYAxlnaww/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=iWOYAxlnaww",
          description: "First part of a modern JavaScript series teaching key concepts step by step.",
        },
        {
          id: "6",
          title: "React JS Crash Course",
          channel: "Traversy Media",
          thumbnail: "https://i.ytimg.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
          description: "A crash course on React JS, the popular JavaScript library for building user interfaces.",
        },
      ],
    },
    java: {
      id: "java",
      name: "Java",
      description: "A robust language used for enterprise applications, Android development, and more.",
      icon: "☕",
      image: "/placeholder.svg?height=300&width=600",
      gradient: "from-red-500 to-orange-500",
      roadmap: {
        beginner: [
          {
            title: "Java Syntax and Basic Concepts",
            description: "Learn the fundamental syntax, data types, variables, operators, and control flow in Java.",
            resources: ["Oracle Java Tutorials", "Head First Java", "Java: A Beginner's Guide"],
          },
          {
            title: "Object-Oriented Programming Fundamentals",
            description: "Understand classes, objects, methods, inheritance, encapsulation, and polymorphism.",
            resources: ["Head First Object-Oriented Analysis and Design", "Thinking in Java"],
          },
          {
            title: "Collections Framework",
            description: "Learn about Lists, Sets, Maps, and when to use specific collection types.",
            resources: ["Java Collections Framework Tutorial", "Effective Java"],
          },
          {
            title: "Exception Handling",
            description: "Understand try-catch blocks, exception types, and handling runtime errors.",
            resources: ["Oracle Java Tutorials - Exceptions", "Java Exception Handling Best Practices"],
          },
          {
            title: "Java I/O",
            description: "Learn file operations, reading/writing data, and working with streams.",
            resources: ["Java I/O Tutorial", "Java I/O, NIO and NIO.2"],
          },
          {
            title: "Basic GUI Development",
            description: "Introduction to JavaFX or Swing for creating graphical user interfaces.",
            resources: ["JavaFX Tutorial", "Java Swing Tutorial"],
          },
        ],
        intermediate: [
          {
            title: "Advanced Object-Oriented Concepts",
            description: "Learn about interfaces, abstract classes, nested classes, and generics.",
            resources: ["Effective Java", "Java Generics and Collections"],
          },
          {
            title: "Concurrency and Multithreading",
            description: "Master threads, synchronization, locks, and the concurrency API.",
            resources: ["Java Concurrency in Practice", "Mastering Concurrency Programming with Java"],
          },
          {
            title: "Java Database Connectivity",
            description: "Learn JDBC for interacting with databases, SQL queries, and transactions.",
            resources: ["JDBC API Tutorial and Reference", "Pro Java Persistence with JPA and Hibernate"],
          },
          {
            title: "Advanced Collections and Streams",
            description: "Work with the Stream API, functional interfaces, and advanced collection operations.",
            resources: ["Modern Java in Action", "Java 8 in Action"],
          },
          {
            title: "Web Development Basics",
            description: "Introduction to Servlets, JSP, and basic web application development.",
            resources: ["Head First Servlets and JSP", "Spring in Action"],
          },
          {
            title: "Build Tools and Dependency Management",
            description: "Learn Maven or Gradle for project management and dependency handling.",
            resources: ["Maven: The Definitive Guide", "Gradle in Action"],
          },
        ],
        advanced: [
          {
            title: "Enterprise Java Development",
            description: "Master Spring Framework, Spring Boot, and enterprise application patterns.",
            resources: ["Spring in Action", "Pro Spring Boot", "Spring Microservices in Action"],
          },
          {
            title: "Microservices Architecture",
            description: "Design and implement microservices with Spring Cloud, service discovery, and API gateways.",
            resources: ["Building Microservices", "Spring Microservices in Action"],
          },
          {
            title: "Performance Optimization",
            description: "Profiling, memory management, JVM tuning, and performance bottlenecks.",
            resources: ["Java Performance: The Definitive Guide", "Optimizing Java"],
          },
          {
            title: "Design Patterns",
            description: "Implement and understand common design patterns in Java applications.",
            resources: ["Head First Design Patterns", "Design Patterns: Elements of Reusable Object-Oriented Software"],
          },
          {
            title: "Testing and TDD",
            description: "Master unit testing, integration testing, JUnit, Mockito, and test-driven development.",
            resources: ["Test-Driven Development: By Example", "Practical Unit Testing with JUnit and Mockito"],
          },
          {
            title: "DevOps for Java Applications",
            description: "Containerization with Docker, CI/CD pipelines, and cloud deployment.",
            resources: ["Docker in Action", "Continuous Delivery with Java", "Cloud Native Java"],
          },
        ],
      },
      frameworks: [
        {
          name: "Spring",
          logo: "https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg",
          description: "A comprehensive framework for building Java applications, particularly web applications.",
          url: "https://spring.io/",
        },
        {
          name: "Hibernate",
          logo: "https://hibernate.org/images/hibernate-logo.svg",
          description: "An object-relational mapping framework for Java applications.",
          url: "https://hibernate.org/",
        },
        {
          name: "Jakarta EE",
          logo: "https://jakarta.ee/images/jakarta/jakarta_ee_logo_schooner_color_stacked_default.png",
          description: "A set of specifications that extend Java SE with enterprise features.",
          url: "https://jakarta.ee/",
        },
        {
          name: "Android SDK",
          logo: "https://developer.android.com/static/images/brand/Android_Robot.png",
          description: "The official development kit for building Android applications.",
          url: "https://developer.android.com/",
        },
      ],
      libraries: [
        {
          name: "Apache Commons",
          logo: "https://commons.apache.org/images/commons-logo.png",
          description: "A collection of reusable Java components.",
          url: "https://commons.apache.org/",
        },
        {
          name: "Guava",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Guava_logo.svg/1200px-Guava_logo.svg.png",
          description:
            "Google's core libraries for Java, providing utility methods for collections, caching, and more.",
          url: "https://github.com/google/guava",
        },
        {
          name: "Jackson",
          logo: "https://fasterxml.github.io/jackson-site/images/jackson-logo.png",
          description:
            "A suite of data-processing tools for Java, including the flagship JSON parsing and generation library.",
          url: "https://github.com/FasterXML/jackson",
        },
        {
          name: "JUnit",
          logo: "https://junit.org/junit5/assets/img/junit5-logo.png",
          description: "A simple framework to write repeatable tests for Java applications.",
          url: "https://junit.org/",
        },
      ],
      resources: [
        {
          name: "Oracle Java Documentation",
          description: "The official Java documentation with tutorials, API references, and more.",
          url: "https://docs.oracle.com/en/java/",
          type: "documentation",
          image: "https://www.oracle.com/a/ocom/img/cb71-java-logo.png",
        },
        {
          name: "Baeldung",
          description: "In-depth articles and tutorials on Java and Spring.",
          url: "https://www.baeldung.com/",
          type: "tutorial",
          image: "https://www.baeldung.com/wp-content/themes/baeldung/icon/logo.svg",
        },
        {
          name: "Head First Java",
          description: "A brain-friendly guide to learning Java programming.",
          url: "https://www.oreilly.com/library/view/head-first-java/9781492091646/",
          type: "book",
          image: "https://learning.oreilly.com/library/cover/9781492091646/250w/",
        },
        {
          name: "Effective Java",
          description: "A must-read for every Java developer, covering best practices and design patterns.",
          url: "https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/",
          type: "book",
          image: "https://learning.oreilly.com/library/cover/9780134686097/250w/",
        },
        {
          name: "Java Programming Masterclass",
          description: "A comprehensive online course covering Java from basics to advanced topics.",
          url: "https://www.udemy.com/course/java-the-complete-java-developer-course/",
          type: "course",
          image: "https://img-c.udemycdn.com/course/750x422/533682_c10c_4.jpg",
        },
      ],
      videos: [
        {
          id: "1",
          title: "Java Tutorial for Beginners",
          channel: "Programming with Mosh",
          thumbnail: "https://i.ytimg.com/vi/eIrMbAQSU34/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=eIrMbAQSU34",
          description: "A beginner-friendly introduction to Java programming basics.",
        },
        {
          id: "2",
          title: "Java Full Course | Java Tutorial for Beginners",
          channel: "Edureka",
          thumbnail: "https://i.ytimg.com/vi/hBh_CC5y8-s/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=hBh_CC5y8-s",
          description: "A comprehensive Java course covering core concepts and advanced topics.",
        },
        {
          id: "3",
          title: "Java Programming",
          channel: "freeCodeCamp.org",
          thumbnail: "https://i.ytimg.com/vi/GoXwIVyNvX0/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=GoXwIVyNvX0",
          description: "Complete Java programming tutorial for beginners with practical examples.",
        },
        {
          id: "4",
          title: "Spring Boot Tutorial for Beginners",
          channel: "Amigoscode",
          thumbnail: "https://i.ytimg.com/vi/9SGDpanrc8U/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=9SGDpanrc8U",
          description: "Learn Spring Boot fundamentals and build your first Spring application.",
        },
        {
          id: "5",
          title: "Java Collections Framework",
          channel: "Telusko",
          thumbnail: "https://i.ytimg.com/vi/GdAon80-0KA/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=GdAon80-0KA",
          description: "A detailed explanation of Java Collections Framework with examples.",
        },
        {
          id: "6",
          title: "Java Multithreading",
          channel: "Cave of Programming",
          thumbnail: "https://i.ytimg.com/vi/eQk5AWcTS8w/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=eQk5AWcTS8w",
          description: "Learn multithreading concepts in Java with practical demonstrations.",
        },
      ],
    },
    cpp: {
      id: "cpp",
      name: "C++",
      description: "A powerful language used for system/software development, game development, and more.",
      icon: "🔷",
      image: "/placeholder.svg?height=300&width=600",
      gradient: "from-blue-600 to-indigo-600",
      roadmap: {
        beginner: [
          {
            title: "C++ Syntax and Basic Concepts",
            description:
              "Learn the fundamental syntax, data types, variables, operators, and control structures in C++.",
            resources: ["C++ Primer", "LearnCpp.com", "A Tour of C++"],
          },
          {
            title: "Functions and Pointers",
            description: "Understand function declarations, parameters, return values, and pointer operations.",
            resources: ["Effective C++", "C++ Primer", "Programming: Principles and Practice Using C++"],
          },
          {
            title: "Memory Management",
            description: "Learn about stack vs. heap, dynamic memory allocation, and memory safety.",
            resources: ["Effective C++", "C++ Memory Management", "C++ Crash Course"],
          },
          {
            title: "Object-Oriented Programming",
            description: "Understand classes, objects, inheritance, polymorphism, and encapsulation.",
            resources: ["C++ Primer", "Thinking in C++", "Programming: Principles and Practice Using C++"],
          },
          {
            title: "Standard Library Basics",
            description: "Introduction to strings, vectors, and other common standard library components.",
            resources: ["The C++ Standard Library", "Effective STL", "C++ Standard Library Tutorial"],
          },
          {
            title: "File I/O",
            description: "Learn file operations, reading and writing data, and streams.",
            resources: ["C++ Primer", "C++ File I/O Tutorial", "Professional C++"],
          },
        ],
        intermediate: [
          {
            title: "Templates and Generic Programming",
            description: "Master template functions, classes, and the fundamentals of generic programming.",
            resources: ["Modern C++ Design", "C++ Templates: The Complete Guide", "Effective C++"],
          },
          {
            title: "Standard Template Library (STL)",
            description: "In-depth understanding of containers, algorithms, iterators, and function objects.",
            resources: ["Effective STL", "The C++ Standard Library", "C++ STL Tutorial"],
          },
          {
            title: "Exception Handling",
            description: "Learn try-catch blocks, exception types, and writing exception-safe code.",
            resources: ["Exceptional C++", "Modern C++ Design", "C++ Exception Handling Best Practices"],
          },
          {
            title: "Modern C++ Features",
            description: "Master C++11/14/17/20 features like auto, lambdas, move semantics, and smart pointers.",
            resources: ["Effective Modern C++", "C++17 - The Complete Guide", "A Tour of C++"],
          },
          {
            title: "Multithreading",
            description: "Learn concurrent programming with std::thread, mutexes, and condition variables.",
            resources: ["C++ Concurrency in Action", "Multithreading with C++", "Modern C++ Concurrency Tutorial"],
          },
          {
            title: "Advanced Memory Management",
            description: "Understand placement new, custom allocators, and memory optimization techniques.",
            resources: ["Effective C++", "C++ Memory Management", "Modern C++ Programming Cookbook"],
          },
        ],
        advanced: [
          {
            title: "Design Patterns in C++",
            description: "Implement and understand common design patterns in C++ applications.",
            resources: [
              "Design Patterns in Modern C++",
              "Head First Design Patterns",
              "C++ Patterns and Derivatives Pricing",
            ],
          },
          {
            title: "Advanced Template Programming",
            description: "Master template metaprogramming, SFINAE, concepts, and type traits.",
            resources: ["C++ Templates: The Complete Guide", "Modern C++ Design", "Advanced C++ Metaprogramming"],
          },
          {
            title: "Performance Optimization",
            description: "Profiling, memory layout optimization, cache coherence, and low-level optimizations.",
            resources: ["Optimizing C++", "The Art of Computer Systems Performance Analysis", "C++ High Performance"],
          },
          {
            title: "Game Development",
            description: "Learn game engines, graphics programming, physics, and game architecture.",
            resources: ["Game Engine Architecture", "Game Programming Patterns", "3D Game Engine Design"],
          },
          {
            title: "Systems Programming",
            description: "Operating systems development, device drivers, and low-level programming.",
            resources: ["Linux Kernel Development", "System Programming with C and Unix", "Advanced UNIX Programming"],
          },
          {
            title: "Testing and Debugging",
            description: "Master unit testing frameworks, debugging techniques, and continuous integration.",
            resources: [
              "Test-Driven Development for C++",
              "Professional C++ Debugging",
              "Modern C++ Programming Cookbook",
            ],
          },
        ],
      },
      frameworks: [
        {
          name: "Qt",
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg",
          description: "A cross-platform application development framework for desktop, embedded, and mobile.",
          url: "https://www.qt.io/",
        },
        {
          name: "Boost",
          logo: "https://www.boost.org/doc/libs/1_79_0/boost.png",
          description: "A set of libraries that extend the functionality of C++.",
          url: "https://www.boost.org/",
        },
        {
          name: "Unreal Engine",
          logo: "https://cdn2.unrealengine.com/ue-logo-stacked-unreal-engine-w-677x545-fac11de0943f.png",
          description: "A powerful game engine with C++ as its primary language.",
          url: "https://www.unrealengine.com/",
        },
        {
          name: "POCO",
          logo: "https://pocoproject.org/images/poco-logo.png",
          description: "A collection of C++ class libraries for building network-centric applications.",
          url: "https://pocoproject.org/",
        },
      ],
      libraries: [
        {
          name: "STL",
          logo: "https://isocpp.org/files/img/cpp_logo.png",
          description: "The C++ Standard Template Library, providing containers, algorithms, and more.",
          url: "https://en.cppreference.com/w/cpp/container",
        },
        {
          name: "OpenCV",
          logo: "https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black-2.png",
          description: "An open-source computer vision and machine learning software library.",
          url: "https://opencv.org/",
        },
        {
          name: "Eigen",
          logo: "https://eigen.tuxfamily.org/dox/Eigen_Silly_Professor_64x64.png",
          description: "A C++ template library for linear algebra.",
          url: "https://eigen.tuxfamily.org/",
        },
        {
          name: "SFML",
          logo: "https://www.sfml-dev.org/images/logo.png",
          description:
            "A simple interface to the various components of your PC, to ease the development of games and multimedia applications.",
          url: "https://www.sfml-dev.org/",
        },
      ],
      resources: [
        {
          name: "cppreference.com",
          description: "A comprehensive reference for C and C++ programming languages.",
          url: "https://en.cppreference.com/",
          type: "documentation",
          image: "https://en.cppreference.com/favicon.ico",
        },
        {
          name: "LearnCpp.com",
          description: "A free website devoted to teaching you how to program in C++.",
          url: "https://www.learncpp.com/",
          type: "tutorial",
          image: "https://www.learncpp.com/wp-content/uploads/2020/09/learncpp-logo-2020-2.svg",
        },
        {
          name: "C++ Primer",
          description: "A comprehensive introduction to the C++ language.",
          url: "https://www.oreilly.com/library/view/c-primer-fifth/9780133053043/",
          type: "book",
          image: "https://learning.oreilly.com/library/cover/9780133053043/250w/",
        },
        {
          name: "Effective Modern C++",
          description: "42 specific ways to improve your use of C++11 and C++14.",
          url: "https://www.oreilly.com/library/view/effective-modern-c/9781491908419/",
          type: "book",
          image: "https://learning.oreilly.com/library/cover/9781491908419/250w/",
        },
        {
          name: "C++ Programming: From Problem Analysis to Program Design",
          description: "A thorough introduction to programming in C++.",
          url: "https://www.cengage.com/c/c-programming-from-problem-analysis-to-program-design-8e-malik/9781337102087/",
          type: "course",
          image: "https://www.cengage.com/covers/imageServlet?image_type=LRGFC&catalog_number=9781337102087",
        },
      ],
      videos: [
        {
          id: "1",
          title: "C++ Tutorial for Beginners - Full Course",
          channel: "freeCodeCamp.org",
          thumbnail: "https://i.ytimg.com/vi/vLnPwxZdW4Y/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
          description: "A comprehensive introduction to C++ programming for beginners.",
        },
        {
          id: "2",
          title: "C++ Programming Course - Beginner to Advanced",
          channel: "freeCodeCamp.org",
          thumbnail: "https://i.ytimg.com/vi/8jLOx1hD3_o/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=8jLOx1hD3_o",
          description: "Learn all the C++ fundamentals from beginner concepts to advanced topics.",
        },
        {
          id: "3",
          title: "C++ Tutorial From Basic to Advance",
          channel: "Simplilearn",
          thumbnail: "https://i.ytimg.com/vi/Rub-JsjMhWY/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=Rub-JsjMhWY",
          description: "Complete C++ tutorial covering basic to advanced concepts.",
        },
        {
          id: "4",
          title: "Unreal Engine 5 Beginner Tutorial - UE5 Starter Course!",
          channel: "GameDev.tv",
          thumbnail: "https://i.ytimg.com/vi/k-zMkzmduqI/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=k-zMkzmduqI",
          description: "Learn game development with C++ in Unreal Engine 5.",
        },
        {
          id: "5",
          title: "Modern C++ Course (C++11/14/17/20)",
          channel: "The Cherno",
          thumbnail: "https://i.ytimg.com/vi/18c3MTX0PK0/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=18c3MTX0PK0",
          description: "A course on modern C++ features and best practices.",
        },
        {
          id: "6",
          title: "C++ Data Structures and Algorithms",
          channel: "CodeBeauty",
          thumbnail: "https://i.ytimg.com/vi/B31LgI4Y4DQ/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=B31LgI4Y4DQ",
          description: "Learn how to implement various data structures and algorithms in C++.",
        },
      ],
    },
    "html-css": {
      id: "html-css",
      name: "HTML/CSS",
      description: "The foundation of web development, used to structure and style web pages.",
      icon: "🌐",
      image: "/placeholder.svg?height=300&width=600",
      gradient: "from-purple-500 to-pink-500",
      roadmap: {
        beginner: [
          {
            title: "HTML Basics",
            description: "Learn HTML document structure, elements, attributes, and semantic markup.",
            resources: ["MDN Web Docs - HTML", "HTML and CSS: Design and Build Websites", "HTML5 Tutorial - W3Schools"],
          },
          {
            title: "CSS Fundamentals",
            description: "Understand CSS selectors, properties, values, and the box model.",
            resources: ["MDN Web Docs - CSS", "CSS: The Definitive Guide", "Learn to Code HTML & CSS"],
          },
          {
            title: "Typography and Colors",
            description: "Work with fonts, text styling, color systems, and backgrounds.",
            resources: ["Web Typography", "Color for Web Design", "CSS Secrets"],
          },
          {
            title: "Forms and Inputs",
            description: "Create and style forms, inputs, buttons, and validation.",
            resources: ["HTML5 Forms", "Designing UX: Forms", "MDN Web Docs - HTML Forms"],
          },
          {
            title: "Responsive Design Basics",
            description: "Learn media queries, viewport settings, and responsive units.",
            resources: [
              "Responsive Web Design Fundamentals",
              "Mobile First",
              "Responsive Web Design with HTML5 and CSS",
            ],
          },
          {
            title: "CSS Layout",
            description: "Understand display properties, positioning, and basic layouts.",
            resources: ["Learn CSS Layout", "CSS Layout Cookbook", "CSS: The Definitive Guide"],
          },
        ],
        intermediate: [
          {
            title: "CSS Flexbox",
            description: "Master flexible box layout for one-dimensional layouts.",
            resources: ["What The Flexbox", "CSS-Tricks Guide to Flexbox", "MDN Web Docs - Flexbox"],
          },
          {
            title: "CSS Grid",
            description: "Learn grid layout for complex two-dimensional layouts.",
            resources: ["CSS Grid", "CSS-Tricks Guide to Grid", "MDN Web Docs - Grid Layout"],
          },
          {
            title: "CSS Preprocessors",
            description: "Work with Sass, Less, or Stylus for enhanced CSS capabilities.",
            resources: ["Sass Basics", "Jump Start Sass", "CSS Preprocessors - Smashing Magazine"],
          },
          {
            title: "CSS Architecture",
            description: "Understand BEM, SMACSS, OOCSS, and other CSS organization methodologies.",
            resources: ["Scalable Modular Architecture for CSS", "BEM Methodology", "Enduring CSS"],
          },
          {
            title: "CSS Transitions and Animations",
            description: "Create smooth transitions, keyframe animations, and motion effects.",
            resources: [
              "CSS Animations and Transitions for the Modern Web",
              "MDN Web Docs - CSS Animations",
              "Transitions and Animations in CSS",
            ],
          },
          {
            title: "Responsive Design Advanced",
            description: "Learn responsive images, art direction, and advanced media queries.",
            resources: ["Responsive Images", "Responsive Design Patterns", "Adaptive Web Design"],
          },
        ],
        advanced: [
          {
            title: "Modern CSS Features",
            description: "Master CSS variables, custom properties, Grid subgrid, and container queries.",
            resources: ["Every Layout", "Smashing Book 6: New Frontiers in Web Design", "CSS Secrets"],
          },
          {
            title: "CSS Frameworks",
            description: "Work with Bootstrap, Tailwind CSS, Material UI, or create custom frameworks.",
            resources: ["Tailwind CSS Documentation", "Bootstrap Documentation", "Utility-First CSS"],
          },
          {
            title: "CSS-in-JS",
            description: "Learn styled-components, Emotion, CSS Modules, and other JavaScript-based styling.",
            resources: ["Styled Components", "A Complete Guide to CSS-in-JS", "The State of CSS-in-JS"],
          },
          {
            title: "Advanced Animations",
            description: "Create complex animations, scroll-based animations, and 3D effects.",
            resources: ["Advanced Animation with CSS", "CSS Animation Rocks", "Animation at Work"],
          },
          {
            title: "CSS Performance",
            description: "Optimize CSS delivery, rendering performance, and critical CSS.",
            resources: ["High Performance Web Sites", "CSS Optimization Techniques", "Web Performance in Action"],
          },
          {
            title: "Accessibility and CSS",
            description: "Create accessible designs, ensure color contrast, and support assistive technologies.",
            resources: ["Inclusive Design Patterns", "Color Accessibility Workflows", "Accessibility for Everyone"],
          },
        ],
      },
      frameworks: [
        {
          name: "Bootstrap",
          logo: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
          description: "A popular CSS framework for building responsive, mobile-first sites.",
          url: "https://getbootstrap.com/",
        },
        {
          name: "Tailwind CSS",
          logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
          description: "A utility-first CSS framework for rapidly building custom designs.",
          url: "https://tailwindcss.com/",
        },
        {
          name: "Bulma",
          logo: "https://bulma.io/images/bulma-logo.png",
          description: "A free, open source CSS framework based on Flexbox.",
          url: "https://bulma.io/",
        },
        {
          name: "Foundation",
          logo: "https://get.foundation/assets/img/learn/features/svgs/code-reduction-01.svg",
          description: "A responsive front-end framework that makes it easy to design beautiful responsive websites.",
          url: "https://get.foundation/",
        },
      ],
      libraries: [
        {
          name: "Animate.css",
          logo: "https://animate.style/img/animatecss-opengraph.jpg",
          description: "A library of ready-to-use, cross-browser animations.",
          url: "https://animate.style/",
        },
        {
          name: "Normalize.css",
          logo: "https://necolas.github.io/normalize.css/favicon.ico",
          description: "A modern, HTML5-ready alternative to CSS resets.",
          url: "https://necolas.github.io/normalize.css/",
        },
        {
          name: "Font Awesome",
          logo: "https://fontawesome.com/images/favicon/icon.svg",
          description: "A font and icon toolkit based on CSS and Less.",
          url: "https://fontawesome.com/",
        },
        {
          name: "GSAP",
          logo: "https://greensock.com/uploads/monthly_2020_03/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png",
          description: "A JavaScript library for creating high-performance animations.",
          url: "https://greensock.com/gsap/",
        },
      ],
      resources: [
        {
          name: "MDN Web Docs - HTML",
          description: "The Mozilla Developer Network's comprehensive HTML documentation.",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          type: "documentation",
          image: "https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png",
        },
        {
          name: "MDN Web Docs - CSS",
          description: "The Mozilla Developer Network's comprehensive CSS documentation.",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          type: "documentation",
          image: "https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png",
        },
        {
          name: "CSS-Tricks",
          description: "A website dedicated to teaching all things web design and development.",
          url: "https://css-tricks.com/",
          type: "tutorial",
          image: "https://css-tricks.com/wp-content/uploads/2019/06/akqRGyta_400x400.jpg",
        },
        {
          name: "HTML & CSS: Design and Build Websites",
          description: "A beautifully designed introduction to HTML and CSS.",
          url: "http://www.htmlandcssbook.com/",
          type: "book",
          image: "http://www.htmlandcssbook.com/images/book-cover.png",
        },
        {
          name: "freeCodeCamp HTML/CSS Curriculum",
          description: "A free, interactive way to learn HTML and CSS through challenges and projects.",
          url: "https://www.freecodecamp.org/learn/responsive-web-design/",
          type: "course",
          image: "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg",
        },
      ],
      videos: [
        {
          id: "1",
          title: "HTML Crash Course For Absolute Beginners",
          channel: "Traversy Media",
          thumbnail: "https://i.ytimg.com/vi/UB1O30fR-EE/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
          description: "Learn the basics of HTML in this crash course for beginners.",
        },
        {
          id: "2",
          title: "CSS Crash Course For Absolute Beginners",
          channel: "Traversy Media",
          thumbnail: "https://i.ytimg.com/vi/yfoY53QXEnI/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=yfoY53QXEnI",
          description: "Get up to speed with CSS basics and styling techniques.",
        },
        {
          id: "3",
          title: "HTML Full Course - Build a Website Tutorial",
          channel: "freeCodeCamp.org",
          thumbnail: "https://i.ytimg.com/vi/pQN-pnXPaVg/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
          description: "A complete HTML course covering all the fundamentals.",
        },
        {
          id: "4",
          title: "CSS Full Course - Includes Flexbox and CSS Grid Tutorials",
          channel: "freeCodeCamp.org",
          thumbnail: "https://i.ytimg.com/vi/ieTHC78giGQ/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=ieTHC78giGQ",
          description: "A comprehensive CSS course covering basic to advanced concepts.",
        },
        {
          id: "5",
          title: "Responsive Web Design Tutorial For Beginners",
          channel: "Dev Ed",
          thumbnail: "https://i.ytimg.com/vi/ZeDP-rzOnAA/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=ZeDP-rzOnAA",
          description: "Learn how to create responsive websites that work on all devices.",
        },
        {
          id: "6",
          title: "Learn Flexbox in 15 Minutes",
          channel: "Web Dev Simplified",
          thumbnail: "https://i.ytimg.com/vi/fYq5PXgSsbE/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=fYq5PXgSsbE",
          description: "A quick tutorial on CSS Flexbox for modern layouts.",
        },
      ],
    },
  }

  const language = languageData[languageId]

  if (!language) {
    router.push("/learning")
    return null
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link href="/learning">
          <Button variant="outline" size="sm" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Learning
          </Button>
        </Link>
      </motion.div>

      <div className="relative mb-12 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm"></div>
        <Image
          src={language.image || "/placeholder.svg"}
          alt={`${language.name} programming language`}
          width={600}
          height={300}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="bg-white/80 backdrop-blur-sm p-6 mx-6 rounded-xl shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-5xl">{language.icon}</span>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
                {language.name}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-800"
            >
              {language.description}
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
        <Tabs defaultValue="roadmap" className="mb-12">
          <TabsList className="mb-6 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger value="roadmap" className="data-[state=active]:bg-white data-[state=active]:text-purple-700">
              <Layers className="mr-2 h-4 w-4" />
              Roadmap
            </TabsTrigger>
            <TabsTrigger value="frameworks" className="data-[state=active]:bg-white data-[state=active]:text-blue-700">
              <Code className="mr-2 h-4 w-4" />
              Frameworks
            </TabsTrigger>
            <TabsTrigger value="libraries" className="data-[state=active]:bg-white data-[state=active]:text-green-700">
              <FileText className="mr-2 h-4 w-4" />
              Libraries
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-white data-[state=active]:text-red-700">
              <Youtube className="mr-2 h-4 w-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-white data-[state=active]:text-orange-700">
              <BookOpen className="mr-2 h-4 w-4" />
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="roadmap">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center text-green-600">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                  </div>
                  Beginner Level
                </h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="relative border-l-2 border-green-200 pl-6 pb-6 ml-3"
                >
                  {language.roadmap.beginner.map((item, index) => (
                    <motion.div key={index} variants={item} className="mb-10 relative">
                      <div className="absolute w-4 h-4 bg-green-400 rounded-full -left-[34px] top-1"></div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        {item.resources && (
                          <div>
                            <h5 className="text-sm font-semibold text-gray-700 mb-2">Recommended Resources:</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              {item.resources.map((resource, idx) => (
                                <li key={idx} className="text-sm text-gray-500">
                                  {resource}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center text-blue-600">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  Intermediate Level
                </h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="relative border-l-2 border-blue-200 pl-6 pb-6 ml-3"
                >
                  {language.roadmap.intermediate.map((item, index) => (
                    <motion.div key={index} variants={item} className="mb-10 relative">
                      <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[34px] top-1"></div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        {item.resources && (
                          <div>
                            <h5 className="text-sm font-semibold text-gray-700 mb-2">Recommended Resources:</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              {item.resources.map((resource, idx) => (
                                <li key={idx} className="text-sm text-gray-500">
                                  {resource}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center text-purple-600">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Layers className="h-6 w-6 text-purple-600" />
                  </div>
                  Advanced Level
                </h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="relative border-l-2 border-purple-200 pl-6 pb-6 ml-3"
                >
                  {language.roadmap.advanced.map((item, index) => (
                    <motion.div key={index} variants={item} className="mb-10 relative">
                      <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-[34px] top-1"></div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        {item.resources && (
                          <div>
                            <h5 className="text-sm font-semibold text-gray-700 mb-2">Recommended Resources:</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              {item.resources.map((resource, idx) => (
                                <li key={idx} className="text-sm text-gray-500">
                                  {resource}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="frameworks">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {language.frameworks.map((framework, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-blue-500 h-full overflow-hidden group">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-blue-50 flex items-center justify-center">
                          <Image
                            src={framework.logo || "/placeholder.svg"}
                            alt={framework.name}
                            width={60}
                            height={60}
                            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <CardTitle>{framework.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{framework.description}</p>
                      <a
                        href={framework.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center group"
                      >
                        Official Website{" "}
                        <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="libraries">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {language.libraries.map((library, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-green-500 h-full overflow-hidden group">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-green-50 flex items-center justify-center">
                          <Image
                            src={library.logo || "/placeholder.svg"}
                            alt={library.name}
                            width={60}
                            height={60}
                            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <CardTitle>{library.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{library.description}</p>
                      <a
                        href={library.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline flex items-center group"
                      >
                        Official Website{" "}
                        <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="videos">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {language.videos.map((video, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-red-500 h-full overflow-hidden">
                    <div className="relative">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        width={210}
                        height={120}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="bg-red-600 rounded-full p-3">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base line-clamp-1">{video.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <Youtube className="h-3 w-3" />
                        {video.channel}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                    </CardContent>
                    <CardFooter>
                      <a href={video.url} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="outline" className="w-full border-red-500 text-red-600 hover:bg-red-50">
                          Watch Video <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-orange-500" />
                  Documentation
                </h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {language.resources
                    .filter((resource) => resource.type === "documentation")
                    .map((resource, index) => (
                      <motion.div key={index} variants={item}>
                        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 overflow-hidden flex flex-col md:flex-row h-full">
                          <div className="md:w-1/3 p-4">
                            <Image
                              src={resource.image || "/placeholder.svg"}
                              alt={resource.name}
                              width={300}
                              height={150}
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div className="md:w-2/3">
                            <CardHeader>
                              <CardTitle>{resource.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 mb-4">{resource.description}</p>
                              <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:underline flex items-center group"
                              >
                                Visit Resource{" "}
                                <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </a>
                            </CardContent>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                </motion.div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="mr-2 h-5 w-5 text-blue-500" />
                  Tutorials
                </h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {language.resources
                    .filter((resource) => resource.type === "tutorial")
                    .map((resource, index) => (
                      <motion.div key={index} variants={item}>
                        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 overflow-hidden flex flex-col md:flex-row h-full">
                          <div className="md:w-1/3 p-4">
                            <Image
                              src={resource.image || "/placeholder.svg"}
                              alt={resource.name}
                              width={300}
                              height={150}
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div className="md:w-2/3">
                            <CardHeader>
                              <CardTitle>{resource.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 mb-4">{resource.description}</p>
                              <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline flex items-center group"
                              >
                                Visit Resource{" "}
                                <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </a>
                            </CardContent>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                </motion.div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-purple-500" />
                  Books
                </h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {language.resources
                    .filter((resource) => resource.type === "book")
                    .map((resource, index) => (
                      <motion.div key={index} variants={item}>
                        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500 overflow-hidden flex flex-col md:flex-row h-full">
                          <div className="md:w-1/3 p-4">
                            <Image
                              src={resource.image || "/placeholder.svg"}
                              alt={resource.name}
                              width={300}
                              height={150}
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div className="md:w-2/3">
                            <CardHeader>
                              <CardTitle>{resource.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 mb-4">{resource.description}</p>
                              <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:underline flex items-center group"
                              >
                                View Book{" "}
                                <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </a>
                            </CardContent>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                </motion.div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-green-500" />
                  Courses
                </h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {language.resources
                    .filter((resource) => resource.type === "course")
                    .map((resource, index) => (
                      <motion.div key={index} variants={item}>
                        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500 overflow-hidden flex flex-col md:flex-row h-full">
                          <div className="md:w-1/3 p-4">
                            <Image
                              src={resource.image || "/placeholder.svg"}
                              alt={resource.name}
                              width={300}
                              height={150}
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div className="md:w-2/3">
                            <CardHeader>
                              <CardTitle>{resource.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 mb-4">{resource.description}</p>
                              <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:underline flex items-center group"
                              >
                                Start Learning{" "}
                                <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </a>
                            </CardContent>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                </motion.div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
