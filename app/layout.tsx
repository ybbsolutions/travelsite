import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import { Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'online eta uk',
  description: 'Plan safe trips with guides, documentation, and tips.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-2 font-bold">
                <Globe className="h-5 w-5" />
                <span>online eta uk</span>
              </div>
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="text-sm font-medium hover:underline">
                  Home
                </Link>
                <Link href="/safety" className="text-sm font-medium hover:underline">
                  Safety
                </Link>
                <Link href="/documentation" className="text-sm font-medium hover:underline">
                  Documentation
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:underline">
                  Contact
                </Link>
              </nav>
              <Link href="/contact" className="inline-flex h-8 items-center rounded-md border px-3 text-sm hover:bg-muted">
                Log in
              </Link>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t bg-slate-50">
            <div className="container py-8 md:py-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h3 className="text-lg font-semibold mb-4">online eta uk</h3>
                  <p className="text-sm text-muted-foreground">Your best ally for preparing safe trips abroad.</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-4">Quick links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/" className="text-muted-foreground hover:text-foreground">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/safety" className="text-muted-foreground hover:text-foreground">
                        Safety
                      </Link>
                    </li>
                    <li>
                      <Link href="/documentation" className="text-muted-foreground hover:text-foreground">
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                        Travel blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides" className="text-muted-foreground hover:text-foreground">
                        Country guides
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-4">Contact</h3>
                  <address className="not-italic text-sm text-muted-foreground">
                    <p>Email: info@travelprep.com</p>
                    <p>Phone: +34 900 123 456</p>
                  </address>
                </div>
              </div>
              <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} online eta uk. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
