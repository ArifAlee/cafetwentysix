import coffeeImg from "../assets/coffee.PNG";

export default function Coffee() {
  return (
    <div className="flex flex-col sm:flex-row justify-between -mt-20 transition-all ">
      <div className="flex flex-row m-auto">
        <div className="m-auto">
          <img
            loading="lazy"
            src={coffeeImg}
            alt="coffee"
            className="w-75 h-50 rounded-full fade-left"
          />
        </div>
      </div>
    </div>
  );
}
