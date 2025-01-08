import Image from "next/image";
import { AppContainer } from "../global";
import { TypographyH2, TypographyP } from "../ui/typographies";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { FC } from "react";

export const HomeGift:FC = () => {
  return (
    <section>
      <AppContainer className="w-full max-w-full h-full relative">
        <Image
          src={"/home_gift_image1.jpg"}
          alt="home gift image"
          height={500}
          width={500}
          className="w-full h-full object-cover max-h-96"
        />
        <div className="absolute left-8 right-8 md:right-auto md:left-[30%] lg:left-[20%] top-[50%] translate-y-[-50%] text-center text-muted">
          <TypographyH2>At Your Service</TypographyH2>
          <TypographyP className="text-sm max-w-full md:max-w-sm mx-auto">
            From finding the perfect present to product personalization, master
            the art of holiday gifting with assistance from Tiffany & Co. client
            advisors.
          </TypographyP>
          <Button variant={"link"} className="text-muted">
            Contact Us&nbsp;
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </AppContainer>
    </section>
  );
};
