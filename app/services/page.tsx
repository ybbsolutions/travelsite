import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Services</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">Travel advisory, visa processing, and insurance. Static example page.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["Personalized advisory", "Visa processing", "Travel insurance"].map((service) => (
          <Card key={service}>
            <CardHeader>
              <CardTitle>{service}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Short service description. Replace this with real content.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

