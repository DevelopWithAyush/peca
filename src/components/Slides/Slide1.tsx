"use client";
import {
  FirstPageTextRectangle,
  FirstPageTextRectangle1,
  FirstPageTextRectangle2,
  FirstPageTextRectangle3,
  SVGVector
} from "@/assets/Svg";
// import { motion } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";
import Header from "../common/Header";

const Slide1 = () => {
  return (
    <main className="w-[100vw] min-h-screen h-[928px] overflow-hidden relative  bg-[#4437A0]  flex flex-col items-center justify-center  pt-[35px]    ">
      {/* <Slide1Background className="w-[100vw]" /> */}
      <svg width="1552" height="1443" viewBox="0 0 1552 1443" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-[100%] h-[100vh]"
      >
        <g filter="url(#filter0_d_19_124)">
          <path d="M715.954 53.9499C753.213 32.8837 798.787 32.8837 836.046 53.9499L882.446 80.1847C905.382 93.1528 931.901 98.347 958.034 94.9902L1012.76 87.9604C1056.46 82.348 1099.78 100.727 1126.12 136.045L1151.06 169.496C1167.73 191.856 1191.55 207.829 1218.57 214.754L1263 226.144C1308.69 237.854 1343.53 274.848 1352.49 321.152L1357.64 347.794C1363.38 377.451 1379.91 403.926 1404.05 422.093L1428.48 440.483C1468.6 470.686 1486.11 522.387 1472.61 570.757L1467.48 589.133C1458.95 619.697 1462.66 652.382 1477.83 680.254L1487.32 697.693C1511.69 742.475 1505.64 797.69 1472.16 836.136L1456.42 854.205C1435.95 877.716 1425.25 908.176 1426.53 939.328L1427.42 961.026C1429.42 1009.84 1402.11 1055.13 1358.01 1076.15L1323.37 1092.67C1297.16 1105.16 1276.26 1126.59 1264.44 1153.11L1250.5 1184.37C1231.98 1225.9 1191.9 1253.68 1146.52 1256.46L1094.85 1259.62C1067.95 1261.26 1042.35 1271.77 1022.05 1289.5L985.585 1321.35C953.104 1349.72 908.061 1358.83 867.107 1345.32L814.223 1327.87C789.399 1319.68 762.601 1319.68 737.777 1327.87L684.892 1345.32C643.939 1358.83 598.895 1349.72 566.415 1321.35L529.952 1289.5C509.651 1271.77 484.05 1261.26 457.147 1259.62L405.479 1256.46C360.095 1253.68 320.021 1225.9 301.504 1184.37L287.562 1153.11C275.737 1126.59 254.841 1105.16 228.631 1092.67L193.99 1076.15C149.891 1055.13 122.583 1009.84 124.584 961.026L125.474 939.328C126.751 908.176 116.053 877.716 95.5761 854.205L79.8397 836.136C46.3552 797.69 40.3092 742.475 64.6802 697.693L74.171 680.254C89.3393 652.382 93.0512 619.697 84.5191 589.133L79.3891 570.757C65.8864 522.387 83.4021 470.686 123.523 440.483L147.953 422.093C172.087 403.926 188.623 377.451 194.36 347.794L199.514 321.152C208.471 274.848 243.314 237.854 288.999 226.144L333.43 214.754C360.447 207.829 384.275 191.856 400.945 169.496L425.884 136.045C452.215 100.727 495.542 82.348 539.236 87.9604L593.965 94.9902C620.099 98.347 646.618 93.1528 669.554 80.1846L715.954 53.9499Z" fill="#705CFE" />
          <path d="M79.363 868.325L95.5761 854.205L79.363 868.325C96.2314 887.693 105.044 912.785 103.992 938.447L103.102 960.145C100.748 1017.56 132.869 1070.84 184.739 1095.56L219.38 1112.07C240.972 1122.36 258.185 1140.02 267.926 1161.86L281.867 1193.13C303.649 1241.97 350.785 1274.65 404.166 1277.92L455.834 1281.08C477.997 1282.43 499.086 1291.09 515.809 1305.7L552.272 1337.54C590.476 1370.91 643.458 1381.63 691.628 1365.74L744.513 1348.29C764.962 1341.54 787.038 1341.54 807.487 1348.29L860.371 1365.74C908.542 1381.63 961.524 1370.91 999.728 1337.54L1036.19 1305.7C1052.91 1291.09 1074 1282.43 1096.17 1281.08L1147.83 1277.92C1201.22 1274.65 1248.35 1241.97 1270.13 1193.13L1284.07 1161.86C1293.81 1140.02 1311.03 1122.36 1332.62 1112.07L1367.26 1095.56C1419.13 1070.84 1451.25 1017.56 1448.9 960.145L1448.01 938.447C1446.96 912.785 1455.77 887.693 1472.64 868.325L1488.37 850.257C1527.76 805.035 1534.87 740.09 1506.2 687.416L1496.71 669.977C1484.22 647.017 1481.16 620.091 1488.19 594.914L1493.32 576.538C1509.2 519.644 1488.6 458.831 1441.41 423.306L1416.98 404.916C1397.1 389.95 1383.47 368.141 1378.75 343.71L1373.59 317.069C1363.06 262.605 1322.08 219.092 1268.34 205.317L1223.91 193.928C1201.65 188.223 1182.02 175.065 1168.29 156.645L1143.35 123.194L1126.12 136.045L1143.35 123.194C1112.38 81.6525 1061.42 60.0342 1010.03 66.6356L955.295 73.6654C933.767 76.4306 911.922 72.1518 893.028 61.469L846.627 35.2343C802.802 10.4555 749.197 10.4555 705.372 35.2342L658.972 61.469C640.078 72.1518 618.233 76.4306 596.704 73.6654L541.975 66.6356C490.58 60.0341 439.619 81.6525 408.648 123.194L383.708 156.645C369.976 175.065 350.347 188.223 328.091 193.928L283.661 205.317C229.924 219.092 188.941 262.605 178.405 317.069L173.251 343.71C168.525 368.141 154.904 389.95 135.023 404.916L110.593 423.306C63.401 458.831 42.7986 519.644 58.6809 576.538L63.8109 594.914C70.8393 620.091 67.7816 647.017 55.2864 669.977L45.7956 687.416C17.1298 740.09 24.2412 805.035 63.6266 850.257L79.363 868.325Z" stroke="#4A38B5" stroke-width="43" />
        </g>
        <defs>
          <filter id="filter0_d_19_124" x="-37.5631" y="-45.2496" width="1627.13" height="1488.11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="22.2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19_124" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19_124" result="shape" />
          </filter>
        </defs>
      </svg>

      <section className="flex  h-full flex-col items-start justify-start w-full">
        <Header />
        <BorderLine />
        <SVGVector />
        <motion.p
          className="text-[#079307] absolute top-[30%] left-[40%] z-20  -rotate-[12deg] font-space-comics_400 text-[48px] tracking-[4.32px] shimmer "
          style={{
            WebkitTextStrokeWidth: "7px",
            WebkitTextStrokeColor: "#FFF566 ",
            paintOrder: "stroke fill",
          }}
        >
          PEPIUS <br />
          CAESER
        </motion.p>
        <motion.div
          animate={{
            translateX: [0, -2, 0, -2, 2], // Wiggle effect
            translateY: [0, 0, 2, -2, 2], // Wiggle effect
          }}
          transition={{
            duration: 2,
            repeat: Infinity, // Makes the wiggle repeat indefinitely
            repeatDelay: 0, // Adds delay between each repeat
          }}
          className="absolute top-[20%] "
        >
          <p
            className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFBA70] text-center font-jolly-lodger_400 leading-[100%]  text-[40px] w-[708px] tracking-[0px]"
            style={{
              WebkitTextStrokeWidth: "3px",
              WebkitTextStrokeColor: "#F12E05 ",
              paintOrder: "stroke fill",
            }}
          >
            PEPIUS CAESER <br /> THE RIGHT HAND OF ELON’S KEKIUS MAXIMUS
          </p>
          <FirstPageTextRectangle />
        </motion.div>

        <Rectangle1 />
        <Rectangle />
        <Rectangle2 />
        <Phone />
      </section>
    </main>
  );
};

export default Slide1;

export const BorderLine = () => {
  return (
    <div className="w-full h-[49px] mt-[22px] relative z-100  bg-[#FFF566] border-t-[8px] border-b-[8px] border-solid border-[#079307]"></div>
  );
};

const Rectangle1 = () => {
  return (
    <div className="absolute top-[72%] z-30 left-[0%]">
      <p
        style={{
          WebkitTextStrokeWidth: "3px",
          WebkitTextStrokeColor: "#F12E05",
          paintOrder: "stroke fill",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFF566] text-center font-jolly-lodger_400 leading-[100%] -rotate-[2deg]  text-[48px] w-[450px] tracking-[1.44px]"
      >
        MASSIVE STAKING REWARDS{" "}
        <span className="text-[36px]">DURING PRESALE</span>
      </p>
      <FirstPageTextRectangle1 />
    </div>
  );
};

const Rectangle2 = () => {
  return (
    <div className="absolute top-[10%] right-[10%] flex flex-col items-center ">
      <Image
        width={100}
        height={100}
        className="relative w-[70%] -bottom-[90px] z-0"
        src={"/Images/slide1Image1.gif"}
        alt="aksfja"
      />
      <FirstPageTextRectangle2 />
      <button
        className="text-[#FFF566] font-jolly-lodger_400 text-[48px] tracking-[2.88px] px-[59px] bg-[#079307] border-solid border-[5px] border-[#FFF566] rounded-[20px] "
        style={{
          WebkitTextStrokeWidth: "3px",
          WebkitTextStrokeColor: "#F12E05 ",
          paintOrder: "stroke fill",
        }}
      >
        BUY NOW !
      </button>
    </div>
  );
};
const Rectangle = () => {
  return (
    <>
      <Image
        width={100}
        height={100}
        src="/Images/slide1Image2.gif"
        className="relative w-[515px] h-[528px] z-50 left-[100px]"
        alt=""
      />
      {/* <div className="absolute w-auto top-1/2 translate-y-[70px] left-[-20px] ">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-[#FFF566] text-center font-jolly-lodger_400 leading-[100%]  text-[24px] w-[500px]  tracking-[1.44px]"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#F12E05 ",
            paintOrder: "stroke fill",
          }}
        >
          <TextGeneration
            className="items-center justify-center"
            text="Pepius is frustated by juggling mulitple dapps and wallets. So he
          decided to put it all together in one place a SupaDapp (AI Driven)"
          />
        </div>
        <FirstPageTextEllipse />
      </div> */}
    </>
  );
};

const Phone = () => {
  return (
    <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[5%] items-start justify-start">
      <Rectangle3 />
      {/* <Image width={100}
      height={100}
        src="/Images/firstpageImage2.png" alt="phone" className="w-[300px] h-[620px] z-50" /> */}
      {/* <div
        style={{
          WebkitTextStrokeColor: "#F12E05",
          WebkitTextStrokeWidth: "3px",
          paintOrder: "stroke fill",
        }}
        className="px-[44px] py-[7px] bg-[#079307] border-[5px] border-solid border-[#FFF566] text-[48px] font-jolly-lodger_400 text-[#FFF566] tracking-[2.88px] rounded-[20px]"
      >
        SUPERDAPP
      </div> */}
    </div>
  );
};

const Rectangle3 = () => {
  return (
    <div className="absolute left-1/2 -translate-y-1/2 ">
      <p
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFF566] text-center font-jolly-lodger_400 leading-[100%] rotate-[-12deg]  text-[40px] w-[500px] tracking-[1.44px]"
        style={{
          WebkitTextStrokeWidth: "3px",
          WebkitTextStrokeColor: "#F12E05 ",
          paintOrder: "stroke fill",
        }}
      >
        ThE REAL DEAL !
      </p>
      <FirstPageTextRectangle3 />
    </div>
  );
};
