"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

interface Community {
  id: number
  name: string
  platform: string
  logo: string
  url: string
  description: string
  members: string
  tags: string[]
  category: string
}

export default function CommunityPageClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const communities: Community[] = [
    {
      id: 1,
      name: "freeCodeCamp",
      platform: "Discord",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/800px-FreeCodeCamp_logo.png",
      url: "https://discord.gg/freecodecamp",
      description: "Learn to code together with millions of people",
      members: "100k+",
      tags: ["Web Development", "JavaScript", "Open Source"],
      category: "learning",
    },
    {
      id: 2,
      name: "r/webdev",
      platform: "Reddit",
      logo: "https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_kxcmzy9bt1601.png",
      url: "https://www.reddit.com/r/webdev/",
      description: "A community dedicated to all things web development",
      members: "1.2M+",
      tags: ["Web Development", "Frontend", "Backend"],
      category: "discussion",
    },
    {
      id: 3,
      name: "Stack Overflow",
      platform: "Website",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png",
      url: "https://stackoverflow.com/",
      description: "The largest, most trusted online community for developers",
      members: "14M+",
      tags: ["Q&A", "Programming", "Problem Solving"],
      category: "qa",
    },
    {
      id: 4,
      name: "DEV Community",
      platform: "Website",
      logo: "https://d2fltix0v2e0sb.cloudfront.net/dev-black.png",
      url: "https://dev.to/",
      description: "A constructive and inclusive social network for software developers",
      members: "800k+",
      tags: ["Blogging", "Tutorials", "Community"],
      category: "discussion",
    },
    {
      id: 5,
      name: "GitHub Community Forum",
      platform: "Website",
      logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      url: "https://github.community/",
      description: "Connect with GitHub users and staff to get help and share ideas",
      members: "5M+",
      tags: ["Git", "Open Source", "Collaboration"],
      category: "qa",
    },
    {
      id: 6,
      name: "Hashnode",
      platform: "Website",
      logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png",
      url: "https://hashnode.com/",
      description: "Blogging platform for developers and software engineers",
      members: "1M+",
      tags: ["Blogging", "Developer Community", "Knowledge Sharing"],
      category: "discussion",
    },
    {
      id: 7,
      name: "CodePen",
      platform: "Website",
      logo: "https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png",
      url: "https://codepen.io/",
      description: "Social development environment for front-end designers and developers",
      members: "3.5M+",
      tags: ["Frontend", "CSS", "Design"],
      category: "showcase",
    },
    {
      id: 8,
      name: "Frontend Mentor",
      platform: "Website",
      logo: "https://www.frontendmentor.io/static/images/logo-desktop.svg",
      url: "https://www.frontendmentor.io/",
      description: "Improve your front-end coding skills by building real projects",
      members: "400k+",
      tags: ["Frontend", "Challenges", "Portfolio"],
      category: "learning",
    },
    {
      id: 9,
      name: "CSS-Tricks",
      platform: "Website",
      logo: "https://css-tricks.com/wp-content/uploads/2019/06/akqRGyta_400x400.jpg",
      url: "https://css-tricks.com/",
      description: "Daily articles about CSS, HTML, JavaScript, and all things related to web design and development",
      members: "2M+",
      tags: ["CSS", "Web Design", "Tutorials"],
      category: "learning",
    },
    {
      id: 10,
      name: "r/reactjs",
      platform: "Reddit",
      logo: "https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png",
      url: "https://www.reddit.com/r/reactjs/",
      description: "A community for learning and developing web applications using React",
      members: "300k+",
      tags: ["React", "JavaScript", "Frontend"],
      category: "discussion",
    },
    {
      id: 11,
      name: "The Odin Project",
      platform: "Website",
      logo: "https://www.theodinproject.com/assets/icons/odin-icon-b5b31c073f7417a257003166c98cc23743654715305910c068b93a3bf4d3065d.svg",
      url: "https://www.theodinproject.com/",
      description: "Free open source coding curriculum that can be taken entirely online",
      members: "200k+",
      tags: ["Web Development", "Full Stack", "Learning Path"],
      category: "learning",
    },
    {
      id: 12,
      name: "Codecademy Forums",
      platform: "Website",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Codecademy.svg/1200px-Codecademy.svg.png",
      url: "https://discuss.codecademy.com/",
      description: "Forums for Codecademy learners to discuss courses and get help",
      members: "1.5M+",
      tags: ["Learning", "Programming", "Courses"],
      category: "qa",
    },
    {
      id: 13,
      name: "r/learnprogramming",
      platform: "Reddit",
      logo: "https://styles.redditmedia.com/t5_2r7yd/styles/communityIcon_59jk5qs8bqj51.png",
      url: "https://www.reddit.com/r/learnprogramming/",
      description: "A subreddit for all questions related to programming in any language",
      members: "2.5M+",
      tags: ["Learning", "Beginners", "Programming"],
      category: "learning",
    },
    {
      id: 14,
      name: "Exercism",
      platform: "Website",
      logo: "https://avatars.githubusercontent.com/u/5624255?s=200&v=4",
      url: "https://exercism.io/",
      description: "Improve your coding skills with practice and mentorship",
      members: "500k+",
      tags: ["Practice", "Mentorship", "Code Review"],
      category: "learning",
    },
    {
      id: 15,
      name: "HackerRank Community",
      platform: "Website",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png",
      url: "https://www.hackerrank.com/community",
      description: "Practice coding, prepare for interviews, and get hired",
      members: "11M+",
      tags: ["Competitive Programming", "Interviews", "Challenges"],
      category: "practice",
    },
    {
      id: 16,
      name: "LeetCode Discuss",
      platform: "Website",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      url: "https://leetcode.com/discuss/",
      description: "Discuss coding problems and solutions",
      members: "2M+",
      tags: ["Algorithms", "Data Structures", "Interviews"],
      category: "practice",
    },
    {
      id: 17,
      name: "r/cscareerquestions",
      platform: "Reddit",
      logo: "https://styles.redditmedia.com/t5_2sdpm/styles/communityIcon_u6zl0m0ejx451.png",
      url: "https://www.reddit.com/r/cscareerquestions/",
      description: "Discussion about careers in computer science, software engineering, and related fields",
      members: "800k+",
      tags: ["Career", "Job Search", "Industry"],
      category: "career",
    },
    {
      id: 18,
      name: "Women Who Code",
      platform: "Website",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Women_Who_Code_logo.png",
      url: "https://www.womenwhocode.com/",
      description: "Global community empowering women in technology careers",
      members: "290k+",
      tags: ["Women in Tech", "Diversity", "Networking"],
      category: "networking",
    },
    {
      id: 19,
      name: "Indie Hackers",
      platform: "Website",
      logo: "https://www.indiehackers.com/images/logos/indie-hackers-logo-light.svg",
      url: "https://www.indiehackers.com/",
      description: "Community of founders sharing stories and strategies about building profitable online businesses",
      members: "150k+",
      tags: ["Startups", "Entrepreneurship", "SaaS"],
      category: "business",
    },
    {
      id: 20,
      name: "Product Hunt",
      platform: "Website",
      logo: "https://ph-static.imgix.net/ph-ios-icon.png",
      url: "https://www.producthunt.com/",
      description: "Platform to share and discover new products in tech",
      members: "4M+",
      tags: ["Products", "Startups", "Tech"],
      category: "showcase",
    },
    {
      id: 21,
      name: "Figma Community",
      platform: "Website",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      url: "https://www.figma.com/community",
      description: "Discover, share, and remix design resources",
      members: "3M+",
      tags: ["Design", "UI/UX", "Collaboration"],
      category: "design",
    },
    {
      id: 22,
      name: "Dribbble",
      platform: "Website",
      logo: "https://cdn.dribbble.com/assets/dribbble-ball-icon-e94956d5f010d19d71c6b8a1f2112d2a3d569d1107c3a47ba193d1b7d703f0c9.png",
      url: "https://dribbble.com/",
      description: "Community where designers share, grow, and get hired",
      members: "5M+",
      tags: ["Design", "Inspiration", "Portfolio"],
      category: "design",
    },
    {
      id: 23,
      name: "Behance",
      platform: "Website",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/1280px-Behance_logo.svg.png",
      url: "https://www.behance.net/",
      description: "Showcase and discover creative work",
      members: "10M+",
      tags: ["Design", "Portfolio", "Creative"],
      category: "design",
    },
    {
      id: 24,
      name: "UI/UX Community",
      platform: "Discord",
      logo: "https://cdn.discordapp.com/icons/689862063522856980/a_4a8d22f3f9848a6a79e7ca5c3d99a0a7.png",
      url: "https://discord.gg/uxui",
      description: "Community for UI/UX designers to share work and get feedback",
      members: "50k+",
      tags: ["UI/UX", "Design", "Feedback"],
      category: "design",
    },
  ]

  const filteredCommunities = communities.filter((community) => {
    const matchesSearch =
      community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesTab = activeTab === "all" || community.category === activeTab

    return matchesSearch && matchesTab
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
        stiffness: 100,
      },
    },
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-4 text-center"
      >
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Developer Communities
        </h1>
        <p className="max-w-[85%] leading-default text-muted-foreground sm:text-lg">
          Connect with developers, designers, and tech enthusiasts across different platforms and communities.
        </p>
        <div className="relative w-full max-w-md mx-auto mt-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search communities..."
            className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </motion.div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 overflow-x-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
          <TabsTrigger value="qa">Q&A</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="showcase">Showcase</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="career">Career</TabsTrigger>
        </TabsList>
        <TabsContent value={activeTab} className="mt-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredCommunities.map((community) => (
              <motion.div key={community.id} variants={item}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300 h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 relative flex-shrink-0">
                        <Image
                          src={community.logo || "/placeholder.svg?height=40&width=40&text=" + community.name.charAt(0)}
                          alt={`${community.name} logo`}
                          width={40}
                          height={40}
                          className="object-contain rounded-md"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{community.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <span>{community.platform}</span>
                          <span className="text-xs">•</span>
                          <span>{community.members} members</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2 flex-grow">
                    <p className="text-sm text-muted-foreground">{community.description}</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {community.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    >
                      <Link href={community.url} target="_blank" rel="noopener noreferrer">
                        Join Community
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
