"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin, Instagram, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Dynamically import the MapComponent to prevent SSR issues
const DynamicMapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
});

export default function Footer() {
  const position: [number, number] = [29.375055, 79.5313]; // Coordinates for Graphic Era Hill University Bhimtal Campus

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-2 mb-4 group">
          <Globe className="h-8 w-8 text-primary transform group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-sans font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            MUNERA 2025
          </span>
        </div>
        <p className="font-serif text-muted-foreground mb-12">
          Empowering the next generation of global leaders through diplomatic
          simulation
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Contact Information Card */}
          <Card className="scroll-fade-in hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-primary/10">
            <CardHeader>
              <CardTitle className="font-sans font-bold">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 group hover:text-primary transition-colors duration-300">
                <MapPin className="h-5 w-5 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                <span className="font-serif">
                  Sat Tal Road, Bhowali, Bhimtal - 263136, Uttarakhand, India
                </span>
              </div>
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
                <span className="font-serif">
                  Head of Delegate Affairs : +91 87550 58526
                </span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-primary transition-colors duration-300">
                <Phone className="h-5 w-5 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                <span className="font-serif">
                  Director General : +91 70608 71677
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Map Card */}
          <Card className="scroll-fade-in overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-primary/10">
            <CardHeader>
              <CardTitle className="font-sans font-bold">Location</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div style={{ height: "400px", width: "100%" }}>
                {/* Use the new dynamically loaded map component */}
                <DynamicMapComponent position={position} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </footer>
  );
}