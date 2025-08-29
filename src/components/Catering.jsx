import coffee from "../assets/coffee.PNG";
import { track } from "../lib/utils";


export default function Catering() {
  return (
    <div className="font-poppins relative flex flex-col justify-center items-center">
      <img
        src={coffee}
        loading="lazy"
        alt="coffee"
        className="h-30 fade-left "
      />
      <div className="text-center">
        <h1 className="relative text-black drop-shadow-md -mt-5 mb-2 text-2xl font-bold ">
          Catering
        </h1>
        <p className="text-sm">
          We can cater for your office parties, birthdays and events.
        </p>
        <span className="underline underline-offset-2 decoration-white text-sm text-green-800 drop-shadow-2xl">
          <a
            href="https://wa.me/447342888171?text=Hi%20Tariq%2C%20I%27d%20like%20to%20enquire%20about%20catering%20for%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire About Catering By Café Twenty Six"
          >
            Enquire today.
          </a>
        </span>
      </div>
    </div>
  );
}
