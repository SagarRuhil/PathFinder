"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CompanyGrid from "@/components/company-grid"
import { ArrowRight, Briefcase, Calendar, GraduationCap, Globe, Sparkles, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-3xl -z-10"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 pt-16 px-4"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              className="relative w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center"
            >
              <Briefcase className="h-12 w-12 text-white" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </motion.div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Find Your Dream Tech Job
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with top tech companies and start your journey towards a rewarding career in technology.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div variants={item}>
            <Card className="shadow-lg border-t-4 border-purple-500 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                Popular
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-purple-500" />
                  <span>Explore Jobs</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop"
                    alt="Explore jobs"
                    width={320}
                    height={180}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-gray-600">
                  Browse through internships, remote positions, and full-time roles at top tech companies.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/jobs" className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 group">
                    View Jobs <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="shadow-lg border-t-4 border-pink-500 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-pink-500" />
                  <span>Tech Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
                    alt="Tech events"
                    width={320}
                    height={180}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-gray-600">
                  Stay updated with the latest hackathons, conferences, and workshops in the tech industry.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/events" className="w-full">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 group">
                    View Events <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                  <span>Learning Resources</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                    alt="Learning resources"
                    width={320}
                    height={180}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-gray-600">
                  Access comprehensive roadmaps and resources to learn programming languages and frameworks.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/learning" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 group">
                    Start Learning{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Top Tech Companies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apply directly to positions at leading technology companies around the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <CompanyGrid />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-10"
        >
          <Link href="/jobs">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group"
            >
              View All Job Opportunities{" "}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <section className="mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl -z-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full -z-10 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-300/30 to-cyan-300/30 rounded-full -z-10 -translate-x-1/4 translate-y-1/4"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 pt-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Global Opportunities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Work from anywhere with remote positions or relocate to exciting tech hubs around the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-8 px-4"
        >
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Remote Jobs</h3>
            <div className="mt-4 mb-4 flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=2069&auto=format&fit=crop"
                alt="Remote Jobs"
                width={200}
                height={120}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            <p className="text-gray-600">Work from anywhere in the world with flexible remote positions.</p>
            <div className="mt-4">
              <Link href="/jobs">
                <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50">
                  Find Remote Jobs
                </Button>
              </Link>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Internships</h3>
            <div className="mt-4 mb-4 flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Internships"
                width={200}
                height={120}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            <p className="text-gray-600">Kickstart your career with internships at leading tech companies.</p>
            <div className="mt-4">
              <Link href="/jobs">
                <Button variant="outline" className="border-pink-500 text-pink-600 hover:bg-pink-50">
                  Find Internships
                </Button>
              </Link>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Full-Time Roles</h3>
            <div className="mt-4 mb-4 flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2032&auto=format&fit=crop"
                alt="Full-Time Roles"
                width={200}
                height={120}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            <p className="text-gray-600">Find permanent positions with competitive salaries and benefits.</p>
            <div className="mt-4">
              <Link href="/jobs">
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                  Find Full-Time Jobs
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Join Tech Communities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with like-minded developers, designers, and tech enthusiasts from around the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-2xl shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-3">Discover Developer Communities</h3>
              <p className="text-gray-700 mb-4">
                Join online forums, local meetups, and global communities where you can share knowledge, collaborate on
                projects, and make connections with other professionals in the tech industry.
              </p>
              <Link href="/community">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group"
                >
                  Explore Communities <Users className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/3">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
                alt="Developer community"
                width={300}
                height={200}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
