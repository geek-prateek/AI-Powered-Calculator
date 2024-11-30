import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import "./index.css";
import Home from "./screens/home";

const paths = [
  {
    path: '/',
    element: (
      <Home/>
    ),
  },
];

const BrowserRouter = createBrowserRouter(paths);

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={BrowserRouter}/>;
    </MantineProvider>
  );
}

export default App;