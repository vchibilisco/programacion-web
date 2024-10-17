import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './layout/App.jsx';
import ErrorNotFoundPage from './pages/error/ErrorNotFoundPage.jsx';
import CareersPage from './pages/careers/CareersPage.jsx';

import './index.css';
import MainPage from './pages/mainPage/MainPage.jsx';
import CareerDetail from './pages/careers/CareerDetail.jsx';
import CareerForm from './pages/careers/CareerForm.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorNotFoundPage />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: 'careers',
        element: <CareersPage />
      },
      {
        path: 'careers/:id',
        element: <CareerDetail />
      },
      {
        path: 'careers/:id/edit',
        element: <CareerForm />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ routes } />
  </StrictMode>,
);
