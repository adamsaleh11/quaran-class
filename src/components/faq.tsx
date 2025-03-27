"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What age groups do you teach?",
      answer:
        "We welcome students of all ages, from children (5+) to adults. Our teaching methods are adapted to suit different age groups and learning abilities.",
    },
    {
      question: "Do I need any prior knowledge to join the classes?",
      answer:
        "No prior knowledge is required. We have classes for complete beginners as well as more advanced students. Our curriculum is designed to accommodate all levels of understanding.",
    },
    {
      question: "How are the classes structured?",
      answer:
        "Classes follow a structured syllabus covering Qur&apos;an reading, memorization, Islamic principles, and more. Each session includes practical learning, discussion, and homework to reinforce concepts.",
    },
    {
      question: "Are classes available online or only in-person?",
      answer:
        "We offer both in-person and online classes to accommodate different needs and schedules. Online classes use interactive tools to ensure an engaging learning experience.",
    },
    {
      question: "What is the class schedule?",
      answer:
        "Classes are available on weekdays and weekends with flexible timing options. Upon registration, you can choose a schedule that works best for you.",
    },
    {
      question: "How much does it cost to enroll?",
      answer:
        "We offer affordable rates with options for monthly or term-based payments. Please contact us for detailed pricing information based on your specific needs.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#004d40]">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our Qur&apos;an classes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <p className="text-gray-700">
              Don&rsquo;t see your question? Contact us at{" "}
              <span className="font-bold">613-823-8786</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
