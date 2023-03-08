import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="flex justify-center text-sm p-3 mt-3 w-auto footer_App">
      By{" "}
      <span>
        <a
          href="https://www.rahmou.com/"
          target="_blank"
          rel="noreferrer"
          className="text-red-500"
        >
          &nbsp;Rahmou&nbsp;
        </a>
      </span>
      All Rights Reserved, {year}
    </div>
  );
};

export default Footer;
