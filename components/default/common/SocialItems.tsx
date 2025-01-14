import { FC } from "react";
import { SocialItem } from "@/types/socialItemsTypes"; 

interface SocialItemsProps {
  socialItems: SocialItem[];  
}

const SocialItems: FC<SocialItemsProps> = ({socialItems}) => {
  return (
    <>
      {socialItems.map(({ id, iconClass, link }) => (
        <a
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 duration-300 cursor-pointer"
        >
          <i className={iconClass}></i> 
        </a>
      ))}
    </>
  );
};

export default SocialItems;
