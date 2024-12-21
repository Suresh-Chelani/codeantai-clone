import React from "react";
import SignnPage from "./component/SignnPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deshbord from "./component/Deshbord";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <SignnPage />
              </div>
            }
          />
          <Route path="/dashboard" element={<Deshbord />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
