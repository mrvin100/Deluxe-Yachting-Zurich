import { FC } from "react";
import * as motion from "motion/react-client";
import { AppContainer, Spacer } from "../global";
import { TypographyH1, TypographyH4, TypographyP } from "../ui/typographies";
import Image from "next/image";

export const HomeCategories: FC = () => {
  const categories: CategoryCardType[] = [
    { title: "Le Studio 45", image: "/images/category_image1.webp" },
    { title: "Donna Anna", image: "/images/category_image2.webp" },
  ];
  return (
    <motion.section>
      <AppContainer>
        <Spacer tooSmall />
        <div className="text-center space-y-3">
          <TypographyH1>Charter</TypographyH1>
          <TypographyP className="text-sm mx-auto">
          Enjoy the spacious layout, the luxurious mahogany and teak trim, exclusive beverages, selected cigars, superior sound, live
          saxophone entertainment – and much more.
          </TypographyP>
        </div>
        <Spacer extraSmall />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-center overflow-hidden p-4 lg:p-0">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              image={category.image}
              title={category.title}
            />
          ))}
        </div>
      </AppContainer>
    </motion.section>
  );
};

interface CategoryCardType {
  image: string;
  title: string;
}

function CategoryCard({ image, title }: CategoryCardType) {
  return (
    <motion.div
    initial={{scale: .95}}
      whileHover={{
        scale: 1,
        transition: { duration: 0.2 },
      }}
      drag
      dragTransition={{ power: 0.2 }}
      whileTap={{ scale: 0.9, rotate: 3 }}
    >
      <Image src={image} alt="category image" height={400} width={400} />
      <TypographyH4 className="text-center font-normal mt-2">
        {title}
      </TypographyH4>
    </motion.div>
  );
}
