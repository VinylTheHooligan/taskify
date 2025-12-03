import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Layout from './Layout.tsx'

// css
import './index.css'

const router : any = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "login",
      },
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
