import { Suspense, lazy } from "react";
import { Skeleton } from "antd";
import { Route, Routes, Navigate } from "react-router-dom";
import { PATH } from "./constants/path";

const Page1 = lazy(() => import("./pages/page-1"));
const Page2 = lazy(() => import("./pages/page-2"));
const Page3 = lazy(() => import("./pages/page-3"));
const Page4 = lazy(() => import("./pages/page-4"));

export const Root: React.FC = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path={PATH["PAGE-1"]} element={<Page1 />} />
        <Route path={PATH["PAGE-2"]} element={<Page2 />} />
        <Route path={PATH["PAGE-3"]} element={<Page3 />} />
        <Route path={PATH["PAGE-4"]} element={<Page4 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
