import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './layout/Layout.jsx';
import MainPage from './pages/MainPage.jsx';
import ListCareers from './pages/careers/ListCareers.jsx';
import DetailCareers from './pages/careers/DetailCareers.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/careers',
        element: <ListCareers />
      },
      {
        path: '/careers/:id',
        element: <DetailCareers />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>,
);
