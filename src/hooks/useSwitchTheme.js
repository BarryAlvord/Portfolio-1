import { useEffect } from "react";
export default function useSwitchTheme(themes, setTheme, load) {
  useEffect(() => {
    if (!themes.name) return;
    if (themes.name === "default" && themes.prevTheme)
      document.documentElement.setAttribute("data-theme", "");
    document.documentElement.setAttribute("data-theme", themes.name);
    if (load) return;
    document.querySelector(`#${themes.name}`).style.color =
      "rgba(var(--colorSecondary), 0.7)";
    if (!themes.prevTheme) return;
    if (themes.name === themes.prevTheme) return;
    document.querySelector(`#${themes.prevTheme}`).style.color = "";
  }, [themes, load]);
}
