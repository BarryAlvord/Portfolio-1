import { useRef } from "react";
import useVisible from "../../hooks/useVisible";
import "./skills.css";
import { skillItems } from "./skillsItems";

let Skills = ({ width }) => {
  const ref = useRef();
  const onVisible = useVisible(ref);
  return (
    <div className="container" id="skills">
      <div
        className="skills-container"
        ref={ref}
        style={{ opacity: onVisible ? "1" : "0" }}
      >
        <div className="skills">
          <h2 id="title">
            <span>02.</span>What i can do:
          </h2>
          <ul>
            {skillItems.map((item, index) => {
              const { id, name, percent, icon } = item;
              return (
                <li key={id} className="singleChart">
                  <div className="circleContainer">
                    {width <= 800 ? (
                      id % 2 ? (
                        <div className="circleTitle">
                          <p>
                            <i>{icon}</i>
                            {name}
                          </p>
                        </div>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    <svg viewBox="0 0 36 36" className="circularChart">
                      <path
                        className="circleBg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle"
                        strokeDasharray={`${percent},100`}
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <text x="18" y="21" className="percentage">
                        {percent}%
                      </text>
                    </svg>
                    {width <= 800 ? (
                      !(id % 2) ? (
                        <div className="circleTitle">
                          <p>
                            <i>{icon}</i>
                            {name}
                          </p>
                        </div>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </div>
                  {width >= 800 ? (
                    <div className="circleTitle">
                      <p>
                        <i>{icon}</i>
                        {name}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
