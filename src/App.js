import './App.css';
import Home from '../src/Components/Home';
import React, { useState, useEffect } from "react";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementsByClassName("animated");

    const handleScroll = () => {
      for (const i of target) {
        if (window.pageYOffset > i.offsetTop - window.innerHeight) {
          setShow(true);

      i.classList.add("show");
      console.log(i)

}}}


    window.addEventListener("scroll", handleScroll);
    window.addEventListener("pageShow", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

      // <p id="target" style={{ opacity: show ? 1 : 0, transition: "opacity 1s ease-in-out" }}>
      //   Paragraph 4
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
