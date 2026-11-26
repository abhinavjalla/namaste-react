import React from "react";
import { createRoot } from "react-dom/client";
//const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");

//create structure like below using code

{
  /* <div id="parent">
  <div id="child1">
    <h1>I'm H1 Tag</h1>
    <h2>I'm H2 Tag</h2>
  </div>
  <div id="child2">
    <h1>I'm H1 Tag</h1>
    <h2>I'm H2 Tag</h2>
  </div>
</div>; */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1-child1" }, "I'm H1 Tag"),
    React.createElement("h2", { key: "h2-child1" }, "I'm H2 Tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-child2" }, "I'm H1 Tag"),
    React.createElement("h2", { key: "h2-child2" }, "I'm H2 Tag"),
  ]),
]);

const root = createRoot(document.getElementById("root"));


root.render(parent);
