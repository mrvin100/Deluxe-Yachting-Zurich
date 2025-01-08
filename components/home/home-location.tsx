"use client"
import { ChevronRight } from "lucide-react";
import { AppContainer } from "../global";
import { Button } from "../ui/button";
import { TypographyH2, TypographyP } from "../ui/typographies";
import { FC, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";


export const HomeLocation: FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [1, 1.2]);
  const x = useTransform(scrollYProgress, [0.1, 0.25, 0.7, 1], ["-50%", "-5%", "-30%", "-10%"])
 
  return (
    <motion.section ref={targetRef} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="overflow-hidden">
      <AppContainer className="text-center grid md:grid-cols-3 items-center gap-4 max-w-full">
        <motion.img
          src={"/home_location_image.jpg"}
          alt="Office loaction image"
          height={1000}
          width={1000}
          className="w-full h-full md:col-span-2 block"
          style={{x, scale}}
        />
        <div className=" md:col-span-1 p-4 md:p-0">
          <TypographyH2>Holiday Wonder Awaits at The Landmark</TypographyH2>
          <TypographyP className="text-sm md:max-w-sm mx-auto">
            In celebration of the festive season, The Landmark has been
            transformed with captivating installations. Experience a glittering
            façade that only Kelanie could imagine, the House’s famed holiday
            windows and Jean Schlumberger’s majestic Bird on a Rock perched atop
            the building. <br /> <br />
            Photograph by Ricky Zehavi
          </TypographyP>
          <Button variant={"link"}>
            Plan Your Visit&nbsp;
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </AppContainer>
    </motion.section>
  );
};
