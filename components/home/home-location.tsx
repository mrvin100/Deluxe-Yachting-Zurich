"use client";
import { ChevronRight } from "lucide-react";
import { AppContainer } from "../global";
import { Button } from "../ui/button";
import { TypographyH1, TypographyH2, TypographyP } from "../ui/typographies";
import { FC, useRef } from "react";
import { motion } from "framer-motion";
import { CarouselBox } from "./gallery-box";

export const HomeLocation: FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start end", "end start"],
  // });
  // const scale = useTransform(scrollYProgress, [0.1, 0.4], [1, 1.2]);
  // const x = useTransform(
  //   scrollYProgress,
  //   [0.1, 0.25, 0.7, 1],
  //   ["-50%", "-5%", "-30%", "-10%"]
  // );

  return (
    <motion.section
      ref={targetRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="overflow-hidden"
    >
      <AppContainer className="text-center">
        <TypographyH1>Our Gallery</TypographyH1>
        <div className="mt-4 text-center grid md:grid-cols-2 lg:grid-cols-3 items-center gap-4 max-w-full">
          <div className="lg:col-span-2">
            <CarouselBox />
          </div>
          <div className=" md:col-span-1 p-4 md:p-0 md:pr-6">
            <TypographyH2>
              Discover the Essence of Elegance on Lake Zurich
            </TypographyH2>
            <TypographyP className="text-sm md:max-w-sm mx-auto text-justify first-letter:ml-4">
              From the vintage sophistication of <strong>Le Studio 45</strong>{" "}
              to the Venetian charm of <strong>Donna Anna</strong> our yachts
              redefine luxury cruising. Whether you&apos;re seeking a spacious
              salon for unforgettable gatherings or an intimate escape on the
              water, each vessel promises exceptional comfort, modern amenities,
              and breathtaking views.
              <br /> <br />
              npx shadcn@latest add carousel Explore our fleet and find your
              perfect match for an extraordinary lake experience.
            </TypographyP>
            <Button variant={"link"}>
              <span>Explore our boats</span>
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </AppContainer>
    </motion.section>
  );
};
