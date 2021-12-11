import { React } from "react";
import "./Sidebars.css";
import { FaArrowUp } from "react-icons/fa";
import { SideItems } from "./Sideitems";
import { HashLink as Link } from "react-router-hash-link";

const SideBars = ({ showSide, width }) => {
  return (
    <div className="container">
      <div
        className="sideContainer"
        style={{
          visibility: showSide ? "visible" : "hidden",
          opacity: showSide ? "1" : "0",
        }}
      >
        <div className="contactSide">
          <ul>
            {SideItems.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {width >= 800 ? (
          <>
            {" "}
            <div className="markSide">
              <p>bibi_dentuhanoi.com</p>
            </div>
            <Link smooth to="#">
              <div className="srolltopSide">
                <FaArrowUp />
              </div>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};
export default SideBars;
