import React from "react";
import "./footer.css";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="flex justify-center text-sm p-3 mt-3 w-auto footer_App">
      By Rahmou All rights Reserved, {year}
    </div>
  );
};

export default Footer;
