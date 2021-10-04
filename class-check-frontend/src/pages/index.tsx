import React, { Component } from "react";
import Head from "next/head";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function Home() {
  const events = [
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: "Aula 1",
    },
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: "Aula 2",
    },
  ];
  return (
    <Box>
      <Head>
        <title>Tela Principal</title>
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
            <Box width="100%">
              <Box>
                <Heading size="lg" fontWeight="medium">
                  Tela Principal
                </Heading>
                <Text mt="1" color="gray.400">
                  Professor: Ruliana Brochi Batista
                </Text>
              </Box>
              <Box>
                <Calendar
                  localizer={localizer}
                  defaultDate={new Date()}
                  defaultView="month"
                  events={events}
                  style={{ height: "100vh" }}
                />
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
