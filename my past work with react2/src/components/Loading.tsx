import { Center, Spinner } from "@chakra-ui/react";
import { useIsFetching } from "@tanstack/react-query";

export function Loading() {
  const isFetching = useIsFetching();

  return (
    <Center width="100vw" height="100vh" position="fixed" zIndex="-1">
      <Spinner display={isFetching ? "inherit" : "none"} zIndex="1" />
    </Center>
  );
}
