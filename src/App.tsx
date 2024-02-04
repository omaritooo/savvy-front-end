import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./utils/routes/router";

const App = () => <RouterProvider router={router} />;

export default App;
