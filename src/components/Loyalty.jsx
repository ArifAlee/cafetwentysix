import burdi from "../assets/burdi.PNG"
export default function Loyalty(){
    const color = {color:"#01AAE6"}
    return (
        <div className="flex justify-center items-center w-full mx-auto mt-10 gap-10">
            <img src={burdi} alt="burdi loyalty" className="w-1/4 md:w-1/10" />
            <span className="text-sm">
                Local Rewards with <span style={color}>Burdi</span>
            </span>

        </div>
    )
}