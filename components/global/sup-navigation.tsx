import { FC } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  CalendarFold,
  LucideIcon,
  Search,
  UserRound,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ToggleThemeButton } from "./toggle-theme-button";
import { LocalSwitcherButton } from "./local-switcher-button";

interface SupNavItem {
  icon: LucideIcon;
  hoverMessage?: string;
}
const leftSupNavItems: SupNavItem[] = [
  { icon: Search, hoverMessage: "Search here" },
  { icon: CalendarFold, hoverMessage: "Book an Appointment" },
];
const rightSupNavItems: SupNavItem[] = [
  { icon: UserRound, hoverMessage: "Sign In or Create an Account" },
];

export const SupNavigation: FC = () => {
  return (
    <div className="flex justify-between gap-3 items-center my-4">
      <div>
        {leftSupNavItems.map((navItem, i) => (
          <TooltipIcon
            key={i}
            icon={navItem.icon}
            hoverMessage={navItem.hoverMessage}
          />
        ))}
      </div>
      <Link href={"/"}>Deluxe Yachting Zurich</Link>
      <div>
        {rightSupNavItems.map((navItem, i) => (
          <TooltipIcon
            key={i}
            icon={navItem.icon}
            hoverMessage={navItem.hoverMessage}
          />
        ))}
        <LocalSwitcherButton />
        <ToggleThemeButton />
      </div>
    </div>
  );
};

function TooltipIcon({ icon: Icon, hoverMessage }: SupNavItem) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <Icon className="h-6 w-6" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className={cn(hoverMessage ? "" : "hidden")}>
          <p>{hoverMessage}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
