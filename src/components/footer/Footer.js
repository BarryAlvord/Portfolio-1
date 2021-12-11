import React from "react";
import "./footer.css";
import { themeList } from "../themes/theme";
export default function Footer({ themes }) {
  return (
    <div className="container">
      <div className="footer-container">
        <p>
          Made with <span id="reactjs">Reactjs </span>and&nbsp;
          {themeList.find((item) => item.name === themes).emoj}
        </p>
        <p>
          inspired by <br />
          <a
            id="britt"
            href="https://brittanychiang.com/"
            target="_blank"
            rel="noreferrer"
          >
            Brittany Chiang
          </a>
          's Portfolio <br />
          <a
            id="saveur"
            href="https://open.spotify.com/track/2pUpNOgJBIBCcjyQZQ00qU?si=938fdc9f756c4681"
            target="_blank"
            rel="noreferrer"
          >
            let her go
          </a>{" "}
          by{" "}
          <a
            href="https://open.spotify.com/artist/0gadJ2b9A4SKsB1RFkBb66?si=VfUtS13DSK-NDg-Qvdt5FA"
            target="_blank"
            rel="noreferrer"
          >
            passenger
          </a>
        </p>
        <p>
          &#169; Design by{" "}
          <a
            id="bi"
            href="https://github.com/BarryAlvord"
            target="_blank"
            rel="noreferrer"
          >
            Tuan Kiet
          </a>
        </p>
      </div>
    </div>
  );
}
