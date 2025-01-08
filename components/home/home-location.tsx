"use client";
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
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 1],
    ["-50%", "-5%", "-30%", "-10%"]
  );

  return (
    <motion.section
      ref={targetRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="overflow-hidden"
    >
      <AppContainer className="text-center grid md:grid-cols-3 items-center gap-4 max-w-full">
        <motion.img
          src={"/home_location_image.jpg"}
          alt="Office loaction image"
          height={1000}
          width={1000}
          className="w-full h-full md:col-span-2 block"
          style={{ x, scale }}
        />
        <div className=" md:col-span-1 p-4 md:p-0">
          <TypographyH2>
            Discover the Essence of Elegance on Lake Zurich
          </TypographyH2>
          <TypographyP className="text-sm md:max-w-sm mx-auto">
            From the vintage sophistication of <strong>Le Studio 45</strong> to
            the Venetian charm of <strong>Donna Anna</strong> our yachts
            redefine luxury cruising. Whether you&apos;re seeking a spacious
            salon for unforgettable gatherings or an intimate escape on the
            water, each vessel promises exceptional comfort, modern amenities,
            and breathtaking views.
            <br /> <br />npx shadcn@latest add carousel
            
            Explore our fleet and find your perfect match for an extraordinary
            lake experience.
          </TypographyP>
          <Button variant={"link"}>
            <span>Explore our boats</span>
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </AppContainer>
    </motion.section>
  );
};
