import React from "react";
import Links from "./Links";

import user from "../data/user"
console.log(user)

function About(props) {

  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>"I made this!"</p> : null }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/" /> 
    </div>
  );
}

export default About;
