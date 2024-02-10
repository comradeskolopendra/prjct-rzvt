import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Provider} from "react-redux";

import App from './App.tsx'
import './index.css'

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={client}>
        <Provider>
          <App/>
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>,
)
