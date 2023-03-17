import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import Root from './Pages/Root';
import CartProvider from './Store/CartProvider';
import ErrorPage from './Pages/ErrorPage';

const Product = React.lazy(() => import('./Pages/Products/Product'));
const Cart = React.lazy(() => import('./Pages/Carts/Cart'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/products',
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              <Product />
            </React.Suspense>
          ),
        },
        {
          path: '/carts',
          element: (
            <React.Suspense fallback={<>Loading...</>}>
              <Cart />
            </React.Suspense>
          ),
        },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  { basename: '/dazcravings' }
);
function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
