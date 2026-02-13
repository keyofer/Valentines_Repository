"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export function Providers({ children }) {
  // In v3, you must pass the 'value' prop
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
