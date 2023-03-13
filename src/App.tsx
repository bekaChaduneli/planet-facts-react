import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import planets from "../data.json";
import Content from "./components/Contentss/Content";
import GlobalStyles from "./components/styles/Global";
function App() {
  const [name, setName] = useState<string>("Mercury");
  const [theme, setTheme] = useState({
    main: "#419EBB",
    black: "#070724",
    lightBlack: "#38384F",
    lightGray: "#838391",
    white: "#ffffff",
    overview: false,
    structure: false,
    surface: false,
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="/Mercury" />} />
        <Route
          path="/:name"
          element={
            <Content
              theme={theme}
              setTheme={setTheme}
              name={name}
              setName={setName}
              data={planets}
            />
          }
        />
      </>
    )
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
