import { FC } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  BellRing,
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
import { ModeToggle } from "./toggle-theme-button";

interface SupNavItem {
  icon: LucideIcon;
  hoverMessage?: string;
}
const leftSupNavItems: SupNavItem[] = [
  { icon: Search, hoverMessage: "" },
  // { icon: LocateFixed, hoverMessage: "How to choose your destination" },
  { icon: BellRing, hoverMessage: "Contact Us" },
];
const rightSupNavItems: SupNavItem[] = [
  { icon: CalendarFold, hoverMessage: "Book an Appointment" },
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
        <ModeToggle />
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
