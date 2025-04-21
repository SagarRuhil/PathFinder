"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

type Props = {
  language: string
  videos: Video[]
}

type Video = {
  title: string
  channel: string
  thumbnail: string
  duration: string
  level: string
  url: string
  description: string
  tags: string[]
}

export default function VideoPageClient({ language, videos }: Props) {
  const formattedLanguage = language.charAt(0).toUpperCase() + language.slice(1)

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-2 text-center"
      >
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
          {formattedLanguage} Video Tutorials
        </h1>
        <p className="max-w-[85%] leading-default text-muted-foreground sm:text-lg">
          Learn {formattedLanguage} programming with curated video tutorials from top instructors.
        </p>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-1 text-lg">{video.title}</CardTitle>
                <CardDescription>{video.channel}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 flex-grow-0">
                <Link href={video.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                </Link>
              </CardContent>
              <CardContent className="pt-4 pb-2 flex-grow">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge
                    className={
                      video.level === "Beginner"
                        ? "bg-green-100 text-green-800"
                        : video.level === "Intermediate"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                    }
                  >
                    {video.level}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{video.description}</p>
                <div className="flex flex-wrap gap-1">
                  {video.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                >
                  <Link href={video.url} target="_blank" rel="noopener noreferrer">
                    Watch Now
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
