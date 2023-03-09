import {
  Icon,
  Link,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import { ElementType } from "react";

type NavLinkProps = {
  icon: ElementType;
  children: string;
} & ChakraLinkProps;

export function NavLink({ icon, children, ...props }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...props}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
