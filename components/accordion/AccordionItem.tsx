import { FC, useState } from "react";


interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-green-900/40">
      <button
        className="flex items-center justify-between w-full py-3 lg:py-4 text-left text-lg lg:text-xl font-semibold text-green-900 transition duration-1000 ease-in-out"
        onClick={toggleOpen}
      >
        {title}
        <span className={`duration-300 ease-in-out transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
        <i className="ri-arrow-down-s-line text-green-900 "></i>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <p className="py-3 lg:py-4 font-Lobster text-green-900 ">{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
