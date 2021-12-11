import { useEffect } from "react";
import { themeList } from "../components/themes/theme";
export default function useScheduleTheme(setTheme) {
  useEffect(() => {
    const today = new Date().getTime();
    themeList.filter((item) => {
      if (
        new Date(item.start).getTime() === today ||
        (new Date(item.start).getTime() < today &&
          today < new Date(item.end).getTime())
      ) {
        setTheme((prev) => ({ prevTheme: prev.name, name: item.name }));
        return true;
      }
      if (new Date(item.end).getTime() <= today) {
        setTheme((prev) => ({ prevTheme: prev.name, name: "default" }));
        return true;
      } else return false;
    });
  }, [setTheme]);
}
