import { Link, LinkProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

type ActiveLinkProps = {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
} & LinkProps;

export function ActiveLinkView({
  children,
  shouldMatchExactHref = false,
  ...props
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExactHref && (asPath === props.href || asPath === props.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(props.href)) ||
      asPath.startsWith(String(props.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...props} color={isActive ? "pink.400" : "gray.50"}>
      {children}
    </Link>
  );
}
