import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, {loader as postLoaders}  from "./routes/Posts";
import "./index.css";
import NewPost, {action as postAction}from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoaders,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: postAction
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // <App />
  // </React.StrictMode>
);
