import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["md", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      Dashboard{" "}
      <Text color="pink.500" as="span" ml="1">
        .
      </Text>
    </Text>
  );
}