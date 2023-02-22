import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NotFoundPage from "@/pages/NotFoundPage";
import SplashScreen from "@/pages/SplashScreen";
const Home = React.lazy(() => import('@/modules/home/Home'));
const AboutUs = React.lazy(() => import('@/pages/AbousUs'));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export const AppRoutes = () => {
  return (
    <React.Suspense fallback={<SplashScreen />}>
      <RouterProvider router={routes} />
    </React.Suspense>
  );
};

export default routes;
