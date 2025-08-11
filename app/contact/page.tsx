import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">This is a static example page. Add your real form or contact details.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Write to us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Email: info@travelprep.com</p>
            <p className="text-sm text-muted-foreground">Phone: +34 900 123 456</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Opening hours</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Monday to Friday: 9:00 - 18:00</p>
            <p className="text-sm text-muted-foreground">CET (Madrid)</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

