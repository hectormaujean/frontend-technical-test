import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "moment/locale/fr";
import moment from "moment";

import { UserIdContext } from "../modules/contexts";

import { getLoggedUserId } from "../utils/getLoggedUserId";

import "../styles/globals.css";
import { Box } from "@mui/system";

const queryClient = new QueryClient();

moment.locale("fr");

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserIdContext.Provider value={getLoggedUserId()}>
        <Component {...pageProps} />
      </UserIdContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
