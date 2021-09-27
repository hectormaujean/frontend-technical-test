import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { LoggedUserContext } from "../modules/contexts";

import { getLoggedUserId } from "../utils/getLoggedUserId";

import "../styles/globals.css";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LoggedUserContext.Provider value={getLoggedUserId()}>
        <Component {...pageProps} />
      </LoggedUserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
