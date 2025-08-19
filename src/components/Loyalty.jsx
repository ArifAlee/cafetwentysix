import burdi from "../assets/burdi.png";
export default function Loyalty() {
  const color = { color: "#01AAE6" };
  return (
    <div className="flex justify-center items-center w-full mx-auto mt-10 gap-10">
      <a
        href="https://play.google.com/store/apps/details?id=locale.ewallet&hl=en_GB&pli=1"
        onClick={() => track("enquire-btn", { subdomain: "cafetwentsix" })}
      >
        <img src={burdi} alt="burdi loyalty" className="w-1/4 md:w-1/10" />
        <span className="text-sm">
          Local Rewards with <span style={color}>Burdi</span>
        </span>
      </a>
    </div>
  );
}
