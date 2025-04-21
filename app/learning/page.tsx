"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface Language {
  id: string
  name: string
  description: string
  icon: string
  color: string
  gradient: string
}

export default function LearningPage() {
  const languages: Language[] = [
    {
      id: "python",
      name: "Python",
      description: "A versatile language used for web development, data science, AI, and automation.",
      icon: "🐍",
      color: "bg-blue-100 border-blue-300",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "javascript",
      name: "JavaScript",
      description: "The language of the web, used for frontend, backend, mobile, and desktop applications.",
      icon: "🟨",
      color: "bg-yellow-100 border-yellow-300",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      id: "java",
      name: "Java",
      description: "A robust language used for enterprise applications, Android development, and more.",
      icon: "☕",
      color: "bg-red-100 border-red-300",
      gradient: "from-red-500 to-orange-500",
    },
    {
      id: "cpp",
      name: "C++",
      description: "A powerful language used for system/software development, game development, and more.",
      icon: "🔷",
      color: "bg-blue-100 border-blue-300",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      id: "rust",
      name: "Rust",
      description: "A language focused on safety, speed, and concurrency without a garbage collector.",
      icon: "⚙️",
      color: "bg-orange-100 border-orange-300",
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: "go",
      name: "Go",
      description: "A language designed for simplicity, reliability, and efficiency in large-scale systems.",
      icon: "🔵",
      color: "bg-cyan-100 border-cyan-300",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: "html-css",
      name: "HTML/CSS",
      description: "The foundation of web development, used to structure and style web pages.",
      icon: "🌐",
      color: "bg-purple-100 border-purple-300",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          Learning Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive guides, roadmaps, and resources to help you master programming languages and frameworks.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {languages.map((language) => (
          <motion.div key={language.id} variants={item}>
            <Card
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 border-2 ${language.color} hover:scale-105 transform`}
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{language.icon}</span>
                  <CardTitle>{language.name}</CardTitle>
                </div>
                <CardDescription>{language.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn {language.name} from beginner to advanced with our comprehensive roadmap and curated resources.
                </p>
              </CardContent>
              <CardFooter>
                <Link href={`/learning/${language.id}`} className="w-full">
                  <Button className={`w-full bg-gradient-to-r ${language.gradient} hover:opacity-90 group`}>
                    View Roadmap
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
