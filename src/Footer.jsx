import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 w-100">
      <div className="container text-center">
        <div className="mb-3">
          <a href="/" className="text-white me-4"><FaFacebookF /></a>
          <a href="/" className="text-white me-4"><FaTwitter /></a>
          <a href="/" className="text-white me-4"><FaInstagram /></a>
          <a href="/" className="text-white"><FaGithub /></a>
        </div>
        <p className="mb-0">&copy;2025 BlogSphere. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
