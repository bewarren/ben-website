"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 1000 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <Link href="/#top" style={{ display: showButton ? "block" : "block" }}>
        <span className="flex flex-row content-center items-center hover:text-red-600  text-red-400">
          <p className="font-mono text-2xl text-center font-semibold ml-3 ">
            ~/BW
          </p>
        </span>
      </Link>
      <div
        style={{
          display: showButton ? "block" : "none",
        }}
      ></div>
    </>
  );
};

export default Logo;
