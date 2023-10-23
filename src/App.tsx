// src/App.tsx
import React from "react";
import "./App.css";
import MyForm from "./components/MyForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <h1>React Hook Form with Toastify</h1>
      <MyForm />
      <ToastContainer />
    </div>
  );
}

export default App;
