import { Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { useDebounce } from "../hooks/useDebounce";
import { useSearchTerm } from "../hooks/useSearchTerm";

import { EmployeeResult } from "./EmployeeResult";

export function SearchResults() {
  const { searchTerm } = useSearchTerm();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { isLoading, isError, data } = useQuery(
    ["term", debouncedSearchTerm],
    async () => {
      const response = await fetch(
        `http://localhost:3030/employees?q=${debouncedSearchTerm}`
      );
      return response.json();
    }
  );

  if (isLoading || isError) return null;

  return (
    <>
      <Heading as="h2" size="md" paddingBottom="4">
        {!searchTerm ? "All Employees" : `Search Results (${data.length})`}
      </Heading>

      <EmployeeResult employees={data} searchTerm={searchTerm} />
    </>
  );
}
