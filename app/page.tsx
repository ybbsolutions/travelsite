import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Globe, FileText, Shield } from "lucide-react"

export default function Home() {
  return (
      <div>
      <main className="flex-1">
        {/* Hero Section with CTA */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg"
              alt="Travel image"
              fill
              sizes="100vw"
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Get ready for your next adventure
              </h1>
              <p className="text-lg md:text-xl">
                We help you plan your trip abroad with all the information you need about safety and documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
                  <Link href="/contact">
                    Request information
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/services">Our services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Information Section */}
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  <Shield className="h-4 w-4" />
                  <span>Safety abroad</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Travel with peace of mind and safety</h2>
                <p className="text-muted-foreground">
                  Safety is paramount when traveling abroad. We provide updated information about destinations, safety recommendations, and tips to avoid problems during your trip.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Travel alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Updated information about risk situations in different countries and regions.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Safety tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Recommendations to protect your belongings and stay safe during your trip.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Travel insurance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Information about recommended coverage based on your destination and trip duration.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>24/7 Assistance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Emergency contacts and resources available for travelers abroad.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <Image
                  src="/travel-docs.jpg"
                  alt="Travel documentation"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  <FileText className="h-4 w-4" />
                  <span>Required documentation</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Everything you need for your trip</h2>
                <p className="text-muted-foreground">
                  Each destination has specific documentation requirements. We help you prepare all the necessary documents so your trip goes smoothly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Passports and visas according to your destination country</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Vaccination certificates and health requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Special permits for specific activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Insurance and recommended additional documentation</span>
                  </li>
                </ul>
                <Button className="mt-4" asChild>
                  <Link href="/documentation">Check requirements by country</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to plan your next trip?</h2>
            <p className="mx-auto max-w-2xl text-lg">
              Our travel experts can help you prepare everything you need for your next adventure.
            </p>
            <Button size="lg" variant="secondary" className="mt-4" asChild>
              <Link href="/contact">Request personalized advice</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

