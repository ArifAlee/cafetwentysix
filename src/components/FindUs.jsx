import instagram from "../assets/instagram.svg"


const openDirections = () => {
  const destination = encodeURIComponent("51.5352219,-0.3118847,18.21");
  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
  window.open(mapUrl, "_blank");
};

export default function FindUs() {
  const style = { border: 0 };
  return (
    <div className="h-full mt-5 flex flex-col justify-center items-center ">
      <div className="mb-3 mt-3 text-sm">
        <a href="https://www.instagram.com/cafetwentysix?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src={instagram} alt="instagram" className="w-10 h-10 mb-5" /></a>
      </div>
      <button
        onClick={() => {
          openDirections();
        }}
        aria-label="Find us on google maps"
        className="relative mb-5 rounded-lg px-11 py-1 text-center bg-zinc-800 text-white text-sm cursor-pointer hover:bg-gray-50 hover:text-black drop-shadow-sm hover:drop-shadow-md hover:scale-105 transition-all duration-400"
      >
        Find us
      </button>

      <div className="w-full sm:h-75 sm:px-10 px-3 h-50 rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.8260863510327!2d-0.3116264604252907!3d51.53599649387047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487613753b9a4075%3A0x4061b02433b6cb3a!2sCaf%C3%A9%20Twenty%20Six!5e1!3m2!1sen!2suk!4v1755335271149!5m2!1sen!2suk"
          style={style}
          allowfullscreen="yes"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-2xl"
        ></iframe>
      </div>
    </div>
  );
}
