"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Briefcase,
  Clock,
  DollarSign,
  Globe,
  GraduationCap,
  MapPin,
  Search,
  Code,
  Database,
  BarChart,
  Server,
  Layout,
  Smartphone,
  Cpu,
  Lock,
  Palette,
  Monitor,
} from "lucide-react"

interface Job {
  id: number
  title: string
  company: string
  logo: string
  location: string
  salary: string
  type: "full-time" | "remote" | "internship"
  category: string
  description: string
  requirements: string[]
  postedDate: string
  applicationUrl: string
}

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const jobs: Job[] = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      location: "Mountain View, CA",
      salary: "$120,000 - $180,000",
      type: "full-time",
      category: "Engineering",
      description: "Join Google's engineering team to build products that help billions of people around the world.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of software development experience",
        "Proficiency in one or more programming languages (Java, C++, Python)",
        "Experience with web technologies and cloud platforms",
      ],
      postedDate: "2 days ago",
      applicationUrl: "https://careers.google.com/jobs/results/",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      location: "Redmond, WA",
      salary: "$110,000 - $160,000",
      type: "full-time",
      category: "Frontend",
      description: "Build the next generation of Microsoft's web applications and user interfaces.",
      requirements: [
        "3+ years of experience with JavaScript, HTML, and CSS",
        "Experience with modern frontend frameworks (React, Angular, Vue)",
        "Understanding of responsive design principles",
        "Knowledge of web performance optimization",
      ],
      postedDate: "1 week ago",
      applicationUrl: "https://careers.microsoft.com/",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      location: "Seattle, WA",
      salary: "$130,000 - $190,000",
      type: "full-time",
      category: "Data Science",
      description: "Apply machine learning and statistical analysis to solve complex business problems at Amazon.",
      requirements: [
        "Master's or PhD in Computer Science, Statistics, or related field",
        "Experience with Python, R, and SQL",
        "Knowledge of machine learning algorithms and statistical modeling",
        "Experience with big data technologies",
      ],
      postedDate: "3 days ago",
      applicationUrl: "https://www.amazon.jobs/",
    },
    {
      id: 4,
      title: "Product Manager",
      company: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
      location: "Cupertino, CA",
      salary: "$140,000 - $200,000",
      type: "full-time",
      category: "Product",
      description: "Lead product development for Apple's innovative technologies and services.",
      requirements: [
        "5+ years of product management experience",
        "Strong technical background",
        "Excellent communication and leadership skills",
        "Experience shipping consumer products",
      ],
      postedDate: "5 days ago",
      applicationUrl: "https://www.apple.com/careers/",
    },
    {
      id: 5,
      title: "UX/UI Designer",
      company: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
      location: "Los Gatos, CA",
      salary: "$115,000 - $170,000",
      type: "full-time",
      category: "Design",
      description: "Design engaging user experiences for Netflix's streaming platform across multiple devices.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency with design tools (Figma, Sketch, Adobe XD)",
        "Portfolio demonstrating strong visual design skills",
        "Experience with user research and testing",
      ],
      postedDate: "1 week ago",
      applicationUrl: "https://jobs.netflix.com/",
    },
    {
      id: 6,
      title: "Software Engineering Intern",
      company: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png",
      location: "Menlo Park, CA",
      salary: "$8,000 - $10,000/month",
      type: "internship",
      category: "Engineering",
      description: "Join Meta for a summer internship working on cutting-edge technologies.",
      requirements: [
        "Currently pursuing a degree in Computer Science or related field",
        "Programming experience in one or more languages",
        "Strong problem-solving skills",
        "Available for a 12-week internship",
      ],
      postedDate: "2 weeks ago",
      applicationUrl: "https://www.metacareers.com/jobs/",
    },
    {
      id: 7,
      title: "Data Engineering Intern",
      company: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png",
      location: "Sunnyvale, CA",
      salary: "$7,500 - $9,000/month",
      type: "internship",
      category: "Data Science",
      description: "Work with LinkedIn's data team to build scalable data pipelines and infrastructure.",
      requirements: [
        "Currently pursuing a degree in Computer Science, Data Science, or related field",
        "Experience with SQL and Python",
        "Knowledge of data structures and algorithms",
        "Interest in big data technologies",
      ],
      postedDate: "3 days ago",
      applicationUrl: "https://careers.linkedin.com/",
    },
    {
      id: 8,
      title: "Product Design Intern",
      company: "Airbnb",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png",
      location: "San Francisco, CA",
      salary: "$7,000 - $8,500/month",
      type: "internship",
      category: "Design",
      description: "Join Airbnb's design team to create beautiful and functional user experiences.",
      requirements: [
        "Currently pursuing a degree in Design, HCI, or related field",
        "Proficiency with design tools",
        "Understanding of user-centered design principles",
        "Portfolio demonstrating design skills",
      ],
      postedDate: "1 week ago",
      applicationUrl: "https://careers.airbnb.com/",
    },
    {
      id: 9,
      title: "Remote Software Engineer",
      company: "Shopify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png",
      location: "Remote",
      salary: "$100,000 - $160,000",
      type: "remote",
      category: "Engineering",
      description: "Build and maintain Shopify's e-commerce platform from anywhere in the world.",
      requirements: [
        "3+ years of software development experience",
        "Experience with Ruby on Rails or similar frameworks",
        "Strong communication skills",
        "Self-motivated and able to work independently",
      ],
      postedDate: "4 days ago",
      applicationUrl: "https://www.shopify.com/careers",
    },
    {
      id: 10,
      title: "Remote DevOps Engineer",
      company: "GitLab",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/1280px-GitLab_logo.svg.png",
      location: "Remote",
      salary: "$110,000 - $170,000",
      type: "remote",
      category: "DevOps",
      description: "Join GitLab's all-remote team to build and maintain infrastructure and deployment pipelines.",
      requirements: [
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Knowledge of containerization and orchestration (Docker, Kubernetes)",
        "Experience with CI/CD pipelines",
        "Strong scripting skills (Bash, Python)",
      ],
      postedDate: "2 days ago",
      applicationUrl: "https://about.gitlab.com/jobs/",
    },
    {
      id: 11,
      title: "Remote Frontend Developer",
      company: "Automattic",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png",
      location: "Remote",
      salary: "$90,000 - $140,000",
      type: "remote",
      category: "Frontend",
      description:
        "Build and improve WordPress.com and other Automattic products from anywhere with an internet connection.",
      requirements: [
        "Experience with JavaScript and React",
        "Knowledge of HTML, CSS, and responsive design",
        "Excellent written communication skills",
        "Self-directed and comfortable working asynchronously",
      ],
      postedDate: "1 week ago",
      applicationUrl: "https://automattic.com/work-with-us/",
    },
    {
      id: 12,
      title: "Remote Customer Success Manager",
      company: "Zapier",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/1280px-Zapier_logo.svg.png",
      location: "Remote",
      salary: "$80,000 - $120,000",
      type: "remote",
      category: "Support",
      description: "Help Zapier's customers succeed with the platform while working from anywhere in the world.",
      requirements: [
        "2+ years of customer success or support experience",
        "Technical aptitude and ability to learn new tools quickly",
        "Excellent written and verbal communication skills",
        "Experience with SaaS products",
      ],
      postedDate: "3 days ago",
      applicationUrl: "https://zapier.com/jobs/",
    },
    {
      id: 13,
      title: "Machine Learning Engineer",
      company: "NVIDIA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png",
      location: "Santa Clara, CA",
      salary: "$140,000 - $200,000",
      type: "full-time",
      category: "AI/ML",
      description: "Develop cutting-edge machine learning algorithms and models for NVIDIA's AI platforms.",
      requirements: [
        "Master's or PhD in Computer Science, Machine Learning, or related field",
        "Experience with deep learning frameworks (PyTorch, TensorFlow)",
        "Strong programming skills in Python",
        "Knowledge of computer vision or natural language processing",
      ],
      postedDate: "5 days ago",
      applicationUrl: "https://www.nvidia.com/en-us/about-nvidia/careers/",
    },
    {
      id: 14,
      title: "Cloud Solutions Architect",
      company: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
      location: "Austin, TX",
      salary: "$120,000 - $180,000",
      type: "full-time",
      category: "Cloud",
      description: "Design and implement cloud solutions for Oracle's enterprise customers.",
      requirements: [
        "5+ years of experience in cloud architecture",
        "Knowledge of Oracle Cloud Infrastructure or other cloud platforms",
        "Experience with enterprise architecture",
        "Strong customer-facing skills",
      ],
      postedDate: "1 week ago",
      applicationUrl: "https://www.oracle.com/corporate/careers/",
    },
    {
      id: 15,
      title: "Cybersecurity Analyst",
      company: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
      location: "Armonk, NY",
      salary: "$100,000 - $150,000",
      type: "full-time",
      category: "Security",
      description: "Protect IBM's systems and data from security threats and vulnerabilities.",
      requirements: [
        "3+ years of experience in cybersecurity",
        "Knowledge of security frameworks and best practices",
        "Experience with security tools and technologies",
        "Security certifications (CISSP, CEH, etc.) preferred",
      ],
      postedDate: "3 days ago",
      applicationUrl: "https://www.ibm.com/careers/",
    },
    {
      id: 16,
      title: "Mobile App Development Intern",
      company: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
      location: "New York, NY",
      salary: "$7,000 - $9,000/month",
      type: "internship",
      category: "Mobile",
      description: "Join Spotify's mobile team to build features for their iOS and Android apps.",
      requirements: [
        "Currently pursuing a degree in Computer Science or related field",
        "Experience with iOS (Swift) or Android (Kotlin) development",
        "Understanding of mobile design patterns",
        "Passion for music and audio technology",
      ],
      postedDate: "2 weeks ago",
      applicationUrl: "https://www.lifeatspotify.com/jobs",
    },
    {
      id: 17,
      title: "Remote Technical Writer",
      company: "Atlassian",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Atlassian-logo.svg/1280px-Atlassian-logo.svg.png",
      location: "Remote",
      salary: "$85,000 - $130,000",
      type: "remote",
      category: "Documentation",
      description: "Create clear, concise, and helpful documentation for Atlassian's suite of products.",
      requirements: [
        "Experience writing technical documentation",
        "Strong writing and editing skills",
        "Ability to explain complex concepts simply",
        "Familiarity with developer tools and workflows",
      ],
      postedDate: "6 days ago",
      applicationUrl: "https://www.atlassian.com/company/careers",
    },
    {
      id: 18,
      title: "AI Research Intern",
      company: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1280px-OpenAI_Logo.svg.png",
      location: "San Francisco, CA",
      salary: "$8,500 - $10,500/month",
      type: "internship",
      category: "AI/ML",
      description: "Contribute to cutting-edge AI research at one of the world's leading AI labs.",
      requirements: [
        "Currently pursuing a PhD in Computer Science, Machine Learning, or related field",
        "Strong background in deep learning",
        "Programming experience in Python",
        "Published research papers preferred",
      ],
      postedDate: "1 week ago",
      applicationUrl: "https://openai.com/careers",
    },
    {
      id: 19,
      title: "Graphic Designer",
      company: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1280px-Adobe_Corporate_Logo.png",
      location: "San Jose, CA",
      salary: "$85,000 - $130,000",
      type: "full-time",
      category: "Design",
      description: "Create visually stunning graphics and brand materials for Adobe's marketing campaigns.",
      requirements: [
        "3+ years of experience in graphic design",
        "Proficiency with Adobe Creative Suite",
        "Strong portfolio of creative work",
        "Experience with both print and digital design",
      ],
      postedDate: "4 days ago",
      applicationUrl: "https://www.adobe.com/careers.html",
    },
    {
      id: 20,
      title: "Data Analyst",
      company: "Tableau",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tableau_Logo.png/1200px-Tableau_Logo.png",
      location: "Seattle, WA",
      salary: "$80,000 - $120,000",
      type: "full-time",
      category: "Data Analytics",
      description: "Transform complex data into actionable insights using Tableau's powerful analytics platform.",
      requirements: [
        "Bachelor's degree in Analytics, Statistics, Computer Science, or related field",
        "2+ years of experience in data analysis",
        "Proficiency with SQL and Excel",
        "Experience with data visualization tools, preferably Tableau",
      ],
      postedDate: "1 week ago",
      applicationUrl: "https://www.tableau.com/about/careers",
    },
    {
      id: 21,
      title: "Java Developer",
      company: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
      location: "Austin, TX",
      salary: "$100,000 - $150,000",
      type: "full-time",
      category: "Backend",
      description: "Develop and maintain enterprise Java applications for Oracle's cloud platform.",
      requirements: [
        "5+ years of Java development experience",
        "Experience with Spring Framework",
        "Knowledge of relational databases and SQL",
        "Understanding of microservices architecture",
      ],
      postedDate: "3 days ago",
      applicationUrl: "https://www.oracle.com/corporate/careers/",
    },
    {
      id: 22,
      title: "Python Developer",
      company: "Dropbox",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dropbox_logo.svg/1280px-Dropbox_logo.svg.png",
      location: "San Francisco, CA",
      salary: "$110,000 - $160,000",
      type: "full-time",
      category: "Backend",
      description: "Build and scale Dropbox's backend services using Python.",
      requirements: [
        "3+ years of Python development experience",
        "Experience with web frameworks like Django or Flask",
        "Knowledge of database systems",
        "Understanding of cloud infrastructure",
      ],
      postedDate: "5 days ago",
      applicationUrl: "https://www.dropbox.com/jobs",
    },
    {
      id: 23,
      title: "React Developer",
      company: "Airbnb",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png",
      location: "San Francisco, CA",
      salary: "$120,000 - $170,000",
      type: "full-time",
      category: "Frontend",
      description: "Create beautiful and responsive user interfaces for Airbnb's web platform using React.",
      requirements: [
        "3+ years of experience with React.js",
        "Strong knowledge of JavaScript, HTML, and CSS",
        "Experience with state management (Redux, Context API)",
        "Understanding of modern frontend build tools",
      ],
      postedDate: "2 days ago",
      applicationUrl: "https://careers.airbnb.com/",
    },
    {
      id: 24,
      title: "Full Stack Developer",
      company: "Slack",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png",
      location: "San Francisco, CA",
      salary: "$130,000 - $180,000",
      type: "full-time",
      category: "Full Stack",
      description: "Build and maintain features across Slack's web, desktop, and mobile platforms.",
      requirements: [
        "4+ years of full stack development experience",
        "Proficiency with React and Node.js",
        "Experience with relational databases",
        "Understanding of API design and implementation",
      ],
      postedDate: "1 week ago",
      applicationUrl: "https://slack.com/careers",
    },
    {
      id: 25,
      title: "DevOps Engineer",
      company: "Twilio",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/1280px-Twilio-logo-red.svg.png",
      location: "Denver, CO",
      salary: "$120,000 - $170,000",
      type: "full-time",
      category: "DevOps",
      description: "Build and maintain Twilio's cloud infrastructure and deployment pipelines.",
      requirements: [
        "3+ years of DevOps or SRE experience",
        "Experience with AWS or GCP",
        "Knowledge of infrastructure as code (Terraform, CloudFormation)",
        "Experience with CI/CD tools and practices",
      ],
      postedDate: "6 days ago",
      applicationUrl: "https://www.twilio.com/company/jobs",
    },
    {
      id: 26,
      title: "UI Designer",
      company: "Square",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Square_Logo.svg/1200px-Square_Logo.svg.png",
      location: "San Francisco, CA",
      salary: "$100,000 - $150,000",
      type: "full-time",
      category: "Design",
      description: "Design intuitive and beautiful user interfaces for Square's financial products.",
      requirements: [
        "3+ years of UI design experience",
        "Proficiency with design tools (Figma, Sketch)",
        "Portfolio showcasing user-centered design",
        "Experience designing for multiple platforms",
      ],
      postedDate: "4 days ago",
      applicationUrl: "https://careers.squareup.com/us/en",
    },
    {
      id: 27,
      title: "Product Designer",
      company: "Lyft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/1280px-Lyft_logo.svg.png",
      location: "San Francisco, CA",
      salary: "$110,000 - $160,000",
      type: "full-time",
      category: "Design",
      description: "Shape the future of transportation as a product designer at Lyft.",
      requirements: [
        "4+ years of product design experience",
        "Strong portfolio demonstrating end-to-end design process",
        "Experience with user research and usability testing",
        "Ability to create high-fidelity prototypes",
      ],
      postedDate: "1 week ago",
      applicationUrl: "https://www.lyft.com/careers",
    },
    {
      id: 28,
      title: "Database Administrator",
      company: "MongoDB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
      location: "New York, NY",
      salary: "$110,000 - $160,000",
      type: "full-time",
      category: "Database",
      description: "Manage and optimize MongoDB's database systems for performance and reliability.",
      requirements: [
        "5+ years of database administration experience",
        "Experience with MongoDB and other NoSQL databases",
        "Knowledge of database security and backup strategies",
        "Understanding of database performance tuning",
      ],
      postedDate: "3 days ago",
      applicationUrl: "https://www.mongodb.com/careers",
    },
    {
      id: 29,
      title: "Remote Business Analyst",
      company: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
      location: "Remote",
      salary: "$90,000 - $140,000",
      type: "remote",
      category: "Business",
      description: "Help Salesforce clients optimize their business processes and maximize their use of the platform.",
      requirements: [
        "3+ years of business analysis experience",
        "Salesforce certification preferred",
        "Strong analytical and problem-solving skills",
        "Excellent communication and presentation abilities",
      ],
      postedDate: "5 days ago",
      applicationUrl: "https://www.salesforce.com/company/careers/",
    },
    {
      id: 30,
      title: "Mobile App Designer",
      company: "Uber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
      location: "San Francisco, CA",
      salary: "$115,000 - $165,000",
      type: "full-time",
      category: "Design",
      description: "Design intuitive and engaging mobile experiences for Uber's global user base.",
      requirements: [
        "4+ years of mobile design experience",
        "Portfolio showcasing mobile app design work",
        "Experience with iOS and Android design patterns",
        "Knowledge of motion design and microinteractions",
      ],
      postedDate: "2 days ago",
      applicationUrl: "https://www.uber.com/us/en/careers/",
    },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation =
      locationFilter === "all" ||
      (locationFilter === "remote" && job.location === "Remote") ||
      (locationFilter !== "remote" && job.location.includes(locationFilter))
    const matchesCategory = categoryFilter === "all" || job.category.toLowerCase() === categoryFilter.toLowerCase()
    return matchesSearch && matchesLocation && matchesCategory
  })

  const fullTimeJobs = filteredJobs.filter((job) => job.type === "full-time")
  const internships = filteredJobs.filter((job) => job.type === "internship")
  const remoteJobs = filteredJobs.filter((job) => job.type === "remote")

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
    show: { opacity: 1, y: 0 },
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "engineering":
        return <Code className="h-5 w-5 text-purple-500" />
      case "data science":
      case "data analytics":
        return <BarChart className="h-5 w-5 text-blue-500" />
      case "design":
        return <Palette className="h-5 w-5 text-pink-500" />
      case "frontend":
        return <Layout className="h-5 w-5 text-orange-500" />
      case "backend":
        return <Server className="h-5 w-5 text-indigo-500" />
      case "full stack":
        return <Code className="h-5 w-5 text-green-500" />
      case "ai/ml":
        return <Cpu className="h-5 w-5 text-red-500" />
      case "mobile":
        return <Smartphone className="h-5 w-5 text-cyan-500" />
      case "cloud":
        return <Globe className="h-5 w-5 text-sky-500" />
      case "security":
        return <Lock className="h-5 w-5 text-red-500" />
      case "devops":
        return <Server className="h-5 w-5 text-amber-500" />
      case "database":
        return <Database className="h-5 w-5 text-emerald-500" />
      case "product":
        return <Monitor className="h-5 w-5 text-violet-500" />
      case "business":
        return <BarChart className="h-5 w-5 text-yellow-500" />
      default:
        return <Briefcase className="h-5 w-5 text-gray-500" />
    }
  }

  const JobCard = ({ job }: { job: Job }) => (
    <motion.div variants={item}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500 relative bg-white h-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md overflow-hidden bg-white flex items-center justify-center border border-gray-200">
                <Image
                  src={job.logo || "/placeholder.svg"}
                  alt={`${job.company} logo`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <CardTitle className="text-xl mb-1 flex items-center gap-2">
                  {job.title}
                  {job.postedDate.includes("day") && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 ml-2">
                      New
                    </Badge>
                  )}
                </CardTitle>
                <p className="text-gray-600 font-medium">{job.company}</p>
              </div>
            </div>
            <Badge
              variant="outline"
              className={
                job.type === "full-time"
                  ? "bg-blue-100 text-blue-800 border-blue-300"
                  : job.type === "remote"
                    ? "bg-green-100 text-green-800 border-green-300"
                    : "bg-purple-100 text-purple-800 border-purple-300"
              }
            >
              {job.type === "full-time" ? "Full-Time" : job.type === "remote" ? "Remote" : "Internship"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pb-4">
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center text-sm bg-gray-100 px-3 py-1 rounded-full">
              <MapPin className="mr-1 h-3 w-3 text-gray-500" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-sm bg-gray-100 px-3 py-1 rounded-full">
              <DollarSign className="mr-1 h-3 w-3 text-gray-500" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center text-sm bg-gray-100 px-3 py-1 rounded-full">
              <Clock className="mr-1 h-3 w-3 text-gray-500" />
              <span>Posted {job.postedDate}</span>
            </div>
            <div className="flex items-center text-sm bg-purple-100 px-3 py-1 rounded-full">
              {getCategoryIcon(job.category)}
              <span className="ml-1">{job.category}</span>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{job.description}</p>
          <div className="space-y-2">
            <p className="font-medium text-gray-800">Requirements:</p>
            <ul className="list-disc pl-5 space-y-1">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-sm text-gray-600">
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 pt-3 pb-3 mt-auto">
          <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Apply Now
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          Job Opportunities
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find your perfect role at leading technology companies worldwide.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8 grid grid-cols-1 md:grid-cols-12 gap-4"
      >
        <div className="relative flex-grow md:col-span-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search jobs by title, company, or keywords..."
            className="pl-10 border-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="md:col-span-3">
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="CA">California</SelectItem>
              <SelectItem value="WA">Washington</SelectItem>
              <SelectItem value="NY">New York</SelectItem>
              <SelectItem value="TX">Texas</SelectItem>
              <SelectItem value="CO">Colorado</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-3">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Data Science">Data Science</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="Frontend">Frontend</SelectItem>
              <SelectItem value="Backend">Backend</SelectItem>
              <SelectItem value="Full Stack">Full Stack</SelectItem>
              <SelectItem value="DevOps">DevOps</SelectItem>
              <SelectItem value="Mobile">Mobile</SelectItem>
              <SelectItem value="AI/ML">AI/ML</SelectItem>
              <SelectItem value="Product">Product</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="Database">Database</SelectItem>
              <SelectItem value="Security">Security</SelectItem>
              <SelectItem value="Cloud">Cloud</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mb-6 bg-gray-100 p-1 rounded-lg overflow-x-auto flex whitespace-nowrap">
            <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-purple-700">
              All Jobs ({filteredJobs.length})
            </TabsTrigger>
            <TabsTrigger value="full-time" className="data-[state=active]:bg-white data-[state=active]:text-blue-700">
              <Briefcase className="mr-2 h-4 w-4" />
              Full-Time ({fullTimeJobs.length})
            </TabsTrigger>
            <TabsTrigger
              value="internships"
              className="data-[state=active]:bg-white data-[state=active]:text-purple-700"
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              Internships ({internships.length})
            </TabsTrigger>
            <TabsTrigger value="remote" className="data-[state=active]:bg-white data-[state=active]:text-green-700">
              <Globe className="mr-2 h-4 w-4" />
              Remote ({remoteJobs.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {filteredJobs.length > 0 ? (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="No jobs found"
                  width={150}
                  height={150}
                  className="mx-auto mb-4 opacity-50"
                />
                <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="full-time">
            {fullTimeJobs.length > 0 ? (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {fullTimeJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="No full-time jobs found"
                  width={150}
                  height={150}
                  className="mx-auto mb-4 opacity-50"
                />
                <p className="text-gray-500 text-lg">No full-time jobs found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="internships">
            {internships.length > 0 ? (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {internships.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="No internships found"
                  width={150}
                  height={150}
                  className="mx-auto mb-4 opacity-50"
                />
                <p className="text-gray-500 text-lg">No internships found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="remote">
            {remoteJobs.length > 0 ? (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {remoteJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="No remote jobs found"
                  width={150}
                  height={150}
                  className="mx-auto mb-4 opacity-50"
                />
                <p className="text-gray-500 text-lg">No remote jobs found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
