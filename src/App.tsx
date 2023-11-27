import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { userRoutes } from "./routes";

const router = createBrowserRouter(userRoutes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
