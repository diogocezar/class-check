import Head from "next/head";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Table,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Link as ChakraLink,
  StackDivider,
} from "@chakra-ui/react";

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Pagination } from "../../components/Pagination";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { RiSearch2Line, RiAddLine } from "react-icons/ri";

import { Input } from "../../components/Form/Input";

import Link from "next/link";
import { MessageItem } from "../../components/MessageItem";

type SearchMessagesFormData = {
  search: string;
};

export default function Messages() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { register, handleSubmit } = useForm();

  const data = {
    messages: [
      {
        id: 1,
        subject: "Ruliana Brochi Batista",
        sentAt: "10/10/2021",
      },
      {
        id: 2,
        subject: "Diogo Cezar Teixeira Batista",
        sentAt: "10/10/2021",
      },
    ],
  };

  const isLoading = false;

  const handleSearchMessages: SubmitHandler<SearchMessagesFormData> = async ({
    search,
  }) => {
    setPage(1);
    setSearchQuery(search);
  };

  return (
    <Box>
      <Head>
        <title>Professores</title>
      </Head>

      <Header />

      <Flex width="100%" my="6" maxWidth={1480} marginX="auto">
        <Sidebar />

        <Box
          flex="1"
          ml="6"
          borderRadius={4}
          bgColor="white"
          shadow="0 0 20px rgba(0, 0, 0, 0.05)"
          p="8"
        >
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Box>
              <Heading size="lg" fontWeight="medium">
                Professores
              </Heading>
              <Text mt="1" color="gray.400">
                Listagem completa de professores
              </Text>
            </Box>

            <Flex>
              <Flex as="form" onSubmit={handleSubmit(handleSearchMessages)}>
                <Input
                  name="search"
                  placeholder="Buscar professores"
                  {...register("search")}
                />

                <Button
                  size="lg"
                  fontSize="sm"
                  colorScheme="purple"
                  ml="2"
                  disabled={isLoading}
                  isLoading={isLoading}
                >
                  <Icon as={RiSearch2Line} />
                </Button>
              </Flex>
              <Link href="/teachers/create">
                <Button
                  size="lg"
                  fontSize="xl"
                  colorScheme="purple"
                  ml="2"
                  maxW={59}
                >
                  <Icon as={RiAddLine} />
                </Button>
              </Link>
            </Flex>
          </Flex>

          <Table>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Cadastrado em</Th>
              </Tr>
            </Thead>
            {/* <Tbody>
              {data?.messages.map((message) => (
                <MessageItem message={message} />
              ))}
            </Tbody> */}
          </Table>

          <Pagination
            totalCountOfRegisters={data?.totalCount}
            currentPage={page}
            onPageChange={setPage}
            currentCountOfPosts={data?.messages.length}
          />
        </Box>
      </Flex>
    </Box>
  );
}
