import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "moment/locale/fr";
import moment from "moment";

import { LoggedUserContext } from "../modules/contexts";

import { getLoggedUserId } from "../utils/getLoggedUserId";

import "../styles/globals.css";

const queryClient = new QueryClient();

moment.locale("fr");

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LoggedUserContext.Provider value={getLoggedUserId()}>
        <Component {...pageProps} />
      </LoggedUserContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
