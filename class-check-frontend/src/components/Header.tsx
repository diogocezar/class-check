import { Flex, Avatar, Box, Text, HStack } from "@chakra-ui/react";

import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex
      as="header"
      h="20"
      bgColor="white"
      px="8"
      shadow="0 0 20px rgba(0, 0, 0, 0.05)"
    >
      <Flex
        width="100%"
        maxWidth={1480}
        marginX="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo />

        <HStack spacing="4" alignItems="center">
          <Box textAlign="right">
            <Text fontWeight="medium">Ruliana Brochi Batista</Text>
            <Text color="gray.500" fontSize="small">
              ruliana.brochi@escola.pr.gov.br
            </Text>
          </Box>
          <Avatar size="md" name="Ruliana Brochi Batista" />
        </HStack>
      </Flex>
    </Flex>
  );
}
