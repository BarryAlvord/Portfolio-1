import React from "react";
import { FaGifts, FaHome } from "react-icons/fa";
import SpotifyDefault from "../photo/theme/spotify/default.png";
import chritstmasBck from "../photo/theme/christmas/christmas_bg.png";
import SpotifyChristmas from "../photo/theme/spotify/christmas.png";
import ProfileIconChristmas from "../photo/theme/christmas/santa.png";
export const themeList = [
  {
    id: 1,
    start: null,
    end: null,
    name: "default",
    icon: <FaHome />,
    emoj: "💓",
    bckgr: { size: 3, Patnum: "55", preset: "links", random: false },
    bckgrImg: null,
    profileIcon: null,
    spotify: SpotifyDefault,
    msg: null,
  },
  {
    id: 2,
    start: `December 1, ${new Date().getUTCFullYear()} 00:00:00`,
    end: `December 25, ${new Date().getUTCFullYear()} 00:00:00`,
    name: "christmas",
    icon: <FaGifts />,
    emoj: "🎄",
    bckgr: { size: 10, Patnum: "180", preset: "snow", random: true },
    bckgrImg: chritstmasBck,
    profileIcon: ProfileIconChristmas,
    spotify: SpotifyChristmas,
    msg: "Merry Christmas 🎄",
  },
];
