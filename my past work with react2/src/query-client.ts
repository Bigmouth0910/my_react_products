import { QueryCache, QueryClient } from "@tanstack/react-query";

import type { UseToastOptions } from "@chakra-ui/react";

import { toast } from "./components/Toast";
import { theme } from "./theme";

export const client = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) =>
      toast({
        description: (error as Error).message,
        title: "Server Error",
        status: "error",
        duration: 3000,
        isClosable: true,
        theme,
      } as UseToastOptions),
  }),
});
