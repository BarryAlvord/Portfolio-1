import { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";
import Logo from "../logo/logo";
import Switcher from "../themes/Switcher";
import { navItem } from "./navitem.js";
import { FaCaretDown, FaRecordVinyl, FaUserAlt } from "react-icons/fa";
import useFetchSpotify from "../../hooks/useFetchSpotify";
import useDetectClickOut from "../../hooks/useDetectClickOut";
import useHover from "../../hooks/useHover";
const NavBar = ({
  width,
  setBlur,
  blur,
  showMenu,
  setShow,
  scrollPass,
  setTheme,
  themes,
  setLoad,
}) => {
  const [ThemeRef, IsShowTheme] = useHover();
  // Spotify Start //
  const [SpotRef, IsShowSpot] = useHover();
  let Tracks = useFetchSpotify(themes.name);
  // Spotify End //

  //Click Out Start//
  const Menuref = useRef(null);
  useDetectClickOut(Menuref, () => {
    setShow(false);
    setBlur(false);
  });
  //Click Out End//

  return (
    <header
      style={{
        top: !scrollPass ? "-100%" : "0",
      }}
    >
      <nav className="head">
        <div className="Brand">
          {" "}
          <Logo logoWidth={"4em"} />
        </div>
        {width <= 800 ? (
          <div className="sidebar" ref={Menuref}>
            <button
              className="burger"
              onClick={() => {
                setShow(!showMenu);
                setBlur(!blur);
              }}
            >
              {" "}
              <div className={`${showMenu ? "change" : ""} bur1 `}></div>
              <div className={`${showMenu ? "change" : ""} bur2 `}></div>
              <div className={`${showMenu ? "change" : ""} bur3 `}></div>
            </button>
            <div className={showMenu ? "side show" : "side"}>
              <div className="side-container">
                <ul>
                  {navItem.map((item) => {
                    const { id, url, text } = item;
                    return (
                      <li key={id}>
                        <Link smooth to={`#${url}`} key={id}>
                          <span>{id}.</span>&nbsp;
                          {text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Switcher
                  setTheme={setTheme}
                  themes={themes}
                  setLoad={setLoad}
                />

                <div className="spotify">
                  <div className="cover">
                    <img src={Tracks.Cover} alt="cover" />
                  </div>
                  <div className="trackInfo">
                    <div className="title">
                      <h1>{Tracks.Name}</h1>
                    </div>
                    <div className="metadata">
                      <p id="album">
                        <FaRecordVinyl className="icon" />
                        <span>{Tracks.Album}</span>
                      </p>
                      <p id="artis">
                        <FaUserAlt className="icon" />
                        <span id="scorll">{Tracks.Artist}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="side">
            <ul>
              {navItem.map((item) => {
                const { id, url, text } = item;
                return (
                  <li key={id}>
                    <Link smooth to={`#${url}`}>
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="themesSwitcher" ref={ThemeRef}>
              <span>
                Themes&nbsp;
                <FaCaretDown />{" "}
              </span>
              <div
                className="switch"
                style={{
                  visibility: IsShowTheme ? "visible" : "hidden",
                  opacity: IsShowTheme ? "1" : "0",
                }}
              >
                <Switcher
                  setTheme={setTheme}
                  themes={themes}
                  setLoad={setLoad}
                />
              </div>
            </div>
            <div className="player" ref={SpotRef}>
              <a
                href={Tracks.trackUrl}
                target="_blank"
                without
                rel="noreferrer"
              >
                Now Playing&nbsp;
                <FaCaretDown />{" "}
              </a>
              <div
                className="spotify"
                style={{
                  visibility: IsShowSpot ? "visible" : "hidden",
                  opacity: IsShowSpot ? "1" : "0",
                }}
              >
                <div className="cover">
                  <a href={Tracks.trackUrl} target="_blank" rel="noreferrer">
                    <img src={Tracks.Cover} alt="cover" />
                  </a>
                </div>
                <div className="trackInfo">
                  <div className="title">
                    <h1>{Tracks.Name}</h1>
                  </div>
                  <div className="metadata">
                    <p id="album">
                      <FaRecordVinyl className="icon" />
                      <span>{Tracks.Album}</span>
                    </p>
                    <p id="artis">
                      <FaUserAlt className="icon" />
                      <span id="scorll">{Tracks.Artist}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
