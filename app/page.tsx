"use client";
import "../styles/globals.css";
import { navigationLinks } from "@/constants/navigationLinks";
import { homeContent } from "@/constants/homeContent";
import { socialItems } from "@/constants/socialItems";
import { servicesData } from "@/constants/servicesData";
import { pricesData } from "@/constants/PricesData";
import { reviewsData } from "@/constants/reviewData";
import { footerData } from "@/constants/footerData";
import {accordionItems,faqContent} from  "@/constants/faqConstants";
import * as Default from "@/components/default";
import { Fragment } from "react";
import Home from "@/components/home/Home";
import Services from "@/components/services/Services";
import Prices from "@/components/prices/Prices";
import Reviews from "@/components/reviews/Reviews";
import Faq from "@/components/faq/faq";
import 'remixicon/fonts/remixicon.css';

export default function Page() {
  return (
    <Fragment>
      <Default.Navbar navigationLinks={navigationLinks} />
      <Home socialItems={socialItems} homeContent={homeContent}/>
      <Services servicesData={servicesData}/>
      <Prices  pricesData={pricesData} />
      <Faq accordionItems={accordionItems} faqContent={faqContent}  />
      <Reviews  reviewsData={reviewsData}/>
      <Default.Footer footerData={footerData} socialItems={socialItems} navigationLinks={navigationLinks} />
    </Fragment>
  );
}
