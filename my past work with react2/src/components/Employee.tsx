import { Flex, Heading, Hide, Image, Stack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useEmployee } from "../hooks/useEmployee";

export function Employee() {
  const { id } = useParams();

  const { data, isError, isLoading } = useEmployee(
    "http://localhost:3030/employees",
    id
  );

  if (isLoading || isError) return null;

  const { imageFilePath, jobTitle, firstName, lastName, teamName } = data;

  return (
    <Stack
      spacing={{ base: 0, sm: "24px" }}
      direction="row"
      flexWrap="wrap"
      rowGap="4"
      justifyContent="center"
    >
      <Image
        height="auto"
        width="175px"
        maxWidth="100%"
        objectFit="cover"
        src={`http://localhost:3030/${imageFilePath}`}
        fallbackSrc="https://via.placeholder.com/175"
        alt={`${firstName} ${lastName}`}
      />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems={{
          base: "center",
          sm: "initial",
        }}
      >
        <Heading
          as="h2"
          size={{
            base: "20px",
            sm: "xl",
          }}
          display="flex"
          alignItems="last baseline"
          marginBottom="2"
        >
          {firstName}
          <Text
            as="span"
            fontFamily="sans-serif"
            fontWeight="light"
            fontSize={{ base: "12px", sm: "2xl" }}
            paddingLeft="1.5"
          >
            {lastName}
          </Text>
        </Heading>

        <Flex
          alignItems="center"
          flexWrap="wrap"
          justifyContent={{ base: "center", sm: "initial" }}
        >
          <Text
            as="span"
            fontSize={{
              base: "15px",
              sm: "xl",
            }}
            paddingRight={{
              base: 0,
              sm: "2",
            }}
          >
            {jobTitle}
          </Text>
          <Hide breakpoint="(max-width: 180px)">
            <Text
              as="span"
              fontSize={{
                base: "15px",
                sm: "xl",
              }}
            >
              |
            </Text>
          </Hide>
          <Text
            as="span"
            fontSize={{
              base: "11px",
              sm: "md",
            }}
            paddingLeft={{
              base: 0,
              sm: "2",
            }}
          >
            {teamName}
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
}
