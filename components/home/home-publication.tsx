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
          <TypographyH2>Exclusive Events on the Lake</TypographyH2>
          <TypographyP className="text-sm md:max-w-xs mx-auto">
            Come join our exclusive events on selected dates throughout the
            year. Each of our 6 tables can seat up to 4 guests. Therefore, we
            can offer up to 24 tickets for each event. Furthermore, for closed
            groups we can also arrange individual cruises.
          </TypographyP>
          <Button variant={"link"}>
            Explore our Yatch&nbsp;
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
