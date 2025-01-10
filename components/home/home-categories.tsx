import { FC } from "react";
import * as motion from "motion/react-client";
import { AppContainer, Spacer } from "../global";
import { TypographyH1, TypographyH4, TypographyP } from "../ui/typographies";
import Image from "next/image";

export const HomeCategories: FC = () => {
  const categories: CategoryCardType[] = [
    { title: "Events", image: "/images/category_image1.webp" },
    { title: "Taxi Services", image: "/images/category_image2.webp" },
    { title: "Charters", image: "/images/category_image3.webp" },
    // { title: "Taxi Services", image: "/images/category_image2.webp" },
  ];
  return (
    <motion.section>
      <AppContainer>
        <Spacer tooSmall />
        <div className="text-center space-y-3">
          <TypographyH1>Our Services</TypographyH1>
          <TypographyP className="text-sm px-4 mx-auto leading-6">
            Discover our premier services: Host exclusive events, enjoy seamless
            taxi transfers, embark on luxurious charters, or experience the
            timeless charm of our classic yachts, including <strong>Le Studio 45</strong> and&nbsp;
            <strong>Donna Anna</strong>.
          </TypographyP>
        </div>
        <Spacer extraSmall />
        <div className="grid md:grid-cols-3 gap-4 justify-center space-y-0">
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
      initial={{ scale: 0.95 }}
      whileHover={{
        scale: 1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9, rotate: 3 }}
    >
      <Image
        src={image}
        alt="category image"
        height={1000}
        width={1000}
        className="object-cover mx-auto w-full max-w-72 h-48"
      />
      <TypographyH4 className="text-center font-normal mt-2 cursor-pointer hover:text-primary">
        {title}
      </TypographyH4>
    </motion.div>
  );
}
