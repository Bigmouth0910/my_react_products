import { HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import type { EmployeeResultProps } from "../types";

export function EmployeeResult({ employees, searchTerm }: EmployeeResultProps) {
  return employees.length ? (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="8">
      {employees.map(({ id, firstName, lastName, jobTitle, imageFilePath }) => (
        <Link to={`/employees/${id}?q=${searchTerm}`} key={id}>
          <HStack
            spacing={2}
            alignItems="center"
            justifyContent="flex-start"
            boxShadow="md"
            rounded="md"
            bg="white"
          >
            <Image
              boxSize="105px"
              src={`http://localhost:3030/${imageFilePath}`}
              alt={`${firstName} ${lastName}`}
            />
            <VStack alignItems="baseline">
              <HStack>
                <Text fontSize="2xl">{`${firstName} ${lastName}`}</Text>
              </HStack>
              <HStack>
                <Text fontSize="xl">{jobTitle}</Text>
              </HStack>
            </VStack>
          </HStack>
        </Link>
      ))}
    </SimpleGrid>
  ) : null;
}
