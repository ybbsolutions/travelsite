import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function SafetyPage() {
  return (
    <div className="container py-12">
      <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-700">
        <Shield className="h-4 w-4" />
        <span>Safety</span>
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">Travel safety</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">
        Tips and alerts to travel with peace of mind. General information and best practices.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {["Travel alerts", "Safety tips", "Travel insurance", "Health and vaccines", "Common scams", "Emergency contacts"].map(
          (title) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Static example content. Replace with your own information.</p>
              </CardContent>
            </Card>
          ),
        )}
      </div>
    </div>
  )
}

