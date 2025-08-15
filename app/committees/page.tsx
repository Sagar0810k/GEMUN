"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Globe, ArrowLeft, BookOpen, Calendar } from "lucide-react"
import Link from "next/link"

export default function CommitteesPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".scroll-fade-in")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const committees = [
    {
      name: "United Nations Security Council",
      abbreviation: "UNSC",
      topic: "Addressing Regional Conflicts in the Middle East",
      delegates: 15,
      difficulty: "Advanced",
      description:
        "The Security Council is responsible for maintaining international peace and security. This committee will address complex geopolitical issues requiring diplomatic finesse and strategic thinking.",
      requirements: ["Advanced research skills", "Experience in crisis committees", "Strong negotiation abilities"],
      agenda:
        "The situation in the Middle East has remained volatile with ongoing conflicts affecting regional stability. Delegates will work to develop comprehensive solutions addressing root causes while maintaining international law.",
    },
    {
      name: "General Assembly",
      abbreviation: "GA",
      topic: "Climate Change and Sustainable Development",
      delegates: 193,
      difficulty: "Beginner",
      description:
        "The General Assembly is the main deliberative organ of the UN. This committee focuses on global challenges that require multilateral cooperation and consensus-building.",
      requirements: ["Basic understanding of UN procedures", "Research on climate policies", "Collaborative mindset"],
      agenda:
        "With climate change posing unprecedented challenges to global development, delegates will explore innovative solutions for sustainable development while balancing economic growth with environmental protection.",
    },
    {
      name: "Economic and Social Council",
      abbreviation: "ECOSOC",
      topic: "Global Economic Recovery Post-Pandemic",
      delegates: 54,
      difficulty: "Intermediate",
      description:
        "ECOSOC coordinates economic and social work among UN agencies and member states. This committee addresses global economic challenges and development issues.",
      requirements: [
        "Understanding of economic principles",
        "Knowledge of development policies",
        "Analytical thinking",
      ],
      agenda:
        "The global economy faces unprecedented challenges following the pandemic. Delegates will develop strategies for sustainable economic recovery while addressing inequality and promoting inclusive growth.",
    },
    {
      name: "Human Rights Council",
      abbreviation: "HRC",
      topic: "Digital Rights and Privacy in the Modern Age",
      delegates: 47,
      difficulty: "Intermediate",
      description:
        "The Human Rights Council addresses human rights violations and promotes the protection of human rights globally. This committee focuses on emerging digital rights challenges.",
      requirements: ["Knowledge of human rights law", "Understanding of digital technologies", "Advocacy skills"],
      agenda:
        "As digital technologies reshape society, new challenges to privacy and human rights emerge. Delegates will work to establish frameworks protecting digital rights while fostering innovation.",
    },
    {
      name: "World Health Organization",
      abbreviation: "WHO",
      topic: "Global Health Security and Pandemic Preparedness",
      delegates: 194,
      difficulty: "Intermediate",
      description:
        "WHO leads global health initiatives and coordinates international health responses. This committee addresses critical health security challenges.",
      requirements: [
        "Basic health policy knowledge",
        "Understanding of global health systems",
        "Crisis management skills",
      ],
      agenda:
        "Recent global health crises have highlighted gaps in pandemic preparedness. Delegates will develop comprehensive strategies for strengthening global health security and response mechanisms.",
    },
    {
      name: "International Court of Justice",
      abbreviation: "ICJ",
      topic: "Maritime Boundary Disputes in the South China Sea",
      delegates: 15,
      difficulty: "Advanced",
      description:
        "The ICJ is the principal judicial organ of the UN. This committee simulates legal proceedings addressing complex international law disputes.",
      requirements: [
        "Strong legal research skills",
        "Understanding of international law",
        "Formal presentation abilities",
      ],
      agenda:
        "Maritime boundary disputes continue to challenge international stability. Delegates will examine legal precedents and international law to address complex territorial and maritime claims.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-primary" />
              <span className="font-sans font-bold text-xl">CollegeMUN 2025</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 gradient-animate opacity-5"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="scroll-fade-in">
            <h1 className="font-sans font-black text-4xl sm:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Committees
            </h1>
            <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our diverse range of committees, each tackling critical global issues and providing unique
              learning experiences
            </p>
          </div>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {committees.map((committee, index) => (
              <Card key={index} className="scroll-fade-in hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="font-sans font-bold text-2xl">{committee.name}</CardTitle>
                        <Badge variant="secondary" className="text-sm">
                          {committee.abbreviation}
                        </Badge>
                      </div>
                      <CardDescription className="font-serif text-lg text-primary font-semibold">
                        {committee.topic}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm font-medium">{committee.delegates} delegates</span>
                      </div>
                      <Badge
                        variant={
                          committee.difficulty === "Beginner"
                            ? "default"
                            : committee.difficulty === "Intermediate"
                              ? "secondary"
                              : "destructive"
                        }
                        className="text-sm"
                      >
                        {committee.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="font-serif text-muted-foreground leading-relaxed">{committee.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-sans font-bold text-lg mb-3 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {committee.requirements.map((req, reqIndex) => (
                          <li
                            key={reqIndex}
                            className="font-serif text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-sans font-bold text-lg mb-3 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        Committee Agenda
                      </h4>
                      <p className="font-serif text-sm text-muted-foreground leading-relaxed">{committee.agenda}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button className="flex-1">Apply for This Committee</Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Download Study Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-fade-in">
            <h2 className="font-sans font-bold text-3xl mb-6">Ready to Join a Committee?</h2>
            <p className="font-serif text-xl text-muted-foreground mb-8 leading-relaxed">
              Each committee offers a unique opportunity to develop your diplomatic skills and engage with global issues
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Register Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Globe className="h-8 w-8 text-primary" />
            <span className="font-sans font-bold text-xl">CollegeMUN 2025</span>
          </div>
          <p className="font-serif text-muted-foreground mb-4">
            Empowering the next generation of global leaders through diplomatic simulation
          </p>
          <p className="font-serif text-sm text-muted-foreground">© 2025 CollegeMUN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
