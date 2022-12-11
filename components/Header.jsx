"use client";

import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Header() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["UI/UX designer", "Web developer", "Freelancer"],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });
  }, []);

  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mywebsite-fa7b3.appspot.com/o/profile-img.png?alt=media&token=882b9d37-e82f-4a6f-b7a5-4f0969bb3ec0"
              alt="Profile Picture"
            />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>Leonardo Lopez</span>
            <br />a&nbsp;<span ref={el}></span>
          </h1>
          <p>
            I'm a Web Developer, I love to create beautiful and functional
            websites. I have experience in front-end and back-end technologies,
            database creation and maintenance, and website design. I am a
            trained and experienced web developer with strong analytical and
            creative abilities. Dedicated to the team and meticulous.
          </p>
          <div className="control" data-id="about" align="center">
            <button className="button-30" role="button" data-id="about">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
