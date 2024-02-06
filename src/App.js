import "./App.css";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Feature } from "./components/Feature";
import { Offers } from "./components/Offers";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { JoinUs } from "./components/JoinUs";
import { useState } from "react";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Feature />
      <Offers />
      <About />
      <Contact />
      <JoinUs />
    </div>
  );
}

export default App;
