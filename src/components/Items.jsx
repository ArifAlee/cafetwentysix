export default function Items({ sandwich, index }) {
  return (
    <div className="flex justify-between bg-zinc-800 text-white border border-b-neutral-300 shadow-xl fade-up lg:" style={{animationDelay:`${index * 0.3}s`, opacity:0}}>
      <div className="flex flex-col mx-3 p-1">
        <h1 className="text-shadow-2xs">{sandwich.name}</h1>
        <span className="text-xs text-zinc-300 italic">{sandwich.filling}</span>
      </div>
      <div className="p-3 ">
        {sandwich.price ? <span className="text-sm">£{sandwich.price}</span> : ""}
      </div>
    </div>
  );
}
