import { SVGProps } from "react";
// React から SVGProps をインポートしています。これは、SVG 要素に渡すことができるすべてのプロパティの型定義を提供します。TypeScript を使用している場合に役立ちます。
import clsx from "clsx";

export function OchiLogo(props: SVGProps<SVGSVGElement>) {
  const path =
    "M0.708435 36V24.1875L3.59125 23.6016L10.5053 0H29.8647L36.8022 23.6016L39.685 24.1875V36H26.3491L25.0834 29.9531H15.2866L14.0444 36H0.708435ZM17.3022 21.9141H23.0678L20.185 8.34375L17.3022 21.9141ZM47.6762 36V25.8281L51.3794 25.2422V9C50.145 9 49.1294 9.32812 48.3325 9.98438C47.5356 10.625 46.8637 11.2969 46.3169 12H42.3794V0H75.3794V12H71.4419C70.9106 11.2969 70.2387 10.625 69.4262 9.98438C68.6294 9.32812 67.6137 9 66.3794 9V25.2422L70.0825 25.8281V36H47.6762ZM102.566 36.4219C98.3784 36.4219 94.8237 35.8281 91.9019 34.6406C88.98 33.4375 86.7534 31.5469 85.2222 28.9688C83.6909 26.375 82.9253 22.9844 82.9253 18.7969V10.7578L79.2222 10.1719V0H100.105V10.1719L96.4019 10.7578V18.3281C96.4019 20.5938 96.8237 22.2891 97.6675 23.4141C98.5112 24.5391 100.089 25.1016 102.402 25.1016C104.714 25.1016 106.292 24.5391 107.136 23.4141C107.98 22.2891 108.402 20.5938 108.402 18.3281V10.7578L104.699 10.1719V0H123.402V10.1719L119.699 10.7578V18.7969C119.699 24.5938 118.269 28.9844 115.41 31.9688C112.55 34.9375 108.269 36.4219 102.566 36.4219ZM126.565 36V25.8281L130.268 25.2422V10.7578L126.565 10.1719V0H148.971V10.1719L145.268 10.7578V25.2422L148.971 25.8281V36H126.565Z";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width="300"
      height="80"
      fill="none"
      viewBox="0 0 150 40"
      className={clsx("group", props.className)}
      aria-labelledby="fizzi-logo-title"
    >
      <title id="fizzi-logo-title">Fizzi</title>
      <g clipPath="url(#clip0_342_66)">
        {/* 正方形の動くマスク */}
        <mask
          id="mask0_342_66"
          style={{ maskType: "alpha" }}
          width="305"
          height="111"
          x="-5"
          y="-31"
          maskUnits="userSpaceOnUse"
        >
          <g className="transition-transform duration-500 group-hover:translate-y-[80%]">
            <path
              fill="currentColor"
              className="animate-slide-left"
              d="M45.3-31C24.9-31.7 15.9-26.6 0-16.4V87h342V-16.5l-4 1.7A74 74 0 0 1 297.3-7c-11.9-.3-24.7-5.7-38-11.3-14-5.9-28.6-12-43-12.6-20.4-.9-29.4 4.2-45.3 14.4l-4 1.7A74 74 0 0 1 126.3-7c-11.9-.3-24.7-5.7-38-11.3-14-5.9-28.6-12-43-12.6Z"
            ></path>
          </g>
        </mask>
        {/* 元のsvg */}
        <g fill="currentColor" mask="url(#mask0_342_66)">
          <path d={path}></path>
        </g>
        {/* ストロークようマスク */}
        {/* <mask id="path-3-inside-1_342_66" fill="#fff">
          <path d={path}></path>
        </mask>
        <path
          stroke="currentColor"
          strokeWidth="3.5"
          d={path}
          mask="url(#path-3-inside-1_342_66)"
        ></path> */}
      </g>
      <defs>
        <clipPath id="clip0_342_66">
          <path fill="currentColor" d="M0 0h166v87H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
