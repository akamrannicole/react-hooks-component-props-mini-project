import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);
const posts = [
  { id: 1, title: "First Post", date: "2024-05-01", preview: "Preview of the first post" },
  { id: 2, title: "Second Post", date: "2024-05-02", preview: "Preview of the second post" } 
]
 
function App() {
  return (
    <div className="App">
     <Header name='My Blog'></Header>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <About
      image="https://example.com/blog-logo.png"
      about="Welcome to my amazing blog"/>
     <ArticleList
     key={posts}
     />
     
    </div>
    
  );
}

export default App;
