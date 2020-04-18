import React from "react";
import { motion } from "framer-motion";

function SvgTriangle(props) {
  return (
    <motion.svg viewBox="0 0 11 13" fill="none" {...props}>
      <g filter="url(#purple-triangle_svg__filter0_d)">
        <path d="M8 5.5L1.25 9.397V1.603L8 5.5z" fill="#A779E9" />
        <path
          d="M1.5 2.036l6 3.464-6 3.464V2.036z"
          strokeWidth={0}
        />
      </g>
      <defs>
        <filter
          id="purple-triangle_svg__filter0_d"
          x={0.25}
          y={0.603}
          width={10.75}
          height={11.794}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={1} dy={1} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </motion.svg>
  );
}

export default SvgTriangle;

