import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./allRoutes";
import { Layout } from "../layout/Layout";

export const Routing = () => {
  return (
    <>
      <Routes>
        {routes.map((route: any, idx: any) => (
          <Route
            path={route.path}
            element={<Layout>{route.component}</Layout>}
            key={idx}
          />
        ))}
      </Routes>
    </>
  );
};
