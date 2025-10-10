import { createBrowserRouter, Navigate } from "react-router";
import {
  HomePage,
  PortfolioPage,
  AboutPage,
  BlogPage,
  ContactsPage,
} from "../../pages";
import { AppPage } from "../../shared";
import { ROUTES } from "../../shared/enum";

// export const router = createBrowserRouter([
//   {
//     path: ROUTES.ROOT,
//     element: <AppPage />,
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: '', element: <HomePage /> },
//       { path: ROUTES.PORTFOLIO, element: <PortfolioPage /> },
//       { path: ROUTES.BLOG, element: <BlogPage /> },
//       { path: ROUTES.ABOUT, element: <AboutPage /> },
//       { path: ROUTES.CONTACTS, element: <ContactsPage /> },
//       {
//         path: "*",
//         element: <Navigate to={ROUTES.ROOT} replace />,
//       },
//     ],
//   },
// ]);

export const router = createBrowserRouter([
  { path: "", element: <HomePage /> },
  { path: ROUTES.PORTFOLIO, element: <PortfolioPage /> },
  { path: ROUTES.BLOG, element: <BlogPage /> },
  { path: ROUTES.ABOUT, element: <AboutPage /> },
  { path: ROUTES.CONTACTS, element: <ContactsPage /> },
  {
    path: "*",
    element: <Navigate to={ROUTES.ROOT} replace />,
  },
]);
