import { Text, useBreakpointValue } from "@chakra-ui/react";

export function Logo() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (isWideVersion) {
    return (
      <Text
        fontSize={["md", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        <Text color="purple.500" as="span" ml="1">
          Query
        </Text>
        Dash{" "}
        <Text color="pink.500" as="span" ml="1">
          _
        </Text>
      </Text>
    );
  }

  return (
    <Text fontSize="4xl" fontWeight="bold" letterSpacing="tight" w="64">
      <Text color="purple.500" as="span" ml="1">
        q
      </Text>
      D{" "}
      <Text color="pink.500" as="span" ml="1">
        _
      </Text>
    </Text>
  );
}
