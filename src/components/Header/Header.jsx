import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "./header.css";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    gsap.to("#nav", {
      backgroundColor: "#D8EFD3",
      duration: 0.1,
      height: "100px",
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    });

    gsap.to("#main", {
      backgroundColor: "white",
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
      },
    });

    // Clean up ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <div id="nav">
        <div className="logo-container">
          <img src="" className="logo" />
        </div>
        <h4>HOME</h4>
        <h4>MY NETWORK</h4>
        <h4>JOBS</h4>
        <h4>MESSAGING</h4>
        <h3>NOTIFICATION</h3>
        <a href="#">
          <div className="btn-yellow" id="btn">
            ME
          </div>
        </a>
      </div>

      
    </>

    
  );
};

export default Header;
