import { FC } from "react";
import AccordionItem from "./AccordionItem";

interface AccordionProps {
  items: { title: string; content: string }[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
