import Typewriter from "typewriter-effect";
import { themeList } from "../themes/theme";
import { FaArrowDown } from "react-icons/fa";
import "./intro.css";

let Intro = ({ Bounce, themes }) => {
  return (
    <div
      className="container"
      id="home"
      style={{
        backgroundImage: `url(${
          themeList.find((item) => item.name === themes).bckgrImg
        })`,
        backgroundPosition: "30% 92%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="greet-container">
        <div className="greet">
          <p id="hi">Hi, i'm </p>
          <h1>
            Tuan K<span>i</span>et
          </h1>
          <h2>
            I'm&nbsp;
            <Typewriter
              options={{
                strings: [
                  "<span id='job'><span id='dot'>a</span> Web Developer <span id='dot'>.</span></span>",
                  "<span id='job'><span id='dot'>an</span> Engineer <span id='dot'>.</span></span>",
                  "<span id='job'><span id='dot'>a</span> Guitarist <span id='dot'>.</span></span>",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p id="status">
            "I love building and creating things for the internet.
            <br /> Currently, I'm focusing on learning to create <br />
            <span className="hightLight">Back-End</span> and{" "}
            <span className="hightLight">I.O.T</span> applications ."
          </p>
          <div className="resume">
            <button>
              <a href="https://github.com/BarryAlvord">here's my resume</a>
            </button>
          </div>
        </div>
        <div className="scrolldown-container">
          <div
            className={Bounce ? "scrolldown bounce" : "scrolldown"}
            style={{
              color: themes === "default" ? "" : "rgb(var(--colorSecondary))",
              opacity: Bounce ? "1" : "0",
            }}
          >
            <FaArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
