import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { lazy, Suspense } from "react";
import ScrollTop from "./components/scroll-top";

const Home = lazy(() => import("./pages/home"));
const Media = lazy(() => import("./pages/media"));
const Search = lazy(() => import("./pages/search"));
const Best = lazy(() => import("./pages/best"));
const All = lazy(() => import("./pages/all"));
const SignIn = lazy(() => import("./pages/signin"));
const NotFound = lazy(() => import("./pages/notfound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense><ScrollTop /><Home /></Suspense>
  },
  {
    path: "/best",
    element: <Suspense><ScrollTop /><Best /></Suspense>
  },
  {
    path: "/all",
    element: <Suspense><ScrollTop /><All /></Suspense>
  },
  {
    path: "/login",
    element: <Suspense><ScrollTop /><SignIn /></Suspense>
  },
  {
    path: "/media/:id",
    element: <Suspense><ScrollTop /><Media /></Suspense>
  },
  {
    path: "/search/:text",
    element: <Suspense><ScrollTop /><Search /></Suspense>
  },
  {
    path: "/*",
    element: <Suspense><ScrollTop /><NotFound /></Suspense>
  }
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #0F0F0F;
    color: #EEEEEE;
    font-family: 'BMJUA';
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #B0B0B0; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 173, 181, 0.1);  /*스크롤바 뒷 배경 색상*/
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Wrapper>
  );
};

export default App;