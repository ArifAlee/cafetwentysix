
import { track } from "@vercel/analytics/react"

export default function Review() {
  return (
    <div className="mb-5">
      <a className="flex flex-col justify-center items-center" href="https://www.google.com/maps/place/Caf%C3%A9+Twenty+Six/@51.5358055,-0.310827,60m/data=!3m1!1e3!4m6!3m5!1s0x487613753b9a4075:0x4061b02433b6cb3a!8m2!3d51.535712!4d-0.3108586!16s%2Fg%2F11fn548xw9?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
      onClick={() => track("review-btn", {subdomain: "cafetwentsix"})}> 
      <button className="px-2 py-1 rounded-xl border bg-neutral-100 text-sm cursor-pointer"
      onClick={trackEvent}>
        4.9 ⭐⭐⭐⭐✩
      </button>
        <span className="italic text-sm">Leave a review | get 10% off</span>
      </a>
    </div>
  );
}
