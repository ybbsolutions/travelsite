import { ChevronRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DocumentationPage() {
  return (
    <div className="container py-12">
      <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
        <FileText className="h-4 w-4" />
        <span>Documentation</span>
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">Requirements by country</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">
        Passports, visas, certificates, and required documents. This is a static example page.
      </p>
      <ul className="mt-6 space-y-2">
        {[
          "Passports and visas",
          "Vaccination certificates",
          "Special permits",
          "Recommended insurance",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <ChevronRight className="mt-1 h-4 w-4 text-green-600 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button asChild>
          <a href="/contact">Request help</a>
        </Button>
      </div>
    </div>
  )
}

