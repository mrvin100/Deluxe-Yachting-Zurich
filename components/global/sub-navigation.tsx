"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FC, forwardRef } from "react";
import { Button } from "../ui/button";

interface JewelryCategories {
  title: string;
  href: string;
  description?: string;
  featured?: {
    title: string;
    href: string;
    description: string;
    image: string;
  };
  subitems?: { title: string; href: string }[];
  links?: { title: string; href: string }[];
}

const jewelryCategories: JewelryCategories[] = [
  // {
  //   title: "HOME",
  //   href: "/",
  //   // description: "Bold and balanced, our square collection makes a statement.",
  //   // subitems: [
  //   //   { title: "Square Necklaces", href: "/square/necklaces" },
  //   //   { title: "Square Earrings", href: "/square/earrings" },
  //   //   { title: "Square Rings", href: "/square/rings" },
  //   //   { title: "Square Bracelets", href: "/square/bracelets" },
  //   // ],
  //   // featured: {
  //   //   title: "The Square Collection",
  //   //   href: "/square/featured",
  //   //   description: "Explore the geometric beauty of our Square collection.",
  //   //   image: "/images/square-collection.jpg",
  //   // },
  // },
  {
    title: "TAXI SERVICE",
    href: "/taxi-service",
    description:
      "Deluxe Transfer Services by Water Taxi",
    subitems: [
      { title: "Circle Necklaces", href: "/circle/necklaces" },
      { title: "Circle Earrings", href: "/circle/earrings" },
      { title: "Circle Rings", href: "/circle/rings" },
      { title: "Circle Bracelets", href: "/circle/bracelets" },
    ],
    featured: {
      title: "Circle Highlights",
      href: "/circle/featured",
      description: "Discover the versatility of our Circle collection.",
      image: "/images/circle-collection.jpg",
    },
  },
  {
    title: "EVENTS",
    href: "/events",
    description:
      "Edgy and modern, our triangle collection is perfect for those who want to stand out.",
    subitems: [
      { title: "Triangle Necklaces", href: "/triangle/necklaces" },
      { title: "Triangle Earrings", href: "/triangle/earrings" },
      { title: "Triangle Rings", href: "/triangle/rings" },
      { title: "Triangle Bracelets", href: "/triangle/bracelets" },
    ],
    featured: {
      title: "Triangle Trends",
      href: "/triangle/featured",
      description: "Embrace the unique style of our Triangle collection.",
      image: "/images/triangle-collection.jpg",
    },
  },
  // {
    // title: "ABOUT",
    // href: "/about",
    // description:
    //   "Soft and feminine, our oval collection is perfect for adding a touch of elegance to any outfit.",
    // subitems: [
    //   { title: "Oval Necklaces", href: "/oval/necklaces" },
    //   { title: "Oval Earrings", href: "/oval/earrings" },
    //   { title: "Oval Rings", href: "/oval/rings" },
    //   { title: "Oval Bracelets", href: "/oval/bracelets" },
    // ],
    // featured: {
    //   title: "Oval Elegance",
    //   href: "/oval/featured",
    //   description: "Experience the timeless beauty of our Oval collection.",
    //   image: "/images/oval-collection.jpg",
    // },
  // },
];

export const SubNavigation: FC = () => {
  return (
    <NavigationMenu className="hidden md:block max-w-full justify-center">
      <NavigationMenuList>
      <Button><Link href={'/'} className="font-light uppercase">Home</Link></Button>
        {jewelryCategories.map((category) => (
          <NavigationMenuItem key={category.title}>
            <NavigationMenuTrigger className="font-light">{category.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[780px] lg:w-[1080px] xl:w-[1280px] gap-3 md:grid-cols-2 lg:grid-cols-3">
                <div className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href={category.href}
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {category.title}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {category.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
                <div className="col-span-1 lg:col-span-2">
                  <div className="grid gap-4">
                    {category.featured && (
                      <FeaturedItem item={category.featured} />
                    )}
                    <div>
                      <h3 className="my-2 ml-3 text-sm font-medium leading-none">
                        Categories
                      </h3>
                      <ul className="grid gap-2 md:grid-cols-2">
                        { category.subitems && category.subitems.length > 0 && category.subitems.map((item) => (
                          <ListItem
                            key={item.title}
                            href={item.href}
                            title={item.title}
                          />
                        ))}
                      </ul>
                    </div>
                    {category.links && (
                      <div>
                        <h3 className="mb-2 text-sm font-medium leading-none">
                          Useful Links
                        </h3>
                        <ul className="grid gap-2 md:grid-cols-2">
                          {category.links.map((link) => (
                            <ListItem
                              key={link.title}
                              href={link.href}
                              title={link.title}
                            />
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <Button variant={'ghost'}><Link href={'/about'} className="font-light uppercase">About</Link></Button>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const FeaturedItem = ({
  item,
}: {
  item: { title: string; href: string; description: string; image: string };
}) => (
  <Link
    href={item.href}
    className="flex gap-4 rounded-lg p-2 transition-colors hover:bg-accent"
  >
    <Image
      src={item.image}
      alt={item.title}
      width={100}
      height={100}
      className="rounded-md object-cover"
    />
    <div>
      <h3 className="text-sm font-medium leading-none">{item.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
    </div>
  </Link>
);

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none font-light">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
