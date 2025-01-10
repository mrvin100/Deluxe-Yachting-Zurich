"use client";
import { FC } from "react";
import { AppContainer } from "./app-container";
import { SubNavigation } from "./sub-navigation";
import { SupNavigation } from "./sup-navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
export const Header: FC = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(scrollYProgress.get() !== 0)
    }
    const timeoutId = setTimeout(() => {
      if(scrollYProgress.get() === 0){
        setIsScrolling(false)
      }}, 10)
    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
    }
  },[scrollYProgress])
  return (
    <motion.header
      className={cn(
        "pb-2 sticky right-0 left-0 top-0 z-50 ",
        isScrolling ? "border backdrop-blur-md bg-primary/15 border-primary/15" : 
        "border-background bg-background",
        
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AppContainer className="p-0 max-w-full">
        <SupNavigation />
        <SubNavigation />
      </AppContainer>
    </motion.header>
  );
};
