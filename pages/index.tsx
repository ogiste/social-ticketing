import type {NextPage} from "next";
import * as React from "react";
import {QueryCache, QueryClient, QueryClientProvider} from "react-query";
import {Box, ChakraProvider} from "@chakra-ui/react";
import {toast, Toaster} from "react-hot-toast";
import theme from "../theme";
import {Provider as WagmiProvider} from "wagmi";
import {providers} from "ethers";
import Comments from "../components/Comments";
import Link from 'next/link';
import Hero from "../components/Hero";

// Provider that will be used when no wallet is connected 
const polygonTestNetProvider = "https://matic-mumbai.chainstacklabs.com";
const localTestNetProvider = "http://localhost:8545";
const provider = providers.getDefaultProvider(polygonTestNetProvider);

// Create a react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: () => {
      toast.error(
        "Network Error: Ensure Metamask is connected to the same network that your contract is deployed to."
      );
    },
  }),
});

const App: NextPage = () => {
  return (
    <WagmiProvider autoConnect provider={provider}>
      <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Hero/>
            <Box p={8} maxW="600px" minW="320px" m="0 auto">
              <Comments topic="my-mint-post"/>
              <Toaster position="bottom-right"/>
            </Box>
            <Box>
              <Link href="/community/details/">ETHSafari The Blocktrain Room</Link> |{" "}
              <Link href="/community/details/">Jukebox Radio</Link>
              <Link href="/community/details/">family.friends Album drop</Link>
              <Link href="/community/details/">KenyanNFTClub vibes room</Link>
            </Box>
          </QueryClientProvider>
      </ChakraProvider>
    </WagmiProvider>

  );
};

export default App;
