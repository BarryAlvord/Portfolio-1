import { useState, useRef } from "react";
import { BsCaretRight } from "react-icons/bs";
import { AiOutlineFolder } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";
import Logo from "../logo/logo";
import { themeList } from "../themes/theme";
import useVisible from "../../hooks/useVisible";
import useFetchProjects from "../../hooks/useFetchProjects";
const Projects = ({ themes }) => {
  const [readMore, setMore] = useState(false);
  const ref = useRef();
  const onVisible = useVisible(ref);
  const [loading, projectState, projectsHL, projectsWL] = useFetchProjects();
  return (
    <div className="container" id="projects">
      <div
        className="projects-container"
        ref={ref}
        style={{ opacity: onVisible ? "1" : "0" }}
      >
        <div className="projects">
          <h2 id="title">
            <span>03.</span>&nbsp;Projects:
          </h2>
          {loading ? (
            <div className="projectLoad">
              <h2>Loading...</h2>
            </div>
          ) : (
            <div className="my-project">
              {projectState.statusCode === 204 &&
              projectState.notFound === "both" ? (
                <div className="noProject">
                  <h2>Projects will be updated soon</h2>
                  <h2>{themeList.find((item) => item.name === themes).msg}</h2>
                </div>
              ) : (
                <section>
                  <div className="ProjectsTitle">
                    <div className="line"></div>
                    <h2>Project HighLights</h2>
                    <div className="line"></div>
                  </div>
                  {projectState.statusCode === 204 &&
                  projectState.notFound === "projectsHL" ? (
                    <div className="noProject">
                      {" "}
                      <h2>Item Will Be updated soon</h2>
                      <h2>
                        {themeList.find((item) => item.name === themes).msg}
                      </h2>
                    </div>
                  ) : (
                    <section>
                      <div className="projectsHighlight">
                        {projectsHL.map((item, index) => {
                          const { name, tag, des, image } = item;
                          return (
                            <div className="projectHL" key={index}>
                              <div
                                className="projectHLBg"
                                style={{
                                  background: `linear-gradient(rgba(var(--backgrColorLight), 1),rgba(var(--backgrColorLight), 0.8),rgba(var(--backgrColorLight), 0.6)),
                          url(${image})`,
                                  backgroundPosition: "center",
                                  backgroundSize: "cover",
                                  backgroundRepeat: "no-repeat",
                                }}
                              ></div>
                              <div className="projectHLDetail">
                                <div className="projectBrand">
                                  {/* <img src={logo} alt="Logo" /> */}
                                  <Logo logoWidth={"16%"} />
                                </div>
                                <h3>{name}</h3>
                                <div className="projectHLDes">
                                  <p>{des}</p>
                                </div>
                                <ul className="projectHLTag">
                                  {tag.split(",").map((item) => {
                                    return (
                                      <li>
                                        <BsCaretRight className="icon projectHLTagIcon" />
                                        {item.trim()}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}
                  <div className="otherProjects">
                    <div className="ProjectsTitle">
                      <div className="line"></div>
                      <h2>Other Projects</h2>
                      <div className="line"></div>
                    </div>{" "}
                    {projectState.statusCode === 204 &&
                    projectState.notFound === "projectsWL" ? (
                      <div className="noProject">
                        <h2>Item Will Be updated soon</h2>
                        <h2>
                          {themeList.find((item) => item.name === themes).msg}
                        </h2>
                      </div>
                    ) : (
                      <section>
                        <div className="otherProjects-container">
                          {projectsWL
                            .slice(0, readMore ? projectsHL.length : "4")
                            .map((item, index) => {
                              const { name, tag, des } = item;
                              return (
                                <div
                                  className={
                                    index > 3 ? "projectWL fadeIN" : "projectWL"
                                  }
                                  key={index}
                                >
                                  <div className="projectWLTop">
                                    {" "}
                                    <AiOutlineFolder className="icon ProjectWLFolder" />
                                    <FaExternalLinkAlt className="ProjectWLExternal" />
                                  </div>

                                  <div className="projectWLDetail">
                                    <div className="projectWLTitle">
                                      <h3>{name}</h3>
                                    </div>
                                    <ul className="projectWLTag">
                                      {tag.split(",").map((item) => {
                                        return <li>{item.trim()}</li>;
                                      })}{" "}
                                    </ul>
                                    <div className="projectWLDes">
                                      <p>{des}</p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </section>
                    )}
                    {projectsWL.length < 4 ? null : (
                      <button
                        onClick={() => {
                          setMore(!readMore);
                        }}
                      >
                        {readMore ? "read less" : "read more"}
                      </button>
                    )}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Projects;
