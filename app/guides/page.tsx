export default function GuidesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Country guides</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">General destination information. Static example content.</p>
      <div className="mt-6 grid gap-2 md:grid-cols-3">
        {["Spain", "United States", "Japan", "Mexico", "Italy", "Thailand"].map((country) => (
          <div key={country} className="rounded-md border p-3 text-sm">{country}</div>
        ))}
      </div>
    </div>
  )
}

