"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, ArrowLeft, BookOpen, Users, Award, CheckCircle, Star, Target, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function LearnMorePage() {
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

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Leadership Development",
      description:
        "Develop essential leadership skills through diplomatic negotiations, public speaking, and team collaboration in high-pressure environments.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Perspective",
      description:
        "Gain deep understanding of international relations, global challenges, and diverse cultural perspectives from around the world.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Research Excellence",
      description:
        "Master advanced research methodologies, critical analysis, and evidence-based argumentation on complex global issues.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Career Advancement",
      description:
        "Build a competitive edge for careers in diplomacy, law, business, journalism, and international organizations.",
    },
  ]

  const whatToExpect = [
    {
      title: "Pre-Conference Preparation",
      items: [
        "Comprehensive study guides for each committee",
        "Research workshops and training sessions",
        "Position paper writing guidance",
        "Mock committee sessions for practice",
      ],
    },
    {
      title: "Conference Experience",
      items: [
        "Professional committee sessions with expert chairs",
        "Networking opportunities with delegates from 50+ colleges",
        "Cultural exchange programs and social events",
        "Awards ceremony recognizing outstanding delegates",
      ],
    },
    {
      title: "Post-Conference Benefits",
      items: [
        "Digital certificates and participation awards",
        "Access to exclusive MUN alumni network",
        "Recommendations for future conferences",
        "Continued learning resources and materials",
      ],
    },
  ]


  const faqs = [
    {
      question: "Who can participate in GRAMUN 2025?",
      answer:
        "GRAMUN is open to undergraduate and graduate students from all academic backgrounds. No prior MUN experience is required, though we offer committees for all skill levels.",
    },
    {
      question: "What is the registration fee and what does it include?",
      answer:
        "Registration fee is 1500 INR per delegate, which includes all conference materials, meals during the conference, welcome kit, certificate, and access to all social events.",
    },
    {
      question: "How do I prepare for the conference?",
      answer:
        "We provide comprehensive study guides, position paper templates, and conduct pre-conference workshops. We also offer mentorship programs pairing new delegates with experienced participants.",
    },
    {
      question: "What should I bring to the conference?",
      answer:
        "Bring formal business attire, laptop/tablet for research, notebooks, and any specific materials mentioned in your committee study guide. We'll provide name tags, folders, and writing materials.",
    },
    {
      question: "Are there awards and recognition?",
      answer:
        "Yes! We recognize outstanding delegates, best position papers, and exceptional diplomacy. Awards include certificates, trophies, and special recognition at the closing ceremony.",
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
              <span className="font-sans font-bold text-xl">GRAMUN 2025</span>
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
              Why Choose GRAMUN?
            </h1>
            <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how our Model United Nations conference can transform your academic journey and prepare you for
              global leadership
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="font-sans font-bold text-4xl mb-6">What You'll Gain</h2>
            <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto">
              GRAMUN offers more than just a conference experience - it's a transformative journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="scroll-fade-in hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="font-sans font-bold text-xl mb-3">{benefit.title}</h3>
                      <p className="font-serif text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="font-sans font-bold text-4xl mb-6">What to Expect</h2>
            <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto">
              Your journey with GRAMUN extends beyond the conference days
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whatToExpect.map((phase, index) => (
              <Card key={index} className="scroll-fade-in">
                <CardHeader>
                  <CardTitle className="font-sans font-bold text-xl flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-serif text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="font-sans font-bold text-4xl mb-6">Frequently Asked Questions</h2>
            <p className="font-serif text-xl text-muted-foreground">
              Everything you need to know about participating in CollegeMUN 2025
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="scroll-fade-in">
                <CardContent className="p-8">
                  <h3 className="font-sans font-bold text-lg mb-4 flex items-start gap-3">
                    <Lightbulb className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="font-serif text-muted-foreground leading-relaxed ml-9">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-fade-in">
            <h2 className="font-sans font-bold text-4xl mb-6">Ready to Begin Your Journey?</h2>
            <p className="font-serif text-xl text-muted-foreground mb-8 leading-relaxed">
              Join hundreds of students from around the world in this transformative diplomatic experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Register Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Download Brochure
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
