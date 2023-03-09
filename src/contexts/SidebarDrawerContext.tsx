import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { Router } from "next/router";
import { createContext, ReactNode, useContext } from "react";

type SidebarDrawerProviderProps = {
  children: ReactNode;
};

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();

  Router.events.on("routeChangeComplete", () => disclosure.onClose());

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
