import sandwichMilkshake from "../assets/sandwich-and-milkshake-cropped.JPG";
import sandwich from "../assets/sandwich.JPG";
import { track } from "@vercel/analytics/react"

export default function ViewMenuBtn() {
  return (
    <div className="flex justify-center fade-up-delay-x2 items-center contain-content mt-0.20 h-25 fade-up-delay opacity-0 ">
      <img
        loading="lazy"
        src={sandwichMilkshake}
        alt="absolute inset-0 w-full Sandwich and Milkshake"
        className="relative inset-0 h-25 object-cover brightness-75 flex-1/2 "
      />
      <img
        loading="lazy"
        src={sandwich}
        alt="Sandwich and Milkshake"
        className="relative inset-0 h-25 object-cover brightness-75 flex-1/2"
      />
      <button 
      onClick={() => track("view-menu-btn", {subdomain: "cafetwentsix"})}
      className="absolute rounded-lg px-11 py-1 text-center bg-gray-50 text-black text-sm cursor-pointer hover:bg-zinc-800 hover:text-white drop-shadow-sm hover:drop-shadow-md hover:scale-105 transition-all duration-400">
        <a href="#" aria-label="View the full menu">
          {" "}
          View Full Menu{" "}
        </a>
      </button>
    </div>
  );
}
