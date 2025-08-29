import burdi from "../assets/burdi.png";
import { track } from "../lib/utils";

export default function Loyalty() {
  const color = { color: "#01AAE6" };
  return (
    <div className="flex justify-center items-center w-full mx-auto mt-10">
      <a
        href="https://play.google.com/store/apps/details?id=locale.ewallet&hl=en_GB&pli=1"
        target="_blank"
        className="flex justify-center items-center gap-10"
      >
        <img src={burdi} alt="burdi loyalty" className="w-1/4 md:w-1/10" />
        <span className="text-sm">
          Local Rewards with <span style={color}>Burdi</span>
        </span>
      </a>
    </div>
  );
}
