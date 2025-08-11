"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Frequently asked questions</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">Quick answers to common questions.</p>
      <div className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do I need a visa to travel?</AccordionTrigger>
            <AccordionContent>It depends on your destination country and nationality. See the documentation section.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What travel insurance is recommended?</AccordionTrigger>
            <AccordionContent>We recommend broad medical coverage and 24/7 emergency assistance.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Where can I find safety alerts?</AccordionTrigger>
            <AccordionContent>We publish notices and updated information on the Safety page.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

