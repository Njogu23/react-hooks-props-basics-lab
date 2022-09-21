import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
import Links from "./Links";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name="George Njogu" city="Kitui County" />
      <About bio={true} />
        <Links />
      {/* </ About> */}
    </div>
  );
}

export default App;
