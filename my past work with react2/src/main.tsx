import { ChakraProvider, Container } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Employee } from "./components/Employee";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { SearchResults } from "./components/SearchResults";
import { ToastContainer } from "./components/Toast";

import { theme } from "./theme";
import { client } from "./query-client";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <Loading />
          <Header />
          <Container pt="6" maxW="container.md">
            <Routes>
              <Route path="/" element={<SearchResults />} />
              <Route path="employees/:id" element={<Employee />} />
            </Routes>
          </Container>
          <ToastContainer />
        </QueryClientProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
