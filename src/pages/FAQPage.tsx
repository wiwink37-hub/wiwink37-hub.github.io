import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase for unworn items with original tags. Returns are free with our prepaid return label."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 100 countries worldwide. International shipping costs and delivery times vary by location."
    },
    {
      question: "How do I find the right size?",
      answer: "Please refer to our Size Guide page for detailed measurements. If you're between sizes, we recommend sizing up for a more comfortable fit."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. Please contact customer service immediately if you need to make changes."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. Free standard shipping on orders over $100."
    },
    {
      question: "Do you have physical stores?",
      answer: "Yes! Visit our Store Locator page to find the nearest Hekla store to you."
    },
    {
      question: "How do I care for my Hekla products?",
      answer: "Care instructions are provided on the product label. Generally, we recommend machine washing cold and air drying for apparel, and regular cleaning with a soft brush for footwear."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! Students receive 15% off with a valid student ID. Sign up on our website to verify your student status."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-black mb-8">FAQ</h1>
          
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to commonly asked questions about orders, shipping, returns, and more.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-bold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-6 bg-secondary">
              <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
              <p className="text-muted-foreground mb-4">
                Our customer service team is here to help.
              </p>
              <a href="/contact" className="font-bold hover:opacity-70 transition-opacity">
                Contact Us →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
