import React from "react";

const Footer = () => {
  return (
    <div className="m-auto md:pl-20 p-4 py-5 text-center">
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Radhey Patel. All rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
