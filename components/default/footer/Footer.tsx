import Link from "next/link";
import { FC } from "react";
import { NavigationLink } from "@/types/navigationLinks";
import Navigation from "../common/NavigationLinks";
import Contact from "@/components/contact/Contact";
import SocialItems from "../common/SocialItems";
import { SocialItem } from "@/types/socialItemsTypes";
import { FooterData } from "@/types/footerDataType";

interface FooterProps {
  navigationLinks: NavigationLink[];
  socialItems: SocialItem[];
  footerData: FooterData;
}
const NavigationLinkClass: string ="nav-link-footer"
const Footer: FC<FooterProps> = ({ navigationLinks,socialItems,footerData }) => {
  console.log(footerData)
  return (
   
    <footer id="contacts" className="bg-yellow-100 text-green-950 relative pt-20 md:pt-28  ">
     <Contact/>
      <div className="container mt-16 mb-10">
        <div className="border-b border-green-500 relative ">
          <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto ">
            <div className="bg-yellow-100 text-lg text-center space-x-2 text-green-950 ">
                   <SocialItems socialItems={socialItems}/>
            </div>
          </div>
        </div>

      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
          <div className=" text-5xl text-green-700 text-center inline-block">
          <i className="ri-translate "></i>
          <p className="font-Lobster text-3xl ">Location.</p>
          </div>

          <div className="">
            <p className="mb-2 font-bold text-xl">Quick Link</p>
          <div className="flex flex-col gap-1" >
            <Navigation NavigationLinkClass={NavigationLinkClass} navigationLinks={navigationLinks}  />
          </div>
          </div>

          <div>
          <p className="mb-2 font-bold text-xl">Popular Services</p>
          <ul className="flex flex-col gap-1">
            {footerData.popularServices.map((service) => (
              <li key={service.url}>
                <a
                  className="duration-300 cursor-pointer hover:text-yellow-500"
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

          <div className="">
            <p className="mb-2 font-bold text-xl">Contact us</p>
          <ul className="flex flex-col gap-1" >
          {footerData.contactInfo.map((contact, index) => (
              <li key={index}>
                {contact.link ? (
                  <a href={contact.link}>{contact.value}</a>
                ) : (
                  contact.value
                )}
              </li>
            ))}
          </ul>
          </div>

        </div>
        <div className="text-center py-4 text-sm text-green-950/40 mt-8">
        <span>{footerData.copyright}</span>
</div>
    </footer>
  );
};

export default Footer;
