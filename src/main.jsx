import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {Store} from './store/Store.js'
import {MainPage,PlayContainer} from "./pages/index.js"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/play/:id",
                element: <PlayContainer />,
            },
        ],
    },
    
])


createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>,
)
