import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-2 text-muted-foreground">The requested route does not exist.</p>
      <div className="mt-6">
        <Link href="/" className="underline">Back to home</Link>
      </div>
    </div>
  )
}

