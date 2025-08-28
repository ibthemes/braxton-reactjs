import { lazy, Suspense, useEffect } from "react";
import "../public/css/styles.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { Route, Routes } from "react-router-dom";
// Lazy imports
import InitScroll from "@/components/scroll/InitScroll";
const LenisSmoothScroll = lazy(
  () => import("@/components/scroll/LenisSmoothScroll")
);
const PreviewPage = lazy(() => import("./pages"));
const HomeSvgPage = lazy(() => import("./pages/homes/home-svg"));
const HomeImagePage = lazy(() => import("./pages/homes/home-image"));
const HomeColorPage = lazy(() => import("./pages/homes/home-solid-color"));
const HomeGradientPage = lazy(() => import("./pages/homes/home-gradient"));
const ScrollTopBehaviour = lazy(
  () => import("./components/scroll/ScrolltoToBehaviour")
);

import { ErrorBoundary } from "react-error-boundary";

function App() {
  useEffect(() => {
    const scheme = localStorage.getItem("color-scheme") || "light";
    document.documentElement.setAttribute("color-scheme", scheme);
  }, []);

  return (
    <>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <h2>Something went wrong.</h2>
            <pre style={{ color: "red" }}>{error.message}</pre>
            <button
              className="btn btn-primary mt-3"
              onClick={resetErrorBoundary}
            >
              Try again
            </button>
          </div>
        )}
      >
        <Suspense
          fallback={
            <div
              className="position-fixed top-0 start-0 h-100 d-flex justify-content-center align-items-center bg-white"
              style={{ zIndex: 1050, width: "100vw" }}
            >
              <div
                className="spinner-border text-primary"
                role="status"
                style={{ width: "3rem", height: "3rem" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/">
              <Route index element={<PreviewPage />} />

              <Route path="home-svg" element={<HomeSvgPage />} />
              <Route path="home-image" element={<HomeImagePage />} />
              <Route path="home-solid-color" element={<HomeColorPage />} />
              <Route path="home-gradient" element={<HomeGradientPage />} />
            </Route>{" "}
          </Routes>
          <InitScroll />
          <ScrollTopBehaviour />
          <LenisSmoothScroll />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
