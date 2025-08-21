"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Users, Globe, Award, BookOpen, Mail, Phone, MapPin, Sun, Moon, Quote, Shirt, Instagram } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import LiquidBackground from "@/components/liquid-background"

export default function MUNWebsite() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const { theme, setTheme } = useTheme()

  const conferenceDate = new Date("2025-11-15T09:00:00")

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = conferenceDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [conferenceDate])

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
      name: "United Nations Human Rights Council",
      abbreviation: "UNHRC",
      topic: "The Right to a Clean, Healthy, and Sustainable Environment: Advancing Accountability for Environmental Human Rights Violations.",
    },
    {
      name: "United Nations Development Programme",
      abbreviation: "UNDP",
      topic: "Reconciling Global Power Politics with the UNDP’s Mandate of Neutral Democratic Support.",
    },
    {
      name: "United Nations Framework Convention on Climate Change",
      abbreviation: "UNFCCC",
      topic: "Promoting Renewable Energy Transition in Developing Economies through Innovation and sustainable Policies.",
    },
    {
      name: "United Nations Commission on the Status of Women",
      abbreviation: "UNCSW",
      topic: "Implementing the Beijing Platform for Action in Alignment with the SDGs, with Focus on Strengthening National Mechanisms for Gender Equality and Women's Empowerment.",
    },
    {
      name: "Economic and Financial Committee",
      abbreviation: "ECOFIN",
      topic: "Strengthening International Frameworks to Combat Illicit Financial Flows and Money Laundering.",
    },
    {
      name: "Lok Sabha",
      abbreviation: "Lok Sabha",
      topic: "No Confidence Motion : In Reference to Discrepancies in Electoral Process raised by opposition",
    },
    {
      name: "International Press (IP)",
      abbreviation: "IP",
      topic: "Journalism, Photography, Caricature and Undisclosed Portfolio.",
    },
  ];


  const schedule = [
    { time: "8:00 - 9:00 am", event: "Registration" },
    { time: "9:00 - 9:30 am", event: "High Tea" },
    { time: "9:30 - 10:30 am", event: "Inaugural" },
    { time: "10:30 am - 1:00 pm", event: "Session 1" },
    { time: "1:00 - 2:00 pm", event: "Lunch" },
    { time: "2:00 - 5:00 pm", event: "Session 2" },
    { time: "5:00 - 5:30 pm", event: "High Tea" },
  ]

  const scheduleDay2 = [
    { time: "10:00 am - 1:00 pm", event: "Session 3" },
    { time: "1:00 - 2:00 pm", event: "Lunch" },
    { time: "2:00 - 4:00 pm", event: "Session 4" },
    { time: "4:00 - 5:00 pm", event: "Closing Ceremony & Prize Distribution" },
    { time: "5:00 - 6:30 pm", event: "Socials & High Tea" },
  ]

  const messages = [
    {
      name: "Retd. Conl. Prof. A.K.Nair",
      title: "Conference Director ",
      message:
        "It is indeed a great privilege for me to create history along with you all at the momentous occasion of adding a new chapter to the glorious legacy of Graphic Era Hill University Bhimtal Campus, with the launch of MUNERA. I compliment Wordwhims club for taking the initiative and exhibiting courage in conducting the inaugural MUN of our campus. Your venue is the eleventh most beautiful campus in the country and there can be no better place than this serene campus, dotted with colours of blooming flowers, silence pierced only by the avians, abundant freshness in air, green hills all around etc that can cultivate perspective, responsibility and leadership in a global context.MUNERA reflects the firm belief of our University that education must go beyond imparting knowledge. We live in an era where international challenges are no longer distant—they define our daily lives, whether through technology, environment, economics or geopolitics. To engage with such complexity, young minds must be trained not only to master facts, but to ask questions, to listen with empathy, to disagree in an agreeing manner, to put across the perspective firmly and to build solutions collectively with amicability. MUN provides precisely this environment: transition young minds to global citizens.I urge every delegate to treat this conference not simply as a competition, but also as an opportunity to practice the art of diplomacy, to broaden their worldview and to understand the power of dialogue in shaping the future.I extend my best wishes to all participants and look forward to seeing this first edition set a standard of tradition and excellence for years to come.",
    },
    {
      name: "Mrs. Maya G Pillai",
      title: "Event Coordinator",
      message:
        "It is with immense pride that I welcome you to the inaugural edition of the Graphic Era Hill University Model United Nations. It is the earnest endeavour of Wordwhims Club to make this a refreshing and memorable experience for the participating delegates, with global ambience stimulating the spirit of global oneness, aligned to the noble Indian principle of Vasudhaiva Kutumbakam.This conference, MUNERA is more than an academic exercise; it is an arena where ideas evolve into solutions and perspectives converge into dialogue. In a world defined by complexity, the ability to think critically, negotiate thoughtfully and act collectively is indispensable. MUNERA aspires to cultivate these very qualities by engaging delegates with pressing global challenges and encouraging them to respond with intellect, empathy, empathy and vision.We look forward to the insights and innovation you will bring to this platform, and to the impact these deliberations will create beyond committee walls. We are eager to see the young minds transforming our picturesque campus to a truly international platform with the air filled with dialogues and ideas of global goodness.",
    },
    {
      name: "Ms. Ishita Karnatak",
      title: "Secretary General",
      message:
        "It is with great honor that I welcome you to the first edition of our Model United Nations. This conference is not just a simulation—it is a platform where young leaders come together to question, deliberate, and reimagine solutions for the challenges of our time.Our world today faces pressing issues: climate change, pandemics, conflicts, economic divides, and humanitarian crises that test the strength of global cooperation. In such times, the value of dialogue, diplomacy, and collective action cannot be overstated. This MUN seeks to ignite those very qualities in every delegate.Here, you are not just participants—you are diplomats, innovators, and changemakers. The debates you engage in, the resolutions you draft, and the collaborations you build will go far beyond the committee rooms; they will shape how you view leadership, responsibility, and the global community.I urge you to approach this conference with courage, empathy, and curiosity. Listen as much as you speak, challenge ideas but respect perspectives, and above all, remember that every word has the power to inspire change.I look forward to seeing the energy and intellect that each of you will bring to this historic beginning. May this first edition mark the start of a tradition of diplomacy, dialogue, and discovery.",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative">
      <LiquidBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group">
              <img src="/MUN Logo 1.png" alt="MUN Logo" className="h-10 w-auto" />
              <span className="font-sans font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                MUNERA 2025
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="relative text-foreground hover:text-primary transition-all duration-300 group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="relative text-foreground hover:text-primary transition-all duration-300 group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link
                href="#committees"
                className="relative text-foreground hover:text-primary transition-all duration-300 group"
              >
                Committees
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a
                href="#messages"
                className="relative text-foreground hover:text-primary transition-all duration-300 group"
              >
                Messages
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#schedule"
                className="relative text-foreground hover:text-primary transition-all duration-300 group"
              >
                Schedule
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#dress-code"
                className="relative text-foreground hover:text-primary transition-all duration-300 group"
              >
                Dress Code
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:scale-110 transition-transform duration-300"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/Untitled design (1).png')" }}
      >
        <div className="absolute inset-0 bg-background/10 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="scroll-fade-in">
            <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl mb-10 mt-24 text-darkblue animate-fade-in-down glow" style={{ color: '#fefdf0', textShadow: '0 0 1px #fefdf0, 0 0 2px #fefdf0, 0 0 3px #fefdf0' }}>
  <span className="block leading-tight">Graphic Era Hill University</span>
  <span className="block leading-tight">Model United Nations Conference 2025</span>
</h1>
            <p className="font-serif text-2xl sm:text-3xl font-semibold mb-8 leading-relaxed animate-fade-in-up glow" style={{ color: '#9ea7d6', animationDelay: "0.3s", animationFillMode: "forwards" }}>
              15th and 16th November 2025
            </p>
            <p className="font-serif text-xl sm:text-2xl mb-8 leading-relaxed opacity-0 animate-fade-in-up glow" style={{ color: '#c9cbd8', animationDelay: "0.6s", animationFillMode: "forwards" }}>
              "From discord to diplomacy: shaping peace through dialogue."
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1s", animationFillMode: "forwards" }}
            >
              <Link
                href="https://forms.gle/QR4pXivgW35zDCbx6"
                passHref
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 transform hover:scale-105 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
                >
                  <span className="relative z-10">Register Now</span>
                </Button>
              </Link>
              <Link href="/learn-more">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-transparent hover:bg-primary/5 transform hover:scale-105 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Countdown Timer */}
          <div
            className="scroll-fade-in opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
          >
            <h2 className="font-sans font-bold text-2xl mb-6" style={{ color: '#9ea7d6' }}>
              Conference Countdown
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-card to-card/80 border-primary/20"
                >
                  <CardContent className="p-6">
                    <div className="text-3xl font-sans font-bold text-primary mb-2 animate-pulse">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="font-sans font-bold text-4xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About MUNERA
            </h2>
            <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us for an immersive diplomatic experience where students from across the region come together to
              debate pressing global issues, develop leadership skills, and build lasting connections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "300+ Delegates",
                description: "Students from schools and colleges across India participating in this national conference",
              },
              {
                icon: <Globe className="h-12 w-12 text-primary" />,
                title: "7 Committees",
                description: "A diverse mix of UN bodies and other forums addressing global and national issues",
              },
              {
                icon: <Award className="h-12 w-12 text-primary" />,
                title: "Executive Board",
                description: "Experienced diplomats and academics guiding our committee sessions",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="scroll-fade-in text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-primary/10"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-sans font-bold text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-serif text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Committees and Agendas Section */}
      <section id="committees" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="font-sans font-bold text-4xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Committees & Agendas
            </h2>
            <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore the committees and the critical issues they will be addressing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee, index) => (
              <Card
                key={index}
                className="scroll-fade-in group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-primary/10"
              >
                <CardHeader>
                  <CardTitle className="font-sans font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                    {committee.abbreviation}
                  </CardTitle>
                  <p className="font-serif text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {committee.name}
                  </p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-sans font-semibold text-lg mb-2">Agenda:</h4>
                  <p className="font-serif text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {committee.topic}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Messages Section */}
      <section id="messages" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-fade-in text-center mb-20">
            <h2 className="font-sans font-bold text-4xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Messages from Our Community
            </h2>
            <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from the distinguished individuals who make MUNERA an exceptional experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {messages.map((person, index) => (
              <Card
                key={index}
                className="scroll-fade-in hover:shadow-2xl transition-all duration-500 h-full group transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-primary/10"
              >
                <CardContent className="p-10 flex flex-col h-full">
                  <div className="flex justify-center mb-8">
                    <Quote className="h-10 w-10 text-primary transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  </div>
                  <p className="font-serif text-muted-foreground mb-8 leading-relaxed italic text-lg flex-grow group-hover:text-foreground transition-colors duration-300">
                    "{person.message}"
                  </p>
                  <div className="flex items-center space-x-6 mt-auto">
                    <div>
                      <h4 className="font-sans font-bold text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                        {person.title}
                      </h4>
                      
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="font-sans font-bold text-4xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Conference Schedule
            </h2>
            <p className="font-serif text-xl text-muted-foreground">A full day of diplomatic engagement and learning</p>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="font-sans font-bold text-2xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Day 1 (15th November)
              </h3>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <Card
                    key={index}
                    className="scroll-fade-in hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group bg-gradient-to-r from-card to-card/80 border-primary/10"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center space-x-4 mb-2 md:mb-0">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-primary transform group-hover:rotate-12 transition-transform duration-300" />
                            <span className="font-sans font-semibold group-hover:text-primary transition-colors duration-300">
                              {item.time}
                            </span>
                          </div>
                          <div className="font-serif text-lg group-hover:text-primary transition-colors duration-300">
                            {item.event}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-sans font-bold text-2xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Day 2 (16th November)
              </h3>
              <div className="space-y-4">
                {scheduleDay2.map((item, index) => (
                  <Card
                    key={index}
                    className="scroll-fade-in hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group bg-gradient-to-r from-card to-card/80 border-primary/10"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center space-x-4 mb-2 md:mb-0">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-primary transform group-hover:rotate-12 transition-transform duration-300" />
                            <span className="font-sans font-semibold group-hover:text-primary transition-colors duration-300">
                              {item.time}
                            </span>
                          </div>
                          <div className="font-serif text-lg group-hover:text-primary transition-colors duration-300">
                            {item.event}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section id="dress-code" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-fade-in mb-16">
            <h2 className="font-sans font-bold text-4xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Delegate Attire
            </h2>
            <p className="font-serif text-xl text-muted-foreground">
              Please adhere to the dress code for each day of the conference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="scroll-fade-in hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-gradient-to-br from-card to-card/50 border-primary/10">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <Shirt className="h-16 w-16 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-sans font-bold text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                  Day 1
                </h3>
                <p className="font-serif text-xl text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Indian Formals
                </p>
              </CardContent>
            </Card>
            <Card className="scroll-fade-in hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-gradient-to-br from-card to-card/50 border-primary/10">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <Shirt className="h-16 w-16 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-sans font-bold text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                  Day 2
                </h3>
                <p className="font-serif text-xl text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Western Formals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="font-sans font-bold text-4xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="font-serif text-xl text-muted-foreground">
              Have questions? We're here to help you prepare for an amazing MUN experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="scroll-fade-in hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-primary/10">
              <CardHeader>
                <CardTitle className="font-sans font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 group hover:text-primary transition-colors duration-300">
                  <Mail className="h-5 w-5 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-serif">bhimtal.mun@gehu.ac.in</span>
                </div>
                <div className="flex items-center space-x-3 group hover:text-primary transition-colors duration-300">
                  <Instagram className="h-5 w-5 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                  <Link href="https://www.instagram.com/munera_gehu" passHref>
                    <span className="font-serif">munera_gehu</span>
                  </Link>
                </div>
                <div className="flex items-center space-x-3 group hover:text-primary transition-colors duration-300">
                  <Phone className="h-5 w-5 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-serif">Head to Delegate Affairs : +91 87550 58526</span>
                </div>
                <div className="flex items-center space-x-3 group hover:text-primary transition-colors duration-300">
                  <Phone className="h-5 w-5 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-serif">Director General : +91 70608 71677</span>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-fade-in hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-primary/10">
              <CardHeader>
                <CardTitle className="font-sans font-bold">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                
                <Link
                  href="https://forms.gle/QR4pXivgW35zDCbx6"
                  passHref
                >
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent hover:bg-primary/10 transform hover:scale-105 transition-all duration-300 group"
                  >
                    <Calendar className="h-4 w-4 mr-2 transform group-hover:rotate-12 transition-transform duration-300" />
                    Registration Form
                  </Button>
                </Link>
                <Link
                  href="/committee-guides"
                  passHref
                >
                  
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4 group">
            <Globe className="h-8 w-8 text-primary transform group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-sans font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MUNERA 2025
            </span>
          </div>
          <p className="font-serif text-muted-foreground mb-4">
            Empowering the next generation of global leaders through diplomatic simulation
          </p>
        </div>
      </footer>
    </div>
  )
}