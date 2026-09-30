import SectionHeading from "@/components/shared/SectionHeading";
import { faqs } from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => (
  <section className="container py-20" aria-labelledby="faq-heading">
    <SectionHeading kicker="FAQ" title="Common questions" />
    <Accordion type="single" collapsible className="max-w-3xl">
      {faqs.map((f, i) => (
        <AccordionItem key={f.question} value={`item-${i}`}>
          <AccordionTrigger className="text-left text-base">{f.question}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default Faq;
