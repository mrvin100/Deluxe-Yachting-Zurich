"use client";
import { FC } from "react";
import { AppContainer } from "./app-container";
import { SubNavigation } from "./sub-navigation";
import { SupNavigation } from "./sup-navigation";
export const Header: FC = () => {
  return (
    <header className="pb-2 sticky right-0 left-0 top-0 z-10 bg-card">
      <AppContainer className="p-0">
        <SupNavigation />
        <SubNavigation />
      </AppContainer>
    </header>
  );
};
