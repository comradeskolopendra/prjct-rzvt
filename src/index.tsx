import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import App from "./app/app";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={client}>
        {/*<Provider>*/}
        <App/>
        {/*</Provider>*/}
      </QueryClientProvider>
    </React.StrictMode>,
)
