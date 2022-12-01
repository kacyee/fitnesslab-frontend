import * as React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Box minH="100vh" w="full" background={"brand.black"}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </QueryClientProvider>
  </ChakraProvider>
);
