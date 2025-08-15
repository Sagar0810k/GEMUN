"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Users, Globe, Award, BookOpen, Mail, Phone, MapPin, Sun, Moon, Quote } from "lucide-react"
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

  const conferenceDate = new Date("2025-11-01T09:00:00")

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
      name: "United Nations Security Council",
      abbreviation: "UNSC",
      topic: "Addressing Regional Conflicts in the Middle East",
      delegates: 15,
      difficulty: "Advanced",
    },
    {
      name: "General Assembly",
      abbreviation: "GA",
      topic: "Climate Change and Sustainable Development",
      delegates: 193,
      difficulty: "Beginner",
    },
    {
      name: "Economic and Social Council",
      abbreviation: "ECOSOC",
      topic: "Global Economic Recovery Post-Pandemic",
      delegates: 54,
      difficulty: "Intermediate",
    },
    {
      name: "Human Rights Council",
      abbreviation: "HRC",
      topic: "Digital Rights and Privacy in the Modern Age",
      delegates: 47,
      difficulty: "Intermediate",
    },
  ]

  const schedule = [
    { time: "08:00 - 09:00", event: "Registration & Welcome Breakfast", location: "Main Lobby" },
    { time: "09:00 - 09:30", event: "Opening Ceremony", location: "Auditorium" },
    { time: "09:30 - 12:00", event: "Committee Session I", location: "Various Rooms" },
    { time: "12:00 - 13:00", event: "Lunch Break", location: "Cafeteria" },
    { time: "13:00 - 15:30", event: "Committee Session II", location: "Various Rooms" },
    { time: "15:30 - 16:00", event: "Coffee Break", location: "Main Lobby" },
    { time: "16:00 - 18:00", event: "Committee Session III", location: "Various Rooms" },
    { time: "18:00 - 19:00", event: "Closing Ceremony & Awards", location: "Auditorium" },
  ]

  const galleryImages = [
    {
      src: "/mun-delegates-debate.png",
      alt: "Delegates in committee session",
      title: "Committee Debates",
    },
    {
      src: "/opening-ceremony.png",
      alt: "Opening ceremony",
      title: "Opening Ceremony",
    },
    {
      src: "/mun-networking.png",
      alt: "Networking session",
      title: "Networking",
    },
    {
      src: "/award-ceremony-winners.png",
      alt: "Award ceremony",
      title: "Awards Ceremony",
    },
    {
      src: "/mun-group-photo.png",
      alt: "Group photo",
      title: "Conference Participants",
    },
    {
      src: "/placeholder-u48jy.png",
      alt: "Diplomatic negotiations",
      title: "Diplomatic Sessions",
    },
  ]

  const messages = [
    {
      name: "Dr. Sarah Johnson",
      title: "Conference Director & Professor of International Relations",
      message:
        "CollegeMUN 2025 represents the pinnacle of diplomatic education. Our conference provides students with an unparalleled opportunity to engage with global issues, develop critical thinking skills, and build the leadership qualities essential for tomorrow's world leaders.",
      image: "/female-professor-headshot.png",
    },
    {
      name: "Ambassador Michael Chen",
      title: "Former UN Representative & Keynote Speaker",
      message:
        "Having witnessed the evolution of international diplomacy firsthand, I'm consistently impressed by the caliber of debate and the depth of understanding demonstrated by CollegeMUN participants. This conference truly prepares students for the complexities of global governance.",
      image: "/placeholder-76uay.png",
    },
    {
      name: "Emma Rodriguez",
      title: "Student Body President & MUN Society Chair",
      message:
        "As someone who has participated in MUN conferences worldwide, I can confidently say that CollegeMUN offers an exceptional experience. The combination of rigorous academic preparation, professional facilitation, and meaningful networking makes this conference truly transformative.",
      image: "/female-student-leader-headshot.png",
    },
  ]

  const chiefGuests = [
    {
      name: "Hon. Patricia Williams",
      title: "Former Secretary-General of International Peace Organization",
      description:
        "A distinguished diplomat with over 30 years of experience in international relations and conflict resolution.",
      image: "/female-diplomat-headshot.png",
    },
    {
      name: "Dr. James Morrison",
      title: "Nobel Peace Prize Laureate & Human Rights Advocate",
      description:
        "Renowned for his groundbreaking work in global human rights advocacy and sustainable development initiatives.",
      image: "/distinguished-academic-headshot.png",
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
              <Globe className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-sans font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CollegeMUN 2025
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
              <a
                href="#gallery"
                className="relative text-foreground hover:text-primary transition-all duration-300 group"
              >
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#chief-guests"
                className="relative text-foreground hover:text-primary transition-all duration-300 group"
              >
                Chief Guests
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link
                href="/committees"
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
                href="#contact"
                className="relative text-foreground hover:text-primary transition-all duration-300 group"
              >
                Contact
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
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 gradient-animate opacity-5"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/30 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/10 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-secondary/20 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="scroll-fade-in">
            <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl mb-6 mt-16 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
              CollegeMUN 2025
            </h1>
            <p
              className="font-serif text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              Experience diplomacy, debate, and global leadership at our premier Model United Nations conference
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1s", animationFillMode: "forwards" }}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 transform hover:scale-105 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
              >
                <span className="relative z-10">Register Now</span>
              </Button>
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
            <h2 className="font-sans font-bold text-2xl mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
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
              About CollegeMUN
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
                title: "500+ Delegates",
                description: "Students from over 50 colleges participating in our largest conference yet",
              },
              {
                icon: <Globe className="h-12 w-12 text-primary" />,
                title: "8 Committees",
                description: "Diverse range of UN bodies covering global challenges and opportunities",
              },
              {
                icon: <Award className="h-12 w-12 text-primary" />,
                title: "Expert Judges",
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

      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="font-sans font-bold text-4xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Conference Gallery
            </h2>
            <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto">
              Glimpses from our previous conferences showcasing the energy, engagement, and excellence of our MUN
              community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="scroll-fade-in group cursor-pointer">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:scale-105 transform group-hover:-rotate-1 bg-gradient-to-br from-card to-card/80">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-125 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <h3 className="font-sans font-bold text-lg drop-shadow-lg">{image.title}</h3>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chief Guests Section */}
      <section id="chief-guests" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="font-sans font-bold text-4xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Distinguished Chief Guests
            </h2>
            <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto">
              We are honored to welcome these exceptional leaders who will share their insights and expertise with our
              delegates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {chiefGuests.map((guest, index) => (
              <Card
                key={index}
                className="scroll-fade-in hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group bg-gradient-to-br from-card to-card/50 border-primary/10"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img
                      src={guest.image || "/placeholder.svg"}
                      alt={guest.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20 transition-all duration-500 group-hover:border-primary/50 group-hover:scale-110 group-hover:shadow-xl"
                    />
                  </div>
                  <h3 className="font-sans font-bold text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {guest.name}
                  </h3>
                  <p className="font-serif text-primary font-semibold mb-4 group-hover:text-secondary transition-colors duration-300">
                    {guest.title}
                  </p>
                  <p className="font-serif text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {guest.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Messages Section */}
      <section id="messages" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-fade-in text-center mb-20">
            <h2 className="font-sans font-bold text-4xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Messages from Our Community
            </h2>
            <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from the distinguished individuals who make CollegeMUN an exceptional experience
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
                    <img
                      src={person.image || "/placeholder.svg"}
                      alt={person.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary/20 transition-all duration-500 group-hover:border-primary/50 group-hover:scale-110 group-hover:shadow-lg"
                    />
                    <div>
                      <h4 className="font-sans font-bold text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                        {person.name}
                      </h4>
                      <p className="font-serif text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {person.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-fade-in text-center mb-16">
            <h2 className="font-sans font-bold text-4xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Conference Schedule
            </h2>
            <p className="font-serif text-xl text-muted-foreground">A full day of diplomatic engagement and learning</p>
          </div>

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
                    <div className="flex items-center space-x-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <MapPin className="h-4 w-4 transform group-hover:bounce" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                  <span className="font-serif">info@collegemun2025.edu</span>
                </div>
                <div className="flex items-center space-x-3 group hover:text-primary transition-colors duration-300">
                  <Phone className="h-5 w-5 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-serif">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 group hover:text-primary transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-serif">College Campus, Main Building</span>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-fade-in hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-primary/10">
              <CardHeader>
                <CardTitle className="font-sans font-bold">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent hover:bg-primary/10 transform hover:scale-105 transition-all duration-300 group"
                >
                  <BookOpen className="h-4 w-4 mr-2 transform group-hover:rotate-12 transition-transform duration-300" />
                  Delegate Handbook
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent hover:bg-primary/10 transform hover:scale-105 transition-all duration-300 group"
                >
                  <Calendar className="h-4 w-4 mr-2 transform group-hover:rotate-12 transition-transform duration-300" />
                  Registration Form
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent hover:bg-primary/10 transform hover:scale-105 transition-all duration-300 group"
                >
                  <Users className="h-4 w-4 mr-2 transform group-hover:rotate-12 transition-transform duration-300" />
                  Committee Guides
                </Button>
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
              CollegeMUN 2025
            </span>
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
