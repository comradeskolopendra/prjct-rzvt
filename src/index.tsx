import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from 'react-router-dom';

import App from "./app/app";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      {/*<Provider>*/}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/*</Provider>*/}
    </QueryClientProvider>
  </React.StrictMode>,
)
