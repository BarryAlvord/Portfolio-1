import { useState, useEffect } from "react";
import "./christmasModal.css";
import Light from "./christmasLight";
import Tree from "./christmasTree";
import SnowMan from "./snowMan";
import Rudolph from "./rudolph";
import Santa from "./SantaCl";
import bg from "./modalBG.png";
export default function ChristmasModal() {
  const [time, setTime] = useState({
    days: "12",
    hours: "12",
    minutes: "12",
    seconds: "12",
  });
  let endDate = new Date(
    `December 25, ${new Date().getUTCFullYear()} 00:00:00`
  ).getTime();
  if (endDate - new Date().getTime() < 0) {
    endDate = new Date(
      `December 25, ${new Date().getUTCFullYear() + 1} 00:00:00`
    ).getTime();
  }
  useEffect(() => {
    const count = setInterval(() => {
      const today = new Date().getTime();
      const timeDiff = endDate - today;
      const seconds = 1000;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const days = hours * 24;

      setTime({
        days: Math.floor(timeDiff / days),
        hours: Math.floor((timeDiff % days) / hours),
        minutes: Math.floor((timeDiff % hours) / minutes),
        seconds: Math.floor((timeDiff % minutes) / seconds),
        chritsmas: false,
      });
    }, 1000);
    if (25 !== new Date().getDate()) {
      return;
    } else {
      setTime({
        chritsmas: true,
      });
    }
    return clearInterval(count);
  }, [endDate]);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="christmasHeader">
        <div className="ChirstmasLight">
          <Light />
        </div>
        <h1>
          <span id="merry">Merry</span>
          <br />
          <span id="christ">christmas</span>
        </h1>
        <h2>happy new year</h2>
      </div>
      <div className="christmasBody">
        <div
          className={
            time.days <= 1
              ? "christmasCountdown closeChristmas"
              : "christmasCountdown"
          }
        >
          {time.chritsmas ? (
            <div className="itsChristmas">
              <img
                id="holy"
                alt="holy"
                src="data:image/png;base64,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"
              />
              <h1>
                <span style={{ color: "#00df90" }}>Today</span>{" "}
                <span style={{ color: "#ffe39f" }}>It's</span> <br />
                <span>
                  {"Christmas".split("").map((item, index) => {
                    return (
                      <span
                        key={index}
                        style={{
                          color: index % 2 === 0 ? "#ff000f" : "",
                        }}
                      >
                        {item}
                      </span>
                    );
                  })}
                </span>
              </h1>
              <img
                id="candycane"
                alt="candycane"
                src="data:image/png;base64,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"
              />
            </div>
          ) : (
            <>
              <div>
                <article>
                  <p>{time.days}</p>
                  <h3>{time.days <= 1 ? "Day" : "Days"}</h3>
                </article>{" "}
                <article>
                  <p>{time.hours}</p>
                  <h3>hours</h3>
                </article>{" "}
                <article>
                  <p>{time.minutes}</p>
                  <h3>minutes</h3>
                </article>{" "}
                <article>
                  <p>{time.seconds}</p>
                  <h3>seconds</h3>
                </article>
              </div>
              <div>
                {" "}
                <h2>until christmas</h2>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="christmasFooter">
        <div className="snowMan">
          <SnowMan />
        </div>
        <div className="figures">
          {" "}
          <div className="rudolph">
            <Rudolph />
          </div>
          <div className="santa">
            <Santa />
          </div>
        </div>

        <div className="christmasTree">
          <Tree />
        </div>

        <div className="snowMan right" style={{ transform: "scaleX(-1)" }}>
          <SnowMan />
        </div>
      </div>
    </div>
  );
}
