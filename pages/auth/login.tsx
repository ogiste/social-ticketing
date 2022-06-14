import {ChakraProvider,} from '@chakra-ui/react';
import {Provider as WagmiProvider} from "wagmi";
import {toast} from "react-hot-toast";
import {QueryCache, QueryClient, QueryClientProvider} from "react-query";
import * as React from "react";
import {providers} from "ethers";
import LoginForm from "../../components/auth/LoginForm";
import theme from "../../theme";
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

const LoginPage = () => {

  return (
    <WagmiProvider autoConnect provider={provider}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <LoginForm/>
        </QueryClientProvider>
      </ChakraProvider>
    </WagmiProvider>
  );

}


export default LoginPage;