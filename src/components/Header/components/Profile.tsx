import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Moraes</Text>
          <Text color="gray.300" fontSize="small">
            gabriel.namoraez@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Gabriel Moraes"
        src="https://avatars.githubusercontent.com/u/75289996?v=4"
      />
    </Flex>
  );
}
