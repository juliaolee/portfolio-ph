import { useState } from "react";
import { RouterProvider } from "react-router";

import { router } from "./router/router";
export const App = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
