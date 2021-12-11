import React from "react";
import "./christmastree.css";
export default function Tree() {
  return (
    <svg x="0px" y="0px" viewBox="110 0 300 360">
      <g id="tree">
        <ellipse
          id="tree-base"
          fill="#39445B"
          cx="259.5"
          cy="319"
          rx="120"
          ry="38"
        />
        <path
          id="tree-par-1"
          fill="#42CE8E"
          d="M260,185c0,0,2.5-0.8,6.7,2.6c4.3,3.4,121.1,81.2,121.1,81.2s4,3.9,1.6,9.6
        C387,284,383,286,383,286s-49,41-123,41c-76,0-123-42.2-123-42.2s-6.1-2.8-6.5-6.8s-0.4-7.3,2.6-10.1c3-2.9,120.1-80.1,120.1-80.1
        S255,185,260,185z"
        />
        <path
          id="tree-part-1-shadow"
          fill="#09B56B"
          d="M357.3,248.4c-16-10.7-35.8-23.9-52.8-35.3c-11.4,2.1-26.3,3.9-44.5,3.9
        c-17.3,0-32.5-2-44.5-4.4c-17.1,11.3-37.1,24.6-53.1,35.3c13.3,7.4,50.1,25.1,97.7,25.1C309.2,273,344.3,255.9,357.3,248.4z"
        />
        <path
          id="tree-part-2"
          fill="#42CE8E"
          d="M260,123c0,0,2.5-0.8,6.7,2.6c4.3,3.4,101.1,93.2,101.1,93.2s4,3.9,1.6,9.6
        s-6.5,6.6-6.5,6.6S323,263,260,263c-60,0-103-28.2-103-28.2s-6.1-2.8-6.5-6.8c-0.4-4-0.4-7.3,2.6-10.1c3-2.9,100.1-92.1,100.1-92.1
        S255,123,260,123z"
        />
        <path
          id="tree-part-2-shadow"
          fill="#09B56B"
          d="M187,194.8c0,0,30,12.2,73,12.2c48,0,72.9-12,72.9-12s2.7-0.7,5-3.9
        c-12.5-11.6-27.1-25.1-39.8-36.8c-6.4,1.5-19.3,3.7-38.1,3.7c-18.4,0-31.2-2.3-37.8-3.8c-12.8,11.8-27.6,25.4-40.2,36.9
        C184,193.3,187,194.8,187,194.8z"
        />
        <path
          id="tree-part-3"
          fill="#42CE8E"
          d="M260,107c0,0,2.5-0.8,6.7,2.6c4.3,3.4,71.1,59.2,71.1,59.2s4,3.9,1.6,9.6
        s-6.5,6.6-6.5,6.6S308,197,260,197c-43,0-73-12.2-73-12.2s-6.1-2.8-6.5-6.8c-0.4-4-0.4-7.3,2.6-10.1c3-2.9,70.1-58.1,70.1-58.1
        S255,107,260,107z"
        />
        <path
          id="tree-part-3-shadow"
          fill="#09B56B"
          d="M260,148c28,0,42.9-5,42.9-5s1.1-0.3,2.5-1.3c-17.7-14.7-36.4-30.3-38.6-32.1
        c-4.3-3.4-6.7-2.6-6.7-2.6c-5,0-6.9,2.8-6.9,2.8s-19.8,16.3-38.4,31.7c1.2,0.8,2.3,1.3,2.3,1.3S232,148,260,148z"
        />
        <path
          id="tree-part-4"
          fill="#42CE8E"
          d="M260,75c0,0,2.5-0.8,6.7,2.6c4.3,3.4,41.1,41.2,41.1,41.2s4,3.9,1.6,9.6s-6.5,6.6-6.5,6.6
        s-14.9,5-42.9,5s-43-5.2-43-5.2s-6.1-2.8-6.5-6.8s-0.4-7.3,2.6-10.1c3-2.9,40.1-40.1,40.1-40.1S255,75,260,75z"
        />
      </g>
      <g id="gifts">
        <g id="gift-yellow">
          <polygon
            id="gift-yelow-side-shadow"
            fill="#FFC84D"
            points="196,345 176,339 176,319 196,323 		"
          />
          <polygon
            id="gift-yellow-side"
            fill="#FFDF9F"
            points="216,339 196,345 196,323 216,319 		"
          />
          <polygon
            id="gift-yellow-top"
            fill="#FFDF9F"
            points="174,315 196,311 218,315 196,319 		"
          />
          <polygon
            id="gift-yellow-top-shadow"
            fill="#FFC84D"
            points="174,315 174,319 196,323 218,319 218,315 196,319 		"
          />
          <path
            id="gift-yellow-bow"
            fill="#D10F50"
            d="M188.7,313.5c-0.6-0.4-1.2-0.9-1.6-1.5s-0.5-1.5-0.2-2.1c0.4-0.8,1.3-1.2,2.2-1.3
          c1.8-0.2,3.8,0.6,4.7,2.2c0.8,1.2,0.9,2.7,1,4.1c-0.1-1.4-0.1-2.9,0.3-4.3s1.4-2.7,2.8-3.1c0.5-0.1,1-0.2,1.5-0.2
          c1.2,0,2.5,0.3,3,1.4c0.2,0.5,0.2,1.2,0,1.7C201.1,316.4,193,316.2,188.7,313.5z"
          />
        </g>
        <g id="gift-red">
          <polygon
            id="gift-red-side-shadow"
            fill="#D10F50"
            points="335,345 315,339 315,319 335,323 		"
          />
          <polygon
            id="gift-red-side"
            fill="#DD4E85"
            points="355,339 335,345 335,323 355,319 		"
          />
          <polygon
            id="gift-red-top"
            fill="#DD4E85"
            points="313,315 335,311 357,315 335,319 		"
          />
          <polygon
            id="gift-red-top-shadow"
            fill="#D10F50"
            points="313,315 313,319 335,323 357,319 357,315 335,319 		"
          />
          <path
            id="gift-red-bow"
            fill="#D10F50"
            d="M327.7,313.5c-0.6-0.4-1.2-0.9-1.6-1.5c-0.4-0.6-0.5-1.5-0.2-2.1
          c0.4-0.8,1.3-1.2,2.2-1.3c1.8-0.2,3.8,0.6,4.7,2.2c0.8,1.2,0.9,2.7,1,4.1c-0.1-1.4-0.1-2.9,0.3-4.3c0.4-1.4,1.4-2.7,2.8-3.1
          c0.5-0.1,1-0.2,1.5-0.2c1.2,0,2.5,0.3,3,1.4c0.2,0.5,0.2,1.2,0,1.7C340.1,316.4,332,316.2,327.7,313.5z"
          />
        </g>
        <g id="gift-blue">
          <polygon
            id="gift-red-side-shadow"
            fill="#0f9ad1"
            points="260,345 240,339 240,319 260,323"
          />
          <polygon
            id="gift-blue-side"
            fill="#4e9add"
            points="280,339 260,345 260,323 280,319 		"
          />
          <polygon
            id="gift-blue-top"
            fill="#4e8cdd"
            points="238,315 260,311 282,315 260,319 		"
          />
          <polygon
            id="gift-blue-top-shadow"
            fill="#0f97d1"
            points="238,315 238,319 260,323 282,319 282,315 260,319 		"
          />
          <path
            id="gift-blue-bow"
            fill="#254c22"
            d="M254.7 315.5c-.6-.4-1.2-.9-1.6-1.5s-.5-1.5-.2-2.1c.4-.8 1.3-1.2 2.2-1.3 1.8-.2 3.8.6 4.7 2.2.8 1.2.9 2.7 1 4.1-.1-1.4-.1-2.9.3-4.3s1.4-2.7 2.8-3.1c.5-.1 1-.2 1.5-.2 1.2 0 2.5.3 3 1.4.2.5.2 1.2 0 1.7C267.1 318.4 259 318.2 254.7 315.5Z"
          />
        </g>
        <g id="gift-green">
          <polygon
            id="gift-green-side-shadow"
            fill="#00a669"
            points="300,345 280,339 280,319 300,323"
          />
          <polygon
            id="gift-green-side"
            fill="#00ba77"
            points="320,339 300,345 300,323 320,319"
          />
          <polygon
            id="gift-green-top"
            fill="#00b370"
            points="278,315 300,311 322,315 300,319"
          />
          <polygon
            id="gift-green-top-shadow"
            fill="#00a668"
            points="278,315 278,319 300,323 322,319 322,315 300,319 		"
          />
          <path
            id="gift-green-bow"
            fill="#efeff0"
            d="M294.7 315.5c-.6-.4-1.2-.9-1.6-1.5s-.5-1.5-.2-2.1c.4-.8 1.3-1.2 2.2-1.3 1.8-.2 3.8.6 4.7 2.2.8 1.2.9 2.7 1 4.1-.1-1.4-.1-2.9.3-4.3s1.4-2.7 2.8-3.1c.5-.1 1-.2 1.5-.2 1.2 0 2.5.3 3 1.4.2.5.2 1.2 0 1.7C307.1 318.4 299 318.2 294.7 315.5Z"
          />
        </g>
        <g id="gift-pink">
          <polygon
            id="gift-pink-side-shadow"
            fill="#d48acc"
            points="226,345 206,339 206,319 226,323"
          />
          <polygon
            id="gift-pink-side"
            fill="#e697dd"
            points="246,339 226,345 226,323 246,319"
          />
          <polygon
            id="gift-pink-top"
            fill="#eb8fe0"
            points="204,315 226,311 248,315 226,319"
          />
          <polygon
            id="gift-pink-top-shadow"
            fill="#eb8fe0"
            points="204,315 204,319 226,323 248,319 248,315 226,319 		"
          />
          <path
            id="gift-pink-bow"
            fill="#7660aa"
            d="M218.7 313.5c-.6-.4-1.2-.9-1.6-1.5s-.5-1.5-.2-2.1c.4-.8 1.3-1.2 2.2-1.3 1.8-.2 3.8.6 4.7 2.2.8 1.2.9 2.7 1 4.1-.1-1.4-.1-2.9.3-4.3s1.4-2.7 2.8-3.1c.5-.1 1-.2 1.5-.2 1.2 0 2.5.3 3 1.4.2.5.2 1.2 0 1.7C231.1 316.4 223 316.2 218.7 313.5z"
          />
        </g>
      </g>
      <g id="Lights">
        <circle
          id="l1-r4-s1"
          className="shadow-1"
          opacity="0.5"
          fill="#FFDF9F"
          cx="146"
          cy="256"
          r="12"
        />
        <circle id="l1-r4" fill="#FFDF9F" cx="146" cy="256" r="5" />
        <circle
          id="l2-r4-s2"
          className="shadow-2"
          opacity="0.5"
          fill="#FFDF9F"
          cx="196"
          cy="286"
          r="18"
        />
        <circle
          id="l2-r4-s1"
          className="shadow-1"
          opacity="0.5"
          fill="#FFDF9F"
          cx="196"
          cy="286"
          r="12"
        />
        <circle id="l2-r4" fill="#FFDF9F" cx="196" cy="286" r="5" />
        <circle
          id="l3-r4-s2"
          className="shadow-2"
          opacity="0.5"
          fill="#FFDF9F"
          cx="370"
          cy="256"
          r="18"
        />
        <circle
          id="l3-r4-s1"
          className="shadow-1"
          opacity="0.5"
          fill="#FFDF9F"
          cx="370"
          cy="256"
          r="12"
        />
        <circle
          id="l3-r4"
          opacity="0.5"
          fill="#FFDF9F"
          cx="370"
          cy="256"
          r="5"
        />
        <circle
          id="l4-r4-s2"
          className="shadow-2"
          opacity="0.5"
          fill="#FFDF9F"
          cx="320"
          cy="286"
          r="18"
        />
        <circle
          id="l4-r4-s1"
          className="shadow-1"
          opacity="0.5"
          fill="#FFDF9F"
          cx="320"
          cy="286"
          r="12"
        />
        <circle id="l4-r4" fill="#FFDF9F" cx="320" cy="286" r="5" />
        <circle
          id="l5-r4-s2"
          className="shadow-2"
          opacity="0.5"
          fill="#FFDF9F"
          cx="260"
          cy="296"
          r="18"
        />
        <circle
          id="l5-r4-s1"
          className="shadow-1"
          opacity="0.5"
          fill="#FFDF9F"
          cx="260"
          cy="296"
          r="12"
        />
        <circle id="l5-r4" fill="#FFDF9F" cx="260" cy="296" r="5" />
        <circle
          id="l1-r3-s2"
          className="shadow-2"
          opacity="0.5"
          fill="#FFDF9F"
          cx="196"
          cy="216"
          r="18"
        />
        <circle
          id="l1-r3-s1"
          className="shadow-1"
          opacity="0.5"
          fill="#FFDF9F"
          cx="196"
          cy="216"
          r="12"
        />
        <circle id="l1-r3" fill="#FFDF9F" cx="196" cy="216" r="5" />
        <circle
          id="l2-r3-s2"
          className="shadow-2"
          opacity="0.5"
          fill="#FFDF9F"
          cx="320"
          cy="216"
          r="18"
        />
        <circle
          id="l2-r3-s1"
          className="shadow-1"
          opacity="0.5"
          fill="#FFDF9F"
          cx="320"
          cy="216"
          r="12"
        />
        <ellipse id="l2-r3" fill="#FFDF9F" cx="320" cy="216" rx="5.5" ry="5" />
        <circle
          id="l3-r3-s2"
          className="shadow-2"
          opacity="0.5"
          fill="#FFDF9F"
          cx="260"
          cy="226"
          r="18"
        />
        <circle
          id="l3-r3-s1"
          className="shadow-1"
          opacity="0.5"
          fill="#FFDF9F"
          cx="260"
          cy="226"
          r="12"
        />
        <circle id="l3-r3" fill="#FFDF9F" cx="260" cy="226" r="5" />
        <circle
          id="l1-r2-s2"
          className="shadow-2"
          opacity="0.5"
          fill="#FFDF9F"
          cx="196"
          cy="156"
          r="18"
        />
        <circle
          id="l1-r2-s1"
          className="shadow-1"
          opacity="0.5"
          fill="#FFDF9F"
          cx="196"
          cy="156"
          r="12"
        />
        <circle
          id="l1-r2"
          opacity="0.5"
          fill="#FFDF9F"
          cx="196"
          cy="156"
          r="5"
        />
        <circle
          id="l3-r2-s2"
          className="shadow-2"
          opacity="0.5"
          fill="#FFDF9F"
          cx="320"
          cy="156"
          r="18"
        />
        <circle
          id="l3-r2-s1"
          className="shadow-1"
          opacity="0.5"
          fill="#FFDF9F"
          cx="320"
          cy="156"
          r="12"
        />
        <circle id="l3-r2" fill="#FFDF9F" cx="320" cy="156" r="5" />
        <circle
          id="l2-r2-s2"
          className="shadow-2"
          opacity="0.5"
          fill="#FFDF9F"
          cx="260"
          cy="166"
          r="18"
        />
        <circle
          id="l2-r2-s1"
          className="shadow-1"
          opacity="0.5"
          fill="#FFDF9F"
          cx="260"
          cy="166"
          r="12"
        />
        <circle id="l2-r2" fill="#FFDF9F" cx="260" cy="166" r="5" />
        <circle
          id="l1-r1-s2"
          className="shadow-2"
          opacity="0.5"
          fill="#FFDF9F"
          cx="260"
          cy="106"
          r="18"
        />
        <circle
          id="l1-r1-s1"
          className="shadow-1"
          opacity="0.5"
          fill="#FFDF9F"
          cx="260"
          cy="106"
          r="12"
        />
        <circle id="l1-r1" fill="#FFDF9F" cx="260" cy="106" r="5" />
        <path
          id="star-s2"
          className="shadow-2"
          opacity="0.2"
          fill="#FFDF9F"
          d="M292.5,71.5l1.4-1.4c5.9-5.9,7.7-14.8,4.5-22.5l0,0
        c-3.2-7.7-10.6-12.7-18.9-12.8l-0.3-0.8c-3.2-7.9-10.7-13-19.2-13c-8.5,0-16,5.1-19.2,13l-0.3,0.8c-8.3,0.1-15.7,5.1-18.9,12.8
        c-3.2,7.8-1.4,16.6,4.5,22.5l1.4,1.4l-0.5,1.1c-3.3,8.3-1,17.7,5.8,23.4c3.8,3.3,8.6,4.9,13.4,4.9c3.7,0,7.3-1,10.6-3l3.1-1.9
        l3.1,1.9c3.2,1.9,6.9,2.9,10.6,2.9c4.9,0,9.7-1.8,13.4-4.9c6.8-5.8,9.1-15.2,5.8-23.4L292.5,71.5z"
        />
        <path
          id="star-s1"
          className="shadow-1"
          opacity="0.2"
          fill="#FFDF9F"
          d="M283.6,68.6l1-1c4.3-4.3,5.6-10.7,3.3-16.3l0,0c-2.3-5.6-7.7-9.2-13.7-9.3
        l-0.2-0.6c-2.3-5.7-7.8-9.4-13.9-9.4c-6.2,0-11.6,3.7-13.9,9.4l-0.2,0.6c-6,0.1-11.4,3.7-13.7,9.3c-2.3,5.6-1.1,12,3.3,16.3l1,1
        l-0.3,0.8c-2.4,6-0.7,12.8,4.2,17c2.8,2.4,6.2,3.6,9.7,3.6c2.7,0,5.3-0.7,7.7-2.1l2.3-1.4l2.3,1.4c2.3,1.4,5,2.1,7.7,2.1
        c3.6,0,7-1.3,9.7-3.6c4.9-4.2,6.6-11,4.2-17L283.6,68.6z"
        />
        <path
          id="star"
          fill="#FFDF9F"
          d="M278.6,55.1c-0.8-1.9-2.6-3.1-4.6-3.1h-6.6l-2.7-6.9c-0.8-1.9-2.6-3.1-4.6-3.1s-3.9,1.2-4.6,3.1
        l-2.7,6.9H246c-2,0-3.8,1.2-4.6,3.1c-0.8,1.9-0.3,4,1.1,5.4l5.7,5.7l-2.8,6.9c-0.8,2-0.2,4.3,1.4,5.7c1.6,1.4,4,1.6,5.8,0.5
        l7.4-4.5l7.4,4.5c0.8,0.5,1.7,0.7,2.6,0.7c1.2,0,2.3-0.4,3.2-1.2c1.6-1.4,2.2-3.7,1.4-5.7l-2.8-6.9l5.7-5.7
        C279,59.1,279.4,57,278.6,55.1z"
        />
      </g>
    </svg>
  );
}
