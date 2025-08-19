// import { CarouselOrientation } from "./Carousel";
import birdsEyeImg from "../assets/birds-eye-img.JPG";
import { trackEvent } from "@/lib/utils";
import { track } from "@vercel/analytics";

function handleClicks() {
  return (
    track("button_clicked"), trackEvent("click", "call_button", "cafetwentysix")
)
}
export default function CallToActionBtns() {
  return (
    <>
      <section className="relative w-full h-[175px] md:h-[300px] ">
        <img
          src={birdsEyeImg}
          alt="birds eye image of food"
          className="absolute inset-0 w-full h-44 md:h-100 object-cover brightness-55 fade-in-translate-full"
        />
        <div className="absolute inset-0 flex justify-center items-center gap-6">
          <button
            onClick={handleClicks}
            className="rounded-lg px-11 py-1 text-center bg-gray-50 text-black text-sm cursor-pointer hover:bg-zinc-800 hover:text-white drop-shadow-sm hover:drop-shadow-md hover:scale-105 transition-all duration-400"
          >
            <a href="tel:+447342888171" aria-label="Call Café Twenty Six">
              {" "}
              Call{" "}
            </a>
          </button>
          <button
            onClick={handleClicks}
            className="rounded-lg px-7 py-1 text-center text-shadow-lg text-sm bg-green-700 text-white hover:bg-green-500 cursor-pointer drop-shadow-md hover:drop-shadow-lg hover:scale-105 transition-all duration-400 "
          >
            <a
              href="https://wa.me/447342888171?text=Hi%2C%20I%E2%80%99d%20like%20to%20place%20an%20order%20for%20collection"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Café Twenty Six"
            >
              Whatsapp
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
