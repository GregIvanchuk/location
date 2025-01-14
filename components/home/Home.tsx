import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HomeContent } from "@/types/homeContentTypes";
import { SocialItem } from "@/types/socialItemsTypes";
import SocialItems from "../default/common/SocialItems";
import { DefaultButton } from "../default/buttons";

interface HomeProps {
  homeContent: HomeContent;
  socialItems: SocialItem[];
}

const highlightFirstAndLast = (text: string) => {
  const words = text.split(" ");
  if (words.length <= 1) {
    return <span className="text-yellow-500">{words[0]}</span>;
  }
  const firstWord = words[0];
  const lastWord = words[words.length - 1];
  const middleWords = words.slice(1, words.length - 1).join(" ");
  return (
    <>
      <span className="text-yellow-500">{firstWord}</span>{" "}
      {middleWords}{" "}
      <span className="text-yellow-500">{lastWord}</span>
    </>
  );
};

const Home: FC<HomeProps> = ({ homeContent, socialItems }) => {
  return (
    <section id="home" className="relative">
      <div className="container xl:h-[70vh] flex items-center ">
        <div className="flex flex-col items-center gap-5 lg:gap-12 lg:flex-row lg:items-start ">
          <div className="flex flex-col w-full space-y-5 xl:space-y-10">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {highlightFirstAndLast(homeContent.title)}
            </motion.h1>

            <motion.p
              className="text-slate-300 font-Lobster"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {homeContent.description}
              {homeContent.description[1]}
            </motion.p>

            <div className="flex flex-col gap-2 sm:flex-row">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href={"#prices"}><DefaultButton text={"Pricing"} className={"btn"} /></Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
               <Link href={"#contacts"}> <DefaultButton text={"Contact Us"} className={"btn_outline"} /></Link>
              </motion.div>
            </div>

            <motion.p
              className="text-slate-300 font-Lobster text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {homeContent.trialOffer}
            </motion.p>

            <motion.div
              className="flex text-lg items-center gap-5 text-slate-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <SocialItems socialItems={socialItems} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative w-full max-w-[350px] xl:max-w-[350px] lg:h-[350px] xl:h-[350px] sm:h-auto"
          >
            <Image
              className="rounded-3xl object-cover w-full h-full"
              width={330}
              height={330}
              src="/main.jpeg"
              alt="main"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
