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
  const countDown = () => {
    const endDate = new Date(
      `December 25, ${new Date().getUTCFullYear()} 00:00:00`
    ).getTime();
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
    });
  };
  useEffect(() => {
    const count = setInterval(countDown, 1000);
    return () => clearInterval(count);
  }, []);
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
            time.days === 1
              ? "christmasCountdown closeChristmas"
              : "christmasCountdown"
          }
        >
          <article>
            <p>{time.days}</p>
            <h3>{time.days === 1 ? "Day" : "Days"}</h3>
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
        <h2>until christmas</h2>
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
