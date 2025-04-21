"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { motion } from "framer-motion"

export default function CompanyGrid() {
  const [searchTerm, setSearchTerm] = useState("")

  const companies = [
    {
      id: 1,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      careerUrl: "https://careers.google.com/",
    },
    {
      id: 2,
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
      careerUrl: "https://www.apple.com/careers/",
    },
    {
      id: 3,
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      careerUrl: "https://careers.microsoft.com/",
    },
    {
      id: 4,
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      careerUrl: "https://www.amazon.jobs/",
    },
    {
      id: 5,
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
      careerUrl: "https://jobs.netflix.com/",
    },
    {
      id: 6,
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png",
      careerUrl: "https://www.metacareers.com/",
    },
    {
      id: 7,
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1280px-Tesla_Motors.svg.png",
      careerUrl: "https://www.tesla.com/careers",
    },
    {
      id: 8,
      name: "NVIDIA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png",
      careerUrl: "https://www.nvidia.com/en-us/about-nvidia/careers/",
    },
    {
      id: 9,
      name: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png",
      careerUrl: "https://careers.linkedin.com/",
    },
    {
      id: 10,
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
      careerUrl: "https://www.oracle.com/careers/",
    },
    {
      id: 11,
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
      careerUrl: "https://www.salesforce.com/company/careers/",
    },
    {
      id: 12,
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
      careerUrl: "https://www.samsung.com/us/careers/",
    },
    {
      id: 13,
      name: "Sony",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1280px-Sony_logo.svg.png",
      careerUrl: "https://www.sony.com/en/careers/",
    },
    {
      id: 14,
      name: "TCS",
      logo: "/images/tcs.jpeg",
      careerUrl: "https://www.tcs.com/careers",
    },
    {
      id: 15,
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
      careerUrl: "https://www.infosys.com/careers/",
    },
    {
      id: 16,
      name: "Cognizant",
      logo: "/images/cognizant.jpeg",
      careerUrl: "https://careers.cognizant.com/",
    },
    {
      id: 17,
      name: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png",
      careerUrl: "https://www.accenture.com/careers",
    },
    {
      id: 18,
      name: "HCL",
      logo: "/images/hcl.jpeg",
      careerUrl: "https://www.hcltech.com/careers",
    },
    {
      id: 19,
      name: "Capgemini",
      logo: "/images/capgemini.png",
      careerUrl: "https://www.capgemini.com/careers/",
    },
    {
      id: 20,
      name: "Deloitte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/2560px-Deloitte.svg.png",
      careerUrl: "https://www2.deloitte.com/careers/",
    },
    {
      id: 21,
      name: "EY",
      logo: "/images/ey.png",
      careerUrl: "https://www.ey.com/en_us/careers",
    },
    {
      id: 22,
      name: "KPMG",
      logo: "/images/kpmg.png",
      careerUrl: "https://kpmg.com/xx/en/home/careers.html",
    },
    {
      id: 23,
      name: "Genpact",
      logo: "/images/genpact.png",
      careerUrl: "https://www.genpact.com/careers",
    },
    {
      id: 24,
      name: "HP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png",
      careerUrl: "https://jobs.hp.com/",
    },
    {
      id: 25,
      name: "Qualcomm",
      logo: "/images/qualcomm.png",
      careerUrl: "https://www.qualcomm.com/company/careers",
    },
    {
      id: 26,
      name: "SAP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png",
      careerUrl: "https://www.sap.com/about/careers.html",
    },
    {
      id: 27,
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
      careerUrl: "https://www.ibm.com/careers/",
    },
    {
      id: 28,
      name: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1280px-Intel_logo_%282006-2020%29.svg.png",
      careerUrl: "https://www.intel.com/content/www/us/en/jobs/jobs-at-intel.html",
    },
    {
      id: 29,
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1280px-Adobe_Corporate_Logo.png",
      careerUrl: "https://www.adobe.com/careers.html",
    },
    {
      id: 30,
      name: "AMD",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/1280px-AMD_Logo.svg.png",
      careerUrl: "https://www.amd.com/en/corporate/careers",
    },
  ]

  const filteredCompanies = companies.filter((company) => company.name.toLowerCase().includes(searchTerm.toLowerCase()))

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
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="w-full">
      <div className="relative mb-8 max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search companies..."
          className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {filteredCompanies.map((company) => (
          <motion.div key={company.id} variants={item}>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300 group bg-white h-full">
              <CardContent className="p-4 flex flex-col items-center justify-between h-full">
                <div className="w-20 h-20 relative mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-center flex-grow">
                  <h3 className="font-medium text-center mb-3">{company.name}</h3>
                  <a href={company.careerUrl} target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    >
                      Apply Now
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
