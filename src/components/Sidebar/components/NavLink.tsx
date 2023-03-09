import { ActiveLinkView } from "@/components/ActiveLink/view";
import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";

type NavLinkProps = {
  icon: ElementType;
  children: string;
  href: string;
} & ChakraLinkProps;

export function NavLink({ icon, children, href, ...props }: NavLinkProps) {
  return (
    <ActiveLinkView
      as={Link}
      href={href}
      display="flex"
      alignItems="center"
      {...props}
    >
      <>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </>
    </ActiveLinkView>
  );
}
