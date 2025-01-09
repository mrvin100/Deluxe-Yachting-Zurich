"use client";
import { FC, useRef } from "react";
import { AppContainer } from "../global";
import { TypographyH1, TypographyP } from "../ui/typographies";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export const HomeBanner: FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.3, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  return (
    <motion.section ref={targetRef} style={{ opacity }}>
      <AppContainer className="relative max-w-full grid md:grid-cols-2 lg:grid-cols-3 h-[85vh]">
        <div className="absolute top-0 bottom-0 right-0 left-0 md:static grid items-center justify-cente backdrop-blur-sm hover:backdrop-blur-none transition-transform text-primary-foreground md:text-secondary-foreground">
          <div className="text-center space-y-4 p-4 md:p-0">
            <TypographyH1>Welcome on Board!</TypographyH1>
            <TypographyP className="text-sm md:max-w-sm mx-auto">
              Let yourself get carried away into a different
              era on board of our classical yachts. Relax while conducting a
              unique, private cruise on Lake Zurich
            </TypographyP>
            <motion.button
              className="font-light text-base px-4 py-3 text-secondary-foreground border border-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              OUR BOATS
            </motion.button>
          </div>
        </div>
        <motion.div className="bg-red-50 overflow-hidden">
          <motion.img
            src="/home_banner_image1.jpg"
            alt="home banner image"
            height={1000}
            width={1000}
            className="object-cover h-full rotate-90"
            style={{ scale: scale,
              width: '100%',
              height: '100%',
             }}
          />
        </motion.div>
        <div className="bg-muted/5 hidden lg:block">
          <Image
            src="/home_banner_image2.webp"
            alt="home banner image"
            height={1000}
            width={1000}
            className="object-cover h-full"
          />
        </div>
      </AppContainer>
    </motion.section>
  );
};
