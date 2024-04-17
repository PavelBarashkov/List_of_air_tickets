import type React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
