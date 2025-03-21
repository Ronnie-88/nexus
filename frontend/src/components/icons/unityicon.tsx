import { iconPrimaryColor } from "../../data/iconthemedata";

export default function UnityIcon() {
  return (
    <>
      <div className="flex items-center justify-between rounded-lg bg-black max-w-32 h-16 mx-1 my-2 p-2">
        <div className="grow shrink max-w-[50px] min-w-5">
          <svg
            className="w-full h-full object-cover"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 109.2"
          >
            <path
              d="M1263.9 2944.2h-42.5v-98.3c0-25.3-10.4-45.4-40.9-45.4-30.2-.3-38.9 20.4-38.9 46.7v97H1099v-107.8c0-31.1 11-75.6 69.5-75.9 32.1-.3 48 15.3 55.5 29.2V2766h39.9v178.2M1280.8 2766h42.5v98.3c0 25 10.4 45.1 40.6 45.4 29.9 0 38.6-20.4 38.6-47.1V2766h42.5v107.4c0 31.5-11 75.9-69.1 76.3-31.8.3-47.7-15.2-55.5-29.2.3 8.4.3 15.9.3 23.7h-39.9V2766M1461.3 2766h42.5v178.2h-42.5V2766zm0 202.2h42.5v38h-42.5v-38M1548.3 2766h42.5v145.4h30.5l-12.6 32.8h-17.9v62h-42.5v-62h-29.5v-32.8h29.5V2766M1662.4 2703.7h45.4l93.8 240.5h-45.4l-42.8-118.5-43.5 118.5h-45.4l67.2-171.4-29.3-69.1M865.9 2856.7l77.6 134 37.5-134-37.5-134-77.6 134zm-37.8-21.7l77.6-134-135.2 34.6-97.7 99.4h155.3zm77.6 177.5l-77.6-134H672.8l97.7 99.4 135.2 34.6zm110.8-110.2l-47.4 176.1-176.7-47.2-26.2-46-53.1.4-129.4-128.9 129.4-128.9 53.1.4 26.2-46 176.7-47.2 47.4 176.1-26.9 45.6 26.9 45.6"
              transform="matrix(.24634 0 0 -.24634 -143.809 758.345)"
              fill={iconPrimaryColor}
            />
          </svg>
        </div>
        <p>Unity</p>
      </div>
    </>
  );
}
