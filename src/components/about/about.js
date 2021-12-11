import { useRef } from "react";
import "./about.css";
import profilepic from "../photo/profile.png";
import { themeList } from "../themes/theme";
import useVisible from "../../hooks/useVisible";

let About = ({ themes, width }) => {
  const ref = useRef();
  const onVisible = useVisible(ref);
  return (
    <div className="container" id="about">
      <div
        className="about-container"
        ref={ref}
        style={{ opacity: onVisible ? "1" : "0" }}
      >
        <div className="about">
          <h2 id="title">
            <span>01.</span>About Me:
          </h2>
          <div className="about-content">
            <div className="about-p">
              <p>
                Hi, my name is <span className="hightLight">Tuan Kiet</span>.
                Friends and family call me Bi. My story begins in 2017 when my
                cousin gave me a Raspberry Pi as a gift for middle school
                graduation. I began to experiment after watching a few lessons
                and threw myself into tiny and major projects. I learned that I
                enjoy using coding to create things and solve problems. So I
                chose to pursue my passion as a career.
                <br />
                <br /> I'm currently a student at{" "}
                <a
                  href="http://www.tlu.edu.vn/"
                  target="_blank"
                  className="hightLight"
                  rel="noopener noreferrer"
                >
                  T.L.U
                </a>{" "}
                , Vietnam,where I'm majoring in{" "}
                <a className="hightLight" href="#h">
                  E.T.E
                </a>{" "}
                . At the moment, I'm looking for a part-time job or an intern
                position at a tech firm.
              </p>
            </div>

            <div className="profilepic">
              <img src={profilepic} alt="profile pic" />
              <div className="profileIcon">
                <img
                  src={
                    themeList.find((theme) => theme.name === themes).profileIcon
                  }
                  alt="profileIcon"
                  style={{ display: themes === "default" ? "none" : "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
