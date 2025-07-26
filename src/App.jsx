import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Assuming you have some custom styles in App.css


function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light-brown">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
