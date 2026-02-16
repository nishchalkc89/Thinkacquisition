import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomeNew } from "./pages/HomeNew";
import { AboutNew } from "./pages/AboutNew";
import { TrainingNew } from "./pages/TrainingNew";
import { BusinessDevelopment } from "./pages/BusinessDevelopment";
import { Resources } from "./pages/Resources";
import { ContactNew } from "./pages/ContactNew";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomeNew /> },
      { path: "about", element: <AboutNew /> },
      { path: "training", element: <TrainingNew /> },
      { path: "business-development", element: <BusinessDevelopment /> },
      { path: "resources", element: <Resources /> },
      { path: "contact", element: <ContactNew /> },
    ],
  },
]);