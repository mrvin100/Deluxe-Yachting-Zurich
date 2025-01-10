import { Spacer } from "@/components/global";
import {
  HomeBanner,
  HomeCategories,
  HomeExperience,
  // HomeGift,
  HomeLocation,
  HomePublication,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <HomeCategories />
      <Spacer extraSmall />
      <HomePublication />
      <Spacer extraSmall />
      <HomeLocation />
      <Spacer extraSmall />
      {/* <HomeGift /> */}
      <HomeExperience />
    </main>
  );
}
