import { AuthView } from "@/views/AuthView";
import { SettingsView } from "@/views/SettingsView";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthView />,
    // errorElement: <ErrorLayout />,
    // children: [
    //   {
    //     index: true,
    //     element: <HomeView />,
    //   },
    //   {
    //     path: "/conversion",
    //     element: <ConversionView />,
    //   },
    //   {
    //     path: "/history",
    //     element: <HistoryView />,
    //   },
    // ],
  },
  {
    path: "/settings",
    element: <SettingsView />,
  },
  // {
  //   path: "*",
  //   element: <ErrorLayout />,
  // },
]);
