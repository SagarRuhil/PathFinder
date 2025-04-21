"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Globe, ExternalLink } from "lucide-react"

interface Event {
  id: number
  title: string
  company: string
  date: string
  location: string
  type: "virtual" | "in-person" | "hybrid"
  description: string
  registrationUrl: string
  color: string
}

export default function EventsPage() {
  const events: Event[] = [
    {
      id: 1,
      title: "Microsoft Build 2025",
      company: "Microsoft",
      date: "May 19-21, 2025",
      location: "Seattle, WA & Online",
      type: "hybrid",
      description:
        "Microsoft's annual developer conference showcasing the latest in Microsoft technologies, AI, cloud computing, and developer tools.",
      registrationUrl: "https://build.microsoft.com/",
      color: "blue",
    },
    {
      id: 2,
      title: "Google I/O 2025",
      company: "Google",
      date: "May 14-15, 2025",
      location: "Mountain View, CA & Online",
      type: "hybrid",
      description:
        "Google's annual developer conference featuring the latest updates on Android, Google Cloud, AI, and more.",
      registrationUrl: "https://io.google/",
      color: "green",
    },
    {
      id: 3,
      title: "AWS re:Invent 2025",
      company: "Amazon",
      date: "December 1-5, 2025",
      location: "Las Vegas, NV",
      type: "in-person",
      description:
        "Amazon Web Services' annual cloud computing conference with keynotes, technical sessions, and hands-on labs.",
      registrationUrl: "https://reinvent.awsevents.com/",
      color: "orange",
    },
    {
      id: 4,
      title: "Meta Connect 2025",
      company: "Meta",
      date: "October 15-16, 2025",
      location: "Online",
      type: "virtual",
      description: "Meta's annual conference focused on AR/VR technologies, the metaverse, and social connectivity.",
      registrationUrl: "https://metaconnect.com/",
      color: "blue",
    },
    {
      id: 5,
      title: "Apple WWDC 2025",
      company: "Apple",
      date: "June 9-13, 2025",
      location: "Cupertino, CA & Online",
      type: "hybrid",
      description:
        "Apple's Worldwide Developers Conference showcasing the latest in iOS, macOS, and Apple's developer ecosystem.",
      registrationUrl: "https://developer.apple.com/wwdc/",
      color: "gray",
    },
    {
      id: 6,
      title: "TCS Innovation Summit",
      company: "TCS",
      date: "September 18-19, 2025",
      location: "Mumbai, India & Online",
      type: "hybrid",
      description:
        "TCS's annual innovation conference highlighting digital transformation, AI, and emerging technologies.",
      registrationUrl: "https://www.tcs.com/events",
      color: "purple",
    },
    {
      id: 7,
      title: "Infosys Confluence 2025",
      company: "Infosys",
      date: "April 23-24, 2025",
      location: "Online",
      type: "virtual",
      description: "Infosys's flagship client event focusing on business innovation and technology trends.",
      registrationUrl: "https://www.infosys.com/events/",
      color: "blue",
    },
    {
      id: 8,
      title: "NVIDIA GTC 2025",
      company: "NVIDIA",
      date: "March 17-21, 2025",
      location: "San Jose, CA & Online",
      type: "hybrid",
      description:
        "NVIDIA's GPU Technology Conference covering AI, deep learning, graphics, and accelerated computing.",
      registrationUrl: "https://www.nvidia.com/gtc/",
      color: "green",
    },
    {
      id: 9,
      title: "Global Hackathon 2025",
      company: "Multiple Sponsors",
      date: "July 15-17, 2025",
      location: "Online",
      type: "virtual",
      description:
        "A worldwide hackathon bringing together developers to solve real-world problems with innovative solutions.",
      registrationUrl: "https://globalhackathon.dev",
      color: "pink",
    },
    {
      id: 10,
      title: "Salesforce Dreamforce 2025",
      company: "Salesforce",
      date: "September 9-12, 2025",
      location: "San Francisco, CA",
      type: "in-person",
      description:
        "Salesforce's annual conference featuring product announcements, training sessions, and networking opportunities.",
      registrationUrl: "https://www.salesforce.com/dreamforce/",
      color: "blue",
    },
    {
      id: 11,
      title: "GitHub Universe 2025",
      company: "GitHub",
      date: "November 12-13, 2025",
      location: "San Francisco, CA & Online",
      type: "hybrid",
      description: "GitHub's annual conference for developers, maintainers, and enterprise leaders.",
      registrationUrl: "https://githubuniverse.com/",
      color: "purple",
    },
    {
      id: 12,
      title: "IBM Think 2025",
      company: "IBM",
      date: "May 6-9, 2025",
      location: "Las Vegas, NV",
      type: "in-person",
      description: "IBM's flagship conference covering AI, cloud, data, security, and emerging technologies.",
      registrationUrl: "https://www.ibm.com/events/think/",
      color: "blue",
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

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 border-blue-200 hover:border-blue-300 hover:bg-blue-100"
      case "green":
        return "bg-green-50 border-green-200 hover:border-green-300 hover:bg-green-100"
      case "orange":
        return "bg-orange-50 border-orange-200 hover:border-orange-300 hover:bg-orange-100"
      case "purple":
        return "bg-purple-50 border-purple-200 hover:border-purple-300 hover:bg-purple-100"
      case "pink":
        return "bg-pink-50 border-pink-200 hover:border-pink-300 hover:bg-pink-100"
      case "gray":
        return "bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-gray-100"
      default:
        return "bg-white"
    }
  }

  const getBadgeColor = (type: "virtual" | "in-person" | "hybrid") => {
    switch (type) {
      case "virtual":
        return "bg-green-100 text-green-800 border-green-300"
      case "in-person":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "hybrid":
        return "bg-purple-100 text-purple-800 border-purple-300"
      default:
        return ""
    }
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
          Upcoming Tech Events
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest conferences, hackathons, and workshops in the tech industry.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {events.map((event) => (
          <motion.div key={event.id} variants={item}>
            <Card
              className={`overflow-hidden hover:shadow-lg transition-all duration-300 border-2 ${getColorClasses(event.color)}`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <Badge variant="outline" className={getBadgeColor(event.type)}>
                    {event.type === "virtual" ? "Virtual" : event.type === "in-person" ? "In-Person" : "Hybrid"}
                  </Badge>
                </div>
                <CardDescription className="font-medium">{event.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-2 h-4 w-4 text-purple-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    {event.type === "virtual" ? (
                      <Globe className="mr-2 h-4 w-4 text-green-500" />
                    ) : (
                      <MapPin className="mr-2 h-4 w-4 text-blue-500" />
                    )}
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
              </CardContent>
              <CardFooter className="bg-white bg-opacity-70 pt-3 pb-3">
                <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group">
                    Register Now
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
