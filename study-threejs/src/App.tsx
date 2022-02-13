import React, { Suspense } from "react";
import { EarthObj } from "./components";
import "./App.css";

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="App">
        <EarthObj />
      </div>
    </Suspense>
  );
}

export default App;
