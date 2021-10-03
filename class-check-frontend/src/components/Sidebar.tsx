import { VStack, Link, Text, Flex, Button } from "@chakra-ui/react";
import {
  RiMailOpenLine,
  RiContactsLine,
  RiSettings2Line,
  RiLogoutBoxLine,
  RiHome2Line,
} from "react-icons/ri";
import { signOut } from "../contexts/AuthContext";
import { ActiveLink } from "./ActiveLink";

export function Sidebar() {
  function handleSignOut() {
    signOut();
  }

  return (
    <Flex
      as="aside"
      w="72"
      minH="calc(100vh - 8rem)"
      bgColor="white"
      py="8"
      shadow="0 0 20px rgba(0, 0, 0, 0.05)"
      borderRadius={4}
      direction="column"
    >
      <VStack spacing="4" pr="8" alignItems="stretch">
        <Text fontWeight="bold" color="gray.700" fontSize="small" px={8}>
          GERAL
        </Text>
        <ActiveLink href="/" shouldMatchExactHref passHref>
          <Link
            display="flex"
            alignItems="center"
            py="1"
            pl={8}
            borderLeft="3px solid"
          >
            <RiHome2Line size="20" />
            <Text ml="4" fontSize="medium" fontWeight="medium">
              Home
            </Text>
          </Link>
        </ActiveLink>
        <ActiveLink href="/teachers" passHref>
          <Link
            display="flex"
            alignItems="center"
            py="1"
            pl={8}
            borderLeft="3px solid"
          >
            <RiMailOpenLine size="20" />
            <Text ml="4" fontSize="medium" fontWeight="medium">
              Professores
            </Text>
          </Link>
        </ActiveLink>
        <ActiveLink href="/classes" passHref>
          <Link
            display="flex"
            alignItems="center"
            py="1"
            pl={8}
            borderLeft="3px solid"
          >
            <RiContactsLine size="20" />
            <Text ml="4" fontSize="medium" fontWeight="medium">
              Turmas
            </Text>
          </Link>
        </ActiveLink>
      </VStack>
      <VStack spacing="4" pr="8" mt={8} alignItems="stretch">
        <Text fontWeight="bold" color="gray.700" fontSize="small" px={8}>
          SISTEMA
        </Text>
        <ActiveLink href="/settings" passHref>
          <Link
            display="flex"
            alignItems="center"
            py="1"
            pl={8}
            borderLeft="3px solid"
          >
            <RiSettings2Line size="20" />
            <Text ml="4" fontSize="medium" fontWeight="medium">
              Configuração
            </Text>
          </Link>
        </ActiveLink>
      </VStack>

      <Button
        onClick={handleSignOut}
        variant="link"
        alignSelf="flex-start"
        display="flex"
        alignItems="center"
        py="1"
        ml={8}
        mt="auto"
      >
        <RiLogoutBoxLine size="20" />
        <Text ml="4" fontSize="medium" fontWeight="medium">
          Logout
        </Text>
      </Button>
    </Flex>
  );
}
