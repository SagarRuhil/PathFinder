"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Youtube, Instagram, Mail, Github } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          About PathFinder
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connecting talented developers with the best opportunities in the tech industry.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md mx-auto aspect-square rounded-xl overflow-hidden shadow-xl">
            <Image src="/images/profile-picture.png" alt="Sagar Sunil" fill className="object-cover" priority />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet the Developer</h2>
          <h3 className="text-2xl font-semibold mb-3 text-purple-600">Sagar Sunil</h3>
          <p className="text-gray-600 mb-6">
            I'm a passionate full-stack developer with expertise in modern web technologies. I created PathFinder to
            help connect talented developers with great opportunities in the tech industry. My goal is to make the job
            search process easier and more efficient for both job seekers and employers.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link href="https://www.linkedin.com/in/sagarruhil" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://youtube.com/@SamRuhil" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-300"
              >
                <Youtube className="h-4 w-4" />
                YouTube
              </Button>
            </Link>
            <Link href="https://instagram.com/itssamruhil" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </Button>
            </Link>
            <Link href="https://github.com/sagarruhil" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-400"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </Link>
            <Link href="mailto:sagarruhil999@gmail.com">
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300"
              >
                <Mail className="h-4 w-4" />
                Contact
              </Button>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
            <p className="text-gray-700 italic">
              "I believe that the right job can transform someone's career. My mission is to create a platform that
              makes finding that perfect tech role easier and more accessible for everyone."
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-purple-500">
            <CardContent className="pt-6">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-purple-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Connect Talent</h3>
              <div className="mt-4 mb-4 flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Connect Talent"
                  width={200}
                  height={120}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              <p className="text-gray-600 text-center">
                We aim to connect talented developers and tech professionals with companies that value their skills and
                offer growth opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-pink-500">
            <CardContent className="pt-6">
              <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-pink-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.734z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Foster Learning</h3>
              <div className="mt-4 mb-4 flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
                  alt="Foster Learning"
                  width={200}
                  height={120}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              <p className="text-gray-600 text-center">
                We provide resources and opportunities for continuous learning and skill development in the
                ever-evolving tech landscape.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-blue-500">
            <CardContent className="pt-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Build Community</h3>
              <div className="mt-4 mb-4 flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop"
                  alt="Build Community"
                  width={200}
                  height={120}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              <p className="text-gray-600 text-center">
                We create spaces for tech professionals to connect, collaborate, and support each other in their career
                journeys.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
