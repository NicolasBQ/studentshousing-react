import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { StudentRequest } from './StudenRequests';
import { ErrorElement } from './ErrorElement';
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import { ResidencyProvider } from "./Context/ResidencyContext";
import { RequestProvider } from "./Context/RequestContext";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorElement />
  },
  {
    path: '/requests',
    element: <StudentRequest />,
    errorElement: <ErrorElement /> 
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResidencyProvider>
      <RequestProvider>
        <RouterProvider router={router}/>
      </RequestProvider>
    </ResidencyProvider>
  </React.StrictMode>,
)
