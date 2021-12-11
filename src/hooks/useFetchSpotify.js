import { useEffect, useState } from "react";
import axios from "axios";
import { themeList } from "../components/themes/theme";

export default function useFetchSpotify(themes) {
  const [Tracks, setTracks] = useState({
    Name: "Nothing is playing right now",
    Artist: null,
    trackUrl: null,
    Cover: themeList.find((theme) => theme.name === themes).spotify,
  });
  useEffect(() => {
    const Getspotify = setInterval(async () => {
      try {
        const response = await axios.get(
          "https://nodejsportfolio2212.herokuapp.com/api/Spotify"
        );
        if (response.data.State) {
          setTracks(response.data);
          if (
            response.data.State === "ad" ||
            response.data.State === "nothing"
          ) {
            setTracks({
              Name: response.data.Name,
              Cover: themeList.find((theme) => theme.name === themes).spotify,
            });
          }
        } else {
          return;
        }
      } catch (error) {}
    }, 2222);
    return () => clearInterval(Getspotify);
  }, [themes]);
  return Tracks;
}
