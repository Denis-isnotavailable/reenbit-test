import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const CharacterPage = lazy(() => import("../pages/СharacterPage/СharacterPage"));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>} >
      <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<CharacterPage />} />
        <Route path="*" element={<div>Page not found - 404</div>} />

      </Routes>
    </Suspense>
  );
};
