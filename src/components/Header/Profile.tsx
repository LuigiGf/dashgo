import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luigi Gottardello</Text>
          <Text color="gray.300" fontSize="small">
            luigi.gottardello.fonseca@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Luigi Gottardello Fonseca"
        src="https://github.com/LuigiGf.png"
      />
    </Flex>
  );
}
