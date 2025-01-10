import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { TypographyH2, TypographyP } from "../ui/typographies";
import { AppContainer } from "../global";
import { VideoPlayer } from "./video-player";
import { FC } from "react";

export const HomePublication: FC = () => {
  return (
    <section>
      <AppContainer className="text-center grid md:grid-cols-3 items-center gap-4 max-w-full">
        <div className="order-last md:-order-none md:ml-4 p-4 md:p-0">
          <TypographyH2>Exclusive Events on Lake Zurich</TypographyH2>
          <TypographyP className="text-sm md:max-w-xs mx-auto leading-6">
            Join us for unforgettable events on Lake Zurich, running from
            November to February. With prices starting at just CHF 149, indulge
            in themed cruises ranging from fondue dinners to gin tastings and
            cigar sundowners. Don’t miss out on these extraordinary experiences
            aboard our luxurious yachts.
          </TypographyP>
          <Button className="my-3">
            Book Your Ticket Now&nbsp;
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
        <div className="md:col-span-2">
          <VideoPlayer src="/videos/visit-post-with-DYZ.mp4" />
        </div>
      </AppContainer>
    </section>
  );
};
