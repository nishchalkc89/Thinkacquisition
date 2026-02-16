import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Training } from "./pages/Training";
import { BusinessDevelopment } from "./pages/BusinessDevelopment";
import { Resources } from "./pages/Resources";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "training", element: <Training /> },
      { path: "business-development", element: <BusinessDevelopment /> },
      { path: "resources", element: <Resources /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
