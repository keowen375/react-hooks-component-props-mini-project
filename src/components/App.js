import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <About/>
      <ArticleList/>
      <Header name={blogData.name}/>
      <Article/>
    </div>
  );
  )
}

export default App;