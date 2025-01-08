import {
  BellRing,
  Calendar,
  ChevronRight,
  Gift,
  LucideIcon,
  LucideShoppingBag,
} from "lucide-react";
import { AppContainer, Spacer } from "../global";
import { TypographyH2, TypographyH3, TypographyP } from "../ui/typographies";
import { Button } from "../ui/button";
import Link from "next/link";
import { FC } from "react";

interface ExperienceType {
  icon: LucideIcon;
  title: string;
  description: string;
  link: { text: string; href: string };
}

const experiences: ExperienceType[] = [
  {
    icon: LucideShoppingBag,
    title: "Book Your Yacht Event",
    description:
      "Plan an unforgettable experience on the water. Reserve your private yacht event today.",
    link: { text: "Book An Event", href: "/book-now" },
  },
  {
    icon: BellRing,
    title: "Arrange Luxury Transfers",
    description: "Seamlessly reach your yacht with our exclusive taxi and shuttle services.",
    link: { text: "Book a Ride", href: "/book-a-ride" },
  },
  {
    icon: Calendar,
    title: "Personal Concierge Assistance",
    description: "Our dedicated concierge team is here to assist with all your needs.",
    link: { text: "Contact Us", href: "/contact-us" },
  },
  {
    icon: Gift,
    title: "Explore Custom Yacht Packages",
    description: "Discover tailored packages to make your yachting dreams come true.",
    link: { text: "Explore Packages", href: "/explore-packages" },
  },
];

export const HomeExperience:FC = () => {
  return (
    <section className="bg-stone-50 p-4 my-4">
      <AppContainer className="max-w-full">
        <Spacer extraSmall />
        <TypographyH2 className="text-center">
          The Deluxe Yachting Zurich Experience
        </TypographyH2>
        <Spacer tooSmall />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="flex justify-center flex-col gap-4 gap-y-2"
            >
              <experience.icon className="w-8 h-8 mx-auto inline-block font-extralight" />
              <TypographyH3 className="capitalize !text-sm font-normal">
                {experience.title}
              </TypographyH3>
              <TypographyP className="mx-auto max-w-xs">{experience.description}</TypographyP>
              <Button variant={"link"} asChild>
                <Link href={experience.link.href}>
                  {experience.link.text}&nbsp;
                  <ChevronRight />
                </Link>
              </Button>
            </div>
          ))}
        </div>
        <Spacer tooSmall />
      </AppContainer>
    </section>
  );
};
