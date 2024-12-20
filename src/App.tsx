import React from "react";
import "./App.css";
import LandingLayout from "./components/LandingLayout";
import { Outlet, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import GetStarted from "./components/GetStarted";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Header>
              <Outlet />
            </Header>
          }
        >
          <Route path={""} element={<LandingLayout />} />
          <Route path={"get-started"} element={<GetStarted />} />
        </Route>
      </Routes>
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </>
  );
}

export default App;
