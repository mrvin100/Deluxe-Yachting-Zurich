import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface AppContainerProps {
    children: ReactNode,
    className?: string
}
export const AppContainer:FC<AppContainerProps> = ({children, className}) => {
    return ( <div className={cn("max-w-7xl mx-auto", className)}>{children}</div> );
}