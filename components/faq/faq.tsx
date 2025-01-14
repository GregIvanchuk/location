import { FC } from "react";
import Accordion from "../accordion/Accordion";
import { AccordionItem, FaqContent } from "@/types/faqTypes";

interface FaqProps {
  accordionItems: AccordionItem[];
  faqContent: FaqContent;
}

const Faq: FC<FaqProps> = ({ accordionItems, faqContent }) => {
  return (
    <section className="bg-white" id="faq">
    <div className="container">
    <div className="flex flex-col items-center gap-5 text-center mb-7">
      <h2 className="text-green-900 font-Lobster">{faqContent.title}</h2>
        <p className="max-w-2xl font-normal text-yellow-500">{faqContent.description}</p>
        </div>
        <Accordion items={accordionItems} />
     </div>
     </section>
  );
};

export default Faq;
