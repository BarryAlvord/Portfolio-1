import { themeList } from "./theme";
import "./themes.css";
import "./themesSwitcher.css";
let Switcher = ({ setTheme, themes, setLoad }) => {
  return (
    <div className="container">
      <div className="switcher-container">
        <div className="switcher">
          {themeList.map((theme) => {
            const { id, name, icon } = theme;
            return (
              <button
                key={id}
                id={name}
                onClick={() => {
                  if (themes.name === themes.prevTheme) return;
                  if (themes.name === name) return;
                  setLoad(true);
                  setTheme((prev) => ({ prevTheme: prev.name, name }));
                }}
              >
                {icon}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Switcher;
